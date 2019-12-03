import React from "react";
import SketchLayout from "~components/sketch-layout";
import "p5.createloop";
import lerpLine from "~lib/lerpLine";

const sketch = function(p) {
  const RENDER = p.getURLParams().render;

  p.setup = function() {
    if (RENDER) {
      p.pixelDensity(1);
      p.frameRate(30);
    }

    p.createCanvas(660, 840);
    p.createLoop(30, {
      gif: RENDER ? { render: false, open: true } : false,
      noiseRadius: 0.1,
    });
    p.strokeWeight(2);
  };

  p.draw = function() {
    p.blendMode(p.BLEND);
    p.background(255);
    p.blendMode(p.MULTIPLY);

    const { theta, noise1D } = p.animLoop;

    p.translate(p.width / 2, 0);

    p.stroke("cyan");
    for (let y = 0; y < p.height; y += 3) {
      lerpLine(
        p,
        p.width *
          p.sin(theta * 3 + p.map(y, 0, p.height, 0, p.TWO_PI)) *
          noise1D(10),
        y,
        p.width *
          -p.cos(theta * 7 + p.map(y, 0, p.height, 0, p.TWO_PI)) *
          noise1D(20),
        y,
        p.map(p.cos(theta * 3), -1, 1, 0.02, 0.03),
        false,
        false
      );
    }

    p.stroke("magenta");
    for (let y = 0; y < p.height; y += 3) {
      lerpLine(
        p,
        p.width *
          -p.cos(theta * 5 + p.map(y, 0, p.height, 0, p.TWO_PI)) *
          noise1D(30),
        y,
        p.width *
          p.sin(theta * 3 + p.map(y, 0, p.height, 0, p.TWO_PI)) *
          noise1D(40),
        y,
        0.03,
        true,
        false
      );
    }

    p.stroke("yellow");
    for (let y = 0; y < p.height; y += 3) {
      lerpLine(
        p,
        p.width *
          -p.sin(theta * 7 + p.map(y, 0, p.height, 0, p.TWO_PI)) *
          noise1D(50),
        y,
        p.width *
          p.cos(theta * 2 + p.map(y, 0, p.height, 0, p.TWO_PI)) *
          noise1D(60),
        y,
        0.03,
        true,
        false
      );
    }
  };
};

export default ({ location }) => (
  <SketchLayout sketch={sketch} path={location.pathname} description="" />
);
