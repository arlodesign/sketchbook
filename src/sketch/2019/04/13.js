import p5 from "p5";
import polarToCartesian from "util/polarToCartesian";

const sketch = function (p) {
  const GRID_SIZE = p.random([60, 30, 15]);
  const MARGIN = GRID_SIZE / 10;
  const SIZES = [1, 2, 3, 5, 8, 13];

  let grid = [];
  let w;
  let h;

  class Doodad {
    constructor(x, y, size) {
      this.x = x * GRID_SIZE;
      this.y = y * GRID_SIZE;
      this.size = size * GRID_SIZE;
      this.freq = p.TWO_PI / (p.floor(p.random(size * 4, size * 7)) * 2);
      this.drawFunc = p.random([
        this.pinwheel,
        this.horizontalLines,
        this.verticalLines,
      ]);
      this.draw();
    }
    draw() {
      p.push();
      p.stroke(64);
      p.fill(p.random(192, 250));
      p.square(this.x, this.y, this.size);
      p.pop();

      p.push();
      p.stroke(255);
      p.translate(-0.5, -0.5);
      p.line(this.x, this.y, this.x + this.size, this.y);
      p.line(this.x, this.y, this.x, this.y + this.size);
      p.line(
        this.x + this.size,
        this.y,
        this.x + this.size,
        this.y + this.size
      );
      p.line(
        this.x,
        this.y + this.size,
        this.x + this.size,
        this.y + this.size
      );
      p.pop();

      p.push();
      p.translate(this.x + this.size / 2, this.y + this.size / 2);
      this.drawFunc();
      p.pop();
    }
    pinwheel() {
      p.strokeWeight(2);
      for (let r = 0; r < p.TWO_PI; r += this.freq) {
        p.line(
          ...polarToCartesian(0, 0, r, (this.size / 2 - MARGIN) / 3, true),
          ...polarToCartesian(0, 0, r, this.size / 2 - MARGIN, true)
        );
      }
    }
    horizontalLines() {
      p.strokeWeight(2);
      for (let r = 0; r < p.TWO_PI; r += this.freq) {
        const start = polarToCartesian(
          0,
          0,
          r,
          this.size / 2 - (MARGIN + 2),
          true
        );
        const end = [-start[0], start[1]];
        p.line(...start, ...end);
      }
    }
    verticalLines() {
      p.strokeWeight(2);
      for (let r = 0; r < p.TWO_PI; r += this.freq) {
        const start = polarToCartesian(
          0,
          0,
          r,
          this.size / 2 - (MARGIN + 2),
          true
        );
        const end = [start[0], -start[1]];
        p.line(...start, ...end);
      }
    }
  }

  p.setup = function () {
    p.createCanvas(p.windowWidth, p.windowHeight);
    p.background(255);
    p.stroke(0);

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
      p.fill(p.random(0, 128));

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

    ![].concat(...grid).filter(({ visited }) => !visited).length && p.noLoop();
  };

  p.windowResized = function () {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };
};

new p5(sketch, "sketch");
