const fs = require('fs');
const path = require('path');
const ghpages = require('gh-pages');
const express = require('express');
const puppeteer = require('puppeteer');
const imagemin = require('imagemin');
const imageminOptipng = require('imagemin-optipng');
const copydir = require('copy-dir');

const build = require('./build');
build();

const app = express();
const port = 8080;
app.use(
  '/',
  express.static('./dist', {
    extensions: ['html']
  })
);
const http = require('http').Server(app);

http.listen(port, () => {
  const sketchFiles = fs.readdirSync('./sketches/')
    .map(sketch => path.basename(sketch, '.js'));

  (async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setViewport({
      width: 660,
      height: 840
    });
    for (let index = 0; index < sketchFiles.length; index++) {
      const sketch = sketchFiles[index];
      const thumbnailFile = `./thumbnails/${sketch}.png`;

      if (!fs.existsSync(thumbnailFile)) {
        console.log(`🖼 Generating thumbnail for ${sketch}`);

        await page.goto(`http://localhost:8080/sketch/${sketch}`);
        try {
          await page.waitForFunction('drawingComplete === true', {
            timeout: 0
          });
        } catch (error) {}
        try {
          await page.screenshot({
            path: thumbnailFile
          });
        } catch (error) {
          throw error;
        }

        await imagemin([thumbnailFile], './thumbnails', {
          plugins: [
            imageminOptipng()
          ]
        });
      }
    }

    await browser.close();

    await console.log('📡 Publishing to GitHub...');
    await ghpages.publish('./dist', error => {
      if (error) throw error;
      console.log('🎉 Published!');
    });
    await process.exit();

  })();
});