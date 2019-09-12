import React from "react";
import SketchLayout from "~components/sketch-layout";
import { easeInOutQuad as ease } from "~lib/easing";
import "p5.createloop";

const RENDER = process.env.DEV && false;
const GRID = 30;

const sketch = function(p) {
  p.setup = function() {
    p.createCanvas(660, 840);
    p.noStroke();
    p.colorMode(p.HSL, 1);
    p.rectMode(p.CENTER);

    p.createLoop(2, {
      gif: RENDER ? { render: false, open: true } : false,
      noiseRadius: 0.5,
    });
  };

  p.draw = function() {
    const { noise2D, theta } = p.animLoop;

    p.blendMode(p.BLEND);
    p.background(0);
    p.blendMode(p.HARD_LIGHT);

    for (let x = 0; x < p.width / GRID; x++) {
      for (let y = 0; y < p.height / GRID; y++) {
        p.push();
        p.translate(x * GRID + GRID / 2, y * GRID + GRID / 2);
        p.square(
          0,
          0,
          ease(
            p.map(
              p.cos(p.dist(x, y, p.width / 2, p.height / 2) + theta),
              -1,
              1,
              0,
              1
            )
          ) * GRID,
          ease(
            p.map(
              p.sin(p.dist(x, y, p.width / 2, p.height / 2) + theta),
              -1,
              1,
              0,
              1
            )
          ) * GRID
        );
        p.pop();

        p.push();
        p.fill(0);
        p.translate(x * GRID - GRID / 2, y * GRID + GRID / 2);
        p.square(
          0,
          0,
          ease(
            p.map(
              p.sin(p.dist(x, y, -p.width / 2, p.height / 2) + theta),
              -1,
              1,
              1,
              0
            )
          ) *
            (GRID / 2),
          ease(
            p.map(
              p.cos(p.dist(x, y, -p.width / 2, p.height / 2) + theta),
              -1,
              1,
              1,
              0
            )
          ) *
            (GRID / 2)
        );
        p.pop();
      }
    }
  };
};

export default ({ location }) => (
  <SketchLayout sketch={sketch} path={location.pathname} description="" />
);
