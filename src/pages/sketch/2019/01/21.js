import React from "react";
import SketchLayout from "~components/sketch-layout";

const sketch = function(p) {
  const SIZE = 300;

  p.setup = function() {
    p.createCanvas(660, 840, p.WEBGL);
    p.noStroke();
  };

  p.draw = function() {
    p.background(0);
    p.camera(
      p.sin(p.frameCount / (SIZE * 2)) * (SIZE * 2),
      p.cos(p.frameCount / (SIZE * 2)) * (SIZE * 2),
      SIZE * 2,
      0,
      0,
      0,
      0,
      1,
      0
    );
    p.directionalLight(
      p.min(p.frameCount, 255),
      p.min(p.frameCount, 255),
      p.min(p.frameCount, 255),
      p.cos(p.frameCount / 100),
      p.sin(p.frameCount / 200),
      p.sin(p.frameCount / 100) / 2
    );
    p.push();
    p.rotateZ(p.frameCount * 0.005);
    p.rotateX(p.frameCount * 0.005);
    p.rotateY(p.frameCount * 0.005);
    p.box(SIZE);
    p.pop();
    p.push();
    p.rotateZ(p.frameCount * -0.004);
    p.rotateX(p.frameCount * -0.004);
    p.rotateY(p.frameCount * -0.004);
    p.box(SIZE, SIZE, SIZE * 1.333);
    p.pop();
    p.push();
    p.rotateZ(p.frameCount * -0.003);
    p.rotateX(p.frameCount * 0.003);
    p.rotateY(p.frameCount * -0.003);
    p.box(SIZE, SIZE * 1.333, SIZE);
    p.pop();
    p.push();
    p.rotateZ(p.frameCount * 0.002);
    p.rotateX(p.frameCount * -0.002);
    p.rotateY(p.frameCount * 0.002);
    p.box(SIZE * 1.333, SIZE, SIZE);
    p.pop();
  };
};

export default ({ location }) => (
  <SketchLayout sketch={sketch} path={location.pathname} />
);
