const fs = require("fs");
const path = require("path");
const express = require("express");
const chokidar = require("chokidar");
var { local } = require("minimist")(process.argv.slice(2));

const app = express();
const port = 8080;

const build = require("./lib/buildSite");
build(local);

app.use(
  "/",
  express.static("./dist", {
    extensions: ["html"]
  })
);

const http = require("http").Server(app);
const io = require("socket.io")(http);

io.on("connection", socket => {
  chokidar
    .watch(".", {
      ignored: [/(^|[\/\\])\../, "./dist/**/*", "./scripts/**/*"],
      persistent: true
    })
    .on("change", file => {
      if (file.startsWith("sketches/")) {
        fs.copyFile(`./${file}`, `./dist/js/${path.basename(file)}`, err => {
          if (err) throw err;
          io.emit("update");
        });
      } else {
        build(local);
        io.emit("update");
      }
    });
});

http.listen(port, () => {
  require("openurl").open(`http://localhost:${port}/`);
  console.log(`👂  Listening at http://localhost:${port}/`);
});
