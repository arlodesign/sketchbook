import React from "react";
import SketchLayout from "~components/sketch-layout";
import polarToCartesian from "~lib/polarToCartesian";
import "p5.createloop";

const RENDER = process.env.DEV && false;

const sketch = function(p) {
  p.setup = function() {
    p.pixelDensity(1);

    if (RENDER) {
      p.frameRate(30);
    }

    p.createCanvas(660, 840);
    p.noStroke();
    p.colorMode(p.HSB, 1);

    p.createLoop(15, {
      gif: RENDER ? { render: false, open: true } : false,
      noiseRadius: 1,
    });
  };

  p.draw = function() {
    p.blendMode(p.BLEND);
    p.background(255);
    p.blendMode(p.HARD_LIGHT);

    const { noise1D, theta } = p.animLoop;

    for (let i = p.PI; i > 0; i -= p.PI / 20) {
      for (let a = 0; a < p.TWO_PI; a += p.TWO_PI / 3) {
        p.fill(
          p.map(noise1D(p.cos(a + theta - i)), -1, 1, 0, 1),
          50,
          100,
          p.map(i, p.PI, 0, 0, 0.5)
        );
        p.circle(
          ...polarToCartesian(
            p.width / 2,
            p.height / 2,
            a + theta - i,
            p.map(noise1D(p.sin(theta - i)), -1, 1, 0, p.width / 3),
            true
          ),
          p.map(i, p.PI, 0, 1000, 10)
        );

        p.fill(p.map(noise1D(p.cos(a + theta)), -1, 1, 0, 1), 50, 100);
        p.circle(
          ...polarToCartesian(
            p.width / 2,
            p.height / 2,
            a + theta,
            p.map(noise1D(p.sin(theta)), -1, 1, 0, p.width / 3),
            true
          ),
          10
        );
      }
    }
  };
};

export default ({ location }) => (
  <SketchLayout sketch={sketch} path={location.pathname} description="" />
);
