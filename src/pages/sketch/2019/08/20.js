import React from "react";
import SketchLayout from "~components/sketch-layout";
import "p5.createloop";
import { Coordinate } from "coordinate-systems";
import { easeInOutQuint as ease } from "~lib/easing";
import Link from "~components/link";

const { spherical } = Coordinate;

const RENDER = process.env.DEV && true;
const DURATION = 20;

const sketch = function(p) {
  const GRID = 30;
  const HUE = p.random(100);
  const ROTATIONS_PER_DURATION = 4;
  const ROTATION = p.TWO_PI / ROTATIONS_PER_DURATION;

  let boxes = [];

  class Box {
    constructor(x, y) {
      this.x = x;
      this.y = y;
      this.rotate = p.QUARTER_PI;
      this.rotateDirection = p.random([-1, 1]);
      this.offset = p.noise(x, y, boxes.length + 1) * p.QUARTER_PI;
      this.prevMod = 0;
    }

    draw() {
      const { theta } = p.animLoop;

      const myTheta = theta + this.offset;

      if (myTheta % ROTATION <= this.prevMod) {
        this.rotate += p.HALF_PI * this.rotateDirection;
      }

      const turnVal = p.map(myTheta % ROTATION, 0, p.HALF_PI, 0, 1);

      p.push();
      p.translate(this.x, this.y, 0);
      p.rotateX(
        p.map(
          ease(turnVal),
          0,
          1,
          this.rotate,
          this.rotate + p.HALF_PI * this.rotateDirection
        )
      );
      p.rotateY(
        p.map(
          ease(turnVal),
          0,
          1,
          this.rotate,
          this.rotate + p.HALF_PI * this.rotateDirection
        )
      );
      p.rotateZ(
        -p.map(
          ease(turnVal),
          0,
          1,
          this.rotate,
          this.rotate + p.HALF_PI * this.rotateDirection
        )
      );
      p.box(GRID * 2);
      p.pop();

      this.prevMod = myTheta % ROTATION;
    }
  }

  p.setup = function() {
    if (RENDER) {
      p.pixelDensity(1);
      p.frameRate(30);
    }

    p.createCanvas(660, 840, p.WEBGL);
    p.colorMode(p.HSB, 100);
    p.noStroke();

    p.createLoop(DURATION, {
      gif: RENDER ? { render: false, open: true } : false,
      noiseRadius: 0.3,
    });

    for (let x = -p.width / 2; x < p.width / 2; x += GRID) {
      for (let y = -p.height / 2; y < p.height / 2; y += GRID) {
        boxes.push(new Box(x + GRID / 2, y + GRID / 2));
      }
    }
  };

  p.draw = function() {
    p.background(0);
    p.specularMaterial(HUE, 100, 75);
    p.pointLight(0, 0, 100, ...spherical([1000, 0, p.PI]).cartesian());
    boxes.forEach(b => b.draw());
  };
};

export default ({ location }) => (
  <SketchLayout sketch={sketch} path={location.pathname} description="" />
);
