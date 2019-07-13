import React from "react";
import SketchLayout from "~components/sketch-layout";
import polarToCartesian from "~lib/polarToCartesian";
import "p5.createloop";

const RENDER = process.env.DEV && false;

const sketch = function(p) {
  const STEPS = 6;

  let points = [];

  p.setup = function() {
    if (RENDER) {
      p.pixelDensity(1);
      p.frameRate(30);
    }

    p.createCanvas(660, 840);
    p.colorMode(p.HSB, 1);

    p.noStroke();

    points = Array.from(Array(4), () => ({
      a: p.random(p.TWO_PI),
      d: p.random(p.width / 4, p.width * 0.45),
    }));

    p.createLoop(20, {
      gif: RENDER ? { render: false, open: true } : false,
      noiseRadius: 1,
    });
  };

  p.draw = function() {
    p.blendMode(p.BLEND);
    p.background(0.8);
    p.blendMode(p.HARD_LIGHT);

    for (let angle = 0; angle < p.TWO_PI; angle += p.TWO_PI / STEPS) {
      p.fill(p.map(p.sin(angle), -1, 1, 0, (STEPS - 1) / STEPS), 1, 0.5);
      p.push();
      p.translate(p.width / 2, p.height / 2);
      p.rotate(p.animLoop.theta);
      p.beginShape();
      points.forEach(({ a, d }) => {
        p.curveVertex(
          ...polarToCartesian(
            0,
            0,
            a + angle + p.map(p.animLoop.noise1D(a), -1, 1, 1, 2),
            d * p.map(p.animLoop.noise1D(d), -1, 1, 0.75, 1),
            true
          )
        );
      });
      p.endShape(p.CLOSE);
      p.pop();
    }
  };
};

export default ({ location }) => (
  <SketchLayout sketch={sketch} path={location.pathname} description="" />
);
