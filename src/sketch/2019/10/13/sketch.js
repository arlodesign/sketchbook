import p5 from "p5";
import attachCreateLoop from "p5.createloop/src/p5.createLoop";
window.p5 = p5;
attachCreateLoop();
import { easeInOutQuint as ease } from "util/easing";

const GRID = 30;
const MARGIN = 2;
const RENDER = process.env.DEV && false;

const sketch = function (p) {
  const CHANCES = Array(3)
    .fill()
    .map(() => p.random(0.3, 0.5));

  let diagonals = [];
  let horizontals = [];

  class Diagonal {
    constructor(x, y) {
      this.x = x;
      this.y = y;
      this.rotate = p.random() < CHANCES[0] ? 0 : p.HALF_PI;
      this.direction = p.random([1, -1]);
      this.prevMod = 0;
      this.canvas = p.createGraphics(GRID, GRID);
      this.canvas.stroke(255);
    }
    draw() {
      const { theta } = p.animLoop;
      const turnVal = p.map(theta % p.HALF_PI, 0, p.HALF_PI, 0, 1);

      if (theta % p.HALF_PI <= this.prevMod) {
        this.rotate += p.HALF_PI * this.direction;
      }

      this.canvas.background(0);
      this.canvas.push();

      this.canvas.translate(this.canvas.width / 2, this.canvas.height / 2);
      this.canvas.rotate(
        p.map(
          ease(turnVal),
          0,
          1,
          this.rotate,
          this.rotate + p.HALF_PI * this.direction
        )
      );
      this.canvas.line(
        -this.canvas.width / 2,
        -this.canvas.height / 2,
        this.canvas.width / 2,
        this.canvas.height / 2
      );
      this.canvas.pop();

      p.blendMode(p.SCREEN);
      p.image(this.canvas, this.x, this.y);
      p.blendMode(p.BLEND);

      this.prevMod = theta % p.HALF_PI;
    }
  }

  class Horizontal {
    constructor(x, y) {
      this.x = x;
      this.y = y;
      this.slide = 0;
      this.direction = 0;
      this.prevMod = 0;

      if (x === GRID * MARGIN) {
        this.direction = 1;
      } else if (x === p.width - MARGIN * GRID - GRID) {
        this.direction = -1;
      } else {
        this.direction = p.random([1, -1]);
      }
    }
    draw() {
      const { theta } = p.animLoop;
      const slideVal = p.map(theta % p.HALF_PI, 0, p.HALF_PI, 0, 1);

      if (theta % p.HALF_PI <= this.prevMod) {
        this.x = this.x + GRID * this.direction;
        this.direction = -this.direction;
      }

      const x = p.map(
        ease(slideVal),
        0,
        1,
        this.x,
        this.x + GRID * this.direction
      );

      p.line(x, this.y, x + GRID, this.y);

      this.prevMod = theta % p.HALF_PI;
    }
  }

  p.setup = function () {
    p.createCanvas(p.windowWidth, p.windowHeight);
    p.noFill();
    p.stroke(255);
    p.createLoop(20, {
      gif: RENDER ? { render: false, open: true } : false,
    });

    for (let x = MARGIN * GRID; x < p.width - MARGIN * GRID; x += GRID) {
      for (let y = MARGIN * GRID; y <= p.height - MARGIN * GRID; y += GRID) {
        if (p.random() < CHANCES[1] && y < p.height - MARGIN * GRID) {
          diagonals.push(new Diagonal(x, y));
        }
        if (p.random() < CHANCES[2]) {
          horizontals.push(new Horizontal(x, y));
        }
      }
    }
  };

  p.draw = function () {
    p.background(0);
    diagonals.forEach((d) => d.draw());
    horizontals.forEach((h) => h.draw());
  };

  p.windowResized = function () {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };
};

new p5(sketch, "sketch");
document.getElementById("description").innerHTML = `
        Inspired by 
        <Link href="https://albersfoundation.org/art/anni-albers/prints/#slide12">
          Anni Albers
        </Link>
        .
      `;
