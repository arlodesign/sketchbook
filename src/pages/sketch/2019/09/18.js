import React from "react";
import SketchLayout from "~components/sketch-layout";
import Link from "~components/link";
import { easeInOutQuint as ease } from "~lib/easing";
import "p5.createloop";

const RENDER = process.env.DEV && true;
const LINES = 50;
const POINTS = 10;

const sketch = function(p) {
  let innerMarginX;

  p.setup = function() {
    RENDER && p.pixelDensity(1);
    p.createCanvas(660, 840);

    p.createLoop(20, {
      gif: RENDER ? { render: false, open: true } : false,
      noiseRadius: 2,
    });

    innerMarginX = p.width / POINTS;
  };

  function drawShape(i) {
    const { noise1D, noise2D, theta } = p.animLoop;
    const y = p.height * (i / LINES);
    const magnitude = p.sin(p.animLoop.theta * 2);

    p.beginShape();
    p.curveVertex(-1, y);
    p.curveVertex(-1, y);

    for (let j = 0; j <= POINTS; j++) {
      const x =
        innerMarginX +
        ((p.width - innerMarginX * 2) / POINTS) * j +
        noise1D(j * y) * (p.width / POINTS / 3);
      const waveHeight =
        ease(
          p.map(noise2D(x / 50, (p.height * (i / LINES)) / 50), -1, 1, 0, 1)
        ) *
        p.map(
          p.abs(p.width / 2 - x),
          0,
          p.width / 2,
          (p.height / LINES) * 6,
          0
        ) *
        magnitude;
      p.curveVertex(x, y + waveHeight);
    }

    p.curveVertex(p.width + 1, y);
    p.curveVertex(p.width + 1, y);

    if (magnitude < 0) {
      p.vertex(p.width + 1, p.height + 1);
      p.vertex(-1, p.height + 1);
    } else {
      p.vertex(p.width + 1, -1);
      p.vertex(-1, -1);
    }
    p.endShape(p.CLOSE);
  }

  p.draw = function() {
    const { theta } = p.animLoop;

    p.background(255);

    if (p.sin(theta * 2) < 0) {
      for (let i = 0; i <= LINES; i++) {
        drawShape(i);
      }
    } else {
      for (let i = LINES; i >= 0; i--) {
        drawShape(i);
      }
    }
  };
};

export default ({ location }) => (
  <SketchLayout sketch={sketch} path={location.pathname} description="" />
);
