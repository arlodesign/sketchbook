import React from "react";
import SketchLayout from "~components/sketch-layout";

const sketch = function(p) {
  const size = 20;
  let diagonal;

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
    diagonal = getHypotenuse(p.width, p.height);
    p.noStroke();
  };

  p.draw = function() {
    p.background("white");
    for (let x = 0; x < p.width; x += size) {
      for (let y = 0; y < p.height; y += size) {
        const noiseVal = p.noise(x, y);
        const scaleVal = p.map(
          getDistanceFromPointer(x, y),
          0,
          diagonal,
          0.1,
          1.1
        );
        p.push();
        p.translate(x + size / 2, y + size / 2);
        p.fill(`rgba(0, 0, 0, ${noiseVal})`);
        p.ellipse(0, 0, (size * noiseVal) / scaleVal);
        p.pop();
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
