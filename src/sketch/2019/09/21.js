import p5 from "p5";
import polarToCartesian from "util/polarToCartesian";
import "p5.createloop";

const RENDER = process.env.DEV && false;
const CIRCLES = 100;

const sketch = function (p) {
  let circleGap;
  let startAngleSeed = p.random(p.TWO_PI);

  function normalizeAngle(a) {
    while (a > p.TWO_PI) {
      a = a - p.TWO_PI;
    }
    return a;
  }

  p.setup = function () {
    if (RENDER) {
      p.pixelDensity(1);
    }

    p.createCanvas(p.windowWidth, p.windowHeight);
    p.noFill();
    p.strokeWeight(2);

    circleGap = p.dist(0, 0, p.width / 2, p.height / 2) / CIRCLES;

    p.createLoop(60, {
      gif: RENDER ? { render: false, open: true } : false,
      noiseRadius: 0.1,
    });
  };

  p.draw = function () {
    p.background(255);

    const rate = p.animLoop.noise1D(0.5) + 1;

    let startAngle = startAngleSeed * rate;

    for (let i = 0; i < CIRCLES; i++) {
      let endAngle = startAngle + startAngleSeed * rate;
      p.arc(
        p.width / 2,
        p.height / 2,
        circleGap * i * 2,
        circleGap * i * 2,
        normalizeAngle(startAngle),
        normalizeAngle(endAngle)
      );
      startAngle = endAngle;
      p.line(
        ...polarToCartesian(
          p.width / 2,
          p.height / 2,
          endAngle,
          circleGap * i,
          true
        ),
        ...polarToCartesian(
          p.width / 2,
          p.height / 2,
          endAngle,
          circleGap * (i + 1),
          true
        )
      );
    }
  };

  // p.touchMoved = function() {
  //  if (
  //    p.mouseX >= 0 &&
  //    p.mouseY >= 0 &&
  //    p.mouseX <= p.width &&
  //    p.mouseY <= p.height
  //  ) {
  //    return false;
  //  }
  // };

  p.windowResized = function () {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };
};

new p5(sketch, "sketch");
