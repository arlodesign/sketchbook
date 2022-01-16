import p5 from "p5";
import { easeInOutQuad as ease } from "util/easing";
import attachCreateLoop from "p5.createloop/src/p5.createLoop";
window.p5 = p5;
attachCreateLoop();

const RENDER = process.env.DEV && false;
const GRID = 30;

const sketch = function (p) {
  p.setup = function () {
    p.createCanvas(p.windowWidth, p.windowHeight);
    p.noStroke();
    p.colorMode(p.HSL, 1);
    p.rectMode(p.CENTER);

    p.createLoop(3, {
      gif: RENDER ? { render: false, open: true } : false,
      noiseRadius: 0.5,
    });
  };

  p.draw = function () {
    const { theta } = p.animLoop;

    p.blendMode(p.BLEND);
    p.background(0);
    p.blendMode(p.HARD_LIGHT);

    for (let x = 0; x < p.width / GRID; x++) {
      for (let y = 0; y < p.height / GRID; y++) {
        p.push();
        p.translate(x * GRID + GRID / 2, y * GRID + GRID / 2);
        p.square(
          0,
          0,
          ease(
            p.map(
              p.cos(p.dist(x, y, p.width / 2, p.height / 2) + theta),
              -1,
              1,
              0,
              1
            )
          ) * GRID,
          ease(
            p.map(
              p.sin(p.dist(x, y, p.width / 2, p.height / 2) + theta),
              -1,
              1,
              0,
              1
            )
          ) * GRID
        );
        p.pop();

        p.push();
        p.fill(0);
        p.translate(x * GRID - GRID / 2, y * GRID + GRID / 2);
        p.square(
          0,
          0,
          ease(
            p.map(
              p.sin(p.dist(x, y, -p.width / 2, p.height / 2) + theta),
              -1,
              1,
              1,
              0
            )
          ) *
            (GRID / 2),
          ease(
            p.map(
              p.cos(p.dist(x, y, -p.width / 2, p.height / 2) + theta),
              -1,
              1,
              1,
              0
            )
          ) *
            (GRID / 2)
        );
        p.pop();
      }
    }
  };

  p.windowResized = function () {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };
};

new p5(sketch, "sketch");
