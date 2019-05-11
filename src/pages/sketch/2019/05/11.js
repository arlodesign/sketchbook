import React from "react";
import SketchLayout from "~components/sketch-layout";
import addNoise from "~lib/addNoise";

const sketch = function(p) {
  const GRID_SIZE = 30;
  const SIZES = [1, 4, 4, 4, 4, 5, 5, 5, 6, 6];
  const HUE = p.random(100);
  const BG = p.color(HUE, 75, 100);

  let grid = [];
  let w;
  let h;

  class Doodad {
    constructor(x, y, size) {
      this.x = x * GRID_SIZE;
      this.y = y * GRID_SIZE;
      this.tileSize = size * GRID_SIZE;

      this.tile = p.createGraphics(this.tileSize, this.tileSize);
      this.tile.colorMode(p.HSB, 100);
      this.tile.background(BG);
      this.tile.stroke(100 - HUE, 25, 50);
      this.tile.strokeCap(p.PROJECT);
      this.tile.strokeWeight(GRID_SIZE / 5);
      this.tile.noFill();

      switch (size) {
        case 1:
          this.drawSmallTile();
          break;

        case 4:
          this.drawTile();
          break;

        case 5:
          this.drawTile();
          this.drawBigTile();
          break;

        case 6:
          this.drawTile();
          this.drawReallyBigTile();
          break;
      }

      p.push();
      p.translate(this.x + this.tileSize / 2, this.y + this.tileSize / 2);
      p.rotate(p.random([0, p.HALF_PI]));
      p.image(this.tile, -this.tileSize / 2, -this.tileSize / 2);
      p.pop();
    }

    drawSmallTile() {
      this.tile.arc(0, 0, this.tileSize, this.tileSize, 0, p.HALF_PI);
      this.tile.arc(
        this.tileSize,
        this.tileSize,
        this.tileSize,
        this.tileSize,
        p.PI,
        p.HALF_PI + p.PI
      );
    }

    drawTile() {
      this.tile.circle(0, 0, GRID_SIZE / 2);
      this.tile.circle(0, this.tileSize, GRID_SIZE / 2);
      this.tile.circle(this.tileSize, 0, GRID_SIZE / 2);
      this.tile.circle(this.tileSize, this.tileSize, GRID_SIZE / 2);
      this.tile.circle(0, 0, GRID_SIZE * 1.5);
      this.tile.circle(0, this.tileSize, GRID_SIZE * 1.5);
      this.tile.circle(this.tileSize, 0, GRID_SIZE * 1.5);
      this.tile.circle(this.tileSize, this.tileSize, GRID_SIZE * 1.5);
      this.tile.circle(this.tileSize / 2, this.tileSize / 2, GRID_SIZE / 2);
    }

    drawBigTile() {
      this.tile.circle(0, 0, this.tileSize / 2);
      this.tile.circle(this.tileSize, this.tileSize, this.tileSize / 2);
    }

    drawReallyBigTile() {
      this.tile.circle(0, 0, GRID_SIZE * 2.5);
      this.tile.circle(this.tileSize, this.tileSize, GRID_SIZE * 2.5);
      this.tile.circle(0, this.tileSize, GRID_SIZE * 2.5);
      this.tile.circle(this.tileSize, 0, GRID_SIZE * 2.5);
    }
  }

  p.setup = function() {
    p.createCanvas(660, 840);
    p.background(BG);

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
