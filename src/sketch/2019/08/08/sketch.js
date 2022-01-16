import p5 from "p5";
import attachCreateLoop from "p5.createloop/src/p5.createLoop";
window.p5 = p5;
attachCreateLoop();

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
      this.direction = p.random([-1, 1]);
      this.canvasSize = GRID_SIZE * size;
      this.canvas = p.createGraphics(this.canvasSize, this.canvasSize);
    }

    draw() {
      const { x, y, size, direction, canvas, canvasSize } = this;
      const noise = p.map(p.animLoop.noise2D(x, y), -1, 1, 0, 1);
      const offset = p.map(p.cos(p.animLoop.theta), -1, 1, 0, p.TWO_PI * noise);

      canvas.blendMode(p.BLEND);
      canvas.background(0);
      canvas.blendMode(p.SCREEN);
      canvas.push();
      canvas.noStroke();

      ["red", "green", "blue"].forEach((c, i) => {
        canvas.push();
        canvas.translate(canvasSize / 2, canvasSize / 2);
        const noiseX = p.animLoop.noise2D(p.cos(p.animLoop.theta * (i + 1)), x);
        const noiseY = p.animLoop.noise2D(p.sin(p.animLoop.theta * (i + 1)), y);
        canvas.translate(
          canvasSize * p.map(p.cos(p.animLoop.theta), -1, 1, 0, noiseX),
          canvasSize * p.map(p.cos(p.animLoop.theta), -1, 1, 0, noiseY)
        );
        canvas.fill(c);
        for (let i = 0; i <= canvasSize; i += canvasSize / size) {
          canvas.circle(0, 0, canvasSize / 2);
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
      noiseRadius: 1,
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
    p.background(0);

    boxes.forEach((b) => b.draw());
  };

  p.windowResized = function () {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };
};

new p5(sketch, "sketch");
