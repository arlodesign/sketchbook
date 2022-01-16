import p5 from "p5";
import attachCreateLoop from "p5.createloop/src/p5.createLoop";
window.p5 = p5;
attachCreateLoop();
import lerpLine from "util/lerpLine";
import gif from "assets/2019-11-29.gif";

const sketch = function (p) {
  const RENDER = p.getURLParams().render;
  let size;

  p.setup = function () {
    p.pixelDensity(0.5);
    p.frameRate(30);

    p.createCanvas(p.windowWidth, p.windowHeight);
    p.createLoop(20, {
      gif: RENDER ? { render: false, open: true } : false,
      noiseRadius: 1,
    });

    size = (p.width - p.width * 0.15) / 2;
  };

  function drawTheThing(c, n) {
    const { noise2D, theta } = p.animLoop;

    p.stroke(c);
    for (let x = p.width / 2 - size; x < p.width / 2 + size; x++) {
      const startPoint = p.map(
        noise2D(c.length / 100, x / 100),
        -1,
        1,
        p.height / 2 - 5,
        p.height / 2 + 5
      );

      lerpLine(
        p,
        x,
        startPoint,
        x,
        p.height / 2 + size,
        p.map(noise2D(n, (x + p.sin(theta)) / 100), -1, 1, 0.04, 0.06),
        false,
        false
      );
      lerpLine(
        p,
        x,
        startPoint,
        x,
        p.height / 2 - size,
        p.map(noise2D(n, (x + p.sin(theta)) / 100), -1, 1, 0.04, 0.06),
        true,
        false
      );
    }
  }

  p.draw = function () {
    p.blendMode(p.BLEND);
    p.background(255);
    p.blendMode(p.MULTIPLY);

    drawTheThing("cyan", 5);
    drawTheThing("magenta", 10);
    drawTheThing("yellow", 15);
  };

  p.windowResized = function () {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };
};

new p5(sketch, "sketch");
document.getElementById(
  "description"
).innerHTML = `Runs slow in browser, but makes a <a href="${gif}">great GIF!</a>`;
