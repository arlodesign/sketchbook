import p5 from "p5";
import { easeInOutQuint as ease } from "util/easing";
import "p5.createloop";

const sketch = function (p) {
  const RENDER = p.getURLParams().render;
  const GRID = 60;

  let tiles = [];

  class Tile {
    constructor(x, y) {
      this.x = x;
      this.y = y;
      this.hue = p.random();
    }
    noise(x, y) {
      return [
        x + p.animLoop.noise2D(x, y) * (GRID / 2),
        y + p.animLoop.noise2D(y, x) * (GRID / 2),
      ];
    }
    setCoordinates() {
      this.tl = this.noise(this.x, this.y);
      this.tr = this.noise(this.x + GRID, this.y);
      this.br = this.noise(this.x + GRID, this.y + GRID);
      this.bl = this.noise(this.x, this.y + GRID);
    }
    draw() {
      this.setCoordinates();

      const lightness = p.map(
        ease((p.animLoop.noise2D(this.x / 100, this.y / 100) + 1) / 2),
        0,
        1,
        0.1,
        0.8
      );

      p.fill(this.hue, 0.6, lightness);
      p.stroke(this.hue, 0.3, lightness / 3);

      return p.quad(...this.tl, ...this.tr, ...this.br, ...this.bl);
    }
  }

  p.setup = function () {
    RENDER && p.pixelDensity(1);
    p.createCanvas(p.windowWidth, p.windowHeight);
    p.background(255);
    p.colorMode(p.HSL, 1);
    p.strokeWeight(2);
    p.strokeJoin(p.ROUND);
    p.createLoop(20, {
      gif: RENDER ? { render: false, open: true } : false,
      noiseRadius: 0.4,
    });

    for (let x = -GRID / 2; x < p.width + GRID; x += GRID) {
      for (let y = -GRID / 2; y < p.height + GRID; y += GRID) {
        tiles.push(new Tile(x, y));
      }
    }
  };

  p.draw = function () {
    tiles.forEach((tile) => tile.draw());
  };

  p.windowResized = function () {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };
};

new p5(sketch, "sketch");
document.getElementById("description").innerHTML =
  "Not quite Sol LeWitt, but an attempt.";
