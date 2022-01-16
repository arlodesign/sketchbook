import p5 from "p5";
import attachCreateLoop from "p5.createloop/src/p5.createLoop";
window.p5 = p5;
attachCreateLoop();
import polarToCartesian from "util/polarToCartesian";
import { easeInOutQuad as ease } from "util/easing";

const sketch = function (p) {
  const RENDER = p.getURLParams().render;
  const DURATION = 40;
  const RATE = 30;
  const HUE = p.random();

  const ripple = (x) =>
    Math.abs(
      Math.sin(
        (Math.sin(Math.sin(x / 0.75 / 0.56) + -0.33 / 0.55) * 1.81) / 0.11
      ) *
        0.86 +
        -0.9
    ) *
      0.586 +
    -0.031;

  let colors = [];
  let margin;

  p.setup = function () {
    p.pixelDensity(1);
    p.frameRate(RATE);
    p.createCanvas(RENDER ? 540 : 360, RENDER ? 540 : 360);
    p.background(255);
    p.noSmooth();
    p.createLoop(DURATION, {
      noiseRadius: 0.4,
    });
    p.colorMode(p.HSB, 1);

    margin = p.floor(p.width / 10);
  };

  p.draw = function () {
    const { theta, noise1D, noise2D } = p.animLoop;
    p.background(0);
    p.loadPixels();

    for (let x = margin; x < p.width - margin; x++) {
      for (let y = margin; y < p.height - margin; y++) {
        const index = (x + y * p.width) * 4;
        const points = [1, 2, 3, 4, 5].map((i) =>
          polarToCartesian(
            p.width / 2,
            p.height / 2,
            (p.TWO_PI / 5) * i + theta,
            p.width / 2
          )
        );
        const dist =
          Math.max(...points.map((pt) => p.dist(x, y, pt.x, pt.y))) + 1;

        let c = p.color(
          ease(p.abs(noise2D(x / dist / 10, y / dist / 10))),
          0.5,
          1
        );

        if (ripple(noise2D(x / dist, y / dist)) < 0.5) c = p.color(0);

        p.pixels[index] = p.red(c);
        p.pixels[index + 1] = p.green(c);
        p.pixels[index + 2] = p.blue(c);
        p.pixels[index + 3] = 255;
      }
    }

    p.updatePixels();

    RENDER &&
      p.frameCount <= DURATION * RATE &&
      p.save(
        `${String(p.frameCount).padStart(
          String(DURATION * RATE).length,
          "0"
        )}.png`
      );
  };
};

new p5(sketch, "sketch");
