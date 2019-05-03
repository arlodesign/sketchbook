import React from "react";
import SketchLayout from "~components/sketch-layout";
import lerpLine from "~lib/lerpLine";

const sketch = function(p) {
  const GRID_SIZE = 30;
  const SIZES = [1, 3, 8, 21];

  let grid = [];
  let w;
  let h;

  class Doodad {
    constructor(x, y, size) {
      this.x = x * GRID_SIZE;
      this.y = y * GRID_SIZE;
      this.size = size * GRID_SIZE;

      this.square();
    }
    square() {
      for (let y = this.y; y <= this.y + this.size; y++) {
        lerpLine(
          p,
          this.x,
          y,
          this.x + this.size,
          y,
          p.noise(p.frameCount, y) / this.size
        );
      }
    }
  }

  p.setup = function() {
    p.createCanvas(660, 840);
    p.background(255);
    p.stroke(0);
    p.noFill();

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

  p.draw = function() {
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
          size = Math.max(...SIZES.filter(s => s < size));
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
      p.noLoop();
    }
  };
};

export default ({ location }) => (
  <SketchLayout sketch={sketch} path={location.pathname} description="" />
);
