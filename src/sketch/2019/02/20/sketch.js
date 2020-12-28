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
  const Q = 3;
  let distance = 0;
  let angle = 0;
  let size = 10;
  let axis = {};
  let r;
  let g;
  let b;
  let a = 32;
  let getColor = () => {};

  p.setup = function () {
    p.pixelDensity(4);
    p.createCanvas(p.windowWidth, p.windowHeight);
    p.background(0);
    axis = {
      x: p.width / 2,
      y: p.height / 2,
    };
    while (Array.from(new Set([r, g, b])).length < 3) {
      r = p.random(CF);
      g = p.random(CF);
      b = p.random(CF);
    }
    getColor = (angle) => p.color(r(angle), g(angle), b(angle), a);
    p.blendMode(p.HARD_LIGHT);
  };

  p.draw = function () {
    p.noFill();
    p.strokeWeight(
      p.map(p.noise(angle / 5, distance / 5) * size, 0, p.width, 1, Q)
    );
    p.stroke(getColor(angle / (Q * 1.5)));
    p.beginShape();
    for (let i = 0; i < p.TWO_PI; i += p.TWO_PI / Q) {
      const thisAngle = angle + i;
      const { x, y } = polarToCartesian(
        axis.x,
        axis.y,
        thisAngle,
        p.noise(angle / 5, distance / 5) * size
      );
      p.vertex(x, y);
    }
    p.endShape(p.CLOSE);
    angle += 0.01;
    distance += 0.01;
    size += 0.05;
    a = size > p.width ? a - 0.1 : a;
    axis = polarToCartesian(
      p.width / 2,
      p.height / 2,
      angle / Q,
      distance * (Q / 2)
    );
    if (a === 0) {
      p.noLoop();
    }
  };

  p.windowResized = function () {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };
};

new p5(sketch, "sketch");
