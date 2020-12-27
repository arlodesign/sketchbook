import p5 from "p5";
import lerpLine from "util/lerpLine";

const sketch = function (p) {
  const DIR = p.random([true, false]);
  const GRID_SIZE = 15;
  const SIZES = [1, 8, 13];

  let grid = [];
  let w;
  let h;

  function drawLines(xStart, yStart, xEnd, yEnd, dir = DIR) {
    for (let y = yStart; y <= yEnd; y += GRID_SIZE) {
      const A = p.map(y, yStart, yEnd, 0, p.TWO_PI);
      const COS = p.cos(A);

      p.stroke(255);
      p.strokeWeight(GRID_SIZE);
      p.line(xStart, y, xEnd, y);

      p.stroke(0);
      p.strokeWeight(
        p.map(COS, -1, 1, dir ? 1 : GRID_SIZE * 0.8, dir ? GRID_SIZE * 0.8 : 1)
      );
      p.line(xStart, y, xEnd, y);
    }
  }

  p.setup = function () {
    p.createCanvas(p.windowWidth, p.windowHeight);
    p.background(255);
    p.fill(255);
    p.strokeCap(p.SQUARE);
    p.rectMode(p.CORNERS);

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

    drawLines(0, 0, p.width, p.height, !DIR);
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

      size > 1 &&
        drawLines(
          x * GRID_SIZE,
          y * GRID_SIZE,
          x * GRID_SIZE + size * GRID_SIZE,
          y * GRID_SIZE + size * GRID_SIZE
        );

      for (let xx = x; xx < size + x; xx++) {
        for (let yy = y; yy < size + y; yy++) {
          grid[xx][yy].visited = true;
        }
      }
    }

    if (![].concat(...grid).filter(({ visited }) => !visited).length) {
      p.noLoop();
    }
  };

  p.windowResized = function () {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };
};

new p5(sketch, "sketch");
