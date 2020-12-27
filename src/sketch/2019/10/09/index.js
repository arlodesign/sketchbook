import p5 from "p5";
import { easeInOutQuint as ease } from "util/easing";
import "p5.createloop";
import polarToCartesian from "util/polarToCartesian";

const RENDER = process.env.DEV && false;
const RINGS = 10;

const sketch = function (p) {
  const HUE = p.random(50);
  let ringSize;

  p.setup = function () {
    if (RENDER) {
      p.pixelDensity(1);
      p.frameRate(30);
    }

    p.createCanvas(p.windowWidth, p.windowHeight);
    p.background(255);
    p.colorMode(p.HSB, 100);
    p.strokeCap(p.SQUARE);
    p.createLoop(60, {
      gif: RENDER ? { render: false, open: true } : false,
    });

    ringSize = p.dist(0, 0, p.width / 2, p.height / 2) / RINGS;
  };

  p.draw = function () {
    const { theta, noise1D } = p.animLoop;
    p.translate(p.width / 2, p.height / 2);
    p.rotate(p.QUARTER_PI);
    for (let r = 0; r < RINGS; r++) {
      const element = RINGS;
      const lerpVal = p.map(p.sin(theta * (r + 1)), -1, 1, 1, 0);
      const start = p.TWO_PI * (r / RINGS);
      const pointA = polarToCartesian(
        0,
        0,
        theta * (r % 2 ? 1 : -1),
        ringSize * r,
        true
      );
      const pointB = polarToCartesian(
        0,
        0,
        theta * (r % 2 ? 1 : -1),
        ringSize * (r + 1),
        true
      );

      p.stroke(
        p.lerpColor(
          p.color(HUE, 100, 25),
          p.color(HUE + 50, 25, 100),
          ease(lerpVal)
        )
      );
      p.strokeWeight(p.map(r, 0, RINGS, 1, 7));
      p.line(...pointA, ...pointB);
    }
  };

  p.windowResized = function () {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };
};

new p5(sketch, "sketch");
