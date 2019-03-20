import React from "react";
import SketchLayout from "~components/sketch-layout";
import shuffle from "~lib/shuffle";

const sketch = function(p) {
  const GRID_SIZE = 60;

  let hues = [];

  p.setup = function() {
    p.createCanvas(660, 840);
    p.noStroke();
    p.colorMode(p.HSB, 100);
    p.rectMode(p.CENTER);
    hues = [p.random(0, 33), p.random(34, 66), p.random(67, 100)];
    hues = shuffle(hues);
    p.blendMode(p.HARD_LIGHT);
  };

  p.draw = function() {
    p.background(64);

    for (let x = 0; x < p.width; x += GRID_SIZE) {
      for (let y = 0; y < p.height; y += GRID_SIZE) {
        hues.forEach((hue, i) => {
          const noiseVal = p.noise(
            x * (i + 1) * 0.01,
            y * (i + 1) * 0.01,
            p.frameCount * (i + 1) * 0.01
          );
          p.fill(hue, 50, 75, 100 / (i + 1));
          p.stroke(hue, 50, 75, 33 * (i + 1));
          // noiseVal > 0.5 &&
          p.ellipse(
            x + GRID_SIZE / 2,
            y + GRID_SIZE / 2,
            GRID_SIZE * noiseVal * (i + 1),
            GRID_SIZE * noiseVal * (i + 1)
          );
        });
      }
    }
    // p.noLoop();
  };
};

export default ({ location }) => (
  <SketchLayout
    sketch={sketch}
    path={location.pathname}
    description="Refresh page for a different color variation."
  />
);
