import React from "react";
import SketchLayout from "~components/sketch-layout";
import { Coordinate } from "coordinate-systems";
const { spherical } = Coordinate;

import "p5.createloop";

const RENDER = process.env.DEV && false;

const sketch = function(p) {
  const COUNT = 3;

  let size;

  p.setup = function() {
    if (RENDER) {
      p.frameRate(30);
    }

    p.createCanvas(660, 840, p.WEBGL);
    p.noFill();
    p.stroke(255);

    size = p.width / COUNT;

    p.createLoop(20, {
      gif: RENDER ? { render: false, open: true } : false,
      noiseRadius: 0.1,
    });
  };

  p.draw = function() {
    p.background(0);

    p.camera(
      ...spherical([size * COUNT + size, 0, p.animLoop.theta]).cartesian(),
      0,
      0,
      0,
      0,
      1,
      0
    );

    for (let x = -p.ceil(COUNT / 2); x <= p.ceil(COUNT / 2); x++) {
      for (let y = -p.ceil(COUNT / 2); y <= p.ceil(COUNT / 2); y++) {
        for (let z = -p.ceil(COUNT / 2); z <= p.ceil(COUNT / 2); z++) {
          p.push();
          p.translate(size * x, size * y, size * z);
          p.box(
            size * p.animLoop.noise2D(x, y),
            size * p.animLoop.noise2D(x, z),
            size * p.animLoop.noise2D(y, z)
          );
          p.pop();
        }
      }
    }
  };
};

export default ({ location }) => (
  <SketchLayout sketch={sketch} path={location.pathname} description="" />
);
