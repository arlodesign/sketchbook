import React from "react";
import SketchLayout from "~components/sketch-layout";

const sketch = function(p) {
  let scalar;
  let x;
  let y;
  let x2;
  let y2;

  p.setup = function() {
    p.createCanvas(660, 840);
    p.background("white");
    p.noFill();
    p.stroke(0);
    scalar = p.random(10, 20);
    x = x2 = p.width / 2;
    y = y2 = p.height / 2;
  };

  p.draw = function() {
    const moveX = p.random([-scalar, scalar]);
    const moveY = p.random([-scalar, scalar]);
    p.strokeWeight(scalar * p.noise(x, y));
    x = x2 + moveX;
    y = y2 + moveY;
    if (x > 0 && y > 0 && x < p.width && y < p.height) {
      p.line(x2, y2, x, y);
      p.line(p.width - x2, p.height - y2, p.width - x, p.height - y);
    } else {
      p.noLoop();
    }
    x2 = x;
    y2 = y;
  };
};

export default ({ location }) => (
  <SketchLayout sketch={sketch} path={location.pathname} description="Reload page for a different variation." />
);
