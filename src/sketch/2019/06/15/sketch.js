import p5 from "p5";
import polarToCartesian from "util/polarToCartesian";

const sketch = function (p) {
  const STEPS = 50;
  const GRID_SIZE = 60;
  const HUE = p.random(70);

  let points = [];

  p.setup = function () {
    p.createCanvas(p.windowWidth, p.windowHeight);
    p.noFill();
    p.stroke(255);
    p.colorMode(p.HSB, 100);

    const initPoints = Array.from(Array(3), () => ({
      a: p.random(p.TWO_PI),
      d: p.random(p.height),
      aSpeed: p.random(0.005, 0.01) * p.random([-1, 1]),
    }));

    for (let angle = 0; angle < p.TWO_PI; angle += p.TWO_PI / STEPS) {
      points = points.concat(
        initPoints.map((pt) => Object.assign({}, pt, { a: pt.a + angle }))
      );
    }
  };

  p.draw = function () {
    p.background(0);

    p.beginShape();
    p.curveVertex(
      ...polarToCartesian(
        p.width / 2,
        p.height / 2,
        points[points.length - 3].a,
        points[points.length - 3].d *
          p.noise(
            points[points.length - 3].d,
            points[points.length - 3].a,
            p.frameCount / 400
          ),
        true
      )
    );
    p.curveVertex(
      ...polarToCartesian(
        p.width / 2,
        p.height / 2,
        points[points.length - 2].a,
        points[points.length - 2].d *
          p.noise(
            points[points.length - 2].d,
            points[points.length - 2].a,
            p.frameCount / 400
          ),
        true
      )
    );
    p.curveVertex(
      ...polarToCartesian(
        p.width / 2,
        p.height / 2,
        points[points.length - 1].a,
        points[points.length - 1].d *
          p.noise(
            points[points.length - 1].d,
            points[points.length - 1].a,
            p.frameCount / 400
          ),
        true
      )
    );
    points.forEach(({ a, d, aSpeed }, i) => {
      p.curveVertex(
        ...polarToCartesian(
          p.width / 2,
          p.height / 2,
          a,
          d * p.noise(d, a, p.frameCount / 400),
          true
        )
      );
      points[i].a += aSpeed;
    });

    p.endShape();

    p.push();
    p.blendMode(p.MULTIPLY);
    for (let x = 0; x < p.width; x += GRID_SIZE) {
      for (let y = 0; y < p.height; y += GRID_SIZE) {
        p.fill(
          p.map(p.noise(x + 1, y + 1, p.frameCount / 10), 0, 1, HUE, HUE + 30),
          100,
          100,
          50
        );
        p.rect(
          x - GRID_SIZE / 3,
          y - GRID_SIZE / 3,
          GRID_SIZE + GRID_SIZE / 3,
          GRID_SIZE + GRID_SIZE / 3
        );
      }
    }
    p.pop();
  };

  p.windowResized = function () {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };
};

new p5(sketch, "sketch");
