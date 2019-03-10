import React from "react";
import SketchLayout from "~components/sketch-layout";

const sketch = function(p) {
  let jump = 0;
  let scalar = 0;
  let angle = 0;
  let centerX;
  let centerY;
  let size;
  let speed;
  let drawn = false;
  let drawCount = 0;

  p.setup = function() {
    p.createCanvas(660, 840);
    p.background(0);
    p.noFill();
    p.strokeWeight(0.7);
    size = p.random(300, 500);
    speed = p.random(5, 10);
    centerX = p.width + 50;
    centerY = p.random(0, p.height);
  };

  p.draw = function() {
    const x = centerX + p.cos(angle) * scalar;
    const y = centerY + p.sin(angle) * scalar;
    const noiseVal = p.noise(x, y);
    if (x > 0 && y > 0 && x < p.width && y < p.height) {
      drawn = true;
      drawCount++;
      p.stroke(`rgba(255, 255, 255, ${noiseVal})`);
      p.bezier(
        centerX,
        centerY,
        centerX + scalar * noiseVal,
        centerY + scalar * noiseVal,
        x + scalar * noiseVal,
        y + scalar * noiseVal,
        x,
        y
      );
    }
    angle += speed;
    if (angle / 360 > jump) {
      if (drawn && drawCount === 0) {
        p.noLoop();
      }
      drawCount = 0;
      scalar += speed;
      speed += speed / size;
      jump++;
    }
  };
};

export default ({ location }) => (
  <SketchLayout sketch={sketch} path={location.pathname} description="Be patient. Reload page for a different variation." />
);
