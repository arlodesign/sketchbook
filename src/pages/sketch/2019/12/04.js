import React from "react";
import { withPrefix } from "gatsby";
import SketchLayout from "~components/sketch-layout";
import { easeInOutQuint as ease } from "~lib/easing";
import "p5.createloop";

const sketch = function(p) {
  const RENDER = p.getURLParams().render;
  const GRID = 60;

  let img;

  p.preload = function() {
    img = p.loadImage(withPrefix("/assets/susan.png"));
  };

  p.setup = function() {
    p.pixelDensity(1);
    p.createCanvas(660, 840);
    p.createLoop(20, {
      gif: RENDER ? { render: false, open: true } : false,
      noiseRadius: 0.1,
    });
    p.noStroke();
  };

  p.draw = function() {
    p.background(img);
    const { theta } = p.animLoop;

    for (let x = 0; x < p.width; x += GRID) {
      for (let y = 0; y < p.height; y += GRID) {
        p.push();
        p.translate(x + GRID / 2, y + GRID / 2);

        const scale =
          ease(
            (p.sin(p.dist(x, y, p.width / 2, p.height / 3) + theta) + 1) / 2
          ) * 2;
        p.scale(scale);

        p.fill(255, (scale / 2) * 255);
        p.square(-GRID / 2, -GRID / 2, GRID);

        p.pop();
      }
    }

    for (let x = 0; x < p.width; x += GRID) {
      for (let y = 0; y < p.height; y += GRID) {
        p.push();
        p.translate(x + GRID / 2, y + GRID / 2);

        const scale =
          ease(
            (p.sin(p.dist(x, y, p.width / 2, p.height / 3) + theta) + 1) / 2
          ) * 2;
        p.scale(scale);

        p.blendMode(p.MULTIPLY);
        p.image(img, -GRID / 2, -GRID / 2, GRID, GRID, x, y, GRID, GRID);

        p.pop();
      }
    }
  };
};

export default ({ location }) => (
  <SketchLayout sketch={sketch} path={location.pathname} description="" />
);
