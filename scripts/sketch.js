const fs = require("fs");

const build = require("./build");

function leftPad(num) {
  return num < 10 ? `0${num}` : num;
}

function filename(date) {
  return [
    date.getFullYear(),
    leftPad(date.getMonth() + 1),
    leftPad(date.getDate())
  ].join("-");
}

const DateObj = new Date();

while (fs.existsSync(`./sketches/${filename(DateObj)}.js`)) {
  DateObj.setDate(DateObj.getDate() + 1);
}

fs.copyFile(
  "./templates/sketch.js",
  `./sketches/${filename(DateObj)}.js`,
  error => {
    if (error) throw error;
    console.log(`🎉 ${filename(DateObj)}.js created.`);
  }
);

build(true);
