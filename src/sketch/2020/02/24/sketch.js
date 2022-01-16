import p5 from "p5";
import attachCreateLoop from "p5.createloop/src/p5.createLoop";
window.p5 = p5;
attachCreateLoop();
import polarToCartesian from "util/polarToCartesian";
import { easeInOutQuint as ease } from "util/easing";

const sketch = function (p) {
  const RENDER = p.getURLParams().render;
  const DURATION = 30;
  const RATE = 30;
  const HEX_RADIUS = 45;
  const HEX_WIDTH = p.floor(p.sqrt(3) * HEX_RADIUS);
  const HEX_HEIGHT = HEX_RADIUS * 2;
  const HEX_LINE_GAP = HEX_WIDTH / 15;

  const HEX_MASK = p.createGraphics(HEX_WIDTH, HEX_HEIGHT);
  HEX_MASK.stroke(0);
  HEX_MASK.fill(0);
  HEX_MASK.beginShape();
  HEX_MASK.translate(HEX_MASK.width / 2, HEX_MASK.height / 2);
  for (let a = 0; a < p.TWO_PI; a += p.TWO_PI / 6) {
    HEX_MASK.vertex(
      ...polarToCartesian(0, 0, a + p.TWO_PI / 12, HEX_RADIUS, true)
    );
  }
  HEX_MASK.endShape();

  let hexagons = [];
  let circle = [];
  let cols;
  let rows;
  let gridWidth;
  let gridHeight;
  let prevMod = 0;

  class Hexagon {
    constructor(x, y) {
      this.x = x;
      this.y = y;
      this.rotate = p.random([0, 1, 2, 3, 4, 5].map((i) => (p.TWO_PI / 6) * i));
      this.dir = p.random([1, -1]);
      this.turning = false;

      this.canvas = p.createGraphics(p.floor(HEX_WIDTH), p.floor(HEX_HEIGHT));
      this.canvas.stroke(0);
      this.canvas.fill(0);
      this.canvas.noSmooth();
    }

    draw(turn) {
      const { theta } = p.animLoop;

      if (turn) {
        this.rotate += (p.TWO_PI / 6) * this.dir;
      }

      const turnVal = p.map(theta % (p.TWO_PI / 6), 0, p.TWO_PI / 6, 0, 1);

      this.canvas.background(255);
      this.canvas.push();
      this.canvas.translate(this.canvas.width / 2, this.canvas.height / 2);

      this.canvas.rotate(
        p.map(
          ease(turnVal),
          0,
          1,
          this.rotate,
          this.rotate + (p.TWO_PI / 6) * this.dir
        )
      );

      for (let x = 0; x < HEX_HEIGHT / 2; x += HEX_LINE_GAP) {
        this.canvas.line(x, -HEX_HEIGHT / 2, x, HEX_HEIGHT / 2);
        x > 0 && this.canvas.line(-x, -HEX_HEIGHT / 2, -x, HEX_HEIGHT / 2);
      }
      this.canvas.pop();

      const img = this.canvas.get();
      img.mask(HEX_MASK);

      p.image(img, this.x - HEX_WIDTH / 2, this.y - HEX_HEIGHT / 2);
    }
  }

  class Circle {
    constructor() {
      this.canvas = p.createGraphics(
        p.floor(gridWidth - HEX_WIDTH),
        p.floor(gridWidth - HEX_WIDTH)
      );
      this.canvas.noSmooth();
      this.canvas.stroke(0);
      this.canvas.noFill();

      this.mask = p.createGraphics(
        p.floor(gridWidth - HEX_WIDTH),
        p.floor(gridWidth - HEX_WIDTH)
      );
      this.mask.fill(0);
      this.mask.circle(
        this.mask.width / 2,
        this.mask.height / 2,
        this.mask.width
      );
    }
    draw() {
      const { noise2D, theta } = p.animLoop;
      this.canvas.background(255);

      for (let y = 0; y < this.canvas.height; y += HEX_LINE_GAP) {
        this.canvas.line(0, y, this.canvas.width, y);
      }

      const img = this.canvas.get();
      img.mask(this.mask);

      p.push();
      p.blendMode(p.MULTIPLY);
      p.translate(p.width / 2, p.height / 2);
      p.rotate(-theta);
      p.image(img, -this.canvas.width / 2, -this.canvas.height / 2);
      p.pop();
    }
  }

  p.setup = function () {
    p.pixelDensity(1);
    p.frameRate(RATE);
    p.createCanvas(p.windowWidth, p.windowHeight);
    p.createLoop(DURATION, {
      gif: RENDER ? { render: false, open: true } : false,
      noiseRadius: 0.1,
    });

    cols = p.floor((p.width - HEX_WIDTH / 2) / HEX_WIDTH);
    rows = p.floor((p.width - HEX_HEIGHT / 4) / (HEX_HEIGHT * 0.75));
    gridWidth = cols * HEX_WIDTH + HEX_WIDTH / 2;
    gridHeight = rows * (HEX_HEIGHT * 0.75) + HEX_HEIGHT / 4;

    for (let x = 0; x < cols; x++) {
      for (let y = 0; y < rows; y++) {
        const hexX =
          x * HEX_WIDTH +
          (y % 2 ? HEX_WIDTH : HEX_WIDTH / 2) +
          (p.width - gridWidth) / 2;
        const hexY =
          y * HEX_HEIGHT * 0.75 + HEX_HEIGHT / 2 + (p.height - gridHeight) / 2;
        hexagons.push(new Hexagon(hexX, hexY));
      }
    }

    circle = new Circle();
  };

  p.draw = function () {
    p.background(255);
    hexagons.forEach((hex) =>
      hex.draw(p.animLoop.theta % (p.TWO_PI / 6) <= prevMod)
    );
    prevMod = p.animLoop.theta % (p.TWO_PI / 6);
    circle.draw();
  };

  p.windowResized = function () {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };
};

new p5(sketch, "sketch");
