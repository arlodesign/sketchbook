import p5 from "p5";
import polarToCartesian from "util/polarToCartesian";
import lerpLine from "util/lerpLine";

const sketch = function (p) {
  let a = p.TWO_PI;

  p.setup = function () {
    p.createCanvas(p.windowWidth, p.windowHeight);
    p.stroke(0);
    p.strokeWeight(0.25);
    p.background(255);
  };

  p.draw = function () {
    const FY = p.map(p.cos(a), -1, 1, 0, p.height);

    const { x, y } = polarToCartesian(
      p.width / 3,
      FY,
      a,
      p.map(-p.sin(a * 13), -1, 1, 0, p.width)
    );

    lerpLine(
      p,
      p.width / 3,
      FY,
      x,
      y,
      p.noise(p.frameCount / 50, a) / 10,
      false
    );

    a -= p.TWO_PI / 10000;
    a < 0 && p.noLoop();
  };

  p.windowResized = function () {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };
};

new p5(sketch, "sketch");
