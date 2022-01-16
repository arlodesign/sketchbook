import p5 from "p5";
import { easeInOutQuint as ease } from "util/easing";
import attachCreateLoop from "p5.createloop/src/p5.createLoop";
window.p5 = p5;
attachCreateLoop();

const RENDER = process.env.DEV && false;
const LINES = 50;
const POINTS = 100;

const sketch = function (p) {
  let innerMarginX;

  p.setup = function () {
    p.createCanvas(p.windowWidth, p.windowHeight);

    p.createLoop(10, {
      gif: RENDER ? { render: false, open: true } : false,
      noiseRadius: 1,
    });
    p.noStroke();

    innerMarginX = p.width / POINTS;
  };

  p.draw = function () {
    p.background(255);

    const { noise1D, noise2D, theta } = p.animLoop;

    for (let i = 0; i <= LINES; i++) {
      const y = p.height * (i / LINES);
      p.fill(["cyan", "magenta", "yellow", 0][i % 4]);
      p.beginShape();
      p.vertex(-1, y);

      for (let j = 0; j <= POINTS; j++) {
        const x =
          innerMarginX +
          ((p.width - innerMarginX * 2) / POINTS) * j +
          noise1D(j * y) * (p.width / POINTS / 2);
        const waveHeight =
          ease(
            p.map(noise2D(x / 50, (p.height * (i / LINES)) / 50), -1, 1, 0, 1)
          ) *
          p.map(
            p.abs(p.width / 2 - x),
            0,
            p.width / 2,
            (p.height / LINES) * 4,
            0
          );
        p.vertex(x, y - waveHeight);
      }

      p.vertex(p.width + 1, y);

      p.vertex(p.width + 1, p.height + 1);
      p.vertex(-1, p.height + 1);
      p.endShape(p.CLOSE);
    }
  };

  p.windowResized = function () {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };
};

new p5(sketch, "sketch");
