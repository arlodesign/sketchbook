import React from "react";
import SketchLayout from "~components/sketch-layout";
import "p5.createloop";
import polarToCartesian from "~lib/polarToCartesian";

const RENDER = process.env.DEV && false;

const sketch = function(p) {
  const QTY = 5;
  const HUE = p.random(100 / QTY);
  const COLORS = Array.from({ length: QTY }, (_, i) => HUE + (100 / QTY) * i);

  p.setup = function() {
    if (RENDER) {
      p.pixelDensity(1);
      p.frameRate(30);
    }

    p.createCanvas(660, 840);
    p.strokeWeight(2);
    p.colorMode(p.HSB, 100);

    p.createLoop(10, {
      gif: RENDER ? { render: false, open: true } : false,
      noiseRadius: 0.5,
    });
  };

  p.draw = function() {
    const { noise2D, theta } = p.animLoop;
    p.blendMode(p.BLEND);
    p.background(255);

    p.noFill();
    p.blendMode(p.MULTIPLY);
    p.strokeWeight(4);

    p.push();
    p.translate(
      ...polarToCartesian(p.width / 2, p.height / 2, theta, p.width / 5, true)
    );

    COLORS.forEach((c, i) => {
      const center = polarToCartesian(
        0,
        0,
        theta + p.QUARTER_PI * i,
        noise2D(p.cos(theta), i) * (p.width / 2),
        true
      );
      const burstRadius = p.map(
        noise2D(p.sin(theta), i),
        -1,
        1,
        0,
        p.width / 3
      );
      const burstLines = p.floor(p.map(burstRadius, 0, p.width / 3, 2, 100));

      p.stroke(c, 50, 100);

      for (let a = theta; a < p.TWO_PI + theta; a += p.TWO_PI / burstLines) {
        p.line(
          0,
          0,
          ...polarToCartesian(
            ...center,
            theta + a + p.QUARTER_PI * i,
            burstRadius,
            true
          )
        );
      }
    });
  };
};

export default ({ location }) => (
  <SketchLayout sketch={sketch} path={location.pathname} description="" />
);
