import React from "react";
import SketchLayout from "~components/sketch-layout";
import "p5.createloop";
import polarToCartesian from "~lib/polarToCartesian";
import lerpLine from "~lib/lerpLine";
import { easeInQuart } from "~lib/easing";

const sketch = function(p) {
  const DRAFT = p.getURLParams().draft;
  const HUE = p.random(p.TWO_PI);
  const START = p.random(p.TWO_PI);
  const DURATION = 360;
  const RATE = DRAFT ? 30 : 60;

  let lineLength;

  p.setup = function() {
    p.frameRate(RATE);
    p.pixelDensity(DRAFT ? 1 : 2);
    p.createCanvas(660, 840);
    p.createLoop(DURATION, { noiseRadius: 2 });
    p.background(32);
    p.colorMode(p.HSL, p.TWO_PI);
    p.blendMode(p.SOFT_LIGHT);

    lineLength = p.width / 2;
  };

  p.draw = function() {
    const { noise, theta, progress } = p.animLoop;

    p.translate(
      ...polarToCartesian(
        p.width / 2,
        p.height / 2,
        theta + START,
        (p.width / 2) * noise(),
        true
      )
    );
    p.stroke(HUE, theta, p.map(noise(), -1, 1, p.HALF_PI, p.TWO_PI), theta);
    lerpLine(
      p,
      ...polarToCartesian(0, 0, theta * 13 - START, lineLength / 2, true),
      ...polarToCartesian(
        0,
        0,
        theta * 13 + p.PI - START,
        lineLength / 2,
        true
      ),
      easeInQuart(progress)
    );
    p.frameCount === DURATION * RATE && p.noLoop();
    p.frameCount % 100 === 0 &&
      console.log(`${p.frameCount} / ${DURATION * RATE}`);
  };
};

export default ({ location }) => (
  <SketchLayout sketch={sketch} path={location.pathname} description="" />
);
