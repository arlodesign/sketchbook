import React from "react";
import SketchLayout from "~components/sketch-layout";

const sketch = function(p) {
  let weight;
  let flip = false;

  p.setup = function() {
    p.createCanvas(660, 840);
    p.noFill();
    weight = p.random(2, 3);
  };

  p.draw = function() {
    p.background(0);
    for (
      let x = -p.height + 0;
      x <= p.width + 0;
      x += weight + 1 + p.noise(x)
    ) {
      const end = p.map(
        p.sin(x),
        -1,
        1,
        p.width,
        p.dist(0, 0, p.width, p.height)
      );
      p.strokeWeight(weight);
      p.stroke(255);
      p.bezier(
        p.width - x,
        p.height + x,
        p.width - x,
        p.height + x,
        p.mouseX,
        p.mouseY,
        p.width - x - end,
        p.height + x - end
      );
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
  <SketchLayout
    sketch={sketch}
    path={location.pathname}
    description="
      Move pointer or finger over sketch. Reload page for a different variation.
    "
  />
);
