const { resolve, parse, relative, join, basename } = require("path");
const { mkdir, copyFile } = require("fs").promises;
const { existsSync } = require("fs");
const glob = require("glob");
require("console-emojis");

const makeDateArray = require("./make-date-array");
const newPlaceholder = require("./new-placeholder");

var argv = require("yargs/yargs")(process.argv.slice(2))
  .option("template", {
    alias: "t",
    default: "p5",
    describe: "Choose a template for your new sketch",
    choices: glob
      .sync(resolve(__dirname, `templates/sketch-*.tmpl.js`))
      .map((t) => basename(t).replace(/^sketch-(.+)\.tmpl\.js$/, "$1")),
  })
  .help().argv;

const template = argv.template;
const DateObj = new Date();
const sketchPath = (relativePath = false) => {
  const newPath = resolve(
    __dirname,
    "../src/sketch",
    ...makeDateArray(DateObj)
  );
  return relativePath
    ? relative(resolve(__dirname, "../src"), newPath)
    : newPath;
};

(async () => {
  while (existsSync(sketchPath())) {
    DateObj.setDate(DateObj.getDate() + 1);
  }

  const matches = glob.sync(
    resolve(__dirname, `templates/*-${template}.tmpl.*`)
  );

  if (!matches.length) {
    console.no_entry_sign(`Unable to find files for template \`${template}\``);
    process.exit(1);
  }

  await mkdir(resolve(sketchPath()), { recursive: true });
  console.open_file_folder(sketchPath(true));

  await newPlaceholder(sketchPath());
  console.rainbow(join(sketchPath(true), "thumb.png"));

  Promise.all(
    matches.map(async (match) => {
      const { name, ext } = parse(match);
      const newFileName = name.replace(`-${template}.tmpl`, "") + ext;
      await copyFile(match, resolve(sketchPath(), newFileName));
      console.page_facing_up(join(sketchPath(true), newFileName));
    })
  );
})();
