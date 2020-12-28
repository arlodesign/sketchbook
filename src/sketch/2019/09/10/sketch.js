import p5 from "p5";
import { easeInOutQuint as ease } from "util/easing";
import "p5.createloop";

const RENDER = process.env.DEV && false;
const GRID = 30;

const sketch = function (p) {
  p.setup = function () {
    if (RENDER) {
      p.pixelDensity(1);
      p.frameRate(30);
    }

    p.createCanvas(p.windowWidth, p.windowHeight);
    p.noStroke();
    p.colorMode(p.HSL, 1);
    p.rectMode(p.CENTER);

    p.createLoop(10, {
      gif: RENDER ? { render: false, open: true } : false,
      noiseRadius: 0.5,
    });
  };

  p.draw = function () {
    const { noise2D, theta } = p.animLoop;

    p.blendMode(p.BLEND);
    p.background(0.5, 0.3, 0.1);
    p.blendMode(p.HARD_LIGHT);

    for (let x = 0; x < p.width / GRID; x++) {
      for (let y = 0; y < p.height / GRID; y++) {
        const radius = ease(p.map(noise2D(x, y), -1, 1, 0, 1)) * GRID;
        const size = ease(p.map(noise2D(y, x), -1, 1, 0, 1)) * GRID;
        p.push();
        p.fill(
          p.map(
            p.sin(p.dist(x, y, p.width / 2, p.height / 2) + theta),
            -1,
            1,
            0,
            1
          ),
          0.5,
          0.5
        );
        p.translate(x * GRID + GRID / 2, y * GRID + GRID / 2);
        p.translate(
          noise2D(x + 0.5, y) * GRID * 2 * ease(p.cos(theta)),
          noise2D(x, y + 0.7) * GRID * 2 * ease(p.cos(theta))
        );
        p.square(0, 0, size, radius);
        p.pop();
      }
    }
  };

  p.windowResized = function () {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };
};

new p5(sketch, "sketch");
