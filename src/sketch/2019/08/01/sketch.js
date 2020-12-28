import p5 from "p5";
import "p5.createloop";

const RENDER = process.env.DEV && false;

const sketch = function (p) {
  const SIZES = [1, 2, 3, 5, 8];
  const GRID_SIZE = 60;

  let grid = [];
  let boxes = [];

  class Box {
    constructor(x, y, size) {
      this.x = x * GRID_SIZE;
      this.y = y * GRID_SIZE;
      this.size = size;
      this.rotate = p.random([p.TWO_PI, p.HALF_PI]);
      this.direction = p.random([-1, 1]);
      this.canvasSize = GRID_SIZE * size;
      this.canvas = p.createGraphics(this.canvasSize, this.canvasSize);
      this.canvas.strokeCap(p.PROJECT);
      this.canvas.strokeWeight(2);
    }

    draw() {
      const { x, y, size, rotate, direction, canvas, canvasSize } = this;
      const noise = p.map(p.animLoop.noise2D(x, y), -1, 1, 0, 1);
      const offset = p.map(p.cos(p.animLoop.theta), -1, 1, 0, p.TWO_PI * noise);

      canvas.blendMode(p.BLEND);
      canvas.background(255);
      canvas.blendMode(p.MULTIPLY);
      canvas.push();
      canvas.translate(canvasSize / 2, canvasSize / 2);

      ["cyan", "magenta", "yellow"].forEach((c, i) => {
        canvas.push();
        canvas.rotate(rotate * direction + offset * ((p.TWO_PI / 3) * (i + 1)));
        canvas.stroke(c);
        for (let i = 0; i <= canvasSize; i += canvasSize / size) {
          canvas.line(0, 0, i, -canvasSize);
          canvas.line(0, 0, i, canvasSize);
          canvas.line(0, 0, -i, -canvasSize);
          canvas.line(0, 0, -i, canvasSize);
        }
        canvas.pop();
      });
      canvas.pop();

      p.image(canvas, x, y);
    }
  }

  p.setup = function () {
    if (RENDER) {
      p.pixelDensity(1);
      p.frameRate(30);
    }

    p.createCanvas(p.windowWidth, p.windowHeight);
    const w = p.floor(p.width / GRID_SIZE);
    const h = p.floor(p.height / GRID_SIZE);

    p.createLoop(10, {
      gif: RENDER ? { render: false, open: true } : false,
      noiseRadius: 0.1,
    });

    for (let x = 0; x < p.width / GRID_SIZE; x++) {
      grid.push([]);
      for (let y = 0; y < p.height / GRID_SIZE; y++) {
        grid[x].push({
          x,
          y,
          visited: false,
        });
      }
    }

    while ([].concat(...grid).filter(({ visited }) => !visited).length) {
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

        boxes.push(new Box(x, y, size));

        for (let xx = x; xx < size + x; xx++) {
          for (let yy = y; yy < size + y; yy++) {
            grid[xx][yy].visited = true;
          }
        }
      }
    }
  };

  p.draw = function () {
    p.background(255);

    boxes.forEach((b) => b.draw());
  };

  p.windowResized = function () {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };
};

new p5(sketch, "sketch");
