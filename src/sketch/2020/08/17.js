import p5 from "p5";
import "p5.createloop";
import { easeInOutQuad, easeInOutCubic } from "util/easing";
import polarToCartesian from "util/polarToCartesian";

const sketch = function (p) {
  const RENDER = p.getURLParams().render;
  const RENDER_SIZE = 540;
  const DURATION = 55;
  const RATE = 30;
  const HUE = p.random();

  p.setup = function () {
    p.pixelDensity(1);
    p.frameRate(RATE);
    p.createCanvas(
      RENDER ? RENDER_SIZE : p.floor(RENDER_SIZE / 4),
      RENDER ? RENDER_SIZE : p.floor(RENDER_SIZE / 4)
    );
    p.background(255);
    p.noSmooth();
    p.createLoop(DURATION, {
      noiseRadius: 0.4,
    });
    p.colorMode(p.HSL, 1);
  };

  p.draw = function () {
    const { progress, theta, noise1D, noise2D } = p.animLoop;
    p.background(255);
    p.loadPixels();
    const loopedProgress = -2 * progress * progress + 2 * progress;
    const focusPoint = polarToCartesian(
      p.map(noise1D(0.5), -1, 1, 0, p.width),
      p.map(noise1D(0.9), -1, 1, 0, p.height),
      theta,
      p.height / 2,
      true
    );
    const maxDist = p.dist(...focusPoint, 0, 0);

    for (let y = 0; y < p.height; y++) {
      for (let x = 0; x < p.width; x++) {
        const index = (x + y * p.width) * 4;
        const xN = p.floor((x + p.width) / (p.width / 9));
        const yN = (y + p.height) / 400;
        const n =
          Math.abs(noise2D(xN, yN)) * (p.dist(...focusPoint, x, y) / maxDist);

        const h = p.constrain(
          (Math.floor(n / 0.167) * 0.169 +
            -0.344 +
            Math.sin(n / 0.09) * 0.34 +
            0.336) *
            0.971 +
            loopedProgress,
          0,
          1
        );
        const c = p.color(HUE, easeInOutCubic(h), easeInOutQuad(h));

        p.pixels[index] = p.red(c);
        p.pixels[index + 1] = p.green(c);
        p.pixels[index + 2] = p.blue(c);
        p.pixels[index + 3] = 255;
      }
    }
    p.updatePixels();

    if (RENDER && p.frameCount <= DURATION * RATE) {
      p.frameCount % 100 === 0 && console.info(`${p.floor(progress * 100)}%`);
      p.save(
        `${String(p.frameCount).padStart(
          String(DURATION * RATE).length,
          "0"
        )}.png`
      );
    }
  };
};

new p5(sketch, "sketch");
