import React from "react";
import SketchLayout from "~components/sketch-layout";
import "p5.createloop";
import { easeInCubic as ease } from "~lib/easing";
import polarToCartesian from "~lib/polarToCartesian";

const sketch = function(p) {
  const RENDER = p.getURLParams().render;
  const DURATION = 30;
  const RATE = 60;
  const STEPS = 12;
  const HUE_OFFSET = 0.2;
  const HUE = p.random(HUE_OFFSET, 1 - HUE_OFFSET);

  let margin;

  p.setup = function() {
    p.pixelDensity(RENDER ? 2 : 1);
    p.frameRate(RATE);
    p.createCanvas(660, 840);
    p.background(0);
    p.createLoop(DURATION, {
      gif: RENDER ? { render: false, open: true } : false,
      noiseRadius: 0.2,
    });
    p.colorMode(p.HSB, 1);
    p.blendMode(p.HARD_LIGHT);
    p.noFill();

    margin = p.width / 20;
  };

  p.draw = function() {
    const { theta, noise1D } = p.animLoop;

    p.translate(p.width / 2, p.height / 2);

    const bp = [
      ...polarToCartesian(0, 0, theta, p.width / 2 - p.width / 20, true),
      noise1D(1) * (p.width / 2),
      noise1D(2) * (p.height / 2 - margin),
      noise1D(3) * (p.width / 2),
      noise1D(4) * (p.height / 2 - margin),
      0,
      0,
    ];

    p.stroke(
      HUE + noise1D(5) * HUE_OFFSET,
      0.5,
      1,
      ease(0.5 - p.abs(p.sin(theta * 4))) + 0.25
    );
    p.strokeWeight(2);

    for (let i = 0; i < STEPS; i++) {
      let t = i / STEPS;
      let x = p.bezierPoint(bp[0], bp[2], bp[4], bp[6], t);
      let y = p.bezierPoint(bp[1], bp[3], bp[5], bp[7], t);
      let tx = p.bezierTangent(bp[0], bp[2], bp[4], bp[6], t);
      let ty = p.bezierTangent(bp[1], bp[3], bp[5], bp[7], t);
      let a = p.atan2(ty, tx);

      p.push();
      p.translate(x, y);
      p.rotate(a + theta);
      p.line(-3 * (i + 1), 0, 3 * (i + 1), 0);
      p.pop();
    }

    p.frameCount % 100 === 0 &&
      console.info(`${p.frameCount} / ${DURATION * RATE}`);
    !RENDER && p.frameCount === DURATION * RATE && p.noLoop();
  };
};

export default ({ location }) => (
  <SketchLayout sketch={sketch} path={location.pathname} description="" />
);
