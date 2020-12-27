import p5 from "p5";
import { polarToCartesianX, polarToCartesianY } from "util/polarToCartesian";

const sketch = function (p) {
  let fibers;
  let speed1;
  let speed2;
  let speed3;
  let rCanvas;
  let r1 = 0;
  let r2 = 0;
  let r3 = 0;
  let variant;
  let prevPoint;

  p.setup = function () {
    p.createCanvas(p.windowWidth, p.windowHeight);
    p.background(0);
    speed1 = p.random(0.02, 0.05) / p.TWO_PI;
    speed2 = p.random(4, 6) / p.TWO_PI;
    speed3 = p.random(0.1) / p.TWO_PI;
    rCanvas = p.random(2000, 5000) / p.TWO_PI;
    variant = p.floor(p.random(10, 20));
  };

  p.draw = function () {
    p.translate(p.width / 2, p.height / 2);
    p.rotate(r3);
    const AXIS_X = polarToCartesianX(0, r1, p.width / 3);
    const AXIS_Y = polarToCartesianY(0, r1 * variant, p.height / 3);
    const x = polarToCartesianX(AXIS_X, r2 * variant, variant);
    const y = polarToCartesianY(AXIS_Y, r2, variant);
    if (prevPoint) {
      p.noStroke();
      p.fill(p.frameCount % 2 ? `rgba(0,0,0,0.5)` : `rgba(255,255,255,0.5)`);
      p.triangle(0, 0, x, y, prevPoint.x, prevPoint.y);
      p.stroke(255);
      p.line(x, y, prevPoint.x, prevPoint.y);
    }
    prevPoint = {
      x,
      y,
    };
    r1 += speed1;
    r2 += speed2;
    r3 += speed3;
  };

  p.windowResized = function () {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };
};

new p5(sketch, "sketch");
document.getElementById("description").innerHTML =
  "Reload page for a different variation.";
