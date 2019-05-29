import React from "react";
import SketchLayout from "~components/sketch-layout";
import polarToCartesian from "~lib/polarToCartesian";

const sketch = function(p) {
  const RINGS = 10;
  const SPEED = 10;

  p.setup = function() {
    p.createCanvas(660, 840);
    p.noStroke();
    p.noFill();
    p.colorMode(p.HSB, 100);
  };

  p.draw = function() {
    p.blendMode(p.BLEND);
    p.background(255);
    p.blendMode(p.HARD_LIGHT);

    p.translate(p.width / 2, p.height / 2);
    p.rotate(p.HALF_PI / 2);
    for (let r = 1; r <= RINGS; r++) {
      const START = p.map(
        r,
        1,
        RINGS,
        p.frameCount / (SPEED * 10),
        p.frameCount / (SPEED * 100)
      );
      const DIST = p.map(p.sin(p.frameCount / (SPEED * 50)), -1, 1, 4, 1);

      for (let a = 0 + START; a < p.TWO_PI + START; a += p.TWO_PI / r) {
        const { x, y } = polarToCartesian(
          DIST,
          DIST,
          a,
          p.map(r, 1, RINGS, 0, p.height * 0.666)
        );

        p.strokeWeight(p.map(r, 1, RINGS, 20, 0));
        p.stroke(p.map(p.sin(a), -1, 1, 0, 100), 75, 50);

        p.beginShape();
        p.vertex(x, y);
        p.vertex(-x, y);
        p.vertex(-x, -y);
        p.vertex(x, -y);
        p.endShape(p.CLOSE);
      }
    }
  };
};

export default ({ location }) => (
  <SketchLayout sketch={sketch} path={location.pathname} description="" />
);
