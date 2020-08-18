import p5 from "p5";
import "p5.createloop";
import lerpGradient from "util/lerpGradient";
import { easeInQuart as ease } from "util/easing";

const sketch = function (p) {
  const RENDER = p.getURLParams().render;
  const RENDER_SIZE = 540;
  const DURATION = 20;
  const RATE = RENDER ? 60 : 30;
  const GRID = 7;

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
      noiseRadius: 1.2,
    });
  };

  p.draw = function () {
    const { progress, theta, noise1D, noise2D } = p.animLoop;
    const loopedProgress = -1 * progress * progress + progress;

    p.background(255);
    p.loadPixels();

    for (let y = 0; y <= p.height / 2; y++) {
      for (let x = 0; x < p.width; x++) {
        const indexTop = (x + y * p.width) * 4;
        const indexBottom = (x + (p.height - y) * p.width) * 4;
        const xN = p.floor((x + p.width) / (p.width / GRID));
        const yN =
          p.floor((y + p.height) / ((p.height / GRID) * 2)) * loopedProgress +
          y / 500;
        const n = ease(p.abs(noise2D(xN, yN)));
        let c = lerpGradient(
          p,
          n,
          p.color(0, 0, 50),
          p.color(21, 29, 109),
          p.color(116, 243, 255),
          p.color(87, 179, 14),
          p.color(0, 210, 250),
          p.color(123, 0, 167),
          p.color(91, 0, 120)
        );

        p.pixels[indexTop] = p.red(c);
        p.pixels[indexTop + 1] = p.green(c);
        p.pixels[indexTop + 2] = p.blue(c);
        p.pixels[indexTop + 3] = 255;
        p.pixels[indexBottom] = p.red(c);
        p.pixels[indexBottom + 1] = p.green(c);
        p.pixels[indexBottom + 2] = p.blue(c);
        p.pixels[indexBottom + 3] = 255;
      }
    }
    p.updatePixels();

    p.frameCount % 100 === 0 && console.info(`${p.floor(progress * 100)}%`);

    if (RENDER && p.frameCount <= DURATION * RATE) {
      p.save(
        `${String(p.frameCount).padStart(
          String(DURATION * RATE).length,
          "0"
        )}.png`
      );
      p.frameCount === DURATION * RATE && window.alert("Complete");
    }
  };
};

new p5(sketch, "sketch");
