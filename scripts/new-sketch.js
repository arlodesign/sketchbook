const fs = require("fs");
const exec = require("child_process").exec;
const { promisify } = require("util");

const readFile = promisify(fs.readFile);
const mkdir = promisify(fs.mkdir);
const writeFile = promisify(fs.writeFile);
const copyFile = promisify(fs.copyFile);

function leftPad(num) {
  return num < 10 ? `0${num}` : num;
}

function makeDateString(date, joinChar = "/") {
  return [
    date.getFullYear(),
    leftPad(date.getMonth() + 1),
    leftPad(date.getDate()),
  ].join(joinChar);
}

const sketchPath = "./src/pages/sketch";
const imagePath = "./src/images";
const DateObj = new Date();

(async () => {
  const template = await readFile("./scripts/new-sketch.template", "utf8");

  while (fs.existsSync(`${sketchPath}/${makeDateString(DateObj)}.js`)) {
    DateObj.setDate(DateObj.getDate() + 1);
  }

  await mkdir(
    `${sketchPath}/${DateObj.getFullYear()}/${leftPad(DateObj.getMonth() + 1)}`,
    { recursive: true }
  );
  await writeFile(
    `${sketchPath}/${makeDateString(DateObj)}.js`,
    template.replace(/\{\{\sdate\s\}\}/g, makeDateString(DateObj, "-")),
    "utf8"
  );

  await mkdir(
    `${imagePath}/${DateObj.getFullYear()}/${leftPad(DateObj.getMonth() + 1)}`,
    { recursive: true }
  );

  console.log(`🎉  ${sketchPath}/${makeDateString(DateObj)}.js created.`);
  exec(`code ${sketchPath}/${makeDateString(DateObj)}.js`);
})();
