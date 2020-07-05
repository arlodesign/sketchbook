const path = require("path");
const glob = require("glob");

function getSketches() {
  const baseDir = path.resolve(__dirname, "../src/sketch");
  const sketches = glob.sync(baseDir + "/**/[0-9][0-9].js");

  const sketchesMetadata = sketches.map((sketch) => {
    const { dir, name } = path.parse(sketch);
    const title = dir.split("/").slice(-2).concat([name]).join("-");

    return {
      title,
      entry: path.resolve(__dirname, "..", sketch),
      url: path.join("sketch", title.replace(/\-/g, "/")) + "/",
      image: path.join("thumbnails", title.replace(/\-/g, "/")) + ".png",
    };
  });

  return sketchesMetadata.sort((a, b) => a.title.localeCompare(b.title));
}

module.exports = getSketches();
