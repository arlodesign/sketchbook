import React from "react";
import SketchLayout from "~components/sketch-layout";
import OpenSimplexNoise from "open-simplex-noise";
import lerpLine from "~lib/lerpLine";

const noise = new OpenSimplexNoise(Date.now());

const sketch = function(p) {
  const GRID_SIZE = 15;
  let max = 0.1;

  p.setup = function() {
    p.createCanvas(660, 840);
    p.noStroke();
    p.rectMode(p.CENTER);
  };

  p.draw = function() {
    p.background(0);
    let yPoints = [];

    for (let x = 0; x < p.width; x += GRID_SIZE) {
      let y = [];
      const noiseVal = p.map(
        noise.noise4D(
          p.frameCount / 100,
          p.frameCount / 200,
          p.cos(p.TWO_PI * (x / p.width)),
          p.sin(p.TWO_PI * (x / p.width))
        ),
        -1,
        1,
        0,
        0.1
      );
      for (let l = 0; l < 1; l += noiseVal) {
        y.push(p.lerp(0, p.height / 2, l));
      }
      yPoints.push(y);
    }

    yPoints.forEach((col, i) => {
      col.forEach(y => {
        let thisY = y + p.height / 2;
        let size = p.map(y, 0, p.height / 2, 5, 0);

        p.rect(i * GRID_SIZE, thisY, size, size);
        p.rect(i * GRID_SIZE, p.height - thisY, size, size);
      });
    });
  };
};

export default ({ location }) => (
  <SketchLayout sketch={sketch} path={location.pathname} description="" />
);
