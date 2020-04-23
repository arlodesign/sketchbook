import React from "react";
import SketchLayout from "~components/sketch-layout";
import "p5.createloop";
import polarToCartesian from "~lib/polarToCartesian";

const sketch = function(p) {
  const RENDER = p.getURLParams().render;
  const DURATION = 20;
  const RATE = 30;
  const LINES = 125;

  let margin;
  let gap;
  let w;

  p.setup = function() {
    p.pixelDensity(RENDER ? 2 : 1);
    p.frameRate(RATE);
    p.createCanvas(660, 840);
    p.background(255);
    p.createLoop(DURATION, {
      gif: RENDER ? { render: false, open: true } : false,
      noiseRadius: 1,
    });
    p.noFill();

    margin = p.width / 10;
    w = p.width / 2 - margin;
    gap = (p.width - margin * 2) / LINES;
  };

  p.draw = function() {
    const { noise2D, theta } = p.animLoop;
    p.background(255);

    p.push();
    p.translate(p.width / 2, p.height / 2);
    for (let x = -w; x <= w; x += gap) {
      p.line(x, -w, x, w);

      p.beginShape();
      p.vertex(x, -w);
      p.vertex(x, -w);
      for (let y = -w + gap * (LINES / 10); y <= w; y += gap * (LINES / 10)) {
        p.curveVertex(
          ...polarToCartesian(
            x,
            y + noise2D(x, y) * gap,
            p.TWO_PI * noise2D(x / 100, y / 100) + theta,
            gap * noise2D(y / 100, x / 100),
            true
          )
        );
      }

      p.vertex(x, w);
      p.vertex(x, w);
      p.endShape();
    }
    p.pop();
  };
};

export default ({ location }) => (
  <SketchLayout sketch={sketch} path={location.pathname} description="" />
);
