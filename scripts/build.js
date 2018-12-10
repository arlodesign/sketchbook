const fs = require('fs');
const path = require('path');
const handlebars = require('handlebars');
const rimraf = require('rimraf');
const copydir = require('copy-dir');
const rss = require('rss');

module.exports = (local = false) => {
  const sketchFiles = fs.readdirSync('./sketches/')
    .reverse()
    .map(sketch => path.basename(sketch, '.js'));
  const template = fs.readFileSync('./templates/page.hbs', 'utf8');
  const html = handlebars.compile(template);

  const feed = new rss({
    title: 'sketchbook.arlo.me',
    description: 'Explorations of generative art using p5.js',
    feed_url: "https://sketchbook.arlo.me/feed.rss",
    site_url: "https://sketchbook.arlo.me/"
  });
  const feedLimit = 20;
  let feedItems = 0;

  console.log('🛠 Building pages...');

  function getContext(currentSketch) {
    const currentSketchIndex = sketchFiles.findIndex(sketch => sketch === currentSketch);
    const nextSketchIndex = currentSketchIndex - 1;
    const nextSketch = nextSketchIndex >= 0 ? sketchFiles[nextSketchIndex] : false;
    const prevSketchIndex = currentSketchIndex + 1;
    const prevSketch = prevSketchIndex < sketchFiles.length ? sketchFiles[prevSketchIndex] : false;

    return {
      sketches: sketchFiles.map(sketchFile => ({
        sketch: sketchFile + '.js',
        url: sketchFile,
        isCurrent: sketchFile === currentSketch
      })),
      currentSketch,
      prevSketch,
      nextSketch,
      local
    };
  }

  fs.existsSync('./dist') ? rimraf.sync('./dist/*') : fs.mkdirSync('./dist');
  fs.mkdirSync('./dist/sketch');
  fs.mkdirSync('./dist/images');
  fs.mkdirSync('./dist/js');

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
  fs.writeFileSync('./dist/CNAME', "sketchbook.arlo.me");
  copydir.sync('./images', './dist/images');
  fs.copyFileSync('./node_modules/p5/lib/p5.min.js', './dist/js/p5.min.js');
};