import p5 from "p5";
import attachCreateLoop from "p5.createloop/src/p5.createLoop";
window.p5 = p5;
attachCreateLoop();
import { easeInOutQuad as ease } from "util/easing";

const sketch = function (p) {
  const RENDER = p.getURLParams().render === "true";
  const RENDER_SIZE = 1080;
  const TIME = 60;
  const FRAME_RATE = 60;

  const DURATION = TIME * (RENDER ? FRAME_RATE : 1);
  const RATE = RENDER ? 1 : FRAME_RATE;
  const FRAMES = DURATION * RATE;

  let urlParams;
  let hue;
  let grid;
  let scale;
  let link;

  let cells = [];

  function changeURL() {
    const searchParams = {
      hue: hue.value(),
      grid: grid.value(),
      scale: scale.value(),
    };

    link.attribute(
      "href",
      "?" +
        new URLSearchParams({
          ...searchParams,
          render: !RENDER,
        }).toString()
    );
    window.history.replaceState(
      null,
      document.title,
      "?" +
        new URLSearchParams({
          ...searchParams,
          render: RENDER,
        }).toString()
    );
  }

  p.setup = function () {
    p.pixelDensity(1);
    p.frameRate(RATE);
    p.createCanvas(
      RENDER ? RENDER_SIZE : p.windowWidth,
      RENDER ? RENDER_SIZE : p.windowHeight
    );
    p.background(255);
    p.createLoop(DURATION, {
      noiseRadius: 0.5,
    });

    p.colorMode(p.HSB, 1);

    urlParams = Object.assign(
      {
        hue: p.random(),
        grid: p.floor(p.random(10, 100)),
        scale: 1,
      },
      p.getURLParams()
    );

    if (!RENDER) {
      p.noSmooth();
    }

    hue = p.createSlider(0, 1, parseFloat(urlParams.hue, 10), 0.01);
    hue.changed(changeURL);
    grid = p.createSlider(10, 100, parseFloat(urlParams.grid, 10), 1);
    grid.changed(changeURL);
    scale = p.createSlider(1, 3, parseFloat(urlParams.scale, 10), 0.01);
    scale.changed(changeURL);
    link = p.createA("?", RENDER ? "Draft" : "Render");

    changeURL();

    cells = Array(grid.value() + 1)
      .fill([])
      .map(() => Array(grid.value()).fill(0));

    cells[cells.length - 1][p.floor(grid.value() / 2)] = 1;
  };

  p.draw = function () {
    const { progress, theta, noise, noise1D, noise2D } = p.animLoop;
    const loopedProgress = p.sin(2 * p.PI * progress - p.PI / 2) / 2 + 0.5;

    p.background((hue.value() + 0.5) % 1, 0.5, 0.2);

    let cnvs = p.createGraphics(
      p.min(p.width, p.height),
      p.min(p.width, p.height)
    );
    cnvs.colorMode(p.HSL, 1);
    cnvs.translate(
      0,
      -(((p.frameCount - 1) / 10) % 1) * (cnvs.height / grid.value())
    );
    cnvs.noStroke();
    cnvs.rectMode(p.CENTER);

    for (let x = 0; x < grid.value(); x++) {
      for (let y = 0; y <= grid.value(); y++) {
        if (cells[y] && cells[y][x]) {
          cnvs.push();
          cnvs.fill(hue.value(), x / grid.value(), y / grid.value());
          cnvs.translate(
            x * (cnvs.width / grid.value()),
            y * (cnvs.height / grid.value())
          );
          cnvs.scale(ease(p.abs(noise2D(x / 100, y / 100))) * 1.2);
          cnvs.rect(
            0,
            0,
            cnvs.width / grid.value(),
            cnvs.height / grid.value()
          );
          cnvs.pop();
        }
      }
    }

    p.translate(p.width / 2, p.height / 2);
    p.scale(scale.value());
    p.rotate(-theta);
    p.image(cnvs, -cnvs.width / 2, -cnvs.height / 2);

    if ((p.frameCount / 10) % 1 === 0) {
      const prevRow = cells[cells.length - 1];
      cells.push(
        Array(grid.value())
          .fill(0)
          .map((_, i) => {
            const pattern = [
              typeof prevRow[i - 1] === "undefined"
                ? prevRow[prevRow.length - 1]
                : prevRow[i - 1],
              prevRow[i],
              typeof prevRow[i + 1] === "undefined"
                ? prevRow[0]
                : prevRow[i + 1],
            ].join("");

            switch (pattern) {
              case "111":
                return 0;
              case "110":
                return 0;
              case "101":
                return 0;
              case "100":
                return 1;
              case "011":
                return 1;
              case "010":
                return 1;
              case "001":
                return 1;
              case "000":
                return 0;
            }
          })
      );
      if (cells.length >= grid.value() + 1) {
        cells.shift();
      }
    }
    if (RENDER && p.frameCount <= FRAMES) {
      p.frameCount % 100 === 0 && console.info(`${p.ceil(progress * 100)}%`);
      p.save(
        `${String(p.frameCount).padStart(String(FRAMES).length, "0")}.png`
      );
    }
  };

  p.windowResized = function () {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };
};

new p5(sketch, "sketch");
document.getElementById(
  "description"
).innerHTML = `<a href="https://genuary2021.github.io/">#genuary2021</a>: <a href="https://www.wolframalpha.com/input/?i=rule+30">Rule 30</a>`;
