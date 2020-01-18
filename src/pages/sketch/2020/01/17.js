import React from "react";
import SketchLayout from "~components/sketch-layout";
import "p5.createloop";
import polarToCartesian from "~lib/polarToCartesian";
import { easeInOutQuart as ease } from "~lib/easing";

const sketch = function(p) {
  const RENDER = p.getURLParams().render;
  const DURATION = 60;
  const RATE = 60;
  const GRID = 30;

  p.setup = function() {
    p.pixelDensity(1);
    p.frameRate(RATE);
    p.createCanvas(660, 840, p.WEBGL);
    p.noStroke();
    p.createLoop(DURATION, {
      gif: RENDER ? { render: false, open: true } : false,
      noiseRadius: 2,
    });
  };

  p.draw = function() {
    const { theta, noise1D } = p.animLoop;

    p.background(0);
    p.specularMaterial(128);
    p.pointLight(
      255,
      255,
      0,
      ...polarToCartesian(0, 0, theta, p.width / 2, true),
      p.width * ease(p.abs(noise1D(5)))
    );
    p.pointLight(
      0,
      255,
      255,
      ...polarToCartesian(0, 0, theta + p.TWO_PI / 3, p.width / 2, true),
      p.width * ease(p.abs(noise1D(7)))
    );
    p.pointLight(
      255,
      0,
      255,
      ...polarToCartesian(0, 0, theta + (p.TWO_PI / 3) * 2, p.width / 2, true),
      p.width * ease(p.abs(noise1D(9)))
    );
    for (let x = -p.width / 2; x <= p.width / 2; x += GRID) {
      for (let y = -p.height / 2; y <= p.height / 2; y += GRID) {
        p.push();
        p.translate(
          x,
          y,
          p.cos(
            theta +
              p.dist(
                x,
                y,
                ...polarToCartesian(0, 0, -theta, p.height * 10, true)
              )
          ) *
            (GRID / 2)
        );
        p.box(GRID);
        p.pop();
      }
    }
  };
};

export default ({ location }) => (
  <SketchLayout sketch={sketch} path={location.pathname} description="" />
);
