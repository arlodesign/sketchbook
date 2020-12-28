import p5 from "p5";
import polarToCartesian from "util/polarToCartesian";

const sketch = function (p) {
  const Q = 4;

  let distance = 0;
  let angle = 0;
  let size = 100;
  let axis = {};
  let strokeColor = 255;

  p.setup = function () {
    p.createCanvas(p.windowWidth, p.windowHeight);
    p.background(0);
    axis = {
      x: p.width / 2,
      y: p.height / 2,
    };
    setTimeout(() => {
      p.noLoop();
    }, 60000);
  };

  p.draw = function () {
    p.noFill();
    p.strokeWeight(
      p.map(p.noise(angle / 5, distance / 5) * size, 0, p.width, Q, Q * 2)
    );
    p.stroke(strokeColor);
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
    distance += 0.1;
    size += 0.5;
    axis = polarToCartesian(
      p.width / 2,
      p.height / 2,
      angle / Q,
      distance * (Q / 2)
    );
    if (p.frameCount % 100 === 0) {
      strokeColor = strokeColor === 255 ? 0 : 255;
    }
  };

  p.windowResized = function () {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };
};

new p5(sketch, "sketch");
