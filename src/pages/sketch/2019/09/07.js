import React from "react";
import SketchLayout from "~components/sketch-layout";
import polarToCartesian from "~lib/polarToCartesian";
import "p5.createloop";
import { easeInOutQuad as ease } from "~lib/easing";

const RENDER = process.env.DEV && false;

const sketch = function(p) {
  let circleWidth;
  let max;
  let hue;

  p.setup = function() {
    p.pixelDensity(1);

    if (RENDER) {
      p.frameRate(30);
    }

    p.createCanvas(660, 840);
    p.background(255);
    p.colorMode(p.HSL, p.TWO_PI);

    circleWidth = p.height / 2 / 20;
    max = p.height / 2 + circleWidth * 5;
    hue = p.random(p.TWO_PI);

    p.createLoop(30, {
      gif: RENDER ? { render: false, open: true } : false,
      noiseRadius: 1,
    });
  };

  p.draw = function() {
    const { noise1D, theta } = p.animLoop;
    p.translate(p.width / 2, p.height / 2);
    p.rotate(theta);
    for (let y = 0; y <= max; y += circleWidth) {
      p.push();
      p.rotate(noise1D(y + circleWidth) * ease(p.abs(p.sin(theta))) * p.TWO_PI);
      for (
        let a = 0;
        a < p.TWO_PI;
        a += p.TWO_PI / (p.TWO_PI * (y + circleWidth))
      ) {
        p.stroke(hue, p.map(y, 0, max, p.QUARTER_PI, p.TWO_PI), a);
        p.line(
          ...polarToCartesian(0, 0, a, y, true),
          ...polarToCartesian(0, 0, a, y + circleWidth, true)
        );
      }
      p.pop();
    }
  };
};

export default ({ location }) => (
  <SketchLayout sketch={sketch} path={location.pathname} description="" />
);
