import React from "react";
import SketchLayout from "~components/sketch-layout";

const sketch = function(p) {
  const GRID = 30;
  let points = [];

  function drawPixel(x, y) {
    const C = getNearestPoint(x, y) * 4;
    p.fill(C, C, C, 255 / 2);
    p.rect(x, y, 2, 2);
    p.fill(C);
    p.rect(x, y, 1, 1);
  }

  function getNearestPoint(x, y) {
    points.sort(
      (a, b) =>
        p.dist(x, y, a.vector.x, a.vector.y) -
        p.dist(x, y, b.vector.x, b.vector.y)
    );
    return points[0].color;
  }

  p.setup = function() {
    p.createCanvas(660, 840);
    p.background(255);
    points = new Array(64)
      .fill()
      .map(() => ({
        vector: p.createVector(
          p.randomGaussian(p.width / 2, (p.width / GRID) * 3),
          p.randomGaussian(p.height / 2, (p.height / GRID) * 3)
        ),
      }))
      .sort(
        (a, b) =>
          p.dist(p.width / 2, p.height / 2, a.vector.x, a.vector.y) -
          p.dist(p.width / 2, p.height / 2, b.vector.x, b.vector.y)
      )
      .map((p, i) => Object.assign(p, { color: i }));
    p.noStroke();
    p.rectMode(p.CENTER);
  };

  p.draw = function() {
    const Y = p.floor(p.frameCount / (p.width / GRID));
    const X = p.floor(p.frameCount - (p.width / GRID) * Y);
    if (Y < p.height / GRID) {
      for (let xi = 0; xi < GRID; xi++) {
        for (let yi = 0; yi < GRID; yi++) {
          drawPixel(X + (p.width / GRID) * xi, Y + (p.height / GRID) * yi);
        }
      }
    } else {
      addNoise(0.2);
      p.noLoop();
    }
  };
};

export default ({ location }) => (
  <SketchLayout sketch={sketch} path={location.pathname} />
);
