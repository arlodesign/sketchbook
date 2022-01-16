import p5 from "p5";
import attachCreateLoop from "p5.createloop/src/p5.createLoop";
window.p5 = p5;
attachCreateLoop();
import * as ease from "util/easing";
import polarToCartesian from "util/polarToCartesian";

const easings = [
  ease.easeInQuad,
  ease.easeOutQuad,
  ease.easeInOutQuad,
  ease.easeInCubic,
  ease.easeOutCubic,
  ease.easeInOutCubic,
  ease.easeInQuart,
  ease.easeOutQuart,
  ease.easeInOutQuart,
  ease.easeInQuint,
  ease.easeOutQuint,
  ease.easeInOutQuint,
];

const RENDER = process.env.DEV && false;
const DURATION = 30;

const sketch = function (p) {
  p.frameRate(60);

  p.setup = function () {
    if (RENDER) {
      p.pixelDensity(1);
    }

    p.createCanvas(p.windowWidth, p.windowHeight);
    p.background(255);
    p.noFill();
    p.strokeWeight(10);
    p.strokeJoin(p.ROUND);
    p.blendMode(p.MULTIPLY);

    p.createLoop(DURATION, {
      gif: RENDER ? { render: false, open: true } : false,
    });
  };

  p.draw = function () {
    const { noise1D, theta } = p.animLoop;

    let c;
    switch (p.frameCount % 3) {
      case 0:
        c = p.color("cyan");
        break;
      case 1:
        c = p.color("magenta");
        break;
      case 2:
        c = p.color("yellow");
        break;
    }
    p.stroke(c);

    easings.forEach((e, i) => {
      const d = p.map(e(p.abs(p.cos(theta))), 0, 1, 0, p.width);
      p.point(
        ...polarToCartesian(
          p.width / 2,
          p.height / 2,
          theta + (p.TWO_PI / easings.length) * i,
          d * noise1D(i + 1),
          true
        )
      );
    });
    p.frameCount === DURATION * 60 && !RENDER && p.noLoop();
  };

  p.windowResized = function () {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };
};

new p5(sketch, "sketch");
