import p5 from "p5";
import polarToCartesian from "util/polarToCartesian";

const sketch = function (p) {
  const BLUR = 50;
  const SPEED = p.random(0.05, 0.1);
  const SPEED_A = SPEED / p.TWO_PI;
  const SPEED_B = (SPEED * 0.1) / p.TWO_PI;

  let focus;
  let angleA = 0;
  let angleB = p.PI;
  let minDist;

  p.setup = function () {
    p.createCanvas(p.windowWidth, p.windowHeight);
    p.background(0);
    focus = p.createVector(
      p.randomGaussian(p.width / 2, p.width / 10),
      p.randomGaussian(p.height / 2, p.height / 10)
    );
    minDist = p.min(
      p.dist(focus.x, focus.y, p.width, p.height),
      p.dist(focus.x, focus.y, 0, 0),
      p.dist(focus.x, focus.y, 0, p.height),
      p.dist(focus.x, focus.y, p.width, 0)
    );
  };

  p.draw = function () {
    const pointA = [
      p.width / 2,
      p.map(p.sin(angleA), -1, 1, p.height * 0.25, p.height * 0.75),
    ];
    const pointB = polarToCartesian(
      ...pointA,
      angleB,
      (p.width / 2) * p.noise(0.001, 0.002, p.frameCount / 1000)
    );
    const size = p.map(
      p.dist(pointB.x, pointB.y, focus.x, focus.y),
      0,
      minDist,
      1,
      BLUR
    );

    for (let a = 0; a < p.TWO_PI; a += 0.1 / p.TWO_PI) {
      p.stroke(255, p.map(size, 1, BLUR, 10, 0.5, true));
      p.point(
        ...polarToCartesian(
          pointB.x,
          pointB.y,
          a,
          p.randomGaussian(1, size),
          true
        )
      );
    }

    angleA += SPEED_A;
    angleB += SPEED_B;

    if (angleA > p.TWO_PI) angleA = 0;

    if (angleB > p.TWO_PI * 2) p.noLoop();
  };

  p.windowResized = function () {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };
};

new p5(sketch, "sketch");
