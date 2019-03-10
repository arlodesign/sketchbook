import React from "react";
import SketchLayout from "~components/sketch-layout";
import { polarToCartesianX, polarToCartesianY } from "~lib/polarToCartesian";

const sketch = function(p) {
  let gridSize;
  let manualControl = false;

  p.setup = function() {
    p.createCanvas(660, 840);
    gridSize = 60;
    p.noStroke();
    p.rectMode(p.CENTER);
    p.blendMode(p.SOFT_LIGHT);
  };

  function drawTheThings(clr, sizeFunction) {
    let x = gridSize + gridSize / 2;
    let y = gridSize + gridSize / 2;
    let alt = true;
    p.fill(clr);
    while (x < p.width - gridSize) {
      while (y < p.height - gridSize) {
        const size = sizeFunction(x, y);
        alt && p.rect(x, y, size, size);
        !alt && p.ellipse(x, y, size / 2);
        y += gridSize;
        alt = !alt;
      }
      x += gridSize;
      y = gridSize + gridSize / 2;
      alt = !alt;
    }
  }

  p.draw = function() {
    p.background(127);
    let distX = manualControl
      ? p.mouseX
      : polarToCartesianX(p.width / 2, p.frameCount / 10, p.width / 2);
    let distY = manualControl
      ? p.mouseY
      : polarToCartesianY(p.height / 2, p.frameCount / 10, p.width / 2);
    drawTheThings(p.color(206, 86, 50), (x, y) =>
      p.map(
        p.dist(x, y, distX, distY),
        0,
        p.dist(0, 0, p.width, p.height),
        gridSize * 1.5,
        gridSize / 2
      )
    );
    drawTheThings(p.color(36, 156, 164), (x, y) =>
      p.map(
        p.dist(x, y, distX, distY),
        0,
        p.dist(0, 0, p.width, p.height),
        gridSize / 1.5,
        gridSize * 2
      )
    );
    drawTheThings(p.color(245, 230, 187), (x, y) =>
      p.map(
        p.dist(x, y, distX, distY),
        0,
        p.dist(0, 0, p.width, p.height),
        gridSize / 3.5,
        gridSize
      )
    );
  };

  p.mouseClicked = function() {
    manualControl = !manualControl;
  };

  p.touchMoved = function() {
    if (
      p.mouseX >= 0 &&
      p.mouseY >= 0 &&
      p.mouseX <= p.width &&
      p.mouseY <= p.height
    ) {
      return false;
    }
  };
};

export default ({ location }) => (
  <SketchLayout sketch={sketch} path={location.pathname} description="Click or tap to toggle user control of the sketch." />
);
