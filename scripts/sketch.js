const fs = require('fs');

const template = `window.sketchHeadline = "";

function setup() {
  pixelDensity(4);
  const myCanvas = createCanvas(660, 840);
  myCanvas.parent('my-canvas');
  // SETUP
}

function draw() {
  background('white');
  // DRAW
}`;

function leftPad(num) {
  return num < 10 ? `0${num}` : num;
}

function filename(date) {
  return [
    date.getFullYear(),
    leftPad(date.getMonth() + 1),
    leftPad(date.getDate())
  ].join('-')
}

const DateObj = new Date();

if (fs.existsSync(`./sketches/${filename(DateObj)}.js`)) {
  DateObj.setDate(DateObj.getDate() + 1);
}

if (fs.existsSync(`./sketches/${filename(DateObj)}.js`)) {
  // Wait until tomorrow.
  console.log('⚠️ Files already exist.');
} else {
  fs.writeFile(`./sketches/${filename(DateObj)}.js`, template, error => {
    if (error) throw error;
    console.log(`🎉 ${filename(DateObj)}.js created.`);
  })
}