import p5 from "p5";
import attachCreateLoop from "p5.createloop/src/p5.createLoop";
window.p5 = p5;
attachCreateLoop();
import { easeInOutQuint as ease } from "util/easing";
import lerpGradient from "util/lerpGradient";

const sketch = function (p) {
  const RENDER = p.getURLParams().render;
  const DURATION = 20;
  const RATE = 30;
  const GRADIENT = [
    p.color(3, 0, 30),
    p.color(115, 3, 192),
    p.color(236, 56, 188),
    p.color(253, 239, 249),
    p.color(255, 241, 251),
  ];

  const fract = (x) => x % 1;
  const ripple = (x) =>
    Math.abs(
      (Math.sin(x) * 0.85 + fract(x / 0.25) * 0.22) *
        (Math.sin(x / 0.139) * 0.417 + 0.743)
    );

  let colors = [];
  let margin = 0;
  let pixelIndex = () => {};

  p.setup = function () {
    p.pixelDensity(1);
    p.frameRate(RATE);
    p.createCanvas(RENDER ? 540 : 360, RENDER ? 540 : 360);
    p.background(GRADIENT[0]);
    p.noSmooth();
    p.createLoop(DURATION, {
      noiseRadius: 0.4,
    });

    margin = p.floor(p.width / 20);
    pixelIndex = (x, y) => (x + y * p.width) * 4;
  };

  p.draw = function () {
    const { progress, noise2D } = p.animLoop;
    p.background(0);
    p.loadPixels();

    const loopBack = ease(-4 * progress * progress + 4 * progress);

    for (let x = margin; x <= p.width / 2; x++) {
      for (let y = margin; y <= p.height - margin; y++) {
        const dist = p.dist(x, y, p.width, p.height);
        let gradient = GRADIENT;
        if (Math.sin(noise2D(x / 50, y / 50)) < 0)
          gradient = GRADIENT.slice(0, length - 1);
        if (Math.sin(noise2D(x / 100, y / 100)) < -0.5)
          gradient = GRADIENT.slice(0, length - 2);

        let c = lerpGradient(
          p,
          ripple(
            noise2D(
              x / p.map(loopBack, 0, 1, dist, dist / 2),
              y / p.map(loopBack, 0, 1, dist, dist / 2)
            )
          ),
          ...gradient
        );

        [
          [x, y],
          [p.width - x, y],
          // [x, p.height - y],
          // [p.width - x, p.height - y],
        ].forEach((coord) => {
          const index = pixelIndex(...coord);
          p.pixels[index] = p.red(c);
          p.pixels[index + 1] = p.green(c);
          p.pixels[index + 2] = p.blue(c);
          p.pixels[index + 3] = 255;
        });
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
