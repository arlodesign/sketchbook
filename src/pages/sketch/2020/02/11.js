import React from "react";
import SketchLayout from "~components/sketch-layout";
import polarToCartesian from "~lib/polarToCartesian";
import "p5.createloop";

const sketch = function(p) {
  const RENDER = p.getURLParams().render;
  const DURATION = 40;
  const RATE = 30;
  const M = p.floor(p.random(150, 250));

  p.setup = function() {
    p.pixelDensity(1);
    p.frameRate(RATE);
    p.createCanvas(660, 840);
    p.noFill();
    p.noSmooth();
    p.stroke(0, 128);
    p.createLoop(DURATION, {
      gif: RENDER ? { render: false, open: true } : false,
      noiseRadius: 1,
    });
  };

  p.draw = function() {
    const { progress, theta, noise1D } = p.animLoop;
    p.blendMode(p.BLEND);
    p.background(255);
    p.blendMode(p.MULTIPLY);

    ["cyan", "magenta", "yellow"].forEach((c, i) => {
      p.stroke(c);
      p.beginShape();
      for (let j = 0; j < 1; j += 0.0001) {
        const b = [
          p.width * 0.25,
          p.height / 4,
          ...polarToCartesian(
            p.width * 0.25,
            p.height / 4,
            p.TWO_PI * j * (175 + noise1D((i + 1) / ((j + 1) * 10)) * 7),
            p.width / 2,
            true
          ),
          ...polarToCartesian(
            p.width * 0.75,
            p.height * 0.75,
            -p.TWO_PI * j * (175 + noise1D((i + 2) / ((j + 1) * 10)) * 7),
            p.width / 2,
            true
          ),
          p.width * 0.75,
          p.height * 0.75,
        ];

        p.curveVertex(
          p.bezierPoint(b[0], b[2], b[4], b[6], j),
          p.bezierPoint(b[1], b[3], b[5], b[7], j)
        );
      }
      p.endShape();
    });
  };
};

export default ({ location }) => (
  <SketchLayout sketch={sketch} path={location.pathname} description="" />
);
