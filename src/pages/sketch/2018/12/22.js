import React from "react";
import SketchLayout from "~components/sketch-layout";

const sketch = function(p) {
  let size;
  let spheres = [];

  function getCoordinate() {
    const value = p.random(-size, size);
    return Math.min(Math.max(value, -size / 2), size / 2);
  }

  p.setup = function() {
    p.createCanvas(660, 840, p.WEBGL);
    p.noFill();
    p.strokeWeight(0.5);
    size = p.random(300, 500);
    for (let i = 0; i < size * 2; i++) {
      spheres[i] = {
        x: getCoordinate(),
        y: getCoordinate(),
        z: getCoordinate(),
      };
    }
  };

  p.draw = function() {
    p.background("white");
    p.camera(
      p.cos(p.frameCount / 100) * size,
      p.sin(p.frameCount / 100) * size,
      p.sin(p.frameCount / 100) * size,
      0,
      0,
      0,
      0,
      1,
      0
    );
    for (let i = 0; i < spheres.length; i++) {
      const s = spheres[i];
      p.push();
      p.translate(s.x, s.y, s.z);
      p.sphere((size / 100) * p.noise(s.x, s.y, s.z));
      p.pop();
      if (i < spheres.length / 2) {
        const oppositeS = spheres[spheres.length - 1 - i];
        p.bezier(
          s.x,
          s.y,
          s.z,
          -size / 100,
          -size / 100,
          -size / 100,
          size / 100,
          size / 100,
          size / 100,
          oppositeS.x,
          oppositeS.y,
          oppositeS.z
        );
      }
    }
  };
};

export default ({ location }) => (
  <SketchLayout sketch={sketch} path={location.pathname} />
);
