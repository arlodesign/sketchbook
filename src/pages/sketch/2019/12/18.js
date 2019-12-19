import React from "react";
import SketchLayout from "~components/sketch-layout";
import polarToCartesian from "~lib/polarToCartesian";
import { easeInQuart as ease } from "~lib/easing";
import "p5.createloop";
import lerpLine from "~lib/lerpLine";

const sketch = function(p) {
  const RENDER = p.getURLParams().render;
  const POINTS = 7;
  const HUE = p.random(POINTS);
  const VERTICES = 2;

  let points = [];

  class Point {
    constructor(aLow, aHigh) {
      this.aLow = aLow;
      this.aHigh = aHigh;
      this.aNoise = p.random();
      this.dNoise = p.random();
    }
    get() {
      const { noise1D, theta } = p.animLoop;
      return polarToCartesian(
        0,
        0,
        p.map(noise1D(this.aNoise), -1, 1, this.aLow, this.aHigh),
        p.map(noise1D(this.dNoise), -1, 1, 0, p.width / 2) * p.cos(theta * 7)
      );
    }
  }

  p.setup = function() {
    RENDER && p.pixelDensity(1);
    p.createCanvas(660, 840);
    p.colorMode(p.HSL, POINTS);
    p.background(POINTS - HUE, 0.5, 1);
    p.createLoop(120, {
      gif: RENDER ? { render: false, open: true } : false,
      noiseRadius: 1,
    });
    // p.strokeWeight(0.5);

    points = Array(POINTS)
      .fill()
      .map(
        (_, i) =>
          new Point((p.TWO_PI / POINTS) * i, (p.TWO_PI / POINTS) * (i + 1))
      );
  };

  p.draw = function() {
    const { noise1D, theta } = p.animLoop;

    if (!RENDER && p.frameCount > 1 && theta === 0) {
      p.noLoop();
      return;
    }

    p.noFill();
    p.blendMode(p.DIFFERENCE);

    p.translate(
      ...polarToCartesian(
        p.width / 2,
        p.height / 2,
        theta,
        noise1D(0.08) * (p.width / 2),
        true
      )
    );
    p.rotate(p.animLoop.theta);

    points.forEach((pt, ip) => {
      const a = pt.get();
      const b = points[(ip + 1) % POINTS].get();
      const c = points[(ip + 2) % POINTS].get();
      const d = points[(ip + 3) % POINTS].get();

      for (let j = 0; j < 1; j += 1 / VERTICES) {
        const x1 = p.curvePoint(a.x, b.x, c.x, d.x, j);
        const y1 = p.curvePoint(a.y, b.y, c.y, d.y, j);
        const x2 = p.curvePoint(a.x, b.x, c.x, d.x, j + 1 / VERTICES);
        const y2 = p.curvePoint(a.y, b.y, c.y, d.y, j + 1 / VERTICES);

        p.stroke(
          HUE,
          p.map(p.cos((ip + j) * (p.TWO_PI / POINTS)), -1, 1, POINTS, 0),
          p.map(p.sin((ip + j) * (p.TWO_PI / POINTS)), -1, 1, 0, POINTS, true),
          (ease(p.abs(p.sin(theta * 5))) * POINTS) / 2
        );
        lerpLine(p, x1, y1, x2, y2, 0.01);
      }
    });
  };
};

export default ({ location }) => (
  <SketchLayout sketch={sketch} path={location.pathname} description="" />
);
