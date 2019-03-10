import React from "react";
import SketchLayout from "~components/sketch-layout";

const sketch = function(p) {
  const size = 250;
  const goldenRatio = 1.6180339887;
  let angle = 0;

  p.setup = function() {
    p.createCanvas(660, 840);
    p.background("white");
    p.rectMode(p.CENTER);
    p.noFill();
  };

  p.draw = function() {
    const x = p.width / goldenRatio + p.cos(angle) * size;
    const y = p.height / goldenRatio + p.sin(angle) * size;
    const noiseVal = p.noise(x, y);
    p.stroke(`rgba(0, 0, 0, ${noiseVal})`);
    p.strokeWeight(noiseVal);
    p.rect(x, y, size, size);
    p.stroke(`rgba(0, 0, 0, ${noiseVal / 2})`);
    p.ellipse(x, y, angle, angle);
    angle += goldenRatio;
    if (angle > 720) {
      p.noLoop();
    }
  };
};

export default ({ location }) => (
  <SketchLayout sketch={sketch} path={location.pathname} />
);
