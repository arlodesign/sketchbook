import React from "react";
import SketchLayout from "~components/sketch-layout";
import {
  easeInOutQuad,
  easeInOutCubic,
  easeInOutQuart,
  easeInOutQuint,
} from "~lib/easing";
import "p5.createloop";

const RENDER = process.env.DEV && false;

const easingFunctions = [
  easeInOutQuad,
  easeInOutCubic,
  easeInOutQuart,
  easeInOutQuint,
];

const sketch = function(p) {
  let maxRadius;

  p.setup = function() {
    if (RENDER) {
      p.pixelDensity(1);
      p.frameRate(30);
    }

    p.createCanvas(660, 840);
    p.colorMode(p.HSB, 4);
    p.strokeWeight(30);

    maxRadius = p.width * 0.45;

    p.createLoop(15, {
      gif: RENDER ? { render: false, open: true } : false,
      noiseRadius: 1,
    });
  };

  p.draw = function() {
    const { theta, noise2D } = p.animLoop;

    p.blendMode(p.BLEND);
    p.background(0);

    p.blendMode(p.SCREEN);

    const rotation = p.map(theta, 0, p.TWO_PI, 0, 1);

    easingFunctions.forEach((e, i) => {
      p.push();
      p.stroke(i, 3, 3, 2);
      p.translate(p.width / 2, p.height / 2);

      for (let j = 1; j <= 3; j++) {
        const radius = p.map(
          p.sin(theta),
          -1,
          1,
          maxRadius,
          maxRadius * p.map(noise2D(i + j, p.sin(theta)), -1, 1, 0, 1)
        );

        p.rotate(e(rotation) * p.PI * j);
        p.line(0, -radius, 0, radius);
      }

      p.pop();
    });
  };
};

export default ({ location }) => (
  <SketchLayout sketch={sketch} path={location.pathname} description="" />
);
