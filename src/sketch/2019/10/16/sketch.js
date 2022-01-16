import p5 from "p5";
import attachCreateLoop from "p5.createloop/src/p5.createLoop";
window.p5 = p5;
attachCreateLoop();
import { easeInOutQuint as ease } from "util/easing";

const RENDER = process.env.DEV && false;
const DURATION = 15;

const sketch = function (p) {
  const GRID = 60;
  const HUE = p.random();

  let boxes = [];
  let prevMod = 0;
  let d = p.sqrt(GRID * GRID + GRID * GRID);
  let wGrid = GRID / 2;

  class Box {
    constructor(x, y) {
      this.x = x;
      this.y = y;
      this.rotate = p.random([0, p.HALF_PI, p.PI, p.HALF_PI + p.PI]);
      this.rotateDirection = p.random([-1, 1]);
      this.turning = false;
      this.offset = p.noise(x, y) * p.TWO_PI;
      this.thirdLine = p.random() < 0.5;
    }

    draw(turn) {
      const { theta } = p.animLoop;

      if (turn) {
        this.rotate += p.QUARTER_PI * this.rotateDirection;
      }

      const turnVal = p.map(theta % p.QUARTER_PI, 0, p.QUARTER_PI, 0, 1);

      p.push();
      p.translate(this.x + GRID / 2, this.y + GRID / 2);
      p.rotate(
        p.map(
          ease(turnVal),
          0,
          1,
          this.rotate,
          this.rotate + p.QUARTER_PI * this.rotateDirection
        )
      );
      p.strokeWeight(wGrid);

      p.line(0, 0, -GRID / 2, -GRID / 2);
      p.line(0, 0, GRID / 2, GRID / 2);
      this.thirdLine && p.line(0, 0, -GRID / 2, GRID / 2);
      p.pop();
    }
  }

  p.setup = function () {
    p.pixelDensity(1);
    p.frameRate(30);

    p.createCanvas(p.windowWidth, p.windowHeight);
    p.colorMode(p.HSB, 1);
    p.stroke(HUE, 0.8, 0.7);

    p.createLoop(DURATION, {
      gif: RENDER ? { render: false, open: true } : false,
    });

    for (let x = 0; x < p.width; x += GRID) {
      for (let y = 0; y < p.height; y += GRID) {
        boxes.push(new Box(x, y));
      }
    }
  };

  p.draw = function () {
    p.blendMode(p.BLEND);
    p.background(1 - HUE, 1, 1);
    p.blendMode(p.DARKEST);

    boxes.forEach((b) => b.draw(p.animLoop.theta % p.QUARTER_PI <= prevMod));
    prevMod = p.animLoop.theta % p.QUARTER_PI;
  };

  p.windowResized = function () {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };
};

new p5(sketch, "sketch");
