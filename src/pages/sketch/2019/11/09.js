import React from "react";
import SketchLayout from "~components/sketch-layout";
import lerpLine from "~lib/lerpLine";
import "p5.createloop";

const sketch = function(p) {
  const RENDER = p.getURLParams().render;

  const H = p.random(0.5);

  p.setup = function() {
    p.pixelDensity(1);
    p.createCanvas(330, 420);
    p.colorMode(p.HSL, 1);

    p.createLoop(60, {
      gif: RENDER ? { render: false, open: true } : false,
      noiseRadius: 0.7,
    });
  };

  p.draw = function() {
    p.background(255);

    const { theta, noise2D } = p.animLoop;
    const H1 = p.color(H, 1, 0.5);
    const H2 = p.color(H, 0, 1);

    for (let x = p.width / 2; x < p.width; x++) {
      for (
        let l = 1;
        l > 0;
        l -=
          p.abs(
            noise2D(0.003, x % p.floor(p.map(p.sin(theta), -1, 1, 20, 100)))
          ) || 1 / (p.height * 0.75 - p.height * 0.25)
      ) {
        p.stroke(p.lerpColor(H1, H2, l));
        p.line(x, p.height * 0.25, x, p.height * 0.5 * l + p.height * 0.25);
        p.line(
          p.width - x,
          p.height * 0.25,
          p.width - x,
          p.height * 0.5 * l + p.height * 0.25
        );
      }
    }
  };
};

export default ({ location }) => (
  <SketchLayout sketch={sketch} path={location.pathname} description="" />
);
