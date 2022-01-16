import p5 from "p5";
import attachCreateLoop from "p5.createloop/src/p5.createLoop";
window.p5 = p5;
attachCreateLoop();
import { easeInOutQuint as ease } from "util/easing";

const sketch = function (p) {
  const RENDER = p.getURLParams().render;
  const DURATION = 20;
  const RATE = 30;

  const ripple = (v) =>
    ease(
      (p.constrain(
        p.sin(v / 0.05) *
          (p.sin(v / 0.2) * 0.5 + -0.8) *
          (p.sin(v / 0.1) * p.random(1.3, 1.7)) *
          p.abs(v),
        -1,
        1
      ) +
        1) /
        2
    );

  p.setup = function () {
    p.pixelDensity(1);
    p.frameRate(RATE);
    p.createCanvas(100, 100);
    p.background(255);
    p.noSmooth();
    p.createLoop(DURATION, {
      gif: RENDER ? { render: false, open: true } : false,
      noiseRadius: 0.8,
    });
  };
  p.draw = function () {
    const { noise2D } = p.animLoop;

    p.loadPixels();

    for (let x = 0; x < p.width; x++) {
      for (let y = 0; y < p.height; y++) {
        const index = (x + y * p.width) * 4;

        const yn = [
          ripple((noise2D(x / 500, y / 1000) + 1) / 2),
          ripple((noise2D(x / 50, y / 100) + 1) / 2),
          ripple((noise2D(x / 100, y / 500) + 1) / 2),
          ripple((noise2D(x / 100, y / 250) + 1) / 2),
        ][x % 4];

        // if (yn < 0.5) c = yn * 255;
        // if (xn < 0.5) c = (c + x * 255) % 255;

        p.pixels[index] = yn * 255;
        p.pixels[index + 1] = yn * 255;
        p.pixels[index + 2] = yn * 255;
        p.pixels[index + 3] = 255;
      }
    }

    p.updatePixels();
  };
};

new p5(sketch, "sketch");
