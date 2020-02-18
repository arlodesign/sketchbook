import React from "react";
import SketchLayout from "~components/sketch-layout";
import "p5.createloop";
import polarToCartesian from "~lib/polarToCartesian";

const sketch = (w, h) =>
  function(p) {
    const RENDER = p.getURLParams().render;

    p.setup = function() {
      p.pixelDensity(1);
      p.frameRate(30);

      const w = w || p.min(p.windowWidth, 1920);
      const h = h || p.floor(w * (p.windowHeight / p.windowWidth));

      p.createCanvas(w, h);
      p.stroke(255);
      p.fill(255);
      p.strokeWeight(2);

      p.createLoop(40, {
        gif: RENDER ? { render: false, open: true } : false,
        noiseRadius: 0.5,
      });
    };

    p.draw = function() {
      const { theta, noise1D } = p.animLoop;
      p.blendMode(p.BLEND);
      p.background(0);
      p.blendMode(p.DIFFERENCE);
      p.translate(p.width / 2, p.height / 2);
      p.rotate(p.animLoop.theta);

      for (let a = 0; a < p.TWO_PI; a += p.TWO_PI / 9) {
        p.push();
        p.rotate(a + theta);
        p.translate(
          ...polarToCartesian(
            0,
            0,
            p.TWO_PI / 12,
            p.width * 0.333 * p.sin(theta),
            true
          )
        );
        p.rotate(-theta * 2);

        p.beginShape();
        p.vertex(
          ...polarToCartesian(
            0,
            0,
            p.TWO_PI * noise1D(0.05),
            p.width * 0.333 * p.sin(theta),
            true
          )
        );
        p.vertex(
          ...polarToCartesian(
            0,
            0,
            p.TWO_PI * 0.333 * noise1D(0.06),
            p.width * 0.333 * p.cos(theta),
            true
          )
        );
        p.vertex(
          ...polarToCartesian(
            0,
            0,
            p.TWO_PI * 0.666 * noise1D(0.07),
            p.width * 0.333 * p.sin(theta),
            true
          )
        );
        p.endShape(p.CLOSE);
        p.pop();
      }
    };
  };

export default ({ location }) => (
  <SketchLayout
    sketch={sketch(660, 480)}
    path={location.pathname}
    description=""
  />
);

export { sketch };
