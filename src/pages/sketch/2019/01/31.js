import React from "react";
import SketchLayout from "~components/sketch-layout";
import polarToCartesian from "~lib/polarToCartesian";

const sketch = function(p) {
  let r1 = 0;
  let r2 = 0;
  let r3 = 0;
  let r1Speed;
  let r2Speed;
  let r3Speed;

  p.setup = function() {
    p.createCanvas(660, 840);
    p.background(255);
    r1Speed = (p.random(0.1, 0.2) / p.TWO_PI) * p.random([-1, 1]);
    r2Speed = (p.random(0.3, 0.5) / p.TWO_PI) * p.random([-1, 1]);
    r3Speed = p.random(0.02, 0.03) / p.TWO_PI;
    p.noFill();
    p.stroke(0, 0, 0, 128);
  };

  p.draw = function() {
    p.translate(p.width / 2, p.height * p.sin(r3));
    const { x, y } = polarToCartesian(0, 0, r1, 200);
    const HANDLE = polarToCartesian(x, y, r2, p.sin(r3) * 500);
    if (p.height * p.sin(r3) < 0 && y < 0 && HANDLE.y < 0) {
      p.noLoop();
      return;
    }
    p.beginShape();
    p.vertex(0, 0);
    p.quadraticVertex(HANDLE.x, HANDLE.y, x, y);
    p.endShape();
    r1 += r1Speed;
    r2 += r2Speed;
    r3 += r3Speed;
  };
};

export default ({ location }) => (
  <SketchLayout sketch={sketch} path={location.pathname} description="Reload page for a different variation." />
);
