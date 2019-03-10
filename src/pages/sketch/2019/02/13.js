import React from "react";
import SketchLayout from "~components/sketch-layout";

const sketch = function(p) {
  const GRID_SIZE = 10;

  p.setup = function() {
    p.createCanvas(660, 840);
    p.fill(0);
    p.noStroke();
    p.rectMode(p.CENTER);
    p.noiseDetail(2, 0.5);
  };

  p.draw = function() {
    p.background(255);
    let x = GRID_SIZE / 2;
    let y = GRID_SIZE / 2;
    while (x < p.width) {
      while (y < p.height) {
        const N = p.noise(
          x * (GRID_SIZE / 1000),
          y * (GRID_SIZE / 1000),
          p.frameCount / 100
        );
        p.push();
        p.translate(x, y);
        p.rect(0, 0, GRID_SIZE * 2 * N, GRID_SIZE * 2 * N);
        p.pop();
        y += GRID_SIZE;
      }
      x += GRID_SIZE;
      y = GRID_SIZE / 2;
    }
  };
};

export default ({ location }) => (
  <SketchLayout sketch={sketch} path={location.pathname} />
);
