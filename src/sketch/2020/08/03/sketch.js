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

  let colors = [];
  let margin;

  p.setup = function () {
    p.pixelDensity(1);
    p.frameRate(RATE);
    p.createCanvas(RENDER ? 360 : 200, RENDER ? 360 : 200);
    p.background(255);
    p.noSmooth();
    p.createLoop(DURATION, {
      noiseRadius: 1.2,
    });
    p.colorMode(p.HSB, 1);

    colors = [
      p.color(HUE, 1, 0.8),
      p.color(HUE, 0.1, 0.1),
      p.color((HUE + 0.4) % 1, 0.5, 0.3),
      p.color((HUE + 0.6) % 1, 0.3, 0.5),
    ];
    margin = p.floor(p.width / 10);
  };

  p.draw = function () {
    const { theta, noise, noise2D } = p.animLoop;
    p.background(HUE, 0.1, 0.1);
    p.loadPixels();

    for (let x = margin; x < p.width - margin; x++) {
      for (let y = margin; y < p.height - margin; y++) {
        const index = (x + y * p.width) * 4;
        const dist =
          p.dist(
            x,
            y,
            ...polarToCartesian(
              p.width / 2,
              p.height / 2,
              theta,
              (p.width / 2) * noise(),
              true
            )
          ) +
          p.width / 10;

        const c = lerpGradient(
          p,
          p.abs(noise2D(x / dist, y / dist)),
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
