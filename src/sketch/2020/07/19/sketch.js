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
    p.createCanvas(540, 540);
    p.background(255);
    p.noSmooth();
    p.createLoop(DURATION, {
      gif: RENDER
        ? { render: false, open: true, fileName: "2020-07-18.gif" }
        : false,
      noiseRadius: 2,
    });

    p.colorMode(p.HSB, 1);
    const baseHue = p.random();
    colors = p
      .shuffle([
        p.color((baseHue + 0.4) % 1, 0.5, 1),
        p.color((baseHue + 0.6) % 1, 0.3, 1),
        p.color(baseHue, 0.5, 1),
        p.color(baseHue, 0.5, 0.5),
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

        [
          ripple((noise2D(x / 500, y / 500) + 1) / 2),
          ripple((noise2D(x / 50, y / 50) + 1) / 2),
          ripple((noise2D(x / 200, y / 200) + 1) / 2),
        ].forEach((n, i) => {
          // if (n < 0.5) c = colors[y % 2 ? i : (i + 1) % 3];
          if (n < 0.5) c = colors[i];
        });

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
