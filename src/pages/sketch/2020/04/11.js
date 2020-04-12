import React from "react";
import SketchLayout from "~components/sketch-layout";
import "p5.createloop";
import { Coordinate } from "coordinate-systems";
const { spherical } = Coordinate;

const sketch = function(p) {
  const RENDER = p.getURLParams().render;
  const DURATION = 60;
  const RATE = 30;
  const COUNT = 500;

  p.setup = function() {
    p.pixelDensity(RENDER ? 1 : 0.5);
    p.frameRate(RATE);
    p.createCanvas(660, 840, p.WEBGL);
    p.colorMode(p.HSB, 1);
    p.createLoop(DURATION, {
      noiseRadius: 0.5,
    });
    p.smooth();
  };

  p.draw = function() {
    const { theta, noise1D } = p.animLoop;

    p.background(255);
    p.specularMaterial(1, 0, 1);
    // p.shininess(2);
    p.pointLight(1, 0, 1, ...spherical([p.height, 0, theta]).cartesian());
    p.camera(
      ...spherical([
        p.width * 2,
        p.map(p.sin(theta), -1, 1, -p.QUARTER_PI, p.QUARTER_PI),
        theta,
      ]).cartesian(),
      0,
      0,
      0,
      0,
      1,
      0
    );
    p.noStroke();
    for (let i = 1; i <= COUNT; i++) {
      const r = (p.TWO_PI / COUNT) * i;
      p.push();
      p.rotateY(r);
      p.rotateZ(r + theta * ((i % 3) + 1) + noise1D(p.cos(r)));
      p.torus(p.width * 0.666, 10, 6, 16);
      p.pop();
    }

    RENDER &&
      process.env.DEV &&
      p.frameCount < DURATION * RATE &&
      p.save(
        `${String(p.frameCount).padStart(
          String(DURATION * RATE * 2).length,
          "0"
        )}.png`
      );
  };
};

export default ({ location }) => (
  <SketchLayout sketch={sketch} path={location.pathname} description="" />
);
