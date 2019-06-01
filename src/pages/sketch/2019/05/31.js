import React from "react";
import SketchLayout from "~components/sketch-layout";

const sketch = function(p) {
  const WIDTH = 660;
  const HEIGHT = 840;
  const GRID_SIZE = 10;
  const RULES = {
    "111": p.random([0, 1]),
    "110": p.random([0, 1]),
    "101": p.random([0, 1]),
    "100": p.random([0, 1]),
    "011": p.random([0, 1]),
    "010": p.random([0, 1]),
    "001": p.random([0, 1]),
    "000": p.random([0, 1]),
  };

  class Row {
    constructor() {
      this.cells = Array.from({ length: WIDTH / GRID_SIZE }, () =>
        p.random([0, 1])
      );
      this.cells[this.cells.length - 1] = 1;
    }
    draw(y) {
      this.cells.forEach((c, i) => {
        console.log(c, i * GRID_SIZE, this.y);
        p.fill(c ? 0 : 255);
        p.square(i * GRID_SIZE, y * GRID_SIZE, GRID_SIZE);
      });
    }
    update() {
      let newState = [];
      this.cells.forEach((c, i) => {
        let str = i === 0 ? "1" : String(this.cells[i - 1]);
        str += String(this.cells[i]);
        str += i === this.cells.length - 1 ? "1" : String(this.cells[i + 1]);
        newState.push(RULES[str]);
      });
      this.cells = newState;
    }
  }

  const row = new Row();

  p.setup = function() {
    p.createCanvas(WIDTH, HEIGHT);
    p.background(255);
    p.noStroke();
  };

  p.draw = function() {
    row.draw(p.frameCount - 1);
    row.update();
    p.frameCount * GRID_SIZE > HEIGHT && p.noLoop();
  };
};

export default ({ location }) => (
  <SketchLayout
    sketch={sketch}
    path={location.pathname}
    description="Randomly generated cellular automata. Some of these will look, well, bad. Just keep refreshing the page until you see something you like."
  />
);
