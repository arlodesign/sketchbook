const fs = require("fs");
const exec = require("child_process").exec;
const { promisify } = require("util");
const svg2img = require("svg2img");

const mkdir = promisify(fs.mkdir);
const writeFile = promisify(fs.writeFile);
const readFile = promisify(fs.readFile);

const placeholder = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <g fill="none" stroke="#fff">
    <rect x="0.5" y="0.5" width="99" height="99"/>
    <line x1="1" y1="1" x2="100" y2="100"/>
    <line x1="100" y1="1" x2="1" y2="100"/>
  </g>
</svg>`;

function leftPad(num) {
  return String(num).padStart(2, "0");
}

function makeDateString(date, withDay = false, joinChar = "/") {
  let dateEls = [date.getFullYear(), leftPad(date.getMonth() + 1)];

  withDay && dateEls.push(leftPad(date.getDate()));

  return dateEls.join(joinChar);
}

const sketchPath = "./src/sketch";
const imagePath = "./src/thumbnails";
const DateObj = new Date();

(async () => {
  const template = await readFile("./src/templates/sketch-p5.tmpl.js", "utf8");

  let sketchFile = () => `${sketchPath}/${makeDateString(DateObj, true)}.js`;
  let imageFile = () => `${imagePath}/${makeDateString(DateObj, true)}.png`;

  while (fs.existsSync(sketchFile())) {
    DateObj.setDate(DateObj.getDate() + 1);
  }

  await mkdir(`${sketchPath}/${makeDateString(DateObj, false)}`, {
    recursive: true,
  });
  await writeFile(sketchFile(), template, "utf8");

  await mkdir(`${imagePath}/${makeDateString(DateObj, false)}`, {
    recursive: true,
  });
  svg2img(placeholder, { width: 500, height: 500 }, async (error, buffer) => {
    await writeFile(imageFile(), buffer);
    console.log(`🎉  ${imageFile()} created.`);
  });

  console.log(`🎉  ${sketchFile()} created.`);
  exec(`code ${sketchFile()}`);
})();
