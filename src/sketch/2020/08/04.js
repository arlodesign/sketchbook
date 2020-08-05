import p5 from "p5";
import "p5.createloop";
import lerpGradient from "util/lerpGradient";
import polarToCartesian from "util/polarToCartesian";

const sketch = function (p) {
  const RENDER = p.getURLParams().render;
  const DURATION = 40;
  const RATE = 30;
  const HUE = p.random();

  const fract = (x) => x % 1;
  const ripple = (x) => fract(x / 0.2) * Math.sin(x / 0.2) * 0.5 + 0.5;

  let colors = [];
  let margin;

  p.setup = function () {
    p.pixelDensity(1);
    p.frameRate(RATE);
    p.createCanvas(RENDER ? 540 : 360, RENDER ? 540 : 360);
    p.background(255);
    p.noSmooth();
    p.createLoop(DURATION, {
      noiseRadius: 0.8,
    });
    p.colorMode(p.HSB, 1);

    colors = [
      p.color(HUE, 0.6, 0.2),
      p.color((HUE + 0.4) % 1, 0.8, 0.8),
      p.color(HUE, 1, 0.1),
      p.color((HUE + 0.6) % 1, 0.6, 0.5),
    ];
    margin = p.floor(p.width / 20);
  };

  p.draw = function () {
    const { theta, noise1D, noise2D } = p.animLoop;
    p.background(HUE, 0.1, 0.1);
    p.loadPixels();

    for (let x = margin; x < p.width - margin; x++) {
      for (let y = margin; y < p.height - margin; y++) {
        const index = (x + y * p.width) * 4;
        const points = [1, 2, 3].map((i) =>
          polarToCartesian(
            p.width / 2,
            p.height / 2,
            ((p.TWO_PI / 3) * i + theta) * noise1D(i / 100),
            p.width
          )
        );
        const dist = Math.max(...points.map((pt) => p.dist(x, y, pt.x, pt.y)));

        const c = lerpGradient(
          p,
          p.constrain(ripple(p.abs(noise2D(x / dist, y / dist))), 0, 1),
          ...colors
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
