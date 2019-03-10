import React from "react";
import SketchLayout from "~components/sketch-layout";

const sketch = function(p) {
  const GRID = 30;
  const POINT_COUNT = 10;
  let points = [];

  function drawAThing(x, y) {
    const { vector, color } = getFarthestPoint(x, y);
    p.stroke(color, color, color, 32);
    p.line(x, y, vector.x, vector.y);
  }

  function getFarthestPoint(x, y) {
    points.sort(
      (a, b) =>
        p.dist(x, y, a.vector.x, a.vector.y) -
        p.dist(x, y, b.vector.x, b.vector.y)
    );
    return points[POINT_COUNT - 1];
  }

  p.setup = function() {
    p.createCanvas(660, 840);
    p.background(255);
    points = new Array(POINT_COUNT).fill().map((_, i) => ({
      vector: p.createVector(
        p.randomGaussian(p.width / 2, (p.width / GRID) * 3),
        p.randomGaussian(p.height / 2, (p.height / GRID) * 3)
      ),
      color: [255, 255 * 0.666, 0][i % 3],
    }));
  };

  p.draw = function() {
    const Y = p.floor(p.frameCount / (p.width / GRID));
    const X = p.floor(p.frameCount - (p.width / GRID) * Y);
    if (Y < p.height / GRID) {
      for (let xi = 0; xi < GRID; xi++) {
        for (let yi = 0; yi < GRID; yi++) {
          !(p.frameCount % p.floor(GRID / 13)) &&
            drawAThing(X + (p.width / GRID) * xi, Y + (p.height / GRID) * yi);
        }
      }
    } else {
      p.noLoop();
    }
  };
};

export default ({ location }) => (
  <SketchLayout sketch={sketch} path={location.pathname} description="Reload page for a different variation." />
);
