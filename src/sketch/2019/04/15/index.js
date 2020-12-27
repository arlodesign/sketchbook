import p5 from "p5";
import polarToCartesian from "util/polarToCartesian";
import addNoise from "util/addNoise";

const sketch = function (p) {
  const SIZES = [1, 2, 3, 5, 8];

  let gridSize = 60;
  let iterations = 3;
  let grid = [];
  let w;
  let h;

  class Doodad {
    constructor(x, y, size) {
      this.x = x * gridSize;
      this.y = y * gridSize;
      this.size = size * gridSize;
      // this.drawFunc = p.random([
      //   this.drawSlash,
      //   this.drawSlash,
      //   this.drawBackslash,
      // ]);
      this.drawFunc = p.random() < 0.1 ? this.drawBackslash : this.drawSlash;
      this.drawFunc();
    }
    drawSlash() {
      p.line(this.x, this.y + this.size, this.x + this.size, this.y);
    }
    drawBackslash() {
      p.line(this.x, this.y, this.x + this.size, this.y + this.size);
    }
  }

  p.setup = function () {
    p.createCanvas(p.windowWidth, p.windowHeight);
    p.colorMode(p.HSB, 100);

    const hue = p.random(100);
    p.background(100 - hue, 50, 75);
    p.stroke(hue, 25, 25);
    p.noFill();
  };

  p.draw = function () {
    if (grid.length == 0) {
      p.strokeWeight(gridSize / 3);

      w = p.floor(p.width / gridSize);
      h = p.floor(p.height / gridSize);

      for (let xx = 0; xx < w; xx++) {
        grid.push([]);
        for (let yy = 0; yy < h; yy++) {
          grid[xx].push({
            x: xx,
            y: yy,
            visited: false,
          });
        }
      }
    }

    const { x, y } = p.random(
      [].concat(...grid).filter(({ visited }) => !visited)
    );

    if (!grid[x][y].visited) {
      let size = Math.max(...SIZES);
      let overlap;

      do {
        overlap = false;
        for (let xx = x; xx < size + x; xx++) {
          for (let yy = y; yy < size + y; yy++) {
            if (x + size > w || y + size > h || grid[xx][yy].visited) {
              overlap = true;
            }
          }
        }
        if (overlap) {
          size = Math.max(...SIZES.filter((s) => s < size));
        }
      } while (overlap);

      new Doodad(x, y, size);

      for (let xx = x; xx < size + x; xx++) {
        for (let yy = y; yy < size + y; yy++) {
          grid[xx][yy].visited = true;
        }
      }
    }

    if (![].concat(...grid).filter(({ visited }) => !visited).length) {
      iterations--;
      if (iterations > 0) {
        gridSize /= 2;
        grid = [];
      } else {
        p.noLoop();
      }
    }
  };

  p.windowResized = function () {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };
};

new p5(sketch, "sketch");
