import React from "react";
import SketchLayout from "~components/sketch-layout";
import polarToCartesian from "~lib/polarToCartesian";

const sketch = function(p) {
  const COLORS = ["red", "green", "blue"];
  let count;
  let margin;

  p.setup = function() {
    p.createCanvas(660, 840);
    count = p.width / 20;
    margin = p.width * (1 / 6);
    p.strokeWeight(2);
  };

  p.draw = function() {
    p.blendMode(p.BLEND);
    p.background(0);
    p.fill(255);
    p.noStroke();
    p.circle(p.width / 2, p.height / 2, p.width - margin / 2);

    p.noFill();
    p.blendMode(p.MULTIPLY);

    const a = p.map(p.frameCount % 1200, 0, 1200, 0, p.TWO_PI);
    const d = p.map(p.sin(a * 3), -1, 1, 0, p.width / 2 - margin);

    let centerPoints = [
      polarToCartesian(p.width / 2, p.height / 2, a, d),
      polarToCartesian(p.width / 2, p.height / 2, a + p.TWO_PI * (1 / 3), d),
      polarToCartesian(p.width / 2, p.height / 2, a + p.TWO_PI * (2 / 3), d),
    ];
    for (let i = 0; i < 1; i += 1 / count) {
      const r = p.lerp(6, p.width - margin, i);

      centerPoints.forEach((cp, j) => {
        p.stroke(COLORS[j]);
        const x = p.lerp(cp.x, p.width / 2, i);
        const y = p.lerp(cp.y, p.height / 2, i);
        p.circle(x, y, r);
      });
    }
  };
};

export default ({ location }) => (
  <SketchLayout sketch={sketch} path={location.pathname} description="" />
);
