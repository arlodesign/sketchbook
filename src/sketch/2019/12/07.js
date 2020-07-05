import p5 from "p5";
import { polarToCartesianEllipse } from "util/polarToCartesian";
import addNoise from "util/addNoise";
import "p5.createloop";

const sketch = function (p) {
  const RENDER = p.getURLParams().render;
  const HUE = p.random();
  const ITERATIONS = 4;
  const RATE = 2;

  let y;
  let i = 0;

  p.setup = function () {
    if (RENDER) {
      p.pixelDensity(1);
    }
    p.frameRate(30);
    p.createCanvas(p.windowWidth, p.windowHeight);
    p.background(192);
    p.createLoop(((p.height / RATE) * ITERATIONS) / 30, {
      gif: RENDER ? { render: false, open: true } : false,
      noiseRadius: 1,
    });
    p.colorMode(p.HSB, ITERATIONS);

    addNoise(p);

    y = p.height + 100;
  };

  p.draw = function () {
    p.stroke(HUE + i, ITERATIONS * 0.75, ITERATIONS, ITERATIONS / 4);
    p.noFill();
    p.blendMode(p.BURN);

    for (
      let a = 0;
      a < p.TWO_PI;
      a += p.map(p.noise(0.6), 0, 1, 0.001, 0.005)
    ) {
      if (p.random() < 0.5) {
        p.point(
          ...polarToCartesianEllipse(
            p.width / 2 + (p.width / 4) * p.animLoop.noise1D(0.7),
            y,
            a,
            (p.width / 2) * p.noise(0.5, p.frameCount / 100),
            50 * p.noise(0.4, p.frameCount / 100),
            true
          )
        );
      }
    }

    y -= RATE;

    if (y < -100) {
      y = p.height + 100;
      i++;
    }

    if (i === ITERATIONS) {
      !RENDER && p.noLoop();
    }
  };

  p.windowResized = function () {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };
};

new p5(sketch, "sketch");
