import React from "react";
import { spherical } from "coordinate-systems";
import SketchLayout from "~components/sketch-layout";

const sketch = function(p) {
  const SPEED = 0.2;
  const WEIGHT = 5;

  p.setup = function() {
    p.createCanvas(660, 840, p.WEBGL);
    p.noStroke();
  };

  p.draw = function() {
    p.background(255);
    p.camera(
      ...spherical([100, 0, p.frameCount / 100]).cart(),
      0,
      0,
      0,
      0,
      1,
      0
    );

    p.specularMaterial(0, 0, 0);

    for (let i = 1; i < 20; i++) {
      const SIZE = i * 4;
      p.push();
      p.rotateX(
        ((p.HALF_PI * 2) / WEIGHT) * i * p.sin((p.frameCount / 100) * SPEED) +
          (i % 2 ? 0 : p.PI)
      );
      p.rotateZ(
        ((p.HALF_PI * 2) / WEIGHT) * i * p.cos((p.frameCount / 200) * SPEED) +
          (i % 2 ? p.PI : 0)
      );
      p.cone(WEIGHT, SIZE, 30);
      p.pop();
    }
  };
};

export default ({ location }) => (
  <SketchLayout sketch={sketch} path={location.pathname} description="" />
);
