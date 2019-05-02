import React from "react";
import SketchLayout from "~components/sketch-layout";
import polarToCartesian from "~lib/polarToCartesian";
import lerpLine from "~lib/lerpLine";

const sketch = function(p) {
  let a = p.TWO_PI;

  p.setup = function() {
    p.createCanvas(660, 840);
    p.stroke(0);
    p.strokeWeight(0.25);
    p.background(255);
  };

  p.draw = function() {
    const FY = p.map(p.cos(a), -1, 1, 0, p.height);

    const { x, y } = polarToCartesian(
      p.width / 3,
      FY,
      a,
      p.map(-p.sin(a * 13), -1, 1, 0, p.width)
    );

    lerpLine(
      p,
      p.width / 3,
      FY,
      x,
      y,
      p.noise(p.frameCount / 50, a) / 10,
      false
    );

    a -= p.TWO_PI / 10000;
    a < 0 && p.noLoop();
  };
};

export default ({ location }) => (
  <SketchLayout sketch={sketch} path={location.pathname} description="" />
);
