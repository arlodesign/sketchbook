import React from "react";
import SketchLayout from "~components/sketch-layout";
import polarToCartesian from "~lib/polarToCartesian";

const sketch = function(p) {
  const LEAVES = 5;
  const HUE = p.random(90);

  let angle = 0;
  let alpha = 0;

  p.setup = function() {
    p.createCanvas(660, 840);
    p.colorMode(p.HSB, 100);
    p.background(HUE, 80, 5);
    p.noFill();
    p.blendMode(p.HARD_LIGHT);
    p.strokeWeight(2);
  };

  p.draw = function() {
    const NOISE = p.noise(p.frameCount / 400, angle);
    p.stroke(p.map(p.tan(angle), -1, 1, HUE, HUE + 10), 80, 75, alpha);

    for (let i = 0; i < LEAVES; i++) {
      p.line(
        ...polarToCartesian(
          p.width / 2,
          p.height / 2,
          angle + (i * p.TWO_PI) / LEAVES,
          (p.height / 2) * NOISE,
          true
        ),
        p.width / 2,
        p.height / 2
      );
    }

    angle += 0.01;

    if (angle > p.TWO_PI * 3) {
      alpha -= 0.01;
      alpha < 0 && p.noLoop();
    } else {
      alpha = p.min(alpha + 0.01, 5);
    }
  };
};

export default ({ location }) => (
  <SketchLayout sketch={sketch} path={location.pathname} description="" />
);
