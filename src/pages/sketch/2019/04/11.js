import React from "react";
import SketchLayout from "~components/sketch-layout";
import polarToCartesian from "~lib/polarToCartesian";

const sketch = function(p) {
  let lines;
  let radius;
  let rotations;

  p.setup = function() {
    p.createCanvas(660, 840);
    p.background(255);
    radius = p.width / 2 - p.width * 0.05;
    rotations = p.floor(p.random(3, 6));
    p.stroke(255, 128);
  };

  p.draw = function() {
    lines = p.map(p.sin(p.frameCount / 1000), -1, 1, 3, 50);
    p.background(0);

    p.push();
    p.translate(p.width / 2, p.height / 2);

    for (let r = 0; r < p.PI; r += p.PI / lines) {
      const start = polarToCartesian(0, 0, r, radius, true);
      const end = [-start[0], start[1]];

      p.strokeWeight(p.map(start[1], 0, radius, 0, 5, true));
      p.rotate(p.HALF_PI / lines);

      for (let i = 0; i < rotations; i++) {
        p.line(...start, ...end);
        p.rotate(p.TWO_PI / rotations);
      }
    }

    p.pop();
  };
};

export default ({ location }) => (
  <SketchLayout sketch={sketch} path={location.pathname} description="" />
);
