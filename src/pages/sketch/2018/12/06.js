import React from "react";
import SketchLayout from "~components/sketch-layout";

const sketch = function(p) {
  const speed = 6;
  let scalar;
  let jump = 0;
  let angle = 0;
  let size;
  let letsDraw = false;

  p.setup = function() {
    p.createCanvas(660, 840);
    p.background("white");
    p.noStroke();
    p.fill("rgba(0, 0, 0, .9)");
    scalar = p.random(10, 20);
    size = p.random(10, 20);
  };

  p.draw = function() {
    const x = p.mouseX + p.cos(angle) * scalar;
    const y = p.mouseY + p.sin(angle) * scalar;
    const noiseVal = p.noise(x, y);
    if (x > 0 && y > 0 && x < p.width && y < p.height && p.mouseIsPressed) {
      p.ellipse(x, y, size * noiseVal);
    }
    angle += speed;
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
  <SketchLayout sketch={sketch} path={location.pathname} description="Click to draw." />
);
