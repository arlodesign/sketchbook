import React from "react";
import SketchLayout from "~components/sketch-layout";
import "p5.createloop";
import polarToCartesian from "~lib/polarToCartesian";

const RENDER = process.env.DEV && true;
const GRID = 45;

const sketch = function(p) {
  const HUE = p.random(0.8);
  let wx;
  let wy;

  p.setup = function() {
    p.frameRate(30);

    if (RENDER) {
      p.pixelDensity(1);
    }

    p.createCanvas(660, 840, p.WEBGL);
    p.noStroke();

    wx = p.floor(p.width / GRID);
    wy = p.floor(p.height / GRID);

    p.createLoop(10, {
      gif: RENDER ? { render: false, open: true } : false,
      noiseRadius: 0.1,
    });
  };

  p.draw = function() {
    const { noise2D, theta } = p.animLoop;

    p.background(255);
    p.pointLight(
      255,
      255,
      255,
      ...polarToCartesian(0, 0, theta, p.width / 3, true),
      p.width * 2
    );

    p.specularMaterial(0);
    p.plane(p.width, p.height);

    for (let x = -wx / 2; x < wx; x++) {
      for (let y = -wy / 2; y < wy; y++) {
        p.push();
        p.colorMode(p.HSB, 1);
        p.specularMaterial(p.map(noise2D(x, y), -1, 1, HUE, HUE + 0.2), 1, 1);
        p.translate(
          x * GRID - GRID / 2,
          y * GRID - GRID / 2,
          GRID * 2 * p.sin(p.dist(x, y, p.width / 2, p.height / 2) + theta)
        );
        p.rotateX(p.HALF_PI);
        p.shininess(20);
        p.cylinder(GRID / 3, GRID * 10);
        p.pop();
      }
    }
  };
};

export default ({ location }) => (
  <SketchLayout sketch={sketch} path={location.pathname} description="" />
);
