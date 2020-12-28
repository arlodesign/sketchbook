import p5 from "p5";
import "p5.createloop";

const RENDER = process.env.DEV && false;

const sketch = function (p) {
  const GRID = 60;

  let boxes = [];

  class Box {
    constructor(x, y) {
      this.x = x;
      this.y = y;
      this.rotate = p.random([p.TWO_PI, p.HALF_PI]);
      this.canvas = p.createGraphics(GRID, GRID);
      this.canvas.strokeCap(p.PROJECT);
    }

    draw() {
      this.canvas.background(255);
      this.canvas.push();
      this.canvas.translate(GRID / 2, GRID / 2);
      this.canvas.rotate(this.rotate * p.animLoop.noise2D(this.x, this.y));

      for (let i = -GRID; i <= GRID; i += GRID / 5) {
        this.canvas.strokeWeight(
          p.map(
            i,
            -GRID,
            GRID,
            p.map(p.cos(p.animLoop.theta), -1, 1, GRID / 3, 0),
            p.map(p.cos(p.animLoop.theta), -1, 1, 0, GRID / 3)
          )
        );

        this.canvas.line(-GRID, i, GRID, i);
      }

      this.canvas.pop();

      p.image(this.canvas, this.x, this.y);
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
      noiseRadius: 0.3,
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
