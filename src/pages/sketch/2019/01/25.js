import React from "react";
import SketchLayout from "~components/sketch-layout";
import { polarToCartesianX, polarToCartesianY } from "~lib/polarToCartesian";

const sketch = function(p) {
  const SIZE = 200;
  const BOX_COUNT = SIZE * 10;
  let speed1;
  let speed2;
  let speed3;
  let r1 = 0;
  let r2 = 0;
  let r3 = 0;
  let variant;
  let spheres = [];

  p.setup = function() {
    p.createCanvas(660, 840, p.WEBGL);
    speed1 = (p.random(0.1, 0.2) / p.TWO_PI) * p.random([-1, 1]);
    speed2 = (p.random(0.3, 0.4) / p.TWO_PI) * p.random([-1, 1]);
    speed3 = (p.random(0.5, 0.6) / p.TWO_PI) * p.random([-1, 1]);
    p.noStroke();
    p.color(255);
    setTimeout(() => {}, 45000);
  };

  p.draw = function() {
    p.background(255);
    p.directionalLight(
      p.min(p.frameCount, 255),
      p.min(p.frameCount, 255),
      p.min(p.frameCount, 255),
      p.cos(p.frameCount / 100),
      p.sin(p.frameCount / 200),
      p.sin(p.frameCount / 100) / 2
    );
    p.camera(
      p.sin(p.frameCount / (SIZE * 5)) * (SIZE * 2),
      p.cos(p.frameCount / (SIZE * 5)) * (SIZE * 2),
      SIZE * 2,
      0,
      0,
      0,
      0,
      1,
      0
    );
    spheres.forEach((s, i) => {
      p.push();
      p.specularMaterial(255);
      p.translate(...s);
      p.sphere(p.map(i, 0, BOX_COUNT, 0, 10));
      p.pop();
    });
    spheres.push([
      polarToCartesianX(0, r1, SIZE),
      polarToCartesianY(0, r2, SIZE),
      p.frameCount % 2
        ? polarToCartesianX(0, r3, SIZE)
        : polarToCartesianY(0, r3, SIZE),
    ]);
    spheres.length > BOX_COUNT && spheres.shift();
    r1 += speed1;
    r2 += speed2;
    r3 += speed3;
  };
};

export default ({ location }) => (
  <SketchLayout sketch={sketch} path={location.pathname} />
);
