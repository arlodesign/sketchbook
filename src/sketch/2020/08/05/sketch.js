import p5 from "p5";
import attachCreateLoop from "p5.createloop/src/p5.createLoop";
window.p5 = p5;
attachCreateLoop();
import lerpGradient from "util/lerpGradient";
import polarToCartesian from "util/polarToCartesian";

const sketch = function (p) {
  const RENDER = p.getURLParams().render;
  const DURATION = 40;
  const RATE = 30;
  const HUE = p.random();

  const ripple = (x) =>
    Math.sin(x / 0.75 / 0.333) *
      (Math.sin(x / 0.75 / 0.5) * 1.75) *
      Math.sin(x / 0.75 / 0.125) *
      Math.abs(x / 0.75) *
      0.5 +
    0.5;

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

    margin = p.floor(p.width / 20);
  };

  p.draw = function () {
    const { theta, noise1D, noise2D } = p.animLoop;
    p.background(HUE, 0.1, 0.1);
    p.loadPixels();

    for (let x = margin; x < p.width - margin; x++) {
      for (let y = margin; y < p.height - margin; y++) {
        if (p.dist(p.width / 2, p.height / 2, x, y) > p.width / 2 - margin)
          continue;

        const index = (x + y * p.width) * 4;
        const points = [1, 2, 3, 4].map((i) =>
          polarToCartesian(
            p.width / 2,
            p.height / 2,
            ((p.TWO_PI / 4) * i + theta) * noise1D(i / 100),
            p.width / 2
          )
        );
        const dist =
          Math.max(...points.map((pt) => p.dist(x, y, pt.x, pt.y))) + 1;

        const c = lerpGradient(
          p,
          p.constrain(ripple(p.abs(noise2D(x / dist, y / dist))), 0, 1),
          p.color(HUE, 1, noise1D(x)),
          p.color(HUE, 1, 0.1),
          p.color((HUE + 0.5) % 1, 1, noise1D(y))
        );

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
