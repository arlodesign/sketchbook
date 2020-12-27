import p5 from "p5";
import "p5.createloop";
import { easeInOutQuad as ease } from "util/easing";

const sketch = function (p) {
  const RENDER = p.getURLParams().render;
  const DURATION = 20;
  const RATE = 30;
  const LINES = 200;

  let margin;

  p.setup = function () {
    p.pixelDensity(RENDER ? 2 : 0.5);
    p.frameRate(RATE);
    p.createCanvas(
      RENDER ? 1080 : p.windowWidth,
      RENDER ? 1080 : p.windowHeight
    );
    p.background(255);
    p.noSmooth();
    p.createLoop(DURATION, {
      gif: RENDER ? { render: false, open: true } : false,
      noiseRadius: 0.5,
    });

    margin = p.width / 20;
    p.strokeWeight(Math.max(p.width / LINES / 4, 1));
  };

  p.draw = function () {
    const { progress, noise2D } = p.animLoop;
    const easedProgress = ease(progress);
    const offset = -4 * easedProgress * easedProgress + 4 * easedProgress;

    p.blendMode(p.BLEND);
    p.background(255);
    p.blendMode(p.MULTIPLY);

    p.translate(p.width / 2, p.height / 2);
    ["cyan", "magenta", "yellow"].forEach((c, i) => {
      p.stroke(c);
      for (
        let x = -(p.width / 2 - margin);
        x <= p.width / 2 - margin;
        x += (p.width - margin * 2) / LINES
      ) {
        p.line(
          x * p.map(offset, 0, 1, noise2D(x / 1000, i + 1), 1),
          -(p.height / 2 - margin),
          x * p.map(offset, 0, 1, noise2D(x / 1000, (i + 1) / 2), 1),
          p.height / 2 - margin
        );
      }
    });
  };

  p.windowResized = function () {
    !RENDER && p.resizeCanvas(p.windowWidth, p.windowHeight);
  };
};

new p5(sketch, "sketch");
