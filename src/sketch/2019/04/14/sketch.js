import p5 from "p5";
import addNoise from "util/addNoise";

const sketch = function (p) {
  const GRID_SIZE = 60;
  const SIZES = [1, 2, 3, 5, 8, 13, 21];

  let grid = [];
  let w;
  let h;

  class Doodad {
    constructor(x, y, size) {
      this.x = x * GRID_SIZE;
      this.y = y * GRID_SIZE;
      this.size = size * GRID_SIZE;

      p.random() < 0.3 ? this.arc() : this.triangle();
    }
    arc() {
      p.push();
      p.translate(this.x + this.size / 2, this.y + this.size / 2);
      p.rotate(p.random([0, p.HALF_PI, p.PI, p.HALF_PI + p.PI]));
      p.arc(
        -this.size / 2,
        -this.size / 2,
        this.size * 2,
        this.size * 2,
        0,
        p.HALF_PI
      );
      p.pop();
    }
    triangle() {
      p.push();
      p.translate(this.x + this.size / 2, this.y + this.size / 2);
      p.rotate(p.random([0, p.HALF_PI, p.PI, p.HALF_PI + p.PI]));
      p.beginShape();
      p.vertex(-this.size / 2, -this.size / 2);
      p.vertex(this.size / 2, this.size / 2);
      p.vertex(-this.size / 2, this.size / 2);
      p.endShape(p.CLOSE);
      p.pop();
    }
  }

  p.setup = function () {
    p.createCanvas(p.windowWidth, p.windowHeight);
    p.colorMode(p.HSB, 100);

    const hue = p.random(100);
    p.background(hue, 25, 25);
    p.fill(100 - hue, 50, 75);

    p.noStroke();

    w = p.floor(p.width / GRID_SIZE);
    h = p.floor(p.height / GRID_SIZE);

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
  };

  p.draw = function () {
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
      addNoise(p, 0.1);
      p.noLoop();
    }
  };

  p.windowResized = function () {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };
};

new p5(sketch, "sketch");
