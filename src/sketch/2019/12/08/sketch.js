import p5 from "p5";
import { polarToCartesianEllipse } from "util/polarToCartesian";
import addNoise from "util/addNoise";
import attachCreateLoop from "p5.createloop/src/p5.createLoop";
window.p5 = p5;
attachCreateLoop();

const sketch = function (p) {
  const ITERATIONS = 3;
  const RATE = 4;
  const HUE = p.random(ITERATIONS);

  let y;
  let i = 0;

  p.setup = function () {
    p.frameRate(30);
    p.createCanvas(p.windowWidth, p.windowHeight);
    p.colorMode(p.HSL, ITERATIONS);
    p.background(ITERATIONS - HUE, 1, ITERATIONS / 10);
    p.createLoop(((p.height / RATE) * ITERATIONS) / 30, {
      noiseRadius: 0.5,
    });
    p.strokeWeight(5);

    y = p.height + 100;
  };

  p.draw = function () {
    p.noFill();
    p.blendMode(p.OVERLAY);

    for (
      let a = 0;
      a < p.TWO_PI;
      a += p.map(p.noise(0.6), 0, 1, 0.001, 0.005)
    ) {
      p.stroke(
        HUE,
        (i + 1) * 0.75,
        p.map(p.sin(a + p.QUARTER_PI), -1, 1, 0.5, ITERATIONS - 0.5),
        (ITERATIONS - i) / 10
      );

      p.point(
        ...polarToCartesianEllipse(
          p.width / 2 + (p.width / 4) * p.animLoop.noise1D(0.7),
          y,
          a,
          ((p.width / 2) * p.noise(p.cos(a), p.frameCount / 100)) / (i + 1),
          50 * p.noise(p.cos(a), p.frameCount / 100),
          true
        )
      );
    }

    y -= RATE;

    if (y < -100) {
      y = p.height + 100;
      i++;
    }

    if (i === ITERATIONS) {
      addNoise(p, 0.7);
      p.noLoop();
    }
  };

  p.windowResized = function () {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };
};

new p5(sketch, "sketch");
