import React from "react";
import { Coordinate } from "coordinate-systems";
const { spherical } = Coordinate;
import SketchLayout from "~components/sketch-layout";

const sketch = function(p) {
  const SPEED = 0.075;
  const WEIGHT = 2;

  p.setup = function() {
    p.createCanvas(660, 840, p.WEBGL);
    p.noStroke();
  };

  p.draw = function() {
    p.background(0);

    p.pointLight(
      p.min(p.frameCount, 255),
      p.min(p.frameCount, 255),
      p.min(p.frameCount, 255),
      1,
      0,
      0
    );

    p.camera(...spherical([150, 0, 0]).cartesian(), 0, 0, 0, 0, 1, 0);

    p.specularMaterial(255, 255, 255);

    for (let i = 1; i < 20; i++) {
      const SIZE = i * WEIGHT * 2;
      p.push();
      p.rotateX(
        ((p.TWO_PI * 2) / WEIGHT) * i * p.cos((p.frameCount / 400) * SPEED)
      );
      p.rotateY(
        ((p.TWO_PI * 2) / WEIGHT) * i * p.sin((p.frameCount / 200) * SPEED)
      );
      p.push();
      p.translate(0, -(SIZE / 2) + WEIGHT / 2, 0);
      p.box(SIZE, WEIGHT, WEIGHT);
      p.pop();
      p.push();
      p.translate(0, SIZE / 2 - WEIGHT / 2, 0);
      p.box(SIZE, WEIGHT, WEIGHT);
      p.pop();
      p.push();
      p.translate(-(SIZE / 2) + WEIGHT / 2, 0, 0);
      p.box(WEIGHT, SIZE, WEIGHT);
      p.pop();
      p.push();
      p.translate(SIZE / 2 - WEIGHT / 2, 0, 0);
      p.box(WEIGHT, SIZE, WEIGHT);
      p.pop();
      p.pop();
    }
  };
};

export default ({ location }) => (
  <SketchLayout sketch={sketch} path={location.pathname} description="" />
);
