import React from "react";
import SketchLayout from "~components/sketch-layout";
import pack from "pack-spheres";
import { easeInOutQuint as ease } from "~lib/easing";
import "p5.createloop";

const RENDER = process.env.DEV && false;

const sketch = function(p) {
  let circles;

  class Circle {
    constructor(position, radius) {
      this.x = position[0];
      this.y = position[1];
      this.diameter = radius * 2;
    }
    draw() {
      const { theta, noise2D } = p.animLoop;
      const x = (p.height / 2) * this.x;
      const y = (p.height / 2) * this.y;
      const d = p.sqrt(x * x + y * y) / p.sqrt(p.width / 2, p.height / 2);

      p.push();

      p.translate(p.width / 2, p.height / 2);
      p.translate(x, y);

      p.push();
      p.scale(p.map(ease(p.abs(noise2D(this.x, this.y))), 0, 1, 0.5, 1));
      p.noStroke();
      p.fill(p.map(p.cos(d + theta), -1, 1, 0, 192));
      p.circle(0, 0, (p.height / 2) * this.diameter);
      p.pop();

      p.noFill();
      p.stroke(200);
      p.circle(0, 0, (p.height / 2) * this.diameter);

      p.pop();
    }
  }

  p.setup = function() {
    p.createCanvas(660, 840);

    const w = p.width / p.height;
    circles = pack({
      dimensions: 2,
      maxCount: 5000,
      minRadius: 0.01,
      maxRadius: 0.1,
      padding: 0.0025,
      outside: (position, radius) => {
        return (
          position[0] - radius < -w ||
          position[0] + radius > w ||
          position[1] - radius < -1 ||
          position[1] + radius > 1
        );
      },
    }).map(({ position, radius }) => new Circle(position, radius));

    p.createLoop(10, {
      gif: RENDER ? { render: false, open: true } : false,
      noiseRadius: 1,
    });
  };

  p.draw = function() {
    p.background(255);
    circles.forEach(c => c.draw());
  };
};

export default ({ location }) => (
  <SketchLayout sketch={sketch} path={location.pathname} description="" />
);
