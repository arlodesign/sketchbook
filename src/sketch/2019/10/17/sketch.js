import p5 from "p5";
import attachCreateLoop from "p5.createloop/src/p5.createLoop";
window.p5 = p5;
attachCreateLoop();
import { easeInOutQuint as ease } from "util/easing";

const RENDER = process.env.DEV && true;
const DURATION = 15;
const GRID = 45;

const sketch = function (p) {
  const HUE = p.random();
  const R = p.HALF_PI;

  let boxes = [];
  let prevMod = 0;
  let d = p.sqrt(GRID * GRID + GRID * GRID);
  let w = GRID / 2;

  class Box {
    constructor(x, y) {
      this.x = x;
      this.y = y;
      this.rotate = p.random([0, p.HALF_PI, p.PI, p.HALF_PI + p.PI]);
      this.scale = p.random([1, -1]);
      this.rotateDirection = p.random([-1, 1]);
      this.turning = false;
      this.offset = p.noise(x, y) * p.TWO_PI;
    }

    draw(turn) {
      const { theta } = p.animLoop;

      if (turn) {
        this.rotate += R * this.rotateDirection;
      }

      const turnVal = p.map(theta % R, 0, R, 0, 1);

      p.push();
      p.translate(this.x + GRID / 2, this.y + GRID / 2);
      p.rotate(
        p.map(
          ease(turnVal),
          0,
          1,
          this.rotate,
          this.rotate + R * this.rotateDirection
        )
      );
      p.scale(this.scale, 1);
      p.strokeWeight(w);

      p.bezier(
        -GRID / 2,
        -GRID / 2,
        GRID / 2,
        -GRID / 2,
        -GRID / 2,
        GRID / 2,
        GRID / 2,
        GRID / 2
      );
      p.pop();
    }
  }

  p.setup = function () {
    p.pixelDensity(RENDER ? 1 : 2);
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

    boxes.forEach((b) => b.draw(p.animLoop.theta % R <= prevMod));
    prevMod = p.animLoop.theta % R;
  };

  p.windowResized = function () {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };
};

new p5(sketch, "sketch");
