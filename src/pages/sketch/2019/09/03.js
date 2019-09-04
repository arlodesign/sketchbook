import React from "react";
import SketchLayout from "~components/sketch-layout";
import "p5.createloop";
import polarToCartesian from "~lib/polarToCartesian";

const RENDER = process.env.DEV && false;
const DURATION = 60;
const PETALS = 7;

const sketch = function(p) {
  const HUE = p.random(100 / PETALS);

  p.setup = function() {
    p.frameRate(60);
    RENDER && p.pixelDensity(1);
    p.createCanvas(660, 840);
    p.background(0);
    p.colorMode(p.HSB, 100);
    p.blendMode(p.SCREEN);
    p.strokeWeight(2);

    p.createLoop(DURATION, {
      gif: RENDER ? { render: false, open: true } : false,
      noiseRadius: 0.5,
    });
  };

  p.draw = function() {
    const { noise2D, theta } = p.animLoop;
    p.translate(
      ...polarToCartesian(
        p.width / 2,
        p.height / 2,
        -theta,
        noise2D(0.01, 0.02) * (p.width / 2),
        true
      )
    );
    for (let i = 1; i <= PETALS; i++) {
      const d = noise2D(0.06 * i, 0.08 * i) * p.height;
      const l = (noise2D(0.05 * i, 0.07 * i) + 1) / 3;
      const a = theta + p.TWO_PI * (i / PETALS);
      const { x, y } = polarToCartesian(0, 0, a, d);
      p.stroke(HUE + (100 / PETALS) * (i - 1), 50, 25, 50);
      p.line(x * l, y * l, x, y);
    }
    p.frameCount === DURATION * 60 && !RENDER && p.noLoop();
  };
};

export default ({ location }) => (
  <SketchLayout sketch={sketch} path={location.pathname} description="" />
);
