import p5 from "p5";
import attachCreateLoop from "p5.createloop/src/p5.createLoop";
window.p5 = p5;
attachCreateLoop();
import { easeInOutQuint as ease } from "util/easing";

const RENDER = process.env.DEV && false;
const DURATION = 10;

const sketch = function (p) {
  const GRID = 66;

  let boxes = [];

  class Box {
    constructor(x, y) {
      this.x = x;
      this.y = y;
      this.canvas = p.createGraphics(GRID, GRID);
      this.rotate = p.random([0, p.HALF_PI, p.PI, p.HALF_PI + p.PI]);
      this.rotateDirection = p.random([-1, 1]);
      this.turning = false;
      this.offset = p.noise(x, y) * p.QUARTER_PI;
      this.prevMod = 0;
    }

    draw() {
      const { theta } = p.animLoop;

      const myTheta = theta + this.offset;

      if (myTheta % p.HALF_PI <= this.prevMod) {
        this.rotate += p.HALF_PI * this.rotateDirection;
      }

      const turnVal = p.map(myTheta % p.HALF_PI, 0, p.HALF_PI, 0, 1);

      this.canvas.background(255);
      this.canvas.push();
      this.canvas.translate(GRID / 2, GRID / 2);
      this.canvas.rotate(
        p.map(
          ease(turnVal),
          0,
          1,
          this.rotate,
          this.rotate + p.HALF_PI * this.rotateDirection
        )
      );

      this.canvas.fill(192);
      this.canvas.noStroke();
      this.canvas.circle(-GRID / 2, -GRID / 2, GRID / 2);
      this.canvas.circle(GRID / 2, GRID / 2, GRID / 2);
      this.canvas.circle(GRID / 2, -GRID / 2, GRID / 2);
      this.canvas.circle(-GRID / 2, GRID / 2, GRID / 2);

      this.canvas.stroke(192);
      this.canvas.strokeWeight(GRID / 12);
      this.canvas.line(-GRID / 2, GRID / 2, GRID / 2, -GRID / 2);

      this.canvas.noFill();
      this.canvas.stroke(0);
      this.canvas.strokeWeight(GRID / 6);
      this.canvas.circle(-GRID / 2, -GRID / 2, GRID);
      this.canvas.circle(GRID / 2, GRID / 2, GRID);

      this.canvas.pop();

      p.image(this.canvas, this.x, this.y);

      this.prevMod = myTheta % p.HALF_PI;
    }
  }

  p.setup = function () {
    if (RENDER) {
      p.frameRate(30);
    }

    p.createCanvas(p.windowWidth, p.windowHeight);

    p.createLoop(DURATION, {
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
const description =
  "Same as yesterday, but now rotating at slightly different intervals.";
