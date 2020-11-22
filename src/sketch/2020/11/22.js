import p5 from "p5";
import "p5.createloop";
import { easeInOutQuad } from "util/easing";
import lerpLine from "util/lerpLine";
import polarToCartesian from "util/polarToCartesian";

const sketch = function (p) {
  const RENDER = p.getURLParams().render;
  const RENDER_SIZE = 1080;
  const DURATION = 2 * (RENDER ? 60 : 1);
  const RATE = RENDER ? 1 : 60;

  let prevPoints = {};

  p.setup = function () {
    p.pixelDensity(1);
    p.frameRate(RATE);
    p.createCanvas(RENDER_SIZE, RENDER_SIZE);
    p.background(255);
    p.noSmooth();
    p.createLoop(DURATION, {
      noiseRadius: 0.5,
    });
  };

  p.draw = function () {
    const { theta, progress, noise1D, noise } = p.animLoop;
    const loopedProgress = easeInOutQuad(
      easeInOutQuad(p.sin(2 * p.PI * progress - p.PI / 2) / 2 + 0.5)
    );
    const x = p.map(progress, 0, 1, -p.width / 20, p.width + p.width / 20);
    p.strokeWeight(0.75);

    for (let y = p.height / 5; y < p.height - p.height / 5; y++) {
      const pt = polarToCartesian(
        x,
        y,
        p.map(y, 0, p.height, 0, p.TWO_PI) +
          noise1D(y / 500) * p.TWO_PI * (1 - loopedProgress) +
          theta,
        (p.width / 3) * loopedProgress * noise1D(y / 1000)
      );
      if (prevPoints[y]) {
        lerpLine(
          p,
          prevPoints[y].x,
          prevPoints[y].y,
          pt.x,
          pt.y,
          p.noise(y / 10, loopedProgress + 0.5) / 20,
          false
        );
      }
      prevPoints[y] = prevPoints[y] || {};
      prevPoints[y].x = pt.x;
      prevPoints[y].y = pt.y;
    }

    if (RENDER && p.frameCount <= DURATION * RATE) {
      p.frameCount % 100 === 0 && console.info(`${p.ceil(progress * 100)}%`);
      p.save(
        `${String(p.frameCount).padStart(
          String(DURATION * RATE).length,
          "0"
        )}.png`
      );
    }
    if (p.frameCount === DURATION * RATE) {
      p.noLoop();
      p.save(`2020-11-22_${Date.now()}.png`);
    }
  };
};

new p5(sketch, "sketch");
