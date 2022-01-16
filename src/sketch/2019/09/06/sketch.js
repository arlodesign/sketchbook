import p5 from "p5";
import attachCreateLoop from "p5.createloop/src/p5.createLoop";
window.p5 = p5;
attachCreateLoop();
import { easeInOutQuad as ease } from "util/easing";

const RENDER = process.env.DEV && false;
const GRID = 30;

const sketch = function (p) {
  let boxes = [];

  class Box {
    constructor(x, y, rnd) {
      this.x = x;
      this.y = y;
      this.rnd = rnd;
      this.canvas = p.createGraphics(GRID, GRID);
      this.canvas.noStroke();
      this.canvas.translate(GRID / 2, GRID / 2);
      this.canvas.rotate(p.QUARTER_PI);
    }
    draw() {
      const { x, y, rnd, canvas } = this;
      const { noise2D, theta } = p.animLoop;

      canvas.blendMode(p.BLEND);
      canvas.background(255);
      canvas.blendMode(p.MULTIPLY);

      ["cyan", "magenta", "yellow"].forEach((c, i) => {
        canvas.fill(c);
        canvas.rect(
          p.map(noise2D(rnd, i + 1), -1, 1, -GRID * 2, GRID * 2) *
            ease(p.abs(p.sin(theta))),
          -GRID,
          GRID * 2,
          GRID * 2
        );
      });
      p.image(canvas, x, y);
    }
  }

  p.setup = function () {
    if (RENDER) {
      p.pixelDensity(1);
      p.frameRate(30);
    }

    p.createCanvas(p.windowWidth, p.windowHeight);
    p.createLoop(45, {
      gif: RENDER ? { render: false, open: true } : false,
      noiseRadius: 5,
    });

    for (let x = 0; x < p.width; x += GRID) {
      for (let y = 0; y < p.height; y += GRID) {
        boxes.push(new Box(x, y, p.random()));
      }
    }
  };

  p.draw = function () {
    p.background(255);
    boxes.forEach((box) => box.draw());
  };

  p.windowResized = function () {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };
};

new p5(sketch, "sketch");
