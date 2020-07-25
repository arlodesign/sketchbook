import p5 from "p5";
import "p5.createloop";
import { easeInOutQuad as ease } from "util/easing";

const sketch = function (p) {
  const RENDER = p.getURLParams().render;
  const DURATION = 40;
  const RATE = 30;

  let colors = [];

  p.setup = function () {
    p.pixelDensity(1);
    p.frameRate(RATE);
    p.createCanvas(270, 270);
    p.background(255);
    p.noSmooth();
    p.createLoop(DURATION, {
      gif: RENDER
        ? { render: false, open: true, fileName: "2020-07-25.gif" }
        : false,
      noiseRadius: 0.5,
    });

    p.colorMode(p.HSB, 1);
    const baseHue = p.random();
    colors = p
      .shuffle([
        p.color((baseHue + 0.333) % 1, 0.666, 1),
        p.color((baseHue + 0.666) % 1, 0.3333, 1),
        p.color(baseHue, 0.5, 1),
        p.color(baseHue, 0.5, 0.333),
      ])
      .map((c) => ({
        r: p.red(c),
        g: p.green(c),
        b: p.blue(c),
      }));
    p.colorMode(p.RGB, 255);
  };

  p.draw = function () {
    const { noise2D } = p.animLoop;
    const ripple = (v) =>
      ease(p.floor((v / (1 / 12)) * 0.2) * p.sin((v / (1 / 12)) * 0.5 + 5));

    p.loadPixels();

    for (let x = 0; x < p.width; x++) {
      for (let y = 0; y < p.height; y++) {
        const index = (x + y * p.width) * 4;
        let c = colors[3];
        const xn = [
          ripple((noise2D(x / 1000, y / 1000) + 1) / 2),
          ripple((noise2D(x / 100, y / 100) + 1) / 2),
        ][x % 2];
        const yn = [
          ripple((noise2D(x / 500, y / 500) + 1) / 2),
          ripple((noise2D(x / 250, y / 250) + 1) / 2),
        ][y % 2];

        if (xn < 0.5) c = colors[x % 3];
        if (yn < 0.5)
          c = {
            r: (c.r + colors[y % 3].r) % 256,
            g: (c.g + colors[y % 3].g) % 256,
            b: (c.b + colors[y % 3].b) % 256,
          };

        p.pixels[index] = c.r;
        p.pixels[index + 1] = c.g;
        p.pixels[index + 2] = c.b;
        p.pixels[index + 3] = 255;
      }
    }

    p.updatePixels();
  };
};

new p5(sketch, "sketch");
