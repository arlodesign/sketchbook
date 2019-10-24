import React from "react";
import SketchLayout from "~components/sketch-layout";
import "p5.createloop";
import bezierEasing from "bezier-easing";
import Link from "~components/link";

const ease = bezierEasing(0, 1, 1, 0);

const RENDER = process.env.DEV && true;
const DURATION = 15;
const GRID = 45;

const sketch = function(p) {
  const HUE = p.random();
  const R = p.HALF_PI;

  let squiggles = [];
  let lines = [];
  let prevMod = 0;
  let d = p.sqrt(GRID * GRID + GRID * GRID);
  let w = GRID / 2;

  class Shape {
    constructor(x, y) {
      this.x = x;
      this.y = y;
      this.rotate = p.random([
        p.QUARTER_PI,
        p.HALF_PI + p.QUARTER_PI,
        p.PI + p.QUARTER_PI,
        p.HALF_PI + p.PI + p.QUARTER_PI,
      ]);
      this.scale = p.random([1, -1]);
      this.rotateDirection = p.random([-1, 1]);
      this.turning = false;
      this.offset = p.noise(x, y) * p.TWO_PI;
    }
  }

  class Squiggle extends Shape {
    constructor(x, y) {
      super(x, y);
    }

    draw(turn) {
      const { theta } = p.animLoop;

      if (turn) {
        this.rotate += R * this.rotateDirection;
      }

      const turnVal = p.map(theta % R, 0, R, 0, 1);

      p.push();
      p.translate(this.x + GRID / 2, this.y + GRID / 2);
      p.rotate(
        p.map(
          ease(turnVal),
          0,
          1,
          this.rotate,
          this.rotate + R * this.rotateDirection
        )
      );
      p.scale(this.scale, 1);
      p.strokeWeight(GRID / 2);

      p.bezier(
        -GRID / 2,
        -GRID / 2,
        GRID / 2,
        -GRID / 2,
        -GRID / 2,
        GRID / 2,
        GRID / 2,
        GRID / 2
      );
      p.pop();
    }
  }

  class Lines extends Shape {
    constructor(x, y) {
      super(x, y);
    }

    draw(turn) {
      const { theta } = p.animLoop;

      if (turn) {
        this.rotate += R * this.rotateDirection;
      }

      const turnVal = p.map(theta % R, 0, R, 0, 1);

      p.push();
      p.translate(this.x + GRID / 2, this.y + GRID / 2);
      p.rotate(
        p.map(
          ease(turnVal),
          0,
          1,
          this.rotate,
          this.rotate + R * this.rotateDirection
        )
      );
      p.strokeWeight(1 + GRID / 3);

      p.line(-GRID / 2, -GRID / 2, GRID / 2, GRID / 2);
      p.pop();
    }
  }

  p.setup = function() {
    p.pixelDensity(RENDER ? 1 : 2);
    p.createCanvas(660, 840);
    p.colorMode(p.HSB, 1);

    p.createLoop(DURATION, {
      gif: RENDER ? { render: false, open: true } : false,
    });

    for (let x = 0; x < p.width; x += GRID) {
      for (let y = 0; y < p.height; y += GRID) {
        squiggles.push(new Squiggle(x, y));
        lines.push(new Lines(x, y));
      }
    }
  };

  p.draw = function() {
    p.background(1 - HUE, 1, 1);

    p.stroke(HUE, 0.8, 0.7);
    squiggles.forEach(b => b.draw(p.animLoop.theta % R <= prevMod));

    p.stroke(1 - HUE, 1, 1);
    lines.forEach(b => b.draw(p.animLoop.theta % R <= prevMod));

    prevMod = p.animLoop.theta % R;
  };
};

export default ({ location }) => (
  <SketchLayout sketch={sketch} path={location.pathname} description="" />
);
