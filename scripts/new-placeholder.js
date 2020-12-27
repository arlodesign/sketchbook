const { writeFile } = require("fs").promises;
const { resolve } = require("path");
const svg2img = require("svg2img");

const placeholder = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <g fill="none" stroke="#fff">
    <rect x="0.5" y="0.5" width="99" height="99"/>
    <line x1="1" y1="1" x2="100" y2="100"/>
    <line x1="100" y1="1" x2="1" y2="100"/>
  </g>
</svg>`;

async function newPlaceholder(path) {
  svg2img(
    placeholder,
    {
      width: 500,
      height: 500,
    },
    async (_error, buffer) => {
      await writeFile(resolve(path, "thumb.png"), buffer);
    }
  );
}

module.exports = newPlaceholder;
