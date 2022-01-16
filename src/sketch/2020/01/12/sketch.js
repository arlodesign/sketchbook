import p5 from "p5";
import polarToCartesian from "util/polarToCartesian";
import { easeOutQuint as ease } from "util/easing";
import attachCreateLoop from "p5.createloop/src/p5.createLoop";
window.p5 = p5;
attachCreateLoop();

const sketch = function (p) {
  const DURATION = 120;
  const RATE = 60;
  const POINT_COUNT = 6;
  const HUE = p.random();

  p.setup = function () {
    p.frameRate(RATE);
    p.createCanvas(p.windowWidth, p.windowHeight);
    p.noSmooth();
    p.noFill();
    p.background(64);
    p.strokeWeight(2);
    p.blendMode(p.HARD_LIGHT);
    p.colorMode(p.HSL, 1);
    p.createLoop(DURATION, {
      noiseRadius: 2,
    });
  };

  p.draw = function () {
    const { theta, noise, noise1D } = p.animLoop;

    p.translate(
      ...polarToCartesian(
        ...polarToCartesian(
          p.width / 2,
          p.height / 2,
          theta,
          p.width / 10,
          true
        ),
        theta * 5,
        (p.width / 2) * p.abs(noise1D(0.04)),
        true
      )
    );
    p.rotate(theta * 4);

    const maxSize = p.map(noise1D(0.05), -1, 1, p.width / 6, p.width / 4);

    let points = Array(POINT_COUNT)
      .fill()
      .map((_, i) => ({
        angle: p.map(
          noise1D(0.06),
          -1,
          1,
          (p.TWO_PI / POINT_COUNT) * i,
          (p.TWO_PI / POINT_COUNT) * (i + 1)
        ),
        dist:
          i % 2
            ? ease(p.abs(noise1D(0.07))) * (maxSize / 3)
            : ease(p.abs(noise1D(0.07))) * maxSize,
      }));

    const maxDist = Math.max(...points.map(({ dist }) => dist));

    for (let i = 1; i > 0; i -= 40 / maxDist) {
      p.stroke(
        HUE,
        p.map(p.sin(theta), -1, 1, 0.5, 1),
        (noise() + 1) / 2,
        (1 - i) * p.map(-p.cos(theta * 3), -1, 1, 0, 1)
      );

      p.beginShape();

      points.forEach(({ angle, dist }) =>
        p.curveVertex(...polarToCartesian(0, 0, angle, i * dist, true))
      );
      for (let j = 0; j < 3; j++) {
        p.curveVertex(
          ...polarToCartesian(0, 0, points[j].angle, i * points[j].dist, true)
        );
      }

      p.endShape();
    }

    p.frameCount % 100 === 0 &&
      console.log(`${p.frameCount} / ${DURATION * RATE}`);
    p.frameCount === DURATION * RATE && p.noLoop();
  };

  p.windowResized = function () {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };
};

new p5(sketch, "sketch");
