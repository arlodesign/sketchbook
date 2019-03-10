import React from "react";
import SketchLayout from "~components/sketch-layout";

const sketch = function(p) {
  const GRID_SIZE = 10;

  function getColor(angle) {
    return p.color(
      p.abs(p.sin(angle)) * 100,
      p.abs(p.tan(-angle + p.PI)) * 100,
      100
    );
  }

  p.setup = function() {
    p.createCanvas(660, 840);
    p.noStroke();
    p.colorMode(p.HSB, 100);
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
        p.fill(getColor(p.TWO_PI * N));
        p.ellipse(x, y, GRID_SIZE * N * 1.5, GRID_SIZE * N * 1.5);
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
