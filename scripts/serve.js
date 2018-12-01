const fs = require('fs');
const path = require('path');
const express = require('express');
const handlebars = require('handlebars');
const chokidar = require('chokidar');

const app = express();
const port = 8080;

const sketchFiles = fs
  .readdirSync('./sketches/')
  .reverse()
  .map(sketch => path.basename(sketch, '.js'));

let template;
let html;

function updateTemplate() {
  template = fs.readFileSync('./page.hbs', 'utf8');
  html = handlebars.compile(template);
}
updateTemplate();

function getContext(currentSketch) {
  return {
    sketches: sketchFiles.map(sketchFile => ({
      sketch: `${sketchFile}.js`,
      url: sketchFile,
      isCurrent: sketchFile === currentSketch
    })),
    currentSketch,
    local: true
  };
}

app.use('/js', express.static('sketches'));
app.get('/', (_, res) =>
  res.send(html(getContext(sketchFiles[0]))));
app.get('/sketch/:file', (req, res) =>
  res.send(html(getContext(req.params.file))));

const http = require('http').Server(app);
const io = require('socket.io')(http);

io.on('connection', socket => {
  const sketchWatcher = chokidar.watch('./sketches/*', {
    ignored: /(^|[\/\\])\../,
    persistent: true
  });
  sketchWatcher.on('change', () => io.emit('update'));
  const templateWatcher = chokidar.watch('./page.hbs', {
    persistent: true
  });
  templateWatcher.on('change', () => {
    updateTemplate();
    io.emit('update');
  })
});

http.listen(port, () => console.log(`👂 Listening at http://localhost:${port}/`), );