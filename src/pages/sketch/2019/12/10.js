import React from "react";
import SketchLayout from "~components/sketch-layout";
import polarToCartesian from "~lib/polarToCartesian";
import "p5.createloop";

const sketch = function(p) {
  const SHAPES = 3;
  const RENDER = p.getURLParams().render;
  const POINTS = 25;
  const COLORS = p.shuffle(["cyan", "magenta", "yellow"]);

  let shapes = [];

  class Point {
    constructor(aLow, aHigh) {
      this.aLow = aLow;
      this.aHigh = aHigh;
      this.aNoise = p.random();
      this.dNoise = p.random();
    }
    get() {
      const { noise1D } = p.animLoop;

      return polarToCartesian(
        0,
        0,
        p.map(
          noise1D(this.aNoise) * p.cos(p.animLoop.theta),
          -1,
          1,
          this.aLow,
          this.aHigh
        ),
        p.map(
          noise1D(this.dNoise) * p.cos(p.animLoop.theta),
          -1,
          1,
          0,
          p.width * 0.9
        ),
        true
      );
    }
  }

  class Shape {
    constructor(i, ...color) {
      this.i = i;
      this.direction = p.random([-1, 1]);
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
      p.fill(this.color);
      p.noStroke();
      p.translate(p.width / 2, p.height / 2);
      p.rotate(p.animLoop.theta * this.i * this.direction);

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
      noiseRadius: 0.3,
    });

    shapes = Array(SHAPES)
      .fill()
      .map((_, i) => new Shape(i, COLORS[i]));
  };

  p.draw = function() {
    p.blendMode(p.BLEND);
    p.background(255);
    p.blendMode(p.MULTIPLY);
    shapes.forEach(shape => shape.draw());
  };
};

export default ({ location }) => (
  <SketchLayout sketch={sketch} path={location.pathname} description="" />
);
