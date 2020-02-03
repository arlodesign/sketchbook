import React from "react";
import SketchLayout from "~components/sketch-layout";
import "p5.createloop";

const sketch = function(p) {
  const RENDER = p.getURLParams().render;
  const DURATION = 40;
  const RATE = 60;
  const MULTIPLIERS = p.shuffle([
    p.floor(p.random(1, 3)),
    p.floor(p.random(3, 5)),
    p.floor(p.random(5, 7)),
    p.floor(p.random(7, 9)),
    p.floor(p.random(9, 11)),
  ]);
  const HUES = p.shuffle([
    p.random(1 / 3),
    p.random(1 / 3, 2 / 3),
    p.random(2 / 3, 1),
  ]);
  const MARGIN = 200;

  p.setup = function() {
    p.pixelDensity(2);
    p.frameRate(RATE);
    p.createCanvas(660, 840);
    p.colorMode(p.HSB, 1);
    p.noSmooth();
    p.background(HUES[0], 0.4, 0.3);
    p.strokeCap(p.SQUARE);
    p.blendMode(p.HARD_LIGHT);
    p.createLoop(DURATION, {
      gif: RENDER ? { render: false, open: true } : false,
      noiseRadius: 0.3,
    });
  };

  p.draw = function() {
    const { theta, noise, progress } = p.animLoop;

    let endA = [
      p.width * progress,
      p.sin(theta * MULTIPLIERS[0]) * (p.height / 2 - MARGIN),
    ];
    let endB = [
      p.width * progress,
      p.cos(theta * MULTIPLIERS[1]) * (p.height / 2 - MARGIN),
    ];
    let endC = [
      p.width * progress,
      p.sin(theta * MULTIPLIERS[2]) * (p.height / 2 - MARGIN),
    ];

    p.translate(0, p.height / 2);

    p.stroke(HUES[0], 0.4, 0.3, 0.7);
    p.strokeWeight(3);
    noise() > 0 && p.line(p.width * progress, -p.height / 2 + MARGIN, ...endC);

    p.stroke(HUES[1], 0.3, 0.9, 0.7);
    p.strokeWeight(1);
    p.cos(theta * MULTIPLIERS[3]) > 0 &&
      p.line(p.width * progress, -p.height / 2 + MARGIN, ...endA);

    p.stroke(HUES[2], 0.7, 0.4, 0.7);
    p.strokeWeight(2);
    p.sin(theta * MULTIPLIERS[4]) > 0 &&
      p.line(p.width * progress, -p.height / 2 + MARGIN, ...endB);

    p.frameCount % 100 === 0 &&
      console.info(`${p.frameCount} / ${DURATION * RATE}`);

    !RENDER && p.frameCount === DURATION * RATE && p.noLoop();
  };
};

export default ({ location }) => (
  <SketchLayout sketch={sketch} path={location.pathname} description="" />
);
