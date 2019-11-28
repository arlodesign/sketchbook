import React from "react";
import SketchLayout from "~components/sketch-layout";
import { easeInOutQuad as ease } from "~lib/easing";
import "p5.createloop";
import polarToCartesian from "~lib/polarToCartesian";

const sketch = function(p) {
  const RENDER = p.getURLParams().render;
  const GRID = 15;

  p.setup = function() {
    if (RENDER) {
      p.pixelDensity(1);
      p.frameRate(30);
    }
    p.createCanvas(660, 840);

    p.createLoop(20, {
      gif: RENDER ? { render: false, open: true } : false,
    });
    p.rectMode(p.CENTER);
    p.noStroke();
    p.fill(255);
  };

  p.draw = function() {
    const { theta } = p.animLoop;
    p.blendMode(p.BLEND);
    p.background(0);
    p.blendMode(p.DIFFERENCE);

    for (let x = GRID / 2; x < p.width; x += GRID) {
      for (let y = GRID / 2; y < p.height; y += GRID) {
        p.push();
        p.translate(x, y);
        p.square(
          0,
          0,
          GRID *
            2 *
            ease(
              p.map(
                p.cos(p.dist(x, y, p.width / 2, p.height / 2) + theta),
                -1,
                1,
                0,
                1
              )
            ),
          GRID / 2
        );
        p.pop();
      }
    }
  };
};

export default ({ location }) => (
  <SketchLayout sketch={sketch} path={location.pathname} description="" />
);
