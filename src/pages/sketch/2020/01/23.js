import React from "react";
import SketchLayout from "~components/sketch-layout";
import "p5.createloop";
import polarToCartesian from "~lib/polarToCartesian";

const sketch = function(p) {
  const RENDER = p.getURLParams().render;
  const DURATION = 20;
  const RATE = 30;
  const LINE_COUNT = 100;
  const GRID = 135;

  let lines = [];
  let cnvs;

  class Line {
    constructor() {
      this.a = p.random(p.TWO_PI);
    }

    draw() {
      cnvs.line(
        cnvs.width / 2,
        cnvs.height / 2,
        ...polarToCartesian(
          cnvs.width / 2,
          cnvs.height / 2,
          this.a * p.animLoop.noise1D(this.a),
          p.sqrt(
            (cnvs.width / 2) * (cnvs.width / 2) +
              (cnvs.height / 2) * (cnvs.height / 2)
          ),
          true
        )
      );
    }
  }

  p.setup = function() {
    p.pixelDensity(RENDER ? 2 : 1);
    p.frameRate(RATE);
    p.createCanvas(660, 840);
    p.createLoop(DURATION, {
      gif: RENDER ? { render: false, open: true } : false,
      noiseRadius: 0.1,
    });

    lines = Array(LINE_COUNT)
      .fill()
      .map(() => new Line());

    cnvs = p.createGraphics(GRID, GRID);
  };

  p.draw = function() {
    const { noise1D } = p.animLoop;
    p.background(255);
    cnvs.background(255);
    lines.forEach(l => l.draw());

    for (let x = 0; x <= p.ceil(p.width / GRID); x++) {
      for (let y = 0; y <= p.ceil(p.height / GRID); y++) {
        p.push();
        p.translate(x * GRID + GRID / 2, y * GRID + GRID / 2);
        p.scale(x % 2 ? 1 : -1, y % 2 ? -1 : 1);
        p.image(cnvs, -GRID / 2, -GRID / 2);
        p.pop();
      }
    }
  };
};

export default ({ location }) => (
  <SketchLayout sketch={sketch} path={location.pathname} description="" />
);
