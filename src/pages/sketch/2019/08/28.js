import React from "react";
import SketchLayout from "~components/sketch-layout";
import "p5.createloop";
import polarToCartesian from "~lib/polarToCartesian";

const RENDER = process.env.DEV && false;
const GRID = 30;

const sketch = function(p) {
  const HUE = p.random(0.9);
  let wx;
  let wy;

  p.setup = function() {
    p.frameRate(30);
    p.pixelDensity(1);
    p.createCanvas(660, 840, p.WEBGL);
    p.colorMode(p.HSB, 1);

    wx = p.floor(p.width / GRID);
    wy = p.floor(p.height / GRID);

    p.createLoop(10, {
      gif: RENDER ? { render: false, open: true } : false,
      noiseRadius: 0.5,
    });
  };

  p.draw = function() {
    const { noise2D, theta } = p.animLoop;

    p.background(HUE, 0.5, 0.5);
    p.pointLight(0, 0, 1, 0, 0, -p.width * 3);

    for (let x = -wx / 2; x < wx; x++) {
      for (let y = -wy / 2; y < wy; y++) {
        p.push();
        p.specularMaterial(
          p.map(noise2D(x, y), -1, 1, HUE - 0.1, HUE + 0.1),
          0.5,
          0.8
        );
        p.translate(
          x * GRID - GRID / 2,
          y * GRID - GRID / 2,
          GRID * 5 * p.sin(p.dist(x, y, p.width / 2, 0) + theta)
        );
        p.translate(
          0,
          0,
          GRID * 5 * p.cos(p.dist(x, y, 0, p.height / 2) + theta)
        );
        p.rotateX(p.HALF_PI);
        p.rotateY(theta);
        p.rotateZ(-theta);
        p.box(GRID, GRID, GRID);
        p.pop();
      }
    }
  };
};

export default ({ location }) => (
  <SketchLayout sketch={sketch} path={location.pathname} description="" />
);
