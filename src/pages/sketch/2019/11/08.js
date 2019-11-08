import React from "react";
import SketchLayout from "~components/sketch-layout";
import "p5.createloop";
import polarToCartesian from "~lib/polarToCartesian";
import { easeInOutQuint as ease } from "~lib/easing";
import lerpLine from "~lib/lerpLine";

const DURATION = 200;

const sketch = function(p) {
  const RENDER = p.getURLParams().render;
  const HUE = p.random(0.1, 0.9);
  const FRAME_RATE = RENDER ? 30 : 60;

  p.setup = function() {
    p.frameRate(FRAME_RATE);
    p.pixelDensity(RENDER ? 1 : 2);
    p.createCanvas(660, 840);
    p.background(128);

    p.createLoop(DURATION, {
      gif: RENDER ? { render: false, open: true } : false,
      noiseRadius: 1,
    });
    p.colorMode(p.HSL, 1);
    p.blendMode(p.HARD_LIGHT);
  };

  p.draw = function() {
    const { theta, noise1D, noise2D } = p.animLoop;
    p.translate(
      ...polarToCartesian(
        p.width / 3,
        p.height / 3,
        -theta,
        (p.width / 2) * noise1D(0.013),
        true
      )
    );

    p.stroke(HUE, 1, p.abs(noise2D(0.011, p.sin(theta))), 0.3);
    p.line(
      ...polarToCartesian(0, 0, theta, p.width * noise1D(0.009), true),
      ...polarToCartesian(
        0,
        0,
        theta * 7,
        ease(p.abs(noise1D(0.007))) * (p.width / 2 - 50) + 25,
        true
      )
    );

    p.stroke(1 - HUE, 1, p.abs(noise2D(0.005, p.sin(theta))), 0.7);
    lerpLine(
      p,
      ...polarToCartesian(0, 0, -theta, p.width * noise1D(0.003), true),
      ...polarToCartesian(
        0,
        0,
        -theta * 5,
        ease(p.abs(noise1D(0.001)), 0.01, 1) * (p.width / 2 - 50) + 25,
        true
      ),
      p.abs(noise1D(0.01))
    );

    p.frameCount === FRAME_RATE * DURATION && !RENDER && p.noLoop();
    p.frameCount % 100 === 0 &&
      console.log(p.frameCount + " of " + FRAME_RATE * DURATION);
  };
};

export default ({ location }) => (
  <SketchLayout sketch={sketch} path={location.pathname} description="" />
);
