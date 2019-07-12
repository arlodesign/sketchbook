import React from "react";
import SketchLayout from "~components/sketch-layout";
import "p5.createloop";
import polarToCartesian from "~lib/polarToCartesian";

const RENDER = process.env.DEV && false;

const sketch = function(p) {
  const COLORS = p.shuffle(["cyan", "magenta", "yellow"]);

  p.setup = function() {
    if (RENDER) {
      p.pixelDensity(1);
      p.frameRate(30);
    }

    p.createCanvas(660, 840);
    p.noFill();
    p.strokeWeight(20);
    p.strokeJoin(p.ROUND);

    p.createLoop(5, {
      gif: RENDER ? { render: false, open: true } : false,
      noiseRadius: 0.8,
    });
  };

  p.draw = function() {
    p.blendMode(p.BLEND);
    p.background(255);
    p.blendMode(p.MULTIPLY);

    p.translate(p.width / 2, p.height / 2);

    COLORS.forEach((c, i) => {
      p.stroke(c);

      for (let a = 0; a < p.TWO_PI; a += p.TWO_PI / 50) {
        const noiseVal = p.map(p.animLoop.noise2D(i, p.sin(a)), -1, 1, 0, 1);
        const { x, y } = polarToCartesian(0, 0, a, (p.width / 2) * noiseVal);
        p.point(
          p.constrain(x, -p.width / 3, p.width / 3),
          p.constrain(y, -p.width / 3, p.width / 3)
        );
      }
    });
  };
};

export default ({ location }) => (
  <SketchLayout sketch={sketch} path={location.pathname} description="" />
);
