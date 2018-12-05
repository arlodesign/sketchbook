const path = require('path');
const express = require('express');
const chokidar = require('chokidar');

const app = express();
const port = 8080;

const build = require('./build');
build(true);

app.use(
  '/',
  express.static('./dist', {
    extensions: ['html']
  })
);

const http = require('http').Server(app);
const io = require('socket.io')(http);

io.on('connection', socket => {
  chokidar
    .watch('.', {
      ignored: [
        /(^|[\/\\])\../,
        './dist/**/*',
        './scripts/**/*',
        './images/**/*'
      ],
      persistent: true
    })
    .on('change', () => {
      build(true);
      io.emit('update');
    });
});

http.listen(port, () =>
  console.log(`👂 Listening at http://localhost:${port}/`)
);