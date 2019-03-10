import React from "react";
import SketchLayout from "~components/sketch-layout";

const sketch = function(p) {
  let scalar;
  let multiplier;
  let multiplier2;
  let x;
  let y = 0;
  let rectHeight;
  let pass = 0;

  p.setup = function() {
    p.createCanvas(660, 840);
    p.fill("rgba(0, 0, 0, 0.4)");
    p.noStroke();
    p.background(255);
    scalar = p.floor(p.random(3, 7));
    multiplier = p.random();
    multiplier2 = p.random(1, 2);
    rectHeight = (p.height - scalar + 1) / scalar;
    x = -rectHeight;
  };

  p.draw = function() {
    const RECT_WIDTH = scalar * p.map(p.noise(x, y), 0, 1, scalar, 1);
    const LEAN =
      scalar *
      p.map(p.noise(x, y), 0, 1, -scalar * multiplier, scalar * multiplier);
    p.quad(
      x + LEAN,
      y,
      x + RECT_WIDTH + LEAN,
      y,
      x + RECT_WIDTH - LEAN,
      y + rectHeight,
      x - LEAN,
      y + rectHeight
    );
    x += RECT_WIDTH + p.random(scalar * multiplier, scalar);
    if (x > p.width + rectHeight) {
      x = -rectHeight;
      y += rectHeight + 1;
    }
    if (y > p.height) {
      y = 0;
      multiplier *= multiplier2;
      pass++;
      if (pass === 4) {
        p.noLoop();
      }
    }
  };
};

export default ({ location }) => (
  <SketchLayout sketch={sketch} path={location.pathname} description="Reload page for a different variation." />
);
