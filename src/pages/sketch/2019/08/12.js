import React from "react";
import SketchLayout from "~components/sketch-layout";
import "p5.createloop";
import { Coordinate } from "coordinate-systems";
const { spherical } = Coordinate;

const RENDER = process.env.DEV && false;

const sketch = function(p) {
  const GRID = 30;
  const HUE = p.random(100);

  let wx;
  let wy;
  let maxDist;

  p.setup = function() {
    if (RENDER) {
      p.pixelDensity(1);
      p.frameRate(30);
    }

    p.createCanvas(660, 840, p.WEBGL);
    p.colorMode(p.HSB, 100);

    wx = p.floor(p.width / GRID);
    wy = p.floor(p.height / GRID);
    maxDist = p.dist(0, 0, p.width, p.height);

    p.noStroke();

    p.createLoop(60, {
      gif: RENDER ? { render: false, open: true } : false,
      noiseRadius: 1,
    });
  };

  p.draw = function() {
    const { noise1D, noise2D, theta } = p.animLoop;
    const xPos = p.map(theta, 0, p.TWO_PI, -p.width / 2, p.width / 2);
    const yPos = p.map(theta, 0, p.TWO_PI, p.height / 2, -p.height / 2);

    p.background(HUE, 100, 50);
    p.specularMaterial(HUE, 100, 75);
    p.pointLight(0, 0, 100, ...spherical([100, theta, 0]).cartesian());
    p.pointLight(
      100 - HUE,
      25,
      50,
      ...spherical([
        1000,
        p.map(p.sin(theta), -1, 1, 0, p.PI),
        p.map(p.cos(theta), -1, 1, 0, p.PI),
      ]).cartesian()
    );
    for (let x = -wx / 2; x < wx; x++) {
      for (let y = -wy / 2; y < wy; y++) {
        p.push();
        p.translate(x * GRID - GRID / 2, y * GRID - GRID / 2);
        p.rotateX(
          p.map(p.dist(x, y, xPos, yPos), 0, maxDist, 0, -p.TWO_PI * 15)
        );
        p.box(GRID + 1, GRID + 1, 3);
        p.pop();
      }
    }
  };
};

export default ({ location }) => (
  <SketchLayout sketch={sketch} path={location.pathname} description="" />
);
