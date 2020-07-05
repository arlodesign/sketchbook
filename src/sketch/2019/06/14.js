import p5 from "p5";
import polarToCartesian from "util/polarToCartesian";

const sketch = function (p) {
  const STEPS = 3;

  let points = [];

  p.setup = function () {
    p.createCanvas(p.windowWidth, p.windowHeight);
    p.stroke(255);
    p.strokeWeight(10);
    p.strokeJoin(p.BEVEL);
    p.fill(0);
    p.colorMode(p.HSB, 100);

    const initPoints = Array.from(Array(5), () => ({
      a: p.random(p.TWO_PI),
      d: p.random(p.width / 10, p.width / 2),
      aSpeed: p.random(0.01) * p.random([-1, 1]),
    }));

    for (let angle = 0; angle < p.TWO_PI; angle += p.TWO_PI / STEPS) {
      points = points.concat(
        initPoints.map((pt) => Object.assign({}, pt, { a: pt.a + angle }))
      );
    }
  };

  p.draw = function () {
    p.background(255);

    p.beginShape();

    points.forEach(({ a, d, aSpeed }, i) => {
      p.vertex(...polarToCartesian(p.width / 2, p.height / 2, a, d, true));
      points[i].a += aSpeed;
    });

    p.endShape(p.CLOSE);

    p.push();
    p.blendMode(p.SCREEN);
    p.fill(p.map(p.sin(p.frameCount / 500), -1, 1, 0, 100), 100, 100);
    p.rect(0, 0, p.width, p.height);
    p.pop();
  };

  p.windowResized = function () {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };
};

new p5(sketch, "sketch");
