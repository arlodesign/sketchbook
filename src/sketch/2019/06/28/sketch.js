import p5 from "p5";
import polarToCartesian from "util/polarToCartesian";
import lerpLine from "util/lerpLine";

const sketch = function (p) {
  const LEAVES = 6;
  const HUE = p.random(70);

  let angle = 0;
  let alpha = 0;

  p.setup = function () {
    p.createCanvas(p.windowWidth, p.windowHeight);
    p.colorMode(p.HSB, 100);
    p.background(HUE, 80, 5);
    p.noFill();
    p.strokeWeight(4);
  };

  p.draw = function () {
    const NOISE = p.noise(p.frameCount / 100, angle);

    p.blendMode(p.SCREEN);
    p.stroke(p.map(p.cos(angle / LEAVES), -1, 1, HUE, HUE + 30), 80, 75, alpha);

    for (let i = 0; i < LEAVES; i++) {
      lerpLine(
        p,
        p.width / 2,
        p.height / 2,
        ...polarToCartesian(
          p.width / 2,
          p.height / 2,
          angle + (i * p.TWO_PI) / LEAVES,
          p.height * NOISE,
          true
        ),
        NOISE,
        false
      );
    }

    angle += 0.005;

    if (angle > p.TWO_PI * LEAVES) {
      alpha -= 0.001;
      alpha < 0 && p.noLoop();
    } else {
      alpha = p.min(alpha + 0.1, 100 / LEAVES);
    }
  };

  p.windowResized = function () {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };
};

new p5(sketch, "sketch");
