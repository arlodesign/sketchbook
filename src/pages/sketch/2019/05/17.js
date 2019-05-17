import React from "react";
import SketchLayout from "~components/sketch-layout";
import polarToCartesian from "~lib/polarToCartesian";

const sketch = function(p) {
  const PARTICLES = 100;
  const RATE = 1200;
  const HUE = p.random(100);

  let rotation = 0;
  let radius;

  p.setup = function() {
    p.createCanvas(660, 840);
    p.colorMode(p.HSB, 100);
    radius = p.dist(p.width / 2, p.height / 2, 0, 0);
  };

  p.draw = function() {
    p.background(0);
    p.stroke(255);

    for (let a = rotation; a < p.TWO_PI + rotation; a += p.TWO_PI / PARTICLES) {
      p.stroke(HUE, p.map(p.sin(a), -1, 1, 0, 100), 100, 50);
      const { x, y } = polarToCartesian(
        p.width / 2,
        p.height / 2,
        a,
        p.map(p.cos(p.frameCount / RATE), -1, 1, 0, radius)
      );
      const thisAngle =
        a * p.map(p.noise(a / 40, rotation / 40), 0, 1, -0.3, 0.3);

      for (let aAdd = 0; aAdd < p.TWO_PI; aAdd += p.TWO_PI / 3) {
        p.line(
          x,
          y,
          ...polarToCartesian(
            p.width / 2,
            p.height / 2,
            thisAngle + aAdd,
            p.map(p.sin(p.frameCount / RATE), -1, 1, radius, 0) *
              p.noise(a / 10, rotation / 100),
            true
          )
        );
      }
    }
    rotation += p.TWO_PI / RATE;
  };
};

export default ({ location }) => (
  <SketchLayout sketch={sketch} path={location.pathname} description="" />
);
