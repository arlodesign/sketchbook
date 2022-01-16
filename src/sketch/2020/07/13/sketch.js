import p5 from "p5";
import attachCreateLoop from "p5.createloop/src/p5.createLoop";
window.p5 = p5;
attachCreateLoop();
import lerpLine from "util/lerpLine";
import polarToCartesian from "util/polarToCartesian";
import { easeInOutQuint, easeInOutQuad } from "util/easing";

const sketch = function (p) {
  const RENDER = p.getURLParams().render;
  const DURATION = 60;
  const RATE = 30;
  const START_HUE = p.random(2 / 3);
  const HUES = p.shuffle([
    p.random(START_HUE, START_HUE + 1 / 6),
    p.random(START_HUE + 1 / 6, START_HUE + 2 / 6),
    p.random(START_HUE + 2 / 6, 1),
  ]);

  let shortestSide;
  let center = [];

  p.setup = function () {
    p.frameRate(RATE);
    p.createCanvas(
      RENDER ? 1080 : p.windowWidth,
      RENDER ? 1080 : p.windowHeight
    );
    p.colorMode(p.HSB, 1);
    p.background(HUES[0], 1 / 6, 1 / 6);
    p.strokeWeight(p.width * 0.001);
    p.noSmooth();
    p.createLoop(DURATION, {
      // gif: { render: false, open: true },
      noiseRadius: p.random(0.5, 1.5),
    });

    shortestSide = Math.min(p.width, p.height);
    center = [
      p.random(shortestSide / 3, shortestSide - shortestSide / 3),
      p.random(shortestSide / 3, shortestSide - shortestSide / 3),
    ];
  };

  p.draw = function () {
    const { progress, theta, noise2D, noise1D } = p.animLoop;

    p.blendMode(p.HARD_LIGHT);

    HUES.forEach((hue, i) => {
      p.stroke(hue, (i + 1) / HUES.length, (i + 1) / HUES.length, (i + 1) / 3);
      lerpLine(
        p,
        ...polarToCartesian(
          ...center,
          theta + (p.TWO_PI / (HUES.length * 2)) * (i + 1),
          p.map(noise2D(9, (i + 1) / 10), -1, 1, shortestSide / 10, 0),
          true
        ),
        ...polarToCartesian(
          ...center,
          theta + (p.TWO_PI / (HUES.length * 2)) * (i + 1),
          p.map(
            noise2D(7, (i + 1) / 10),
            -1,
            1,
            shortestSide / 2,
            shortestSide
          ),
          true
        ),
        p.constrain(
          (-2 * progress * progress + 2 * progress) *
            easeInOutQuint(p.abs(noise1D(5))),
          0.001,
          0.1
        ),
        false,
        false
      );
    });

    p.frameCount % 100 === 0 && console.info(`${p.floor(progress * 100)}%`);
    if (p.frameCount === DURATION * RATE) {
      console.info("100%");
      p.noLoop();
    }
  };

  p.windowResized = function () {
    if (RENDER) return;

    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };
};

new p5(sketch, "sketch");
