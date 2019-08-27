import React from "react";
import SketchLayout from "~components/sketch-layout";
import "p5.createloop";
import polarToCartesian from "~lib/polarToCartesian";

const DURATION = 120;
const LINES = 5;

const sketch = function(p) {
  p.setup = function() {
    p.frameRate(60);

    p.createCanvas(660, 840);
    p.background(128);
    p.colorMode(p.HSL, 2);
    p.blendMode(p.HARD_LIGHT);

    p.createLoop(DURATION, {
      noiseRadius: 2,
    });
  };

  p.draw = function() {
    const { noise1D, theta } = p.animLoop;
    const axis = polarToCartesian(
      p.width / 2,
      p.height / 2,
      theta,
      p.map(noise1D(0.01), -1, 1, p.width / 2, 0),
      true
    );

    for (let a = 0; a < p.TWO_PI; a += p.TWO_PI / LINES) {
      p.stroke(
        noise1D(a / 200) + 1,
        noise1D(a / 300) + 1,
        noise1D(0.05) + 1,
        0.25
      );
      p.line(
        ...axis,
        ...polarToCartesian(
          ...axis,
          theta + a,
          p.map(noise1D(a / 100), -1, 1, p.width / 2, p.width / 5),
          true
        )
      );
    }
    p.frameCount === DURATION * FRAMERATE && p.noLoop();
  };
};

export default ({ location }) => (
  <SketchLayout sketch={sketch} path={location.pathname} description="" />
);
