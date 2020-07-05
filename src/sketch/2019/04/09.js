import p5 from "p5";
import polarToCartesian from "util/polarToCartesian";

const sketch = function (p) {
  const HUE = p.random(50);
  const SPEED = 0.001;

  let angle = 0;
  let radius;

  p.setup = function () {
    p.createCanvas(p.windowWidth, p.windowHeight);
    p.colorMode(p.HSB, 100);
    p.noFill();

    radius = p.dist(0, 0, p.width / 2, p.height / 2);
  };

  p.draw = function () {
    p.background(0);

    for (
      let r = 0;
      r < p.TWO_PI;
      r += p.TWO_PI / (50 * p.noise(0.08, 0.09, p.frameCount / 3000))
    ) {
      p.push();
      p.strokeWeight(10);
      p.stroke(p.map(p.cos(r), -1, 1, HUE, HUE + 20), 100, 100);
      p.translate(p.width / 2, p.height / 2);
      p.rotate(angle);

      const start = polarToCartesian(0, 0, r, radius, true);
      const end = [start[0], -start[1]];
      p.bezier(...start, 0, 0, 0, 0, ...end);
      p.pop();
    }

    for (
      let r = 0;
      r < p.TWO_PI;
      r += p.TWO_PI / (50 * p.noise(0.06, 0.07, p.frameCount / 1000))
    ) {
      p.push();
      p.strokeWeight(5);
      p.stroke(0);
      p.translate(p.width / 2, p.height / 2);
      p.rotate(-angle);

      const start = polarToCartesian(0, 0, r, radius, true);
      const end = [start[0], -start[1]];
      p.bezier(
        ...start,
        -radius / 2,
        -radius / 2,
        radius / 2,
        radius / 2,
        ...end
      );
      p.pop();
    }
    angle += SPEED;
  };

  p.windowResized = function () {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };
};

new p5(sketch, "sketch");
