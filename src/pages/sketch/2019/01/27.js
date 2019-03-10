import React from "react";
import SketchLayout from "~components/sketch-layout";
import polarToCartesian from "~lib/polarToCartesian";

const sketch = function(p) {
  const GRID = 30;
  let points = [];

  function drawAThing(x, y) {
    const C = getNearestPointColor(x, y);
    p.fill(C);
    p.ellipse(
      x + 2 * p.map(p.noise(x, y), 0, 1, -1, 1),
      y + 2 * p.map(p.noise(y, x), 0, 1, -1, 1),
      2,
      2
    );
  }

  function getNearestPointColor(x, y) {
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
    points = new Array(256).fill().map((_, i) => ({
      vector: polarToCartesian(
        p.width / 2,
        p.height / 2,
        i,
        p.width * (i / 256)
      ),
      color: i,
    }));
    p.noStroke();
  };

  p.draw = function() {
    const Y = p.floor(p.frameCount / (p.width / GRID));
    const X = p.floor(p.frameCount - (p.width / GRID) * Y);
    if (Y < p.height / GRID) {
      for (let xi = 0; xi < GRID; xi++) {
        for (let yi = 0; yi < GRID; yi++) {
          drawAThing(X + (p.width / GRID) * xi, Y + (p.height / GRID) * yi);
        }
      }
    } else {
      p.noLoop();
    }
  };
};

export default ({ location }) => (
  <SketchLayout sketch={sketch} path={location.pathname} />
);
