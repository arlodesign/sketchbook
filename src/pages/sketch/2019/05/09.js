import React from "react";
import SketchLayout from "~components/sketch-layout";
import lerpLine from "~lib/lerpLine";
import alternate from "~lib/alternate";

const sketch = function(p) {
  const ITERATIONS = 4;
  const HUE = p.random(100 / ITERATIONS);
  const RAND = p.random(30, 50);

  let i = 1;
  let y = 0;

  p.setup = function() {
    p.createCanvas(660, 840);
    p.blendMode(p.HARD_LIGHT);
    p.colorMode(p.HSB, 100);
    p.background(HUE * ITERATIONS, 10, 100 / ITERATIONS);
  };

  p.draw = function() {
    const MIDPOINT = p.map(
      p.sin(p.frameCount / 100),
      -1,
      1,
      p.width * 0.333,
      p.width * 0.666
    );
    const NOISE =
      p.noise(p.frameCount * (i / 10000), y * (i / 10000)) * (i / 250);
    const DIST = p.map(
      p.noise(p.frameCount / (RAND * i), y / 500),
      0,
      1,
      0,
      p.width / (i / 2 + 0.5),
      true
    );

    p.strokeWeight(i + 1);
    p.stroke(HUE * i, (100 / ITERATIONS) * i, 75, 10);

    alternate(
      p.frameCount,
      () => lerpLine(p, MIDPOINT, y, DIST, y, NOISE),
      () => lerpLine(p, MIDPOINT, y, p.width - DIST, y, NOISE)
    );

    y += i;
    if (y > p.height) {
      i++;
      y = 0;
      i > ITERATIONS && p.noLoop();
    }
  };
};

export default ({ location }) => (
  <SketchLayout sketch={sketch} path={location.pathname} description="" />
);
