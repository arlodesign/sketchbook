import React from "react";
import SketchLayout from "~components/sketch-layout";
import "p5.createloop";

const sketch = function(p) {
  const RENDER = p.getURLParams().render;
  const DURATION = 20;
  const RATE = 30;

  const COLORS = p.shuffle(["cyan", "magenta", "yellow"]);

  let margin;
  let h;

  p.setup = function() {
    p.pixelDensity(RENDER ? 2 : 1);
    p.frameRate(RATE);
    p.noSmooth();
    p.strokeCap(p.SQUARE);
    p.createCanvas(660, 840);
    p.background(255);
    p.createLoop(DURATION, {
      gif: RENDER ? { render: false, open: true } : false,
      noiseRadius: 0.1,
    });
    p.rectMode(p.CORNERS);
    margin = p.floor(p.width / 30);
    h = p.height - margin * 2;
  };

  p.draw = function() {
    const { theta, noise2D } = p.animLoop;
    p.blendMode(p.BLEND);
    p.background(255);
    p.blendMode(p.MULTIPLY);

    for (let x = margin; x <= p.width - margin; x++) {
      for (let i = 0; i < 3; i++) {
        p.stroke(COLORS[i]);
        const gap = p.map(
          p.sin(
            theta * (i + 1) +
              p.map(x, margin, p.width - margin, 0, p.TWO_PI) +
              i
          ),
          -1,
          1,
          h / 4,
          h
        );
        const y = p.map(noise2D(x, i), -1, 1, margin, margin + h - gap);

        p.line(x, margin, x + 1, y);
        p.line(x, y + gap, x + 1, p.height - margin);
      }
    }
  };
};

export default ({ location }) => (
  <SketchLayout sketch={sketch} path={location.pathname} description="" />
);
