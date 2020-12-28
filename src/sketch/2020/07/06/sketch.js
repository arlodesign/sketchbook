import p5 from "p5";
import "p5.createloop";
import { easeOutQuad, easeInOutQuart } from "util/easing";

const sketch = function (p) {
  const RENDER = p.getURLParams().render;
  const DURATION = 40;
  const RATE = 30;
  const SHAPES = 60;
  const COUNT = 3;

  let margin;

  p.setup = function () {
    p.pixelDensity(RENDER ? 2 : 1);
    p.frameRate(RATE);
    p.createCanvas(
      RENDER ? 1080 : p.windowWidth,
      RENDER ? 1080 : p.windowHeight
    );
    p.strokeWeight(3);
    p.noFill();

    p.createLoop(DURATION, {
      gif: RENDER ? { render: false, open: true } : false,
      noiseRadius: 0.6,
    });

    margin = Math.min(p.width, p.height) / 20;
  };

  p.draw = function () {
    const { theta, noise1D } = p.animLoop;

    p.background(255);

    for (let i = 0; i < COUNT; i++) {
      p.push();
      p.translate(p.width / 2, p.height / 2);
      p.rotate((p.TWO_PI / COUNT) * i + theta * (i + 1) * (i % 2 ? -1 : 1));
      p.translate(-p.width / 2, -p.height / 2);

      for (let j = 0; j < 1; j += 1 / SHAPES) {
        const y = p.map(
          easeInOutQuart(j),
          0,
          1,
          p.map(noise1D((i + 1) / 2), -1, 1, p.height / 4, p.height / 2),
          p.height / 2
        );
        p.ellipse(
          p.width / 2,
          y,
          (Math.min(p.width, p.height) - margin) * easeOutQuad(j),
          (Math.min(p.width, p.height) - margin) * j
        );
      }
    }
  };

  p.windowResized = function () {
    if (RENDER) return;
    p.resizeCanvas(p.windowWidth, p.windowHeight);
    margin = Math.min(p.width, p.height) / 20;
  };
};

new p5(sketch, "sketch");
