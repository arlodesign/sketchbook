import p5 from "p5";
import { polarToCartesianX, polarToCartesianY } from "util/polarToCartesian";

const sketch = function (p) {
  let speed1;
  let speed2;
  let r1 = 0;
  let r2 = 0;
  let variant;
  let prevPoint;

  p.setup = function () {
    p.createCanvas(p.windowWidth, p.windowHeight);
    p.background(255);
    p.stroke(0, 0, 0, 64);
    speed1 = p.random(0.02, 0.05) / p.TWO_PI;
    speed2 = p.random(0.2, 0.3) / p.TWO_PI;
    variant = p.floor(p.random(2, 6));
  };

  p.draw = function () {
    const AXIS_X = polarToCartesianX(p.width / 2, r1 * variant, 100);
    const AXIS_Y = polarToCartesianY(p.height / 2, p.sin(r1), 200);
    const X = polarToCartesianX(AXIS_X, r2, 100);
    const Y = polarToCartesianY(AXIS_Y, r2 * variant, 100);
    if (prevPoint) {
      p.line(X, Y, prevPoint.X, prevPoint.Y);
      p.line(
        p.width - X,
        p.height - Y,
        p.width - prevPoint.X,
        p.height - prevPoint.Y
      );
      p.line(X, p.height - Y, prevPoint.X, p.height - prevPoint.Y);
      p.line(p.width - X, Y, p.width - prevPoint.X, prevPoint.Y);
    }
    r1 += speed1;
    r2 += speed2;
    prevPoint = {
      X,
      Y,
    };
  };

  p.windowResized = function () {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };
};

new p5(sketch, "sketch");
document.getElementById("description").innerHTML =
  "Reload page for a different variation.";
