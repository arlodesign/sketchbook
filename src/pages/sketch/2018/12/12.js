import React from "react";
import SketchLayout from "~components/sketch-layout";

const sketch = function(p) {
  const gap = 10;

  p.setup = function() {
    p.createCanvas(660, 840);
    p.noFill();
  };

  p.draw = function() {
    p.background("white");
    const nearestY = Math.ceil(p.mouseY / gap) * gap;
    const yBottom = p.height - p.mouseY;
    for (let y = 0; y <= p.height; y += gap) {
      const pointX = p.map(
        Math.abs(p.mouseY - y),
        0,
        p.height,
        0,
        p.width / 3 - p.mouseX
      );
      const handleX =
        y < p.mouseY
          ? p.map(y, 0, p.mouseY, p.mouseX, p.width / 3 - p.mouseX)
          : p.map(y, p.mouseY, p.height, p.width / 3 - p.mouseX, p.mouseX);
      p.beginShape();
      p.line(0, y, pointX, y);
      p.bezier(pointX, y, handleX, y, 0, p.mouseY, p.mouseX, p.mouseY);
      p.bezier(
        p.mouseX,
        p.mouseY,
        p.width,
        p.mouseY,
        p.width - handleX,
        y,
        p.width - pointX,
        y
      );
      p.line(p.width - pointX, y, p.width, y);
      p.endShape();
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
