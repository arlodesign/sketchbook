const { promisify } = require("util");
const publish = promisify(require("gh-pages").publish);
const exec = promisify(require("child_process").exec);

const DateObj = new Date();

(async () => {
  await exec("git stash --include-untracked");
  console.log("🛠  Building website...");
  await exec("rm -rf .cache");
  await exec("yarn build");
  console.log("📡  Publishing to GitHub...");
  await publish("./public");
  await exec("git stash pop");
  console.log("✅  Published.");
})();
