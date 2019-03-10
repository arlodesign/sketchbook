import React from "react";
import SketchLayout from "~components/sketch-layout";

const sketch = function(p) {
  const SHAPES = 3;
  const MAX_SCALE = 3;

  p.setup = function() {
    p.createCanvas(660, 840, p.WEBGL);
    p.fill(255);
    p.noStroke();
  };

  p.draw = function() {
    p.background(0);
    p.directionalLight(
      255,
      255,
      255,
      p.cos(p.frameCount / 100),
      p.sin(p.frameCount / 200),
      p.sin(p.frameCount / 100) / 2
    );
    for (let i = 0; i < SHAPES; i++) {
      p.push();
      p.rotateZ(i * (p.TWO_PI / SHAPES) + p.frameCount / 300);
      p.rotateX(p.frameCount / 500);
      p.rotateY(p.frameCount / 1100);
      p.scale(
        p.map(p.sin(p.frameCount / 700), -1, 1, 1 / MAX_SCALE, MAX_SCALE)
      );
      p.cone(p.width / (MAX_SCALE * 2), p.height, MAX_SCALE);
      p.pop();
    }
  };
};

export default ({ location }) => (
  <SketchLayout sketch={sketch} path={location.pathname} />
);
