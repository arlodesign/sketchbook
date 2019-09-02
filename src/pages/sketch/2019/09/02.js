import React from "react";
import SketchLayout from "~components/sketch-layout";
import { spherical } from "coordinate-systems";
import { easeOutQuint as ease } from "~lib/easing";

import "p5.createloop";

const RENDER = process.env.DEV && false;

const sketch = function(p) {
  const HUE = p.random(0.9);
  const COUNT = 3;

  p.setup = function() {
    if (RENDER) {
      p.frameRate(30);
    }

    p.createCanvas(660, 840, p.WEBGL);
    p.noStroke();
    p.colorMode(p.HSB, 1);

    p.createLoop(30, {
      gif: RENDER ? { render: false, open: true } : true,
      noiseRadius: 1,
    });
  };

  p.draw = function() {
    const { noise1D, noise2D, theta } = p.animLoop;
    let size = p.width / COUNT;

    p.background(HUE, 0.5, 0.5);

    p.camera(
      ...spherical([size * COUNT * 3, 10, theta]).cart(),
      0,
      0,
      0,
      0,
      1,
      0
    );
    p.pointLight(0, 0, 1, 0, 0, -p.width * 3);
    p.specularMaterial(
      p.map(noise1D(0.05), -1, 1, HUE - 0.1, HUE + 0.1),
      0.5,
      0.8
    );

    let cubeCount = 1;

    for (let x = -p.ceil(COUNT / 2); x <= p.ceil(COUNT / 2); x++) {
      for (let y = -p.ceil(COUNT / 2); y <= p.ceil(COUNT / 2); y++) {
        for (let z = -p.ceil(COUNT / 2); z <= p.ceil(COUNT / 2); z++) {
          const noise =
            ease(p.map(p.sin(theta), -1, 1, 0, 1)) *
            noise2D(x * y * z, cubeCount / 100);

          p.push();
          p.translate(size * x, size * y, size * z);
          p.rotateX(noise * p.map(p.cos(theta), -1, 1, 0, p.TWO_PI));
          p.rotateY(noise * p.map(p.cos(theta), -1, 1, 0, p.TWO_PI));
          p.box(p.constrain(size * p.abs(p.sin(theta)), size / 10, size));
          p.pop();

          cubeCount++;
        }
      }
    }
  };
};

export default ({ location }) => (
  <SketchLayout sketch={sketch} path={location.pathname} description="" />
);
