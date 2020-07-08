const template = `import p5 from "p5";
import "p5.createloop";

const sketch = function (p) {
  const RENDER = p.getURLParams().render;
  const DURATION = 20;
  const RATE = 30;

  p.setup = function () {
    p.pixelDensity(1);
    p.frameRate(RATE);
    p.createCanvas(
      RENDER ? 1080 : p.windowWidth,
      RENDER ? 1080 : p.windowHeight
    );
    p.background(255);
    p.noSmooth();
    p.createLoop(DURATION, {
      gif: RENDER ? { render: false, open: true } : false,
      noiseRadius: 0.1,
    });
  };

  p.draw = function () {
    const { progress, theta, noise } = p.animLoop;
    p.background(255);

    /*
      DRAW
    */

    p.frameCount % 100 === 0 && console.info(\`\${p.floor(progress * 100)}%\`);
    if (!RENDER && p.frameCount === DURATION * RATE) {
      console.info("100%");
      p.noLoop();
    }
  };

  p.windowResized = function () {
    if (RENDER) return;

    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };
};

new p5(sketch, "sketch");
`;

const placeholder = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <g fill="none" stroke="#fff">
    <rect x="0.5" y="0.5" width="99" height="99"/>
    <line x1="1" y1="1" x2="100" y2="100"/>
    <line x1="100" y1="1" x2="1" y2="100"/>
  </g>
</svg>`;

const fs = require("fs");
const exec = require("child_process").exec;
const { promisify } = require("util");
const svg2img = require("svg2img");

const mkdir = promisify(fs.mkdir);
const writeFile = promisify(fs.writeFile);

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
