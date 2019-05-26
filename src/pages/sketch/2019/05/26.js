import React from "react";
import SketchLayout from "~components/sketch-layout";
import polarToCartesian from "~lib/polarToCartesian";

const sketch = function(p) {
  const RINGS = 75;
  const SPEED = 5;

  p.setup = function() {
    p.createCanvas(660, 840);
    p.noStroke();
    p.fill(0);
  };

  p.draw = function() {
    p.background(255);
    for (let r = 1; r <= RINGS; r++) {
      const START = p.map(
        r,
        1,
        RINGS,
        p.frameCount / (SPEED * 10),
        p.frameCount / (SPEED * 100)
      );
      const SIZE = p.map(r, 1, RINGS, 10, 0);
      const DIST = p.map(p.sin(p.frameCount / (SPEED * 25)), -1, 1, 3, 2);

      for (let a = 0 + START; a < p.TWO_PI + START; a += p.TWO_PI / r) {
        const { x, y } = polarToCartesian(
          p.width / DIST,
          p.height / DIST,
          a,
          p.map(r, 1, RINGS, 0, p.height * 0.666)
        );
        p.circle(x, y, SIZE);
        p.circle(p.width - x, p.height - y, SIZE);
      }
    }
  };
};

export default ({ location }) => (
  <SketchLayout sketch={sketch} path={location.pathname} description="" />
);
