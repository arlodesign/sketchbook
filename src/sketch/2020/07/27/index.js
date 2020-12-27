import p5 from "p5";
import "p5.createloop";

const sketch = function (p) {
  const RENDER = p.getURLParams().render;
  const DURATION = 40;
  const RATE = 30;

  const baseHue = p.random();
  const COLORS = p.shuffle([
    [(baseHue + 0.4) % 1, 0.333],
    [(baseHue + 0.6) % 1, 0.666],
    [baseHue, 1],
  ]);
  const ripple = (x) =>
    p.map(p.sin(p.sin(x / (p.PI * (1 / 30))) / (p.PI * 0.1)), -1, 1, 0, 1);

  let maxDist = 0;

  p.setup = function () {
    p.pixelDensity(1);
    p.frameRate(RATE);
    p.createCanvas(RENDER ? 400 : 200, RENDER ? 400 : 200);
    p.background(255);
    p.noSmooth();
    p.createLoop(DURATION, {
      gif: RENDER ? { render: false, open: true } : false,
      noiseRadius: 0.7,
    });
    p.colorMode(p.HSL, 1);
    maxDist = p.width / 2;
  };
  p.draw = function () {
    const { noise2D } = p.animLoop;

    p.loadPixels();

    for (let x = 0; x < p.width; x++) {
      for (let y = 0; y < p.height; y++) {
        const pixelIndex = (x + y * p.width) * 4;
        const index = y % COLORS.length;

        const b = p.constrain(
          [
            ripple(noise2D(x / 100, y / 500)),
            ripple(noise2D(x / 400, y / 500)),
            ripple(noise2D(x / 700, y / 500)),
          ][index] *
            1 -
            p.dist(p.width / 2, p.height / 2, x, y) / maxDist,
          0,
          1
        );

        const c = p.color(...COLORS[index], b);

        p.pixels[pixelIndex] = p.red(c);
        p.pixels[pixelIndex + 1] = p.green(c);
        p.pixels[pixelIndex + 2] = p.blue(c);
        p.pixels[pixelIndex + 3] = 255;
      }
    }

    p.updatePixels();
  };
};

new p5(sketch, "sketch");
