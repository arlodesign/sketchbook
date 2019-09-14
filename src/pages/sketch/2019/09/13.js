import React from "react";
import SketchLayout from "~components/sketch-layout";
import { easeInOutQuad as ease } from "~lib/easing";
import "p5.createloop";
import polarToCartesian from "~lib/polarToCartesian";

const RENDER = process.env.DEV && true;
const GRID = 15;

const sketch = function(p) {
  p.setup = function() {
    p.pixelDensity(1);
    p.createCanvas(660, 840);
    p.noStroke();
    p.colorMode(p.HSL, 1);
    p.rectMode(p.CENTER);

    p.createLoop(60, {
      gif: RENDER ? { render: false, open: true } : false,
      noiseRadius: 0.1,
    });
  };

  p.draw = function() {
    const { noise2D, theta } = p.animLoop;

    p.blendMode(p.BLEND);
    p.background(255);
    p.blendMode(p.MULTIPLY);

    for (let x = 0; x < p.width / GRID; x++) {
      for (let y = 0; y < p.height / GRID; y++) {
        const distFromCenter = p.dist(
          x * GRID + GRID / 2,
          y * GRID + GRID / 2,
          ...polarToCartesian(p.width / 2, p.height / 2, theta, p.width, true)
        );
        const easedCos =
          ease(p.map(p.cos(distFromCenter + theta), -1, 1, 0, 1)) * GRID;
        const easedSin =
          ease(p.map(p.sin(distFromCenter + theta), -1, 1, 0, 1)) * GRID;

        p.push();
        p.fill("cyan");
        p.translate(x * GRID + GRID / 2, y * GRID + GRID / 2);
        p.square(0, 0, easedCos, easedSin);
        p.pop();

        p.push();
        p.fill("magenta");
        p.translate(x * GRID + GRID / 2, y * GRID + GRID / 2);
        p.square(0, 0, easedSin, easedCos);
        p.pop();

        p.push();
        p.fill("yellow");
        p.translate(x * GRID + GRID / 2, y * GRID + GRID / 2);
        p.square(
          0,
          0,
          ease(p.map(noise2D(x, y), -1, 1, 0, 1)) * GRID,
          ease(p.map(noise2D(y, x), -1, 1, 0, 1)) * GRID
        );
        p.pop();
      }
    }
  };
};

export default ({ location }) => (
  <SketchLayout sketch={sketch} path={location.pathname} description="" />
);
