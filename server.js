const fs = require('fs');
const express = require('express');
const handlebars = require('handlebars');

const app = express();
const port = 8080;

const sketchFiles = fs.readdirSync('./sketches/').reverse();
const template = fs.readFileSync('./template.hbs', 'utf8');
const html = handlebars.compile(template);

app.use('/js', express.static('sketches'));

app.get('/*', (req, res) => {
  const currentSketch = req.params ? req.params[0] : sketchFiles[0];
  const context = {
    sketches: sketchFiles.map(sketchFile => ({
      sketch: sketchFile,
      isCurrent: sketchFile === currentSketch
    })),
    currentSketch
  }
  res.send(html(context));
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));