import React from "react";
import SketchLayout from "~components/sketch-layout";
import { polarToCartesianEllipse } from "~lib/polarToCartesian";
import "p5.createloop";

const sketch = function(p) {
  const RENDER = p.getURLParams().render;
  const COLORS = p.shuffle(["cyan", "magenta", "yellow"]);
  const LINES = 150;

  let margin;
  let gap;

  p.setup = function() {
    p.pixelDensity(1);
    p.frameRate(30);

    p.createCanvas(660, 840);
    p.background(255);
    p.createLoop(20, {
      gif: RENDER ? { render: false, open: true } : false,
      noiseRadius: 0.1,
    });
    p.strokeWeight(2);

    margin = p.floor(p.width * 0.03);
    gap = (p.height - 2 * margin) / LINES;
  };

  p.draw = function() {
    const { theta } = p.animLoop;
    p.blendMode(p.BLEND);
    p.background(255);
    p.blendMode(p.MULTIPLY);

    COLORS.forEach((c, i) => {
      p.stroke(c);

      let l = 0;

      for (let yy = margin; yy < p.height - margin; yy += gap) {
        const { x: b1x, y: b1y } = polarToCartesianEllipse(
          p.width / 2,
          p.height / 2,
          theta * (l % 5) + i / 5,
          p.height * 0.02 * p.cos(theta * 5),
          (p.width / 2) * p.sin(theta)
        );

        const { x: b2x, y: b2y } = polarToCartesianEllipse(
          p.width / 2,
          p.height / 2,
          theta * (l % 5) + i / 5,
          p.height * 0.02 * -p.cos(theta * 5),
          (p.width / 2) * -p.sin(theta)
        );
        p.bezier(
          margin,
          yy + (i - 1),
          b1x,
          p.map(p.sin(theta), -1, 1, b1y, yy),
          b2x,
          p.map(p.sin(theta), -1, 1, b2y, yy),
          p.width - margin,
          yy + (i - 1)
        );

        l++;
      }
    });
  };
};

export default ({ location }) => (
  <SketchLayout sketch={sketch} path={location.pathname} description="" />
);
