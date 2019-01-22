var { local } = require("minimist")(process.argv.slice(2));
const build = require("./lib/buildSite");
build(local);
