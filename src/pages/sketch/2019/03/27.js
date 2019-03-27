import React from "react";
import SketchLayout from "~components/sketch-layout";
import polarToCartesian from "~lib/polarToCartesian";

const sketch = function(p) {
  const DEPTH = 20;
  const HUE = p.random(0, 50);

  let angle = 0;

  class Circle {
    constructor(x, y, z, size) {
      this.x = x;
      this.y = y;
      this.z = z;
      this.size = size;
      this.hue = p.random([HUE, HUE + 50]);
    }

    draw() {
      p.stroke(this.hue, 75, 100);

      for (let a = 0; a < p.TWO_PI; a += 0.01 / p.TWO_PI) {
        p.point(
          ...polarToCartesian(
            p.randomGaussian(this.x, this.z),
            p.randomGaussian(this.y, this.z),
            a,
            this.size,
            true
          )
        );
      }
    }
  }

  p.setup = function() {
    p.createCanvas(660, 840);
    p.colorMode(p.HSB, 100);
    p.background(HUE, 100, 75);
    p.blendMode(p.OVERLAY);
    p.noFill();
  };

  p.draw = function() {
    const c = new Circle(
      p.map(p.sin(angle), -1, 1, p.width, 0),
      p.map(p.sin(angle), -1, 1, p.height, 0),
      p.floor(p.random([1, DEPTH, p.random(DEPTH)])),
      p.randomGaussian(DEPTH, p.width / 3)
    );
    c.draw();
    angle += 0.2 / p.TWO_PI;
    angle > p.TWO_PI && p.noLoop();
  };
};

export default ({ location }) => (
  <SketchLayout sketch={sketch} path={location.pathname} description="" />
);

/*...polarToCartesian(
        p.width / 2,
        p.height / 2,
        angle,
        p.map(p.sin(angle), 1, -1, 0, p.width / 3),
        true
      )*/
