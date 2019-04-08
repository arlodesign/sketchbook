import React from "react";
import SketchLayout from "~components/sketch-layout";
import polarToCartesian from "~lib/polarToCartesian";

const sketch = function(p) {
  const GRID = 60;
  const MARGIN = 5;

  class Doodad {
    constructor(x, y) {
      this.x = x;
      this.y = y;
      this.freq = p.TWO_PI / (p.floor(p.random(10, 15)) * 2);
      this.drawFunc = p.random([
        this.pinwheel,
        this.horizontalLines,
        this.verticalLines,
        this.spiralClockwise,
        this.spiralCounterclockwise,
      ]);
    }
    draw() {
      p.push();
      p.translate(this.x, this.y);
      this.drawFunc();
      p.pop();
    }
    pinwheel() {
      p.strokeWeight(2);
      for (let r = 0; r < p.TWO_PI; r += this.freq) {
        p.line(
          ...polarToCartesian(0, 0, r, (GRID / 2 - MARGIN) / 3, true),
          ...polarToCartesian(0, 0, r, GRID / 2 - MARGIN, true)
        );
      }
    }
    horizontalLines() {
      p.strokeWeight(2);
      for (let r = 0; r < p.TWO_PI; r += this.freq) {
        const start = polarToCartesian(0, 0, r, GRID / 2 - (MARGIN + 2), true);
        const end = [-start[0], start[1]];
        p.line(...start, ...end);
      }
    }
    verticalLines() {
      p.strokeWeight(2);
      for (let r = 0; r < p.TWO_PI; r += this.freq) {
        const start = polarToCartesian(0, 0, r, GRID / 2 - (MARGIN + 2), true);
        const end = [start[0], -start[1]];
        p.line(...start, ...end);
      }
    }
    spiralClockwise() {
      const offset = p.random(p.TWO_PI);
      p.noStroke();
      p.fill(0);
      for (let r = 0; r < p.TWO_PI * 2; r += this.freq) {
        p.circle(
          ...polarToCartesian(
            0,
            0,
            r + offset,
            p.map(r, 0, p.TWO_PI * 2, 0, GRID / 2 - MARGIN),
            true
          ),
          2
        );
      }
    }
    spiralCounterclockwise() {
      const offset = p.random(p.TWO_PI);
      p.noStroke();
      p.fill(0);
      for (let r = p.TWO_PI; r > -p.TWO_PI; r -= this.freq) {
        p.circle(
          ...polarToCartesian(
            0,
            0,
            r + offset,
            p.map(r, p.TWO_PI, -p.TWO_PI, 0, GRID / 2 - MARGIN),
            true
          ),
          2
        );
      }
    }
  }

  let doodads = [];

  p.setup = function() {
    p.createCanvas(660, 840);
    for (let x = GRID / 2; x < p.width; x += GRID) {
      for (let y = GRID / 2; y < p.height; y += GRID) {
        doodads.push(new Doodad(x, y));
      }
    }
  };

  p.draw = function() {
    p.background(255);
    doodads.forEach(d => d.draw());
    p.noLoop();
  };
};

export default ({ location }) => (
  <SketchLayout sketch={sketch} path={location.pathname} description="" />
);
