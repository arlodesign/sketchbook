import React from "react";
import SketchLayout from "~components/sketch-layout";

const sketch = function(p) {
  const { GRID, LINES } = p.random([
    {
      GRID: 15,
      LINES: 3,
    },
    {
      GRID: 30,
      LINES: 4,
    },
    {
      GRID: 60,
      LINES: 5,
    },
  ]);
  const STROKE_WEIGHT = 0.5;

  class Doodad {
    constructor(x, y) {
      this.x = x;
      this.y = y;
      this.drawFunc = p.random([
        this.squareH,
        this.squareV,
        this.arc,
        this.triangle,
      ]);
      this.drawFunc();
    }
    squareH() {
      p.push();
      p.strokeCap(p.SQUARE);
      p.translate(this.x, this.y);
      for (let i = 0; i <= GRID; i += GRID / LINES) {
        p.line(0, i - STROKE_WEIGHT, GRID, i - STROKE_WEIGHT);
      }
      p.pop();
    }
    squareV() {
      p.push();
      p.strokeCap(p.SQUARE);
      p.translate(this.x, this.y);
      for (let i = 0; i <= GRID; i += GRID / LINES) {
        p.line(i - STROKE_WEIGHT, 0, i - STROKE_WEIGHT, GRID);
      }
      p.pop();
    }
    arc() {
      p.push();
      p.strokeCap(p.PROJECT);
      p.translate(this.x + GRID / 2, this.y + GRID / 2);
      p.rotate(p.random([0, p.HALF_PI, p.PI, p.HALF_PI + p.PI]));
      for (let i = 0; i <= GRID * 2; i += (GRID * 2) / LINES) {
        p.arc(-GRID / 2, -GRID / 2, i, i, 0, p.HALF_PI);
      }
      p.pop();
    }
    triangle() {
      p.push();
      p.translate(this.x + GRID / 2, this.y + GRID / 2);
      p.rotate(p.random([0, p.HALF_PI, p.PI, p.HALF_PI + p.PI]));
      for (let i = -GRID / 2 + GRID / LINES; i <= GRID / 2; i += GRID / LINES) {
        p.line(
          -i - STROKE_WEIGHT,
          -GRID / 2 - STROKE_WEIGHT,
          GRID / 2 - STROKE_WEIGHT,
          i - STROKE_WEIGHT
        );
      }
      p.pop();
    }
  }

  p.setup = function() {
    p.createCanvas(660, 840);
    p.background(255);
    p.noLoop();
    p.noFill();
    p.stroke(STROKE_WEIGHT);
  };

  p.draw = function() {
    for (let x = 0; x < p.width; x += GRID) {
      for (let y = 0; y < p.height; y += GRID) {
        new Doodad(x, y);
      }
    }
    p.rect(0, 0, p.width, p.height);
  };
};

export default ({ location }) => (
  <SketchLayout sketch={sketch} path={location.pathname} description="" />
);
