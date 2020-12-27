import p5 from "p5";
import polarToCartesian from "util/polarToCartesian";

const sketch = function (p) {
  const LEAVES = 4;
  const HUE = p.random(90);

  let angle = 0;
  let alpha = 0;

  p.setup = function () {
    p.createCanvas(p.windowWidth, p.windowHeight);
    p.colorMode(p.HSB, 100);
    p.background(HUE, 80, 5);
    p.noFill();
    p.blendMode(p.SCREEN);
  };

  p.draw = function () {
    const NOISE = p.noise(p.frameCount / 400, angle);
    p.stroke(p.map(p.tan(angle), -1, 1, HUE, HUE + 10), 80, 75, alpha);

    for (let i = 0; i < LEAVES; i++) {
      p.push();
      p.translate(
        ...polarToCartesian(
          p.width / 2,
          p.height / 2,
          angle + (i * p.TWO_PI) / LEAVES,
          (p.height / 2) * NOISE,
          true
        )
      );
      p.circle(0, 0, p.map(NOISE, 0, 1, 200, 0));
      p.pop();
    }

    angle += 0.005;

    if (angle > p.TWO_PI * 3) {
      alpha -= 0.01;
      alpha < 0 && p.noLoop();
    } else {
      alpha = p.min(alpha + 0.01, 5);
    }
  };

  p.windowResized = function () {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };
};

new p5(sketch, "sketch");
