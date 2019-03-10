import React from "react";
import SketchLayout from "~components/sketch-layout";

const sketch = function(p) {
  const size = 20;
  let scalar = 0;
  let angle = 0;
  let speed;
  let startX;
  let startY;

  p.setup = function() {
    p.createCanvas(660, 840);
    p.background("white");
    p.noStroke();
    p.fill(0);
    speed = p.random(5, 20);
    startX = p.width / 2;
    startY = p.height / 2;
  };

  p.draw = function() {
    const x = p.width / 2 + p.cos(angle) * scalar;
    const y = p.height / 2 + p.sin(angle) * scalar;
    p.ellipse(x, y, p.random(size / 3, size));
    angle += speed;
    if (
      startX > x - speed &&
      startX < x + speed &&
      startY > y - speed &&
      startY < y + speed
    ) {
      startX = x;
      startY = y;
      scalar += speed;
      speed += speed / 4;
    }
  };
};

export default ({ location }) => (
  <SketchLayout sketch={sketch} path={location.pathname} description="Reload page for a different variation" />
);
