import React from "react";
import SketchLayout from "~components/sketch-layout";

const sketch = function(p) {
  const scalar = 9;
  let diagonal;
  let gridWidth;
  let gridHeight;

  function getHypotenuse(a, b) {
    return Math.sqrt(a * a + b * b);
  }

  function getDistanceFromPointer(x, y) {
    const a = Math.abs(p.mouseX - x);
    const b = Math.abs(p.mouseY - y);
    return getHypotenuse(a, b);
  }

  p.setup = function() {
    p.createCanvas(660, 840);
    p.rectMode(p.CENTER);
    p.noFill();
    diagonal = getHypotenuse(p.width, p.height);
    gridWidth = p.width / scalar;
    gridHeight = p.height / scalar;
  };

  p.draw = function() {
    p.background("white");
    for (
      let h = -Math.floor(gridHeight / 2);
      h < Math.ceil(gridHeight / 2);
      h++
    ) {
      for (
        let w = -Math.floor(gridWidth / 2);
        w < Math.ceil(gridWidth / 2);
        w++
      ) {
        const x = p.width / 2 + scalar * 3 * w;
        const y = p.height / 2 + scalar * 3 * h;
        const distanceFromPointer = getDistanceFromPointer(x, y);
        const rectSize = p.map(
          distanceFromPointer,
          0,
          diagonal,
          scalar * 10,
          scalar * 3
        );
        p.strokeWeight(p.map(distanceFromPointer, 0, diagonal, 2, 0));
        p.rect(x, y, rectSize, rectSize);
      }
    }
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
  <SketchLayout sketch={sketch} path={location.pathname} description="Move pointer or finger over sketch." />
);
