const fs = require("fs");
const ghpages = require("gh-pages");
const express = require("express");
const puppeteer = require("puppeteer");
const sharp = require("sharp");
const imagemin = require("imagemin");
const imageminOptipng = require("imagemin-optipng");
const copydir = require("copy-dir");

const getSketches = require("./lib/getSketches");

const build = require("./lib/buildSite");
build();

const app = express();
const port = 8080;
app.use(
  "/",
  express.static("./dist", {
    extensions: ["html"]
  })
);
const http = require("http").Server(app);

!fs.existsSync("./dist/thumbnails") && fs.mkdirSync("./dist/thumbnails");

http.listen(port, () => {
  const sketchFiles = getSketches();

  (async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    const toOptimize = [];

    await page.setViewport({
      width: 660,
      height: 840,
      deviceScaleFactor: 2
    });
    for (let index = 0; index < sketchFiles.length; index++) {
      const sketch = sketchFiles[index];
      const fullImageFile = `./thumbnails/${sketch}_full.png`;
      const imageFile = `./thumbnails/${sketch}.png`;
      const thumbnailFile = `./thumbnails/${sketch}_thumb.png`;

      if (!fs.existsSync(fullImageFile) || !fs.existsSync(imageFile)) {
        console.log(`🖼  Generating thumbnails for ${sketch}...`);
        toOptimize.push(fullImageFile);
        toOptimize.push(imageFile);

        await page.goto(`http://localhost:8080/sketch/${sketch}`);
        try {
          await page.waitForFunction("drawingComplete === true", {
            timeout: 0
          });
        } catch (error) {}
        try {
          await page.screenshot({
            path: fullImageFile
          });
        } catch (error) {
          throw error;
        }
        await sharp(fullImageFile)
          .resize(660, 840)
          .toFile(imageFile);
      }
      if (!fs.existsSync(thumbnailFile)) {
        toOptimize.push(imageFile);
        await sharp(imageFile)
          .resize(416, 530)
          .toFile(thumbnailFile);
      }

      await imagemin(toOptimize, "./thumbnails", {
        plugins: [imageminOptipng()]
      });
    }

    await browser.close();

    await console.log("📡  Publishing to GitHub...");
    copydir.sync("./thumbnails", "./dist/thumbnails");
    await ghpages.publish("./dist", error => {
      if (error) throw error;
      console.log("🎉  Published!");
    });
    await process.exit();
  })();
});
