import React from "react";
import SketchLayout from "~components/sketch-layout";
import lerpLine from "~lib/lerpLine";
import polarToCartesian from "~lib/polarToCartesian";

const sketch = function(p) {
  const HUE = p.random();
  const HUE_COUNT = p.floor(p.random(3, 7));
  const HUE_LINES = p.floor(p.random(HUE_COUNT));

  const GRID = 15;
  const SIZES = [1, 2, 3, 7];
  const MARGIN = GRID * 3.5;

  let grid = [];
  let w;
  let h;
  let y = MARGIN;

  class Doodad {
    constructor(x, y, size) {
      this.x = x * GRID;
      this.y = y * GRID;
      this.size = size * GRID;

      const hue = HUE * p.floor(p.random(HUE_COUNT));
      this.colors = Array(2)
        .fill()
        .map((_, i) =>
          p.color(
            p.random() < 0.3 ? HUE * p.floor(p.random(HUE_COUNT)) : hue,
            HUE_COUNT,
            (HUE_COUNT / 2) * i
          )
        );

      this.square();
    }
    square() {
      p.push();
      p.translate(this.x + this.size / 2, this.y + this.size / 2);
      p.rotate(p.random([0, p.PI]));
      p.translate(-this.size / 2, -this.size / 2);

      p.noStroke();
      p.fill(p.lerpColor(this.colors[0], this.colors[1], 0.5));
      p.square(0, 0, this.size);

      p.blendMode(p.SCREEN);
      for (let y = 0; y <= this.size; y++) {
        p.stroke(p.lerpColor(this.colors[0], this.colors[1], y / this.size));
        lerpLine(
          p,
          0,
          y,
          this.size,
          y,
          p.noise(p.frameCount / 100, y) / this.size
        );
      }

      p.pop();
    }
  }

  p.setup = function() {
    p.createCanvas(660, 840);
    p.background(0);
    p.colorMode(p.HSL, HUE_COUNT);

    w = p.floor(p.width / GRID);
    h = p.floor(p.height / GRID);

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
    if ([].concat(...grid).filter(({ visited }) => !visited).length) {
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
    } else {
      p.stroke(
        HUE_LINES,
        HUE_COUNT,
        p.noise(0.03, y / 100) * HUE_COUNT,
        HUE_COUNT / 2
      );
      p.line(MARGIN, y, p.width - MARGIN, y);
      y++;

      if (y > p.height - MARGIN) {
        p.noStroke();
        p.blendMode(p.HARD_LIGHT);

        for (let i = HUE_COUNT; i > 0; i--) {
          p.fill(i, HUE_COUNT, HUE_COUNT - 1, HUE_COUNT * 0.666);
          p.circle(
            p.random(p.width),
            p.random(p.height),
            (p.width / HUE_COUNT) * i
          );
        }
        p.noLoop();
      }
    }
  };
};

export default ({ location }) => (
  <SketchLayout sketch={sketch} path={location.pathname} description="" />
);
