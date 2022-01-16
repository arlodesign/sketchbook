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
  const HEX_RADIUS = 10;
  const HEX_WIDTH = p.sqrt(3) * HEX_RADIUS;
  const HEX_HEIGHT = HEX_RADIUS * 2;

  let hexagons = [];
  let cols;
  let rows;
  let gridWidth;
  let gridHeight;

  class Hexagon {
    constructor(x, y) {
      this.x = x;
      this.y = y;
    }
    get z() {
      return p.abs(p.animLoop.noise2D(this.x, this.y));
    }

    draw() {
      p.push();
      p.fill(this.z * 255);
      p.translate(this.x, this.y);
      p.scale(p.map(ease(this.z), 0, 1, 0.75, 2));
      p.beginShape();
      for (let a = 0; a < p.TWO_PI; a += p.TWO_PI / 6) {
        p.vertex(
          ...polarToCartesian(0, 0, a + p.TWO_PI / 12, HEX_RADIUS, true)
        );
      }
      p.endShape();
      p.pop();
    }
  }

  p.setup = function () {
    p.pixelDensity(1);
    p.frameRate(RATE);
    p.createCanvas(p.windowWidth, p.windowHeight);
    p.background(255);
    p.createLoop(DURATION, {
      gif: RENDER ? { render: false, open: true } : false,
      noiseRadius: 1.5,
    });
    p.noStroke();

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
    p.background(0);
    hexagons.sort((a, b) => a.z - b.z).forEach((hex) => hex.draw());
  };

  p.windowResized = function () {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };
};

new p5(sketch, "sketch");
