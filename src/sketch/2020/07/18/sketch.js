import p5 from "p5";
import attachCreateLoop from "p5.createloop/src/p5.createLoop";
window.p5 = p5;
attachCreateLoop();
import { easeInOutQuart as ease } from "util/easing";

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
      noiseRadius: 0.3,
    });

    p.colorMode(p.HSB, 1);
    const baseHue = p.random();
    colors = [
      p.color((baseHue + 0.4) % 1, 0.5, 0.7),
      p.color((baseHue + 0.6) % 1, 0.3, 0.7),
      p.color(baseHue, 0.5, 1),
      p.color(baseHue, 0.5, 0.5),
    ].map((c) => ({
      r: p.red(c),
      g: p.green(c),
      b: p.blue(c),
    }));
    p.colorMode(p.RGB, 255);
  };

  p.draw = function () {
    const { noise2D } = p.animLoop;
    const ripple = (v) => ease(p.sin(v / 0.01) * 0.5 + 0.5);

    p.loadPixels();

    for (let x = 0; x < p.width; x++) {
      for (let y = 0; y < p.height; y++) {
        const index = (x + y * p.width) * 4;
        let c = colors[3];

        [
          ripple((noise2D(x / 500, y / 500) + 1) / 2),
          ripple((noise2D(x / 100, y / 200) + 1) / 2),
          ripple((noise2D(x / 200, y / 200) + 1) / 2),
        ].forEach((n, i) => {
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
