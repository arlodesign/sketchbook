import p5 from "p5";
import attachCreateLoop from "p5.createloop/src/p5.createLoop";
window.p5 = p5;
attachCreateLoop();

const RENDER = process.env.DEV && false;

const sketch = function (p) {
  const GRID = 60;

  let boxes = [];

  class Box {
    constructor(x, y) {
      this.x = x + GRID / 2;
      this.y = y + GRID / 2;
      this.rotate = p.random([0, p.HALF_PI]);
    }

    draw() {
      p.push();
      p.translate(this.x, this.y);
      p.rotate(this.rotate);

      for (let i = -GRID / 2; i < GRID / 2; i += GRID / 7) {
        p.strokeWeight(
          p.map(
            i,
            -GRID / 2,
            GRID / 2,
            p.map(p.sin(p.animLoop.theta), -1, 1, 5, 1),
            p.map(p.sin(p.animLoop.theta), -1, 1, 1, 5)
          )
        );

        p.line(i, GRID / 2, GRID / 2, i);
        p.line(-i, -GRID / 2, -GRID / 2, -i);
      }

      p.pop();
    }
  }

  p.setup = function () {
    if (RENDER) {
      p.pixelDensity(1);
      p.frameRate(30);
    }

    p.createCanvas(p.windowWidth, p.windowHeight);

    p.createLoop(5, {
      gif: RENDER ? { render: false, open: true } : false,
      noiseRadius: 0.1,
    });

    for (let x = 0; x < p.width; x += GRID) {
      for (let y = 0; y < p.height; y += GRID) {
        boxes.push(new Box(x, y));
      }
    }
  };

  p.draw = function () {
    p.background(255);

    boxes.forEach((b) => b.draw());
  };

  p.windowResized = function () {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };
};

new p5(sketch, "sketch");
