import p5 from "p5";
import polarToCartesian from "util/polarToCartesian";

const sketch = function (p) {
  const DEPTH = 5;
  const HUE = p.random(0, 33);
  const HUES = [HUE, HUE + 33, HUE + 66];

  let angle = 0;
  let ad = p.random(DEPTH);

  class Circle {
    constructor(x, y, z, size) {
      this.x = x;
      this.y = y;
      this.z = z;
      this.size = size;
      this.hue = p.random(HUES);
    }

    draw() {
      p.stroke(this.hue, 50, 100, 5);

      for (let a = 0; a < p.TWO_PI; a += 0.001 / p.TWO_PI) {
        p.point(
          ...polarToCartesian(
            p.randomGaussian(this.x, this.z),
            p.randomGaussian(this.y, this.z),
            a,
            p.randomGaussian(this.size, this.size / 2),
            true
          )
        );
      }
    }
  }

  p.setup = function () {
    p.createCanvas(p.windowWidth, p.windowHeight);
    p.colorMode(p.HSB, 100);
    p.background(p.random(HUES), 100, 25);
    p.blendMode(p.HARD_LIGHT);
    p.noFill();
  };

  p.draw = function () {
    const c = new Circle(
      ...polarToCartesian(
        p.width / 2,
        p.height / 2,
        angle,
        p.map(p.tan(angle / ad), -1, 1, p.width / 5, 0),
        true
      ),
      p.floor(p.random([1, DEPTH, p.random(DEPTH)])),
      p.randomGaussian(DEPTH, p.width / (DEPTH * 10))
    );
    c.draw();
    angle += 1 / p.TWO_PI;
    angle > p.TWO_PI * 2 && p.noLoop();
  };

  p.windowResized = function () {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };
};

new p5(sketch, "sketch");
document.getElementById("description").innerHTML =
  "Refresh page for a different color variation.";
