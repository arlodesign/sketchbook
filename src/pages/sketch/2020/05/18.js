import React from "react";
import SketchLayout from "~components/sketch-layout";
import "p5.createloop";
import { easeInCubic, easeInOutCubic } from "~lib/easing";

const sketch = function (p) {
  const RENDER = p.getURLParams().render;
  const DURATION = 20;
  const RATE = 30;
  const CIRCLES = 1000;

  let circles = [];
  let easedProgress = 0;
  let diameter;

  class Circle {
    constructor(x, multiplier, color) {
      this.x = x;
      this.multiplier = multiplier;
      this.color = color;
    }

    draw() {
      const { noise1D, noise2D, theta } = p.animLoop;
      const x =
        this.x * easedProgress * p.map(easedProgress, 0, 1, noise1D(this.x), 1);
      const y =
        noise2D(this.x, this.color.length) *
        diameter *
        easeInOutCubic(p.abs(p.sin(theta)));

      p.push();
      p.stroke(this.color);
      p.translate(p.width / 2, p.height / 2);
      p.circle(x, y, diameter);
      p.pop();
    }
  }

  p.setup = function () {
    p.pixelDensity(RENDER ? 2 : 1);
    p.frameRate(RATE);
    p.createCanvas(660, 840);
    p.createLoop(DURATION, {
      gif: RENDER ? { render: false, open: true } : false,
      noiseRadius: 2,
    });
    p.noFill();
    p.noSmooth();

    diameter = p.width / 5;

    for (let i = 0; i < CIRCLES; i++) {
      circles.push(
        new Circle(
          p.map(
            i,
            0,
            CIRCLES - 1,
            -p.width / 2 + diameter,
            p.width / 2 - diameter
          ),
          p.random(-1, 1),
          ["red", "blue", "green", "yellow"][i % 4]
        )
      );
    }
  };

  p.draw = function () {
    const { progress } = p.animLoop;

    p.blendMode(p.BLEND);
    p.background(0);
    p.blendMode(p.SCREEN);

    easedProgress = easeInCubic(-4 * progress * progress + 4 * progress);

    circles.forEach((circle) => circle.draw());

    p.frameCount % 100 === 0 && console.info(`${p.floor(progress * 100)}%`);
    if (!RENDER && p.frameCount === DURATION * RATE) {
      console.info("100%");
      // p.noLoop();
    }
  };
};

export default ({ location }) => (
  <SketchLayout sketch={sketch} path={location.pathname} description="" />
);
