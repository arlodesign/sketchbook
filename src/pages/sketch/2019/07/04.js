import React from "react";
import SketchLayout from "~components/sketch-layout";
import polarToCartesian from "~lib/polarToCartesian";

const sketch = function(p) {
  const QTY = 4;
  const HUE = p.random(100 / QTY);
  const COLORS = Array.from({ length: QTY }, (_, i) => HUE + (100 / QTY) * i);

  let count;
  let margin;

  p.setup = function() {
    p.createCanvas(660, 840);
    count = p.width / 50;
    margin = p.width * (1 / 8);
    p.strokeWeight(2);
    p.rectMode(p.RADIUS);
    p.colorMode(p.HSB, 100);
  };

  p.draw = function() {
    p.blendMode(p.BLEND);
    p.background(0);

    p.noFill();
    p.blendMode(p.HARD_LIGHT);

    const a = p.map(p.frameCount % 1200, 0, 1200, 0, p.TWO_PI);
    const d = p.map(p.sin(a * 3), -1, 1, 0, p.width / 2 - margin * 2);

    let centerPoints = Array.from({ length: COLORS.length }, (_, i) =>
      polarToCartesian(
        p.width / 2,
        p.height / 2,
        a + p.TWO_PI * (i / COLORS.length),
        d
      )
    );

    for (let i = 0; i < 1; i += 1 / count) {
      const r = p.lerp(10, p.width / 2 - margin, i);
      const br = p.map(p.sin(a * 3), -1, 1, 0, r);

      centerPoints.forEach((cp, j) => {
        p.stroke(COLORS[j], 50, 100);
        const x = p.lerp(cp.x, p.width / 2, i);
        const y = p.lerp(cp.y, p.height / 2, i);
        p.square(x, y, r, br);
      });
    }
  };
};

export default ({ location }) => (
  <SketchLayout sketch={sketch} path={location.pathname} description="" />
);
