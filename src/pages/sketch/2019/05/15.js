import React from "react";
import SketchLayout from "~components/sketch-layout";
import polarToCartesian from "~lib/polarToCartesian";

const sketch = function(p) {
  const SPEEDS = Array.from(Array(4), () => (p.TWO_PI * p.random()) / 750);
  const ANGLES = [0, p.HALF_PI, p.PI, p.PI + p.HALF_PI];

  p.setup = function() {
    p.createCanvas(660, 840);
    p.noStroke();
  };

  p.draw = function() {
    const DIST = p.height / 2;

    p.blendMode(p.BLEND);
    p.background(255);

    p.blendMode(p.MULTIPLY);

    p.fill("yellow");
    p.quad(
      ...polarToCartesian(p.width / 2, p.height / 2, ANGLES[0], DIST, true),
      ...polarToCartesian(p.width / 2, p.height / 2, ANGLES[1], DIST, true),
      ...polarToCartesian(p.width / 2, p.height / 2, ANGLES[2], DIST, true),
      ...polarToCartesian(p.width / 2, p.height / 2, ANGLES[3], DIST, true)
    );

    p.fill("magenta");
    p.quad(
      ...polarToCartesian(
        p.width / 2,
        p.height / 2,
        p.TWO_PI / 3 + ANGLES[0],
        DIST,
        true
      ),
      ...polarToCartesian(
        p.width / 2,
        p.height / 2,
        p.TWO_PI / 3 + ANGLES[1],
        DIST,
        true
      ),
      ...polarToCartesian(
        p.width / 2,
        p.height / 2,
        p.TWO_PI / 3 + ANGLES[2],
        DIST,
        true
      ),
      ...polarToCartesian(
        p.width / 2,
        p.height / 2,
        p.TWO_PI / 3 + ANGLES[3],
        DIST,
        true
      )
    );

    p.fill("cyan");
    p.quad(
      ...polarToCartesian(
        p.width / 2,
        p.height / 2,
        (p.TWO_PI / 3) * 2 + ANGLES[0],
        DIST,
        true
      ),
      ...polarToCartesian(
        p.width / 2,
        p.height / 2,
        (p.TWO_PI / 3) * 2 + ANGLES[1],
        DIST,
        true
      ),
      ...polarToCartesian(
        p.width / 2,
        p.height / 2,
        (p.TWO_PI / 3) * 2 + ANGLES[2],
        DIST,
        true
      ),
      ...polarToCartesian(
        p.width / 2,
        p.height / 2,
        (p.TWO_PI / 3) * 2 + ANGLES[3],
        DIST,
        true
      )
    );

    for (let i = 0; i < ANGLES.length; i++) {
      ANGLES[i] += SPEEDS[i];
    }
  };
};

export default ({ location }) => (
  <SketchLayout sketch={sketch} path={location.pathname} description="" />
);
