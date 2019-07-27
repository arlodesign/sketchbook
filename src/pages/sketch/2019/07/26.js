import React from "react";
import SketchLayout from "~components/sketch-layout";
import "p5.createloop";

const RENDER = process.env.DEV && false;

const sketch = function(p) {
  p.setup = function() {
    if (RENDER) {
      p.pixelDensity(1);
      p.frameRate(30);
    }

    p.createCanvas(660, 840);
    p.rectMode(p.CENTER);
    p.noStroke();

    p.createLoop(5, {
      gif: RENDER ? { render: false, open: true } : false,
      noiseRadius: 1,
    });
  };

  p.draw = function() {
    p.blendMode(p.BLEND);
    p.background(0);
    p.blendMode(p.EXCLUSION);

    p.translate(p.width / 2, p.height / 2);

    ["red", "green", "blue"].forEach((c, i) => {
      p.fill(c);
      for (let x = -3; x <= 3; x++) {
        for (let y = -3; y <= 3; y++) {
          const nx = p.map(
            p.sin(p.animLoop.theta),
            -1,
            1,
            3,
            p.animLoop.noise2D(x, i) + 1
          );
          const ny = p.map(
            p.cos(p.animLoop.theta),
            -1,
            1,
            3,
            p.animLoop.noise2D(y, i) + 1
          );
          const ns = p.map(
            p.cos(p.animLoop.theta),
            -1,
            1,
            1,
            p.animLoop.noise2D(x, y)
          );
          p.push();
          p.translate(50 * x * nx, 50 * y * ny);
          p.scale(ns, ns);
          p.rect(0, 0, 50, 50);
          p.pop();
        }
      }
    });
  };
};

export default ({ location }) => (
  <SketchLayout sketch={sketch} path={location.pathname} description="" />
);
