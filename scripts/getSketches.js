const fs = require("fs");
const path = require("path");
const execSync = require("child_process").execSync;

function getSketchTitle(sketch) {
  return path.basename(sketch, ".js");
}

const untrackedSketches = execSync(
  "git ls-files --others --exclude-standard | grep sketches/"
)
  .toString()
  .split("\n")
  .filter(ln => ln.startsWith("sketches/"))
  .map(sketch => getSketchTitle(sketch));

const sketchFiles = fs
  .readdirSync("./sketches/")
  .reverse()
  .map(sketch => getSketchTitle(sketch));

module.exports = (local = false) =>
  sketchFiles.filter(sketch => local || !untrackedSketches.includes(sketch));
