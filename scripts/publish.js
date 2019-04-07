const { promisify } = require("util");
const publish = promisify(require("gh-pages").publish);

(async () => {
  console.log("📡  Publishing to GitHub...");
  await publish("./public");
  console.log("✅  Published.");
})();
