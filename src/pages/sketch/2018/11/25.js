import React from "react";
import SketchLayout from "~components/sketch-layout";

const sketch = function(p) {
  const speed = 0.3;
  let angle = 2;
  let scalar = 3;

  p.setup = function() {
    p.createCanvas(660, 840);
    p.background("white");
    p.noStroke();
    p.fill(0);
  };

  p.draw = function() {
    const x = p.width / 2 + p.cos(angle) * scalar;
    const y = p.height / 2 + p.sin(angle) * scalar;
    const rectWidth = scalar / speed;
    p.rotate(p.PI / angle);
    p.rect(x, y, rectWidth, 1);
    if (rectWidth > p.width) {
      p.noLoop();
    }
    angle += speed;
    scalar += speed;
  };
};

export default ({ location }) => (
  <SketchLayout sketch={sketch} path={location.pathname} />
);
