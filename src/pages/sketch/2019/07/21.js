import React from "react";
import SketchLayout from "~components/sketch-layout";
import polarToCartesian from "~lib/polarToCartesian";
import { polar } from "coordinate-systems";
import "p5.createloop";

const RENDER = process.env.DEV && false;

const sketch = function(p) {
  const COUNT = 75;
  const HUE = p.random();

  p.setup = function() {
    if (RENDER) {
      p.pixelDensity(1);
      p.frameRate(30);
    }

    p.createCanvas(660, 840);
    p.colorMode(p.HSB, 1);
    p.noFill();
    p.strokeWeight(2);

    p.createLoop(10, {
      gif: RENDER ? { render: false, open: true } : false,
      noiseRadius: 1,
    });
  };

  p.draw = function() {
    p.blendMode(p.BLEND);
    p.background(HUE, 0.5, 0.5);
    p.blendMode(p.OVERLAY);

    p.push();
    p.translate(p.width / 2, p.height / 2);

    for (let a = -p.HALF_PI + p.PI / COUNT; a < p.HALF_PI; a += p.PI / COUNT) {
      p.stroke(
        1 - HUE,
        p.map(a, -p.HALF_PI, p.HALF_PI, 0.2, 0.8),
        p.map(a, -p.HALF_PI, p.HALF_PI, 0, 1)
      );

      const { x, y } = polarToCartesian(0, 0, a, p.width / 3);
      const offset = p.map(
        p.sin(p.animLoop.theta),
        -1,
        1,
        0,
        p.animLoop.noise2D(a, y) * (p.width / 2)
      );

      p.bezier(
        x,
        y,
        p.map(p.sin(p.animLoop.theta), -1, 1, x, offset),
        p.map(p.sin(p.animLoop.theta), -1, 1, y, y - offset),
        p.map(p.cos(p.animLoop.theta), -1, 1, -offset, -x),
        p.map(p.cos(p.animLoop.theta), -1, 1, y + offset, y),
        -x,
        y
      );
    }

    p.pop();
  };
};

export default ({ location }) => (
  <SketchLayout sketch={sketch} path={location.pathname} description="" />
);
