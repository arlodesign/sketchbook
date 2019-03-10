import React from "react";
import SketchLayout from "~components/sketch-layout";

const sketch = function(p) {
  let angle = 0;
  let angleIncrement;
  let distance;
  let variantA;
  let variantB;
  let size;

  p.setup = function() {
    p.createCanvas(660, 840);
    angleIncrement = p.random(0.01, 0.03);
    distance = p.width / 3;
    variantA = p.random(2, 2.3);
    variantB = p.random(2.7, 3);
    size = p.random(p.width * 0.25, p.width * 0.333);
    p.background(255);
    p.noFill();
    p.strokeWeight(p.map(angleIncrement, 0.01, 0.03, 0.25, 0.4));
  };

  p.draw = function() {
    angle += angleIncrement;
    const x = p.width / 2 + p.cos(angle * variantA) * distance;
    const y = p.height / 2 + p.sin(angle * variantB) * distance;
    const ellipseX = size * p.abs(p.cos(angle * variantB));
    const ellipseY = size * p.abs(p.sin(angle * variantA));
    p.ellipse(x, y, ellipseX, ellipseY);
    p.ellipse(p.width - x, p.height - y, ellipseX, ellipseY);
    if (angle > p.TWO_PI) {
      p.noLoop();
    }
  };
};

export default ({ location }) => (
  <SketchLayout sketch={sketch} path={location.pathname} description="Reload page for a different variation." />
);
