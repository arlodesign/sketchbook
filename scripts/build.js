const fs = require("fs");
const handlebars = require("handlebars");
const rimraf = require("rimraf");
const copydir = require("copy-dir");
const rss = require("rss");
const matter = require("gray-matter");
const concat = require("concat");
const minify = require("minify");
const tryToCatch = require("try-to-catch");
const glob = require("glob");

const getSketches = require("./getSketches");

module.exports = async (local = false) => {
  const sketchFiles = getSketches(local);
  const template = fs.readFileSync("./templates/sketch.hbs", "utf8");
  const html = handlebars.compile(template);

  const feed = new rss({
    title: "sketchbook.arlo.me",
    description: "Explorations of generative art using p5.js",
    feed_url: "https://sketchbook.arlo.me/feed.rss",
    site_url: "https://sketchbook.arlo.me/"
  });
  const feedLimit = 20;
  let feedItems = 0;

  console.log("🛠  Building pages...");

  function getContext(currentSketch = sketchFiles[0]) {
    const currentSketchIndex = sketchFiles.findIndex(
      sketch => sketch === currentSketch
    );
    const nextSketchIndex = currentSketchIndex - 1;
    const nextSketch =
      nextSketchIndex >= 0 ? sketchFiles[nextSketchIndex] : false;
    const prevSketchIndex = currentSketchIndex + 1;
    const prevSketch =
      prevSketchIndex < sketchFiles.length
        ? sketchFiles[prevSketchIndex]
        : false;
    const { data } = matter.read(`./sketches/${currentSketch}.js`, {
      delimiters: ["/*---", "---*/"]
    });

    return {
      sketches: sketchFiles.map(sketchFile => ({
        sketch: sketchFile + ".js",
        url: sketchFile,
        isCurrent: sketchFile === currentSketch
      })),
      currentSketch,
      prevSketch,
      nextSketch,
      local,
      description: data.description || false
    };
  }

  fs.existsSync("./dist") ? rimraf.sync("./dist/*") : fs.mkdirSync("./dist");
  fs.mkdirSync("./dist/index");
  fs.mkdirSync("./dist/sketch");
  fs.mkdirSync("./dist/assets");
  fs.mkdirSync("./dist/styles");
  fs.mkdirSync("./dist/thumbnails");
  fs.mkdirSync("./dist/js");

  sketchFiles.forEach(sketch => {
    fs.writeFileSync(`./dist/sketch/${sketch}.html`, html(getContext(sketch)));
    fs.copyFileSync(`./sketches/${sketch}.js`, `./dist/js/${sketch}.js`);
    ++feedItems <= feedLimit &&
      feed.item({
        title: sketch,
        url: `https://sketchbook.arlo.me/sketch/${sketch}`,
        date: sketch,
        enclosure: {
          url: `https://sketchbook.arlo.me/thumbnails/${sketch}.png`
        }
      });
  });

  const index = fs.readFileSync("./templates/index.hbs", "utf8");
  const indexHtml = handlebars.compile(index);
  const indexContext = getContext();

  for (let i = 0; i < sketchFiles.length / 12; i++) {
    const thisIndexContext = Object.assign({}, indexContext, {
      pageSketches: indexContext.sketches.slice(
        i * 12,
        Math.min(i * 12 + 12, sketchFiles.length)
      ),
      page: i + 1,
      totalIndexPages: Math.ceil(sketchFiles.length / 12),
      prevPage: i,
      nextPage: i + 1 < sketchFiles.length / 12 ? i + 2 : false
    });
    // console.log(sketchFiles.length, totalIndexPages, thisIndexContext.nextPage);
    i === 0 &&
      fs.writeFileSync("./dist/index.html", indexHtml(thisIndexContext));
    fs.writeFileSync(`./dist/index/${i + 1}.html`, indexHtml(thisIndexContext));
  }

  fs.writeFileSync("./dist/feed.rss", feed.xml());
  fs.writeFileSync("./dist/CNAME", "sketchbook.arlo.me");
  copydir.sync("./thumbnails", "./dist/thumbnails");
  copydir.sync("./assets", "./dist/assets");
  copydir.sync("./styles", "./dist/styles");

  fs.copyFileSync("./node_modules/p5/lib/p5.min.js", "./dist/js/p5.min.js");
  fs.copyFileSync(
    "./node_modules/vanilla-lazyload/dist/lazyload.iife.min.js",
    "./dist/js/lazyload.min.js"
  );

  await concat(
    fs.readdirSync("./lib").map(f => `./lib/${f}`),
    "./dist/js/lib.js"
  );

  if (!local) {
    console.log("✊  Minifying files...");
    glob(`./dist/**/*.{js,html,css}`, (err, matches) => {
      if (err) throw err;
      matches.forEach(async match => {
        const [error, data] = await tryToCatch(minify, match);
        if (error) throw error;
        fs.writeFileSync(match, data);
      });
    });
  }
};
