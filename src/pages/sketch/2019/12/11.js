import React from "react";
import SketchLayout from "~components/sketch-layout";
import polarToCartesian from "~lib/polarToCartesian";
import bezierEasing from "bezier-easing";
import "p5.createloop";

const ease = bezierEasing(0, 0.8, 1, 0.2);

const sketch = function(p) {
  const RENDER = p.getURLParams().render;
  const POINTS = 9;
  const COLORS = p.shuffle(["red", "green", "blue", "yellow"]);
  const SHAPES = COLORS.length;

  let shapes = [];

  class Point {
    constructor(aLow, aHigh) {
      this.aLow = aLow;
      this.aHigh = aHigh;
      this.aNoise = p.random();
      this.dNoise = p.random();
    }
    get() {
      const { noise1D, noise2D, theta } = p.animLoop;

      return polarToCartesian(
        0,
        0,
        p.map(
          ease(p.map(noise1D(this.aNoise) * p.cos(theta * 3), -1, 1, 0, 1)),
          0,
          1,
          this.aLow,
          this.aHigh
        ),
        p.map(
          ease(p.map(noise1D(this.dNoise) * p.cos(theta * 7), -1, 1, 0, 1)),
          0,
          1,
          0,
          p.width * 0.5
        ),
        true
      );
    }
  }

  class Shape {
    constructor(i, ...color) {
      this.i = i;
      this.direction = [-1, 1][i % 2];
      this.color = p.color(...color);
      this.points = Array(POINTS)
        .fill()
        .map(
          (_, i) =>
            new Point((p.TWO_PI / POINTS) * i, (p.TWO_PI / POINTS) * (i + 1))
        );
    }
    draw() {
      p.push();
      p.stroke(this.color);
      p.noFill();
      p.translate(p.width / 2, p.height / 2);
      p.rotate(p.animLoop.theta * this.direction);

      p.beginShape();
      this.points.forEach(pt => {
        p.curveVertex(...pt.get());
      });
      p.curveVertex(...this.points[0].get());
      p.curveVertex(...this.points[1].get());
      p.curveVertex(...this.points[2].get());
      p.endShape();

      p.pop();
    }
  }

  p.setup = function() {
    if (RENDER) {
      p.pixelDensity(1);
      p.frameRate(30);
    }

    p.createCanvas(660, 840);
    p.colorMode(p.HSB, 1);
    p.createLoop(20, {
      gif: RENDER ? { render: false, open: true } : false,
      noiseRadius: 2,
    });
    p.strokeWeight(100);

    shapes = Array(SHAPES)
      .fill()
      .map((_, i) => new Shape(i, COLORS[i]));
  };

  p.draw = function() {
    p.blendMode(p.BLEND);
    p.background(0);
    p.blendMode(p.SCREEN);
    shapes.forEach(shape => shape.draw());
  };
};

export default ({ location }) => (
  <SketchLayout sketch={sketch} path={location.pathname} description="" />
);
