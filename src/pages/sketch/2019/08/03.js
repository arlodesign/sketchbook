import React from "react";
import SketchLayout from "~components/sketch-layout";
import "p5.createloop";
import polarToCartesian from "~lib/polarToCartesian";

const RENDER = process.env.DEV && false;
const DURATION = 60;

const sketch = function(p) {
  const HUE = p.random(80);

  p.setup = function() {
    p.frameRate(30);

    if (RENDER) {
      p.pixelDensity(1);
    }

    p.createCanvas(660, 840);
    p.background(0);
    p.noFill();
    p.colorMode(p.HSB, 100);
    p.blendMode(p.HARD_LIGHT);

    p.createLoop(DURATION, {
      gif: RENDER ? { render: false, open: true } : false,
    });
  };

  p.draw = function() {
    const { noise1D, noise2D, theta } = p.animLoop;
    p.stroke(p.map(theta, 0, p.TWO_PI, HUE - 20, HUE + 20), 50, 100, 1);
    p.push();
    p.translate(
      ...polarToCartesian(
        p.width / 2,
        p.height / 2,
        theta,
        (p.width / 10) * (noise1D(p.sin(theta)) + 1),
        true
      )
    );
    p.rotate(theta);
    p.beginShape();
    for (let a = 0; a < p.TWO_PI; a += 0.01) {
      const element = p.TWO_PI;
      p.vertex(
        ...polarToCartesian(
          0,
          0,
          a,
          noise2D(p.cos(a), p.sin(theta)) * p.width,
          true
        )
      );
    }
    p.endShape(p.CLOSE);
    p.pop();

    !RENDER && p.frameCount === DURATION * 30 && p.noLoop();
  };
};

export default ({ location }) => (
  <SketchLayout sketch={sketch} path={location.pathname} description="" />
);
