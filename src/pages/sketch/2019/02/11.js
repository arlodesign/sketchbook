import React from "react";
import SketchLayout from "~components/sketch-layout";

const sketch = function(p) {
  const colorFunctions = [
    angle => p.abs(p.sin(angle)) * 240,
    angle => p.abs(p.cos(angle)) * 240,
    angle => p.abs(p.tan(angle)) * 240,
    angle => p.abs(p.sin(angle + p.HALF_PI)) * 240,
    angle => p.abs(p.cos(angle + p.HALF_PI)) * 240,
    angle => p.abs(p.tan(angle + p.HALF_PI)) * 240,
    angle => p.abs(p.sin(-angle)) * 240,
    angle => p.abs(p.cos(-angle)) * 240,
    angle => p.abs(p.tan(-angle)) * 240,
    angle => p.abs(p.sin(-angle + p.HALF_PI)) * 240,
    angle => p.abs(p.cos(-angle + p.HALF_PI)) * 240,
    angle => p.abs(p.tan(-angle + p.HALF_PI)) * 240,
  ];
  let grid1;
  let grid2;
  let grid3;

  class Hexagon {
    constructor(centx, centy, radius) {
      this.centx = centx;
      this.centy = centy;
      this.radius = radius;
      this.cf = [
        p.random(colorFunctions),
        p.random(colorFunctions),
        p.random(colorFunctions),
      ];
    }

    getColor() {
      return p.color(
        this.cf[0](p.random(p.TAU)),
        this.cf[1](p.random(p.TAU)),
        this.cf[2](p.random(p.TAU))
      );
    }

    draw() {
      p.fill(this.getColor());
      p.noStroke();
      let angle = p.TWO_PI / 6;
      p.beginShape();
      for (let a = p.PI / 6; a < p.TWO_PI; a += angle) {
        let vx = this.centx + p.cos(a) * this.radius;
        let vy = this.centy + p.sin(a) * this.radius;
        p.vertex(vx, vy);
      }
      p.endShape(p.CLOSE);
    }
  }

  class Grid {
    constructor(rad) {
      this.cols = p.ceil(p.width / (p.sqrt(3) * rad));
      this.rows = p.ceil(p.height / ((rad * 3) / 2)) + 1;
      this.radius = rad;
      this.grid = [];
      this._makeGrid();
      console.log(this.cols, this.rows);
    }
    _makeGrid() {
      let x = p.sqrt(3) * this.radius;
      let y = this.radius;
      for (let i = 0; i < this.rows; i++) {
        this.grid.push([]);
        for (let j = 0; j < this.cols; j++) {
          this.grid[i].push(new Hexagon(x, y, this.radius));
          x += this.radius * p.sqrt(3);
        }
        y += (this.radius * 3) / 2;
        if ((i + 1) % 2 == 0) {
          x = p.floor(p.sqrt(3) * this.radius);
        } else {
          x = p.floor((this.radius * p.sqrt(3)) / 2);
        }
      }
    }
    draw() {
      for (let i = 0; i < this.rows; i++) {
        for (let j = 0; j < this.cols; j++) {
          this.grid[i][j].draw();
        }
      }
    }
  }

  p.setup = function() {
    // ;
    p.createCanvas(660, 840);
    p.background(127);
    p.blendMode(p.DIFFERENCE);
    p.translate(-20, -20);
    grid1 = new Grid(10);
    grid2 = new Grid(15);
    grid3 = new Grid(20);
    grid1.draw();
    grid2.draw();
    grid3.draw();
  };
};

export default ({ location }) => (
  <SketchLayout sketch={sketch} path={location.pathname} />
);
