import React from "react";
import SketchLayout from "~components/sketch-layout";
import { withPrefix } from "gatsby";

const sketch = function(p) {
  const tileSize = 60;
  let img;

  p.preload = function() {
    img = p.loadImage(withPrefix("/assets/susan.png"));
  };

  p.setup = function() {
    p.createCanvas(660, 840);
  };

  p.draw = function() {
    p.background(img);
    const scale = p.map(p.mouseX, 0, p.width, 0, tileSize);
    for (let x = 0; x < p.width + 0; x += tileSize) {
      for (let y = 0; y < p.height + 0; y += tileSize) {
        const noiseVal = p.noise(x, y) * scale;
        p.blend(
          img,
          x,
          y,
          tileSize,
          tileSize,
          x - noiseVal,
          y - noiseVal,
          tileSize + noiseVal * 2,
          tileSize + noiseVal * 2,
          p.MULTIPLY
        );
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
