const fs = require('fs');

const template = `function setup() {
  pixelDensity(4);
  const myCanvas = createCanvas(660, 840);
  myCanvas.parent('my-canvas');
  background('white');
  // SETUP
}

function draw() {
  // DRAW
}`;

const DateObj = new Date();
let filename = [
  DateObj.getFullYear(),
  DateObj.getMonth() + 1,
  DateObj.getDate()
].join('-');

if (fs.existsSync(`./sketches/${filename}.js`)) {
  // use tomorrow's date
  filename = [
    DateObj.getFullYear(),
    DateObj.getMonth() + 1,
    DateObj.getDate() + 1
  ].join('-');
}

if (fs.existsSync(`./sketches/${filename}.js`)) {
  // Wait until tomorrow.
  console.log('⚠️ Files already exist.');
} else {
  fs.writeFile(`./sketches/${filename}.js`, template, error => {
    if (error) throw error;
    console.log(`🎉 ${filename}.js created.`);
  })
}