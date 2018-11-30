const fs = require('fs');
const path = require('path');
const handlebars = require('handlebars');
const rimraf = require('rimraf');
const ghpages = require('gh-pages');
const rss = require('rss');

const sketchFiles = fs.readdirSync('./sketches/')
  .reverse()
  .map(sketch => path.basename(sketch, '.js'));
const template = fs.readFileSync('./page.hbs', 'utf8');
const html = handlebars.compile(template);

function getContext(currentSketch) {
  return {
    sketches: sketchFiles.map(sketchFile => ({
      sketch: sketchFile + '.js',
      url: sketchFile,
      isCurrent: sketchFile === currentSketch
    })),
    currentSketch,
    local: false
  };
}

// delete dist folder just in case
rimraf.sync('./dist');

fs.mkdirSync('./dist');
fs.mkdirSync('./dist/sketch');
fs.mkdirSync('./dist/js');

const feed = new rss({
  title: 'sketchbook.arlo.me',
  description: 'Explorations of generative art using p5.js',
  feed_url: "https://sketchbook.arlo.me/feed.rss",
  site_url: "https://sketchbook.arlo.me/"
});
const feedLimit = 20;
let feedItems = 0;;

sketchFiles.forEach(sketch => {
  fs.writeFileSync(`./dist/sketch/${sketch}.html`, html(getContext(sketch)));
  fs.copyFileSync(`./sketches/${sketch}.js`, `./dist/js/${sketch}.js`);
  ++feedItems <= feedLimit && feed.item({
    title: sketch,
    url: `https://sketchbook.arlo.me/sketch/${sketch}`,
    date: sketch
  });
});
fs.writeFileSync('./dist/index.html', html(getContext(sketchFiles[0])));
fs.writeFileSync('./dist/feed.rss', feed.xml());

ghpages.publish('./dist', error => {
  if (error) throw error;
  console.log('🎉 Published');
  rimraf.sync('./dist');
})