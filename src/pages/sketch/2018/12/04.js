import React from "react";
import SketchLayout from "~components/sketch-layout";

const sketch = function(p) {
  const count = 3;
  let angle = 0;
  let size;

  p.setup = function() {
    p.createCanvas(660, 840, p.WEBGL);
    p.strokeWeight(2);
    p.noFill();
    p.stroke(255);
    size = p.width / count;
  };

  p.draw = function() {
    p.background(0);
    const camY = p.map(p.mouseY, 0, p.height, -1000, 1000, true);
    const camZ = p.map(p.mouseX, 0, p.width, -1000, 1000, true);
    p.camera(camY + camZ, camY, camZ, 0, 0, 0, 0, 1, 0);
    for (let x = -p.ceil(count / 2); x <= p.ceil(count / 2); x++) {
      for (let y = -p.ceil(count / 2); y <= p.ceil(count / 2); y++) {
        for (let z = -p.ceil(count / 2); z <= p.ceil(count / 2); z++) {
          p.push();
          p.translate(size * x, size * y, size * z);
          p.box(
            size * p.noise(x, y),
            size * p.noise(x, z),
            size * p.noise(y, z)
          );
          p.pop();
        }
      }
    }
  };

  p.touchMoved = function() {
    if (
      p.mouseX >= 0 &&
      p.mouseY >= 0 &&
      p.mouseX <= p.width &&
      p.mouseY <= p.height
    ) {
      return false;
    }
  };
};

export default ({ location }) => (
  <SketchLayout sketch={sketch} path={location.pathname} description="Move pointer or finger over sketch." />
);
