import React from "react";
import SketchLayout from "~components/sketch-layout";
import { polarToCartesianX, polarToCartesianY } from "~lib/polarToCartesian";

const sketch = function(p) {
  const GRID_SIZE = 20;
  const MAX_Z = 400;

  function getColor(angle) {
    return p.color(
      p.abs(p.cos(angle)) * 100,
      p.abs(p.sin(-angle + p.PI)) * 100,
      100
    );
  }

  p.setup = function() {
    p.createCanvas(660, 840, p.WEBGL);
    p.stroke(255);
    p.noFill();
    p.noiseDetail(4, 0.5);
    p.rectMode(p.CENTER);
    p.camera(
      -p.width / 4,
      -p.height / 4,
      MAX_Z,
      -p.width / 4,
      -p.height / 4,
      0,
      0,
      1,
      0
    );
  };

  p.draw = function() {
    p.background(0);
    let x = GRID_SIZE - p.width / 2;
    let y = GRID_SIZE - p.height / 2;
    let points = [];
    while (x < 0) {
      let col = [];
      while (y < 0) {
        const N = p.noise(
          x * (GRID_SIZE / 1000),
          y * (GRID_SIZE / 1000),
          p.frameCount / 100
        );
        col.push([x, y, p.map(N, 0, 1, -MAX_Z, MAX_Z)]);
        y += GRID_SIZE;
      }
      points.push(col);
      x += GRID_SIZE;
      y = GRID_SIZE - p.height / 2;
    }
    points.forEach(col => {
      col.forEach(point => {
        p.stroke(getColor(point[2] / 100));
        p.line(
          ...point,
          polarToCartesianX(-p.width / 4, p.frameCount / 100, GRID_SIZE * 10),
          polarToCartesianY(-p.height / 4, p.frameCount / 100, GRID_SIZE * 10),
          -MAX_Z
        );
        p.push();
        p.translate(...point);
        p.noStroke();
        p.fill(getColor(point[2] / 100));
        p.sphere(GRID_SIZE / 10);
        p.pop();
      });
    });
  };
};

export default ({ location }) => (
  <SketchLayout sketch={sketch} path={location.pathname} />
);
