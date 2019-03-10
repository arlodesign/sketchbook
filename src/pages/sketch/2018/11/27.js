import React from "react";
import SketchLayout from "~components/sketch-layout";

const sketch = function(p) {
  let count = 0;
  const total = 500;

  p.setup = function() {
    p.createCanvas(660, 840);
    p.background("white");
    p.strokeWeight(4);
    p.noLoop();
  };

  p.draw = function() {
    while (count < total) {
      p.triangle(
        0,
        0,
        p.width,
        p.random(0, p.height),
        p.random(0, p.width),
        p.height
      );
      count++;
    }
  };
};

export default ({ location }) => (
  <SketchLayout sketch={sketch} path={location.pathname} description="Reload page for a different variation." />
);
