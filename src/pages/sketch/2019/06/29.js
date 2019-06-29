import React from "react";
import SketchLayout from "~components/sketch-layout";
import polarToCartesian from "~lib/polarToCartesian";
import OpenSimplexNoise from "open-simplex-noise";
import lerpLine from "~lib/lerpLine";

const noise = new OpenSimplexNoise(Date.now());

const sketch = function(p) {
  const STEPS = 1000;

  let hue = p.random(67, 100);
  let a = 0;
  let i = 0;

  p.setup = function() {
    p.createCanvas(660, 840);
    p.background(64);
    p.colorMode(p.HSB, 100);
    p.blendMode(p.OVERLAY);
    p.strokeWeight(10);
  };

  p.draw = function() {
    p.translate(p.width / 2, p.height / 2);
    p.stroke(hue, 100, 100, 20);

    const noiseVal = p.map(
      noise.noise4D(
        (i + 0.1) / 10,
        (i + 0.2) / 10,
        p.cos(p.TWO_PI * (p.frameCount / STEPS)),
        p.sin(p.TWO_PI * (p.frameCount / STEPS))
      ),
      -1,
      1,
      0,
      0.1
    );

    lerpLine(
      p,
      0,
      0,
      ...polarToCartesian(0, 0, a, p.height * noiseVal * 10, true),
      noiseVal,
      false
    );

    a += p.TWO_PI / STEPS;
    if (a > p.TWO_PI) {
      i += 1000;
      a = 0;
      hue -= 33;
      if (hue < 0) p.noLoop();
    }
  };
};

export default ({ location }) => (
  <SketchLayout sketch={sketch} path={location.pathname} description="" />
);
