import React from "react";
import { withPrefix } from "gatsby";
import SketchLayout from "~components/sketch-layout";
import lerpLine from "~lib/lerpLine";
import polarToCartesian from "~lib/polarToCartesian";

const sketch = function(p) {
  const HUE = p.random(50);
  let distance;
  let theta = 0;
  let center = [];

  p.setup = function() {
    p.createCanvas(660, 840);
    center = [p.width / 3, p.height / 3];
    distance = p.dist(...center, p.width, p.height);
    p.colorMode(p.HSB, 100);
    p.background(HUE, 10, 40);
  };

  p.draw = function() {
    p.strokeWeight(2);
    p.stroke(p.map(p.sin(theta), -1, 1, HUE + 50, HUE), 30, 80);
    lerpLine(
      p,
      ...center,
      ...polarToCartesian(...center, theta, distance / 2, true),
      p.noise(p.frameCount / 50, distance, theta) / 20,
      false
    );
    p.stroke(p.map(p.sin(theta), -1, 1, HUE, HUE + 50), 50, 80);
    lerpLine(
      p,
      ...center,
      ...polarToCartesian(...center, theta, distance, true),
      p.noise(p.frameCount / 10, distance, theta) / 10,
      false
    );

    theta += p.TWO_PI / 2000;
    if (theta > p.TWO_PI) {
      p.noLoop();
    }
  };
};

export default ({ location }) => (
  <SketchLayout sketch={sketch} path={location.pathname} description="" />
);
