import React from "react";
import { DVMesh } from "@thi.ng/geom-voronoi";
import SketchLayout from "~components/sketch-layout";
import polarToCartesian from "~lib/polarToCartesian";
import { easeInQuad as ease } from "~lib/easing";
import "p5.createloop";

const RENDER = process.env.DEV && false;
const DURATION = 60;

const sketch = function(p) {
  let points;
  let bounds;

  const hueOffset = p.random(p.TWO_PI);
  const lightnessOffset = p.random(p.TWO_PI);

  const constrainTwoPI = v => (v > p.TWO_PI ? v - p.TWO_PI : v);

  class Point {
    constructor(x, y) {
      this.centerX = x;
      this.centerY = y;
      this.x = x;
      this.y = y;
      this.dist = p.random(p.width / 2);
      this.dir = p.random([1, -1]);
      this.offset = p.random(p.TWO_PI);
    }

    update() {
      const { noise2D, theta } = p.animLoop;
      const { x, y } = polarToCartesian(
        this.centerX,
        this.centerY,
        (this.offset + theta) * this.dir,
        this.dist * noise2D(this.x / 1000, this.y / 1000)
      );
      this.x = x;
      this.y = y;
    }

    getArray() {
      return [this.x, this.y];
    }
  }

  p.setup = function() {
    p.frameRate(60);
    p.createCanvas(660, 840);
    p.colorMode(p.HSL, 1);
    p.background(hueOffset, 1, lightnessOffset);
    p.createLoop(DURATION, {
      gif: RENDER ? { render: false, open: true } : false,
      noiseDetail: 0.1,
    });
    p.noFill();
    p.blendMode(p.HARD_LIGHT);

    bounds = [
      [-p.width / 2, -p.height / 2],
      [p.width / 2, -p.height / 2],
      [p.width / 2, p.height / 2],
      [-p.width / 2, p.height / 2],
    ];

    points = new Array(20)
      .fill()
      .map(
        () =>
          new Point(
            ...polarToCartesian(0, 0, p.random(p.TWO_PI), p.width / 10, true)
          )
      );
  };

  p.draw = function() {
    const { theta } = p.animLoop;
    points.forEach(pt => pt.update());
    p.translate(p.width / 2, p.height / 2);

    let mesh = new DVMesh(points.map(pt => pt.getArray()));
    let cells = mesh.voronoi(bounds);

    p.stroke(
      p.abs(p.sin(constrainTwoPI(theta + hueOffset))),
      1,
      p.abs(p.cos(constrainTwoPI(theta * 4 + lightnessOffset))),
      ease(p.map(theta, 0, p.TWO_PI, 1, 0)) / 3
    );

    cells.forEach((cell, i) => {
      p.beginShape();
      cell.forEach(pt => p.vertex(...pt));
      p.endShape(p.CLOSE);
    });

    p.frameCount === DURATION * 60 && !RENDER && p.noLoop();
  };
};

export default ({ location }) => (
  <SketchLayout sketch={sketch} path={location.pathname} description="" />
);
