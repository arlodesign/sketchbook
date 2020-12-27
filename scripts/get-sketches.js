const path = require("path");
const glob = require("glob");

const datePath = (dir, str) =>
  dir
    .split(path.sep)
    .slice(dir.split(path.sep).length - 3, dir.split(path.sep).length)
    .join(str);

function getSketches() {
  const baseDir = path.resolve(__dirname, "../src/sketch");
  const sketches = glob.sync(baseDir + "/**/[0-9][0-9]/index.js");

  const sketchesMetadata = sketches.map((entry) => {
    const { dir } = path.parse(entry);

    return {
      title: datePath(dir, "-"),
      entry,
      url: datePath(dir, "/") + "/",
      image: path.join(
        path.relative(path.resolve(__dirname, "../src"), path.dirname(entry)),
        "thumb.png"
      ),
    };
  });

  return sketchesMetadata.sort((a, b) => a.title.localeCompare(b.title));
}

module.exports = getSketches();
