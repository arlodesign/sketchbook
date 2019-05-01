import React from "react";
import SketchLayout from "~components/sketch-layout";
import lerpLine from "~lib/lerpLine";

const sketch = function(p) {
  const MARGIN = 100;

  let y = MARGIN;

  p.setup = function() {
    p.createCanvas(660, 840);
    p.stroke(0);
    p.background(255);
  };

  p.draw = function() {
    lerpLine(
      p,
      MARGIN,
      y,
      p.width - MARGIN,
      y,
      p.noise(p.frameCount, y) / (4 * y)
    );
    y++;
    y > p.height - MARGIN && p.noLoop();
  };
};

export default ({ location }) => (
  <SketchLayout sketch={sketch} path={location.pathname} description="" />
);
