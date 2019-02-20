const fs = require("fs");
const sharp = require("sharp");
const copydir = require("copy-dir");
const ghpages = require("gh-pages");

const sketchFiles = require("./lib/getSketches")();

let missingImages = [];

for (let index = 0; index < sketchFiles.length; index++) {
  const sketch = sketchFiles[index];
  const fullImageFile = `./fullsize/${sketch}.png`;
  !fs.existsSync(fullImageFile) && missingImages.push(fullImageFile);
}

if (missingImages.length > 0) {
  console.error(`🛑  The following fullsize images are missing.`);
  console.log(missingImages);
  process.exit();
}

!fs.existsSync("./dist/thumbnails") && fs.mkdirSync("./dist/thumbnails");

(async () => {
  await sketchFiles.forEach(async function(sketch) {
    const fullImageFile = `./fullsize/${sketch}.png`;
    const imageFile = `./thumbnails/${sketch}.png`;
    const thumbnailFile = `./thumbnails/${sketch}_thumb.png`;
    if (!fs.existsSync(imageFile)) {
      console.log(`🖼  Generating image for ${sketch}...`);
      await sharp(fullImageFile)
        .resize(660, 840)
        .toFile(imageFile);
    }
    if (!fs.existsSync(thumbnailFile)) {
      console.log(`🖼  Generating thumbnail for ${sketch}...`);
      await sharp(fullImageFile)
        .resize(416, 530)
        .toFile(thumbnailFile);
    }
  });

  await require("./lib/buildSite")();
  await copydir.sync("./thumbnails", "./dist/thumbnails");

  await console.log("📡  Publishing to GitHub...");
  await ghpages.publish("./dist", error => {
    if (error) throw error;
    console.log("🎉  Published!");
  });
})();
