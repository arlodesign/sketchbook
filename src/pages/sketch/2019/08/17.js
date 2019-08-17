import React from "react";
import SketchLayout from "~components/sketch-layout";
import "p5.createloop";

const RENDER = process.env.DEV && false;

const sketch = function(p) {
  const GRID = 60;
  const HUE_RANGE = p.random(0.8);

  let boxes = [];

  class Box {
    constructor(x, y) {
      this.x = x;
      this.y = y;
      this.canvas = p.createGraphics(GRID, GRID);
      this.canvas.colorMode(p.HSB, 1);
      this.rotate = (p.TWO_PI / 8) * p.random([1, 3, 5, 7]);
      this.offset = p.noise(x, y) * p.TWO_PI;
    }

    draw() {
      const { noise2D, theta } = p.animLoop;
      const loopPosition =
        theta + this.offset > p.TWO_PI
          ? theta + this.offset - p.TWO_PI
          : theta + this.offset;
      const lineX = p.map(
        loopPosition,
        0,
        p.TWO_PI,
        -GRID / 2 - GRID,
        GRID / 2 + GRID
      );
      const hue = p.map(
        noise2D(
          p.sin(theta),
          p.dist(p.width / 2, p.height / 2, this.x, this.y)
        ),
        -1,
        1,
        HUE_RANGE,
        HUE_RANGE + 0.2
      );

      this.canvas.push();
      this.canvas.translate(GRID / 2, GRID / 2);
      this.canvas.rotate(this.rotate);
      this.canvas.background(hue, 1, 0.25);
      this.canvas.stroke(hue, 0.5, 0.75);
      this.canvas.strokeWeight(GRID);
      this.canvas.line(lineX, -GRID, lineX, GRID);
      this.canvas.pop();

      p.image(this.canvas, this.x, this.y);
    }
  }

  p.setup = function() {
    if (RENDER) {
      p.pixelDensity(1);
      p.frameRate(30);
    }

    p.createCanvas(660, 840);

    p.createLoop(5, {
      gif: RENDER ? { render: false, open: true } : false,
      noiseRadius: 0.3,
    });

    for (let x = 0; x < p.width; x += GRID) {
      for (let y = 0; y < p.height; y += GRID) {
        boxes.push(new Box(x, y));
      }
    }
  };

  p.draw = function() {
    p.background(255);

    boxes.forEach(b => b.draw());
  };
};

export default ({ location }) => (
  <SketchLayout sketch={sketch} path={location.pathname} description="" />
);
