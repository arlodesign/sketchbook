const leftPad = require("./left-pad");

function makeDateArray(date) {
  return [
    String(date.getFullYear()),
    leftPad(date.getMonth() + 1),
    leftPad(date.getDate()),
  ];
}

module.exports = makeDateArray;
