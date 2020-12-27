#!/usr/bin/env node
const { resolve, parse, relative, join } = require("path");
const { mkdir, copyFile } = require("fs").promises;
const { existsSync } = require("fs");
const { hideBin } = require("yargs/helpers");
const yargs = require("yargs");
const glob = require("glob");
require("console-emojis");
const makeDateArray = require("./make-date-array");
const newPlaceholder = require("./new-placeholder");
const argv = yargs(hideBin(process.argv)).argv;

const template = argv.template || argv.t || "p5";
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
