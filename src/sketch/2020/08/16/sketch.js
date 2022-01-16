import p5 from "p5";
import attachCreateLoop from "p5.createloop/src/p5.createLoop";
window.p5 = p5;
attachCreateLoop();
import { easeInOutCubic as ease } from "util/easing";
import lerpGradient from "util/lerpGradient";

const sketch = function (p) {
  const RENDER = p.getURLParams().render;
  const DURATION = 20;
  const RATE = 30;

  p.setup = function () {
    p.pixelDensity(1);
    p.frameRate(RATE);
    p.createCanvas(180, 180);
    p.background(255);
    p.noSmooth();
    p.createLoop(DURATION, {
      noiseRadius: 0.5,
    });
  };

  p.draw = function () {
    const { progress, noise2D } = p.animLoop;
    p.background(255);
    p.loadPixels();
    const loopedProgress = -4 * progress * progress + 4 * progress;

    for (let y = 0; y < p.height; y++) {
      for (let x = 0; x < p.width; x++) {
        const index = (x + y * p.width) * 4;
        const yN = p.floor(y / (p.height / 36));
        const xN = ((x + p.width) / 100) * loopedProgress;
        const noiseVal = noise2D(xN, yN);

        const c = lerpGradient(
          p,
          ease(Math.abs(noiseVal)),
          p.color(25, 0, 0),
          p.color(255, 0, 0),
          p.color(255, 191, 128),
          p.color(255, 255, 191),
          p.color(0, 128, 255),
          p.color(0, 0, 255),
          p.color(170, 0, 255),
          p.color(25, 0, 25)
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
