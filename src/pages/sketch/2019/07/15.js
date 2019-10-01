import React from "react";
import SketchLayout from "~components/sketch-layout";
import { Coordinate } from "coordinate-systems";
const { spherical } = Coordinate;

import "p5.createloop";

const RENDER = process.env.DEV && false;

const sketch = function(p) {
  let size;
  let count;

  p.setup = function() {
    if (RENDER) {
      p.pixelDensity(1);
      p.frameRate(30);
    }

    p.createCanvas(660, 840, p.WEBGL);
    p.noFill();

    size = p.width / 2;

    p.createLoop(60, {
      gif: RENDER ? { render: false, open: true } : false,
    });
  };

  p.draw = function() {
    p.background(128);

    for (let i = 0; i < size; i++) {
      p.push();
      p.stroke(p.map(i, 0, size, 255, 0));
      p.rotateX(p.cos(p.animLoop.theta) * (p.TWO_PI * (i / size)));
      p.rotateY(p.sin(p.animLoop.theta) * (p.TWO_PI * (i / size)));
      p.rotateZ(p.sin(p.animLoop.theta) * (p.TWO_PI * (i / size)));
      p.box(i, i, i);
      p.pop();
    }
  };
};

export default ({ location }) => (
  <SketchLayout sketch={sketch} path={location.pathname} description="" />
);
