const fs = require('fs');
const express = require('express');
const handlebars = require('handlebars');

const app = express();
const port = 8080;

const sketchFiles = fs.readdirSync('./sketches/').reverse();
const template = fs.readFileSync('./template.hbs', 'utf8');
const html = handlebars.compile(template);

app.use('/js', express.static('sketches'));

function getContext(currentSketch) {
  return {
    sketches: sketchFiles.map(sketchFile => ({
      sketch: sketchFile,
      isCurrent: sketchFile === currentSketch
    })),
    currentSketch
  };
}
app.get('/', (req, res) => {
  res.send(html(getContext(sketchFiles[0])));
});
app.get('/sketch/:file', (req, res) => {
  res.send(html(getContext(req.params.file)));
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));