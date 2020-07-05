import p5 from "p5";
import polarToCartesian from "util/polarToCartesian";

const sketch = function (p) {
  let hue = p.random(0, 66);
  let lightness = 60;
  let img;
  let max;
  let radius = 1;
  let iterations = 1;

  p.setup = function () {
    p.createCanvas(p.windowWidth, p.windowHeight);
    p.background(0);
    p.colorMode(p.HSL, 100);
    p.blendMode(p.HARD_LIGHT);

    max = p.dist(0, 0, p.width / 2, p.height / 2);
  };

  p.draw = function () {
    console.log(radius / (max * p.pow(iterations, 10)));
    for (let angle = 0; angle < p.TWO_PI; angle += 1 / radius) {
      p.random() < radius / (max * iterations)
        ? p.stroke(p.lerp(hue, hue + 33, p.random()), 100, lightness, 50)
        : p.stroke(0, 0);
      p.line(
        ...polarToCartesian(
          p.width / 2,
          p.height / 2,
          angle,
          radius - p.random(0, 10 / iterations),
          true
        ),
        ...polarToCartesian(
          p.width / 2,
          p.height / 2,
          angle,
          radius + p.random(0, 20 / iterations),
          true
        )
      );
    }
    radius++;
    if (radius > max) {
      radius = 1;
      iterations++;
      lightness /= 2;
      lightness < 5 && p.noLoop();
    }
  };

  p.windowResized = function () {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };
};

new p5(sketch, "sketch");
