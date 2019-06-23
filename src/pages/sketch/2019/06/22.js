import React from "react";
import { spherical } from "coordinate-systems";
import SketchLayout from "~components/sketch-layout";

const sketch = function(p) {
  const SIZE = 20;

  p.setup = function() {
    p.createCanvas(660, 840, p.WEBGL);
    p.noStroke();
  };

  p.draw = function() {
    p.background(0);
    p.directionalLight(
      p.min(p.frameCount, 255),
      p.min(p.frameCount, 255),
      p.min(p.frameCount, 255),
      p.cos(p.frameCount / 100),
      p.sin(p.frameCount / 200),
      p.sin(p.frameCount / 100) / 2
    );
    p.camera(
      ...spherical([p.height, p.frameCount / 750, p.frameCount / 1000]).cart(),
      0,
      0,
      0,
      0,
      1,
      0
    );

    p.noStroke();
    p.fill(0);
    p.specularMaterial(255, 255, 255);

    for (let i = 0; i < SIZE; i++) {
      p.push();
      p.rotateX((p.TWO_PI / SIZE) * i * p.cos(p.frameCount / 500));
      p.rotateY((p.TWO_PI / SIZE) * i * p.cos(p.frameCount / 500));
      p.rotateZ((p.TWO_PI / SIZE) * i * p.cos(p.frameCount / 500));
      p.torus(SIZE * i, SIZE / 3, 24 + i * 2);
      p.pop();
    }
  };
};

export default ({ location }) => (
  <SketchLayout sketch={sketch} path={location.pathname} description="" />
);
