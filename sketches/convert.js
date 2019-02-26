const p5Convert = require("p5-global2instance");
const fs = require("fs");

const file = process.argv[2];
const fileParts = file.split("-");

fs.readFile(`./${file}.js`, "utf8", (error, data) => {
  if (error) throw error;

  // console.log(data);
  let newCode = p5Convert(data);
/*
  newCode = newCode.replace(/\$_p/g, "p");
  newCode = newCode.replace(
    "const myCanvas = p.createCanvas",
    "p.createCanvas"
  );
  newCode = newCode.replace("myCanvas.parent('my-canvas');\n", "");
  newCode = newCode.replace("createCanvas(660, 840);\n", "");
  newCode = newCode.replace("drawingComplete = true\n", "");
  newCode = newCode.replace(
    "export default function (p)",
    "const sketch = function(p)"
  );
  newCode = newCode.replace(/([\s\(])sin\(/g, "$1p.sin(");
  newCode = newCode.replace(/([\s\(])cos\(/g, "$1p.cos(");
  newCode = newCode.replace(/DEGREES/g, "p.DEGREES");
  newCode = newCode.replace(/CENTER/g, "p.CENTER");
  newCode = newCode.replace(/WEBGL/g, "p.WEBGL");

  newCode = `
  import React from "react";
  import Layout from "~components/layout";
  import SEO from "~components/seo";
  import Sketch from "~components/sketch";

  ${newCode}

  export default () => (
    <Layout>
      <SEO title="${file}" />
      <h1>${file}</h1>
      <p></p>
      <Sketch sketch={sketch} />
    </Layout>
  );
    `;

  const newFilePath = `../../sketchbook2/src/pages/sketch/${fileParts[0]}/${
    fileParts[1]
  }`;

  fs.mkdir(newFilePath, { recursive: true }, error => {
    if (error) throw error;
    fs.writeFile(
      `${newFilePath}/${fileParts[2]}.js`,
      newCode,
      "utf8",
      error => {
        if (error) throw error;
        console.log(`${newFilePath}/${fileParts[2]}.js WRITTEN!`);
      }
    );
  });*/
});
