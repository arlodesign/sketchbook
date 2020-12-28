import p5 from "p5";
import "p5.createloop";
import addNoise from "util/addNoise";
import polarToCartesian from "util/polarToCartesian";
import { easeInOutQuint as ease } from "util/easing";

const sketch = function (p) {
  const DURATION = 360;
  const RATE = 60;
  const ITERATIONS = 2;
  const HUE = p.random();

  let i = 0;

  p.setup = function () {
    p.frameRate(RATE);
    p.createCanvas(p.windowWidth, p.windowHeight);
    p.background(192);
    p.colorMode(p.HSB, ITERATIONS);
    p.createLoop(DURATION, {
      noiseRadius: 0.8,
    });
    p.blendMode(p.HARD_LIGHT);
    p.noSmooth();
    addNoise(p);
  };

  p.draw = function () {
    const { theta, noise, noise1D } = p.animLoop;

    for (let i = 0; i < ITERATIONS; i++) {
      const point = polarToCartesian(
        p.width / 2,
        p.height / 2,
        theta,
        ease(noise1D(10)) * p.width * (i + 1),
        true
      );
      p.stroke(HUE + i, ITERATIONS * 0.75, ITERATIONS, ITERATIONS / 10);
      p.noFill();

      p.push();

      p.translate(...point);
      p.rotate((-theta * ITERATIONS) / (i + 1));
      p.ellipse(
        0,
        0,
        (p.noise(...point.map((pt) => pt / 100), i) * p.height) / 2,
        Math.max(100 * (i + 1) * ease(p.abs(noise())), 1)
      );
      p.pop();
    }

    p.frameCount % 1000 === 0 &&
      console.log(`${p.frameCount} / ${DURATION * RATE}`);
    p.frameCount === DURATION * RATE && p.noLoop();
  };

  p.windowResized = function () {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };
};

new p5(sketch, "sketch");
