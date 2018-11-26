const fs = require('fs');
const path = require('path');
const handlebars = require('handlebars');
const rimraf = require('rimraf');
const ghpages = require('gh-pages');

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
    currentSketch
  };
}

rimraf.sync('./dist');
fs.mkdirSync('./dist');
fs.mkdirSync('./dist/sketch');
fs.mkdirSync('./dist/js');

sketchFiles.forEach(sketch => {
  fs.writeFileSync(`./dist/sketch/${sketch}.html`, html(getContext(sketch)));
  fs.copyFileSync(`./sketches/${sketch}.js`, `./dist/js/${sketch}.js`);
});
fs.writeFileSync('./dist/index.html', html(getContext(sketchFiles[0])));

ghpages.publish('./dist', error => {
  if (error) throw error;
  console.log('Published');
})