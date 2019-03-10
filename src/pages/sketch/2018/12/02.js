import React from "react";
import SketchLayout from "~components/sketch-layout";

const sketch = function(p) {
  const circleGap = 30;
  const noiseScale = 0.02;

  p.setup = function() {
    p.createCanvas(660, 840);
    p.noFill();
  };

  p.draw = function() {
    p.background("white");
    let i = 0.2;
    let y = p.map(p.mouseY, 0, p.height, p.height, p.height + p.width, true);
    let strokeWeightValue = 5;
    while (y > p.mouseY - p.width * 2) {
      const noiseVal = p.noise(p.mouseX * noiseScale, y * noiseScale);
      p.strokeWeight(i);
      p.ellipse((p.width / 2) * noiseVal, y, p.width);
      p.ellipse((p.width / 2) * noiseVal, p.height - y, p.width);
      i += 0.1;
      y -= circleGap;
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
