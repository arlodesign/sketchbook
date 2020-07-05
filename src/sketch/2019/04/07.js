import p5 from "p5";

const sketch = function (p) {
  const SIZE = 30;

  class Line {
    constructor(x) {
      this.x = x;
    }
    draw() {
      p.push();
      p.blendMode(p.HARD_LIGHT);

      p.stroke(p.map(this.x, 0, p.width, 0, 100), 100, 30);
      p.line(
        this.x,
        0,
        this.x +
          p.map(p.noise(this.x, 0.04, p.frameCount / 200), 0, 1, -100, 100),
        p.height
      );
      p.pop();
    }
  }

  let lines = [];

  p.setup = function () {
    p.createCanvas(p.windowWidth, p.windowHeight);
    p.strokeWeight(30);
    p.colorMode(p.HSB, 100);
    for (let x = 0; x <= p.width; x += 30) {
      lines.push(new Line(x));
    }
  };

  p.draw = function () {
    p.background(100);
    lines.forEach((l) => l.draw());
  };

  p.windowResized = function () {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };
};

new p5(sketch, "sketch");
