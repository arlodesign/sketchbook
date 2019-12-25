import React from "react";
import SketchLayout from "~components/sketch-layout";
import "p5.createloop";
import polarToCartesian from "~lib/polarToCartesian";

const sketch = function(p) {
  const RENDER = p.getURLParams().render;
  const POINTS = 5;
  const COLORS = p.shuffle(["cyan", "magenta", "yellow"]);

  p.setup = function() {
    p.pixelDensity(1);
    p.frameRate(30);

    p.createCanvas(660, 840);
    p.createLoop(40, {
      gif: RENDER ? { render: false, open: true } : false,
    });
    p.strokeWeight(2);
    p.strokeJoin(p.ROUND);
  };

  p.draw = function() {
    const { theta } = p.animLoop;
    p.blendMode(p.BLEND);
    p.background(255);
    p.blendMode(p.MULTIPLY);

    for (let x1 = 50; x1 <= p.width - 50; x1 += (p.width - 100) / 100) {
      COLORS.forEach((c, i) => {
        p.stroke(c);
        p.beginShape();

        for (let pt = 0; pt < POINTS; pt++) {
          const y = p.map(pt, 0, POINTS - 1, 0, p.height);
          const x =
            x1 +
            (p.width / (i + POINTS)) *
              p.cos(
                theta *
                  p.floor(
                    p.dist(
                      x1,
                      y,
                      ...polarToCartesian(
                        p.width / 2,
                        p.height / 2,
                        -theta,
                        (p.width / 2) * p.sin(theta * 2),
                        true
                      )
                    ) / 100
                  )
              );
          p.curveVertex(x, y);
        }

        p.endShape();
      });
    }
  };
};

export default ({ location }) => (
  <SketchLayout sketch={sketch} path={location.pathname} description="" />
);
