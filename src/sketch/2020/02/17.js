import p5 from "p5";
import "p5.createloop";
import polarToCartesian from "util/polarToCartesian";
import * as easing from "util/easing";

const sketch = function (p) {
  const RENDER = p.getURLParams().render;
  const DURATION = 30;
  const RATE = 30;
  const HEX_RADIUS = 60;
  const HEX_WIDTH = p.floor(p.sqrt(3) * HEX_RADIUS);
  const HEX_HEIGHT = HEX_RADIUS * 2;
  const ROTATION = p.TWO_PI / 3;

  const EASINGS = p.shuffle(Object.values(easing));

  let hexagons = [];
  let cols;
  let rows;
  let gridWidth;
  let gridHeight;
  let prevMod = 0;

  const MASK = p.createGraphics(HEX_WIDTH, HEX_HEIGHT);
  MASK.stroke(0);
  MASK.fill(0);
  MASK.beginShape();
  MASK.translate(MASK.width / 2, MASK.height / 2);
  for (let a = 0; a < p.TWO_PI; a += p.TWO_PI / 6) {
    MASK.vertex(...polarToCartesian(0, 0, a + p.TWO_PI / 12, HEX_RADIUS, true));
  }
  MASK.endShape();

  class Hexagon {
    constructor(x, y) {
      this.x = x;
      this.y = y;
      this.rotate = p.random(
        [0, 1, 2, 3, 4, 5].map((i) => ROTATION * i + p.TWO_PI / 12)
      );
      this.dir = p.random([1, -1]);
      this.turning = false;

      this.canvas = p.createGraphics(HEX_WIDTH, HEX_HEIGHT);
      this.canvas.noStroke();
      this.canvas.fill(0);
    }

    draw(turn) {
      const { theta } = p.animLoop;

      if (turn) {
        this.rotate += ROTATION * this.dir;
      }

      const turnVal = p.map(theta % ROTATION, 0, ROTATION, 0, 1);

      this.canvas.background(255);
      this.canvas.push();
      this.canvas.blendMode(p.MULTIPLY);
      this.canvas.translate(this.canvas.width / 2, this.canvas.height / 2);

      ["cyan", "magenta", "yellow"].forEach((clr, i) => {
        this.canvas.push();
        this.canvas.fill(clr);
        this.canvas.rotate(
          p.map(
            EASINGS[i](turnVal),
            0,
            1,
            this.rotate,
            this.rotate + ROTATION * this.dir
          )
        );
        this.canvas.arc(0, 0, HEX_HEIGHT * 2, HEX_HEIGHT * 2, 0, p.PI);
        this.canvas.pop();
      });
      this.canvas.pop();

      const img = this.canvas.get();
      img.mask(MASK);

      p.image(img, this.x - HEX_WIDTH / 2, this.y - HEX_HEIGHT / 2);
    }
  }

  p.setup = function () {
    p.pixelDensity(1);
    p.frameRate(RATE);

    p.createCanvas(p.windowWidth, p.windowHeight);
    p.createLoop(DURATION, {
      gif: RENDER ? { render: false, open: true } : false,
      noiseRadius: 0.5,
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
  };

  p.draw = function () {
    p.background(255);
    hexagons.forEach((hex) => hex.draw(p.animLoop.theta % ROTATION <= prevMod));
    prevMod = p.animLoop.theta % ROTATION;
  };

  p.windowResized = function () {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };
};

new p5(sketch, "sketch");
