const { promisify } = require("util");
const publish = promisify(require("gh-pages").publish);

(async () => {
  try {
    console.log("📡  Publishing to GitHub...");
    await publish("./public");
    console.log("✅  Published.");
  } catch (error) {
    console.error(error);
  }
})();
