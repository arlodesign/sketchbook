import React from "react";
import SketchLayout from "~components/sketch-layout";
import { polarToCartesianX, polarToCartesianY } from "~lib/polarToCartesian";

const sketch = function(p) {
  const GRID = 10;
  const POINT_COUNT = 10;
  let points = [];
  let drawMod = GRID;
  const colorFunctions = [
    angle => p.abs(p.sin(angle)) * 240,
    angle => p.abs(p.cos(angle)) * 240,
    angle => p.abs(p.tan(angle)) * 240,
    angle => p.abs(p.sin(angle + p.PI)) * 240,
    angle => p.abs(p.cos(angle + p.PI)) * 240,
    angle => p.abs(p.tan(angle + p.PI)) * 240,
    angle => p.abs(p.sin(-angle)) * 240,
    angle => p.abs(p.cos(-angle)) * 240,
    angle => p.abs(p.tan(-angle)) * 240,
    angle => p.abs(p.sin(-angle + p.PI)) * 240,
    angle => p.abs(p.cos(-angle + p.PI)) * 240,
    angle => p.abs(p.tan(-angle + p.PI)) * 240,
  ];

  function drawAThing(x, y) {
    const { vector, color } = getFarthestPoint(x, y);
    p.fill(color);
    p.noStroke();
    for (let i = 0; i < p.PI; i += 0.05) {
      p.ellipse(
        p.lerp(x, vector.x, p.sin(i)),
        p.lerp(y, vector.y, p.sin(i)),
        3
      );
    }
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
    p.background(128);
    points = Array(POINT_COUNT)
      .fill()
      .map((_, i) => ({
        vector: p.createVector(
          polarToCartesianX(p.width / 2, p.noise(i) * p.TWO_PI, p.height),
          polarToCartesianY(p.height / 2, p.noise(i) * p.TWO_PI, p.height)
        ),
        color: p.color(
          p.random(colorFunctions)(i),
          p.random(colorFunctions)(i),
          p.random(colorFunctions)(i),
          32
        ),
      }));
    p.blendMode(p.OVERLAY);
  };

  p.draw = function() {
    const Y = p.floor(p.frameCount / (p.width / GRID));
    const X = p.floor(p.frameCount - (p.width / GRID) * Y);
    if (Y < p.height / GRID) {
      for (let xi = 0; xi < GRID; xi++) {
        for (let yi = 0; yi < GRID; yi++) {
          !(p.frameCount % drawMod) &&
            drawAThing(X + (p.width / GRID) * xi, Y + (p.height / GRID) * yi);
        }
      }
    } else {
      p.noLoop();
    }
  };
};

export default ({ location }) => (
  <SketchLayout sketch={sketch} path={location.pathname} description="Be patient. Reload page for a different variation." />
);
