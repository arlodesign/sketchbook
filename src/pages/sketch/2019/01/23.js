import React from "react";
import SketchLayout from "~components/sketch-layout";
import { polarToCartesianX, polarToCartesianY } from "~lib/polarToCartesian";

const sketch = function(p) {
  let fibers;
  let speed1;
  let speed2;
  let speed3;
  let rCanvas;
  let r1 = 0;
  let r2 = 0;
  let r3 = 0;
  let variant;
  let prevPoints = [];

  p.setup = function() {
    p.createCanvas(660, 840);
    p.background(255);
    fibers = p.floor(p.random(2, 7));
    speed1 = p.random(0.02, 0.05) / p.TWO_PI;
    speed2 = p.random(1, 2) / p.TWO_PI;
    speed3 = p.random(0.1) / p.TWO_PI;
    rCanvas = p.random(2000, 5000) / p.TWO_PI;
    variant = p.floor(p.random(4, 7));
  };

  p.draw = function() {
    p.translate(p.width / 2, p.height / 2);
    p.rotate(r3);
    let x;
    let y;
    for (let i = 0; i < fibers; i++) {
      const AXIS_X = polarToCartesianX(0, r1, p.width / variant);
      const AXIS_Y = polarToCartesianY(0, r1 * variant, p.height / variant);
      x = polarToCartesianX(
        AXIS_X,
        r2 * variant + (p.TWO_PI / fibers) * i,
        variant
      );
      y = polarToCartesianY(AXIS_Y, r2 + (p.TWO_PI / fibers) * i, variant);
      if (prevPoints.length === fibers) {
        p.stroke(p.frameCount % fibers ? 0 : `rgba(255,255,255,0.8)`);
        p.line(x, y, prevPoints[i].x, prevPoints[i].y);
      }
      prevPoints[i] = {
        x,
        y,
      };
    }
    r1 += speed1;
    r2 += speed2;
    r3 += speed3;
  };
};

export default ({ location }) => (
  <SketchLayout sketch={sketch} path={location.pathname} description="Reload page for a different variation." />
);
