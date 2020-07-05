import p5 from "p5";
import polarToCartesian from "util/polarToCartesian";

const sketch = function (p) {
  const CF = [
    (angle) => p.abs(p.sin(angle)) * 240,
    (angle) => p.abs(p.cos(angle)) * 240,
    (angle) => p.abs(p.tan(angle)) * 240,
    (angle) => p.abs(p.sin(angle + p.PI)) * 240,
    (angle) => p.abs(p.cos(angle + p.PI)) * 240,
    (angle) => p.abs(p.tan(angle + p.PI)) * 240,
    (angle) => p.abs(p.sin(-angle)) * 240,
    (angle) => p.abs(p.cos(-angle)) * 240,
    (angle) => p.abs(p.tan(-angle)) * 240,
    (angle) => p.abs(p.sin(-angle + p.PI)) * 240,
    (angle) => p.abs(p.cos(-angle + p.PI)) * 240,
    (angle) => p.abs(p.tan(-angle + p.PI)) * 240,
  ];
  let r1 = 0;
  let r2 = 0;
  let r3 = 0;
  let r1Speed;
  let r2Speed;
  let r3Speed;
  let r;
  let g;
  let b;
  let getColor = () => {};

  p.setup = function () {
    p.pixelDensity(4);
    p.createCanvas(p.windowWidth, p.windowHeight);
    p.background(0);
    r1Speed = (p.random(0.05, 0.1) / p.TWO_PI) * p.random([-1, 1]);
    r2Speed = (p.random(0.15, 0.25) / p.TWO_PI) * p.random([-1, 1]);
    r3Speed = p.random(0.01, 0.015) / p.TWO_PI;
    while (Array.from(new Set([r, g, b])).length < 3) {
      r = p.random(CF);
      g = p.random(CF);
      b = p.random(CF);
    }
    getColor = (angle) => p.color(r(angle), g(angle), b(angle), 8);
    p.noStroke();
    p.blendMode(p.HARD_LIGHT);
  };

  p.draw = function () {
    p.translate(p.width / 2, p.height * p.sin(r3));
    const { x, y } = polarToCartesian(0, 0, r1, 200);
    const HANDLE = polarToCartesian(x, y, r2, p.sin(r3) * 500);
    if (p.height * p.sin(r3) < 0 && y < 0 && HANDLE.y < 0) {
      p.noLoop();
      return;
    }
    p.fill(getColor(r3 * 2));
    p.beginShape();
    p.vertex(0, 0);
    p.quadraticVertex(HANDLE.x, HANDLE.y, x, y);
    p.endShape(p.CLOSE);
    r1 += r1Speed;
    r2 += r2Speed;
    r3 += r3Speed;
  };

  p.windowResized = function () {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };
};

new p5(sketch, "sketch");
document.getElementById("description").innerHTML =
  "Reload page for a different variation.";
