import React from "react";
import SketchLayout from "~components/sketch-layout";
import polarToCartesian from "~lib/polarToCartesian";

const sketch = function(p) {
  const MARGIN = 40;
  const SPEED = 0.05 / p.TWO_PI;
  const SCALAR = p.random(2, 20);
  const HUE = p.random(100);

  let angleA = 0;
  let angleB = 0;

  p.setup = function() {
    p.createCanvas(660, 840);
    p.background(64);
    p.noFill();
    p.strokeWeight(2);
    p.colorMode(p.HSB, 100);
    p.blendMode(p.HARD_LIGHT);
  };

  p.draw = function() {
    const point = [
      p.map(p.sin(angleA), -1, 1, MARGIN, p.width - MARGIN, true),
      p.map(p.sin(angleB), -1, 1, MARGIN, p.height - MARGIN, true),
    ];

    const bezier = polarToCartesian(
      p.width / 2,
      p.height / 2,
      angleA,
      p.height / 3 - MARGIN,
      true
    );

    p.stroke(
      HUE,
      p.map(p.sin(angleA), -1, 1, 0, 100, true),
      p.map(p.sin(angleB), -1, 1, 100, 0, true),
      10
    );

    p.bezier(
      ...point,
      ...bezier,
      p.width - bezier[0],
      p.height - bezier[1],
      p.width - point[0],
      p.height - point[1]
    );
    angleA += SPEED / SCALAR;
    angleB += SPEED;

    if (angleA > p.TWO_PI) p.noLoop();
  };
};

export default ({ location }) => (
  <SketchLayout
    sketch={sketch}
    path={location.pathname}
    description="Refresh page for a different variation"
  />
);
