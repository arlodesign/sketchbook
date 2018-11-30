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
const template = fs.readFileSync('./page.hbs', 'utf8');
const html = handlebars.compile(template);

app.use('/js', express.static('sketches'));

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
app.get('/', (_, res) =>
  res.send(html(getContext(sketchFiles[0]))));
app.get('/sketch/:file', (req, res) =>
  res.send(html(getContext(req.params.file))));

const http = require('http').Server(app);
const io = require('socket.io')(http);

io.on('connection', socket => {
  const watcher = chokidar.watch('./sketches/*', {
    ignored: /(^|[\/\\])\../,
    persistent: true
  });
  watcher.on('change', () => io.emit('update'));
});

http.listen(port, () => console.log(`👂 Listening at http://localhost:${port}/`), );