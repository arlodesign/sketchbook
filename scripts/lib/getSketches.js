const fs = require("fs");
const path = require("path");
const execSync = require("child_process").execSync;

function getSketchTitle(sketch) {
  return path.basename(sketch, ".js");
}

let stdout;

try {
  stdout = execSync(
    "git ls-files --others --exclude-standard | grep sketches/"
  );
} catch (e) {}

const untrackedSketches = stdout
  ? stdout
      .toString()
      .split("\n")
      .filter(ln => ln.startsWith("sketches/"))
      .map(sketch => getSketchTitle(sketch))
  : [];

const sketchFiles = fs
  .readdirSync("./sketches/")
  .filter(sketch => !sketch.startsWith("."))
  .reverse()
  .map(sketch => getSketchTitle(sketch));

module.exports = (local = false) =>
  sketchFiles.filter(sketch => local || !untrackedSketches.includes(sketch));
