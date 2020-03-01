import React from "react";
import SketchLayout from "~components/sketch-layout";
import "p5.createloop";
import polarToCartesian from "~lib/polarToCartesian";

const sketch = function(p) {
  const RENDER = p.getURLParams().render;
  const DURATION = 30;
  const RATE = 30;
  const COUNT = 1000;
  const NOISE_SCALE = 1000;
  const SIDES = 4;
  const HUE = p.random(1 / 4);
  const HUES = p.shuffle([HUE, HUE + 1 / 4, HUE + 2 / 4, HUE + 3 / 4]);

  let shapes = [];

  class Shape {
    constructor(angle, distance) {
      this.angle = angle;
      this.distance = distance;
    }

    draw() {
      const { theta, noise2D, progress } = p.animLoop;
      const { x, y } = polarToCartesian(
        p.width / 2,
        p.height / 2,
        this.angle + theta,
        this.distance *
          p.map(
            noise2D(this.distance / NOISE_SCALE, p.cos(this.angle)),
            -1,
            1,
            0,
            1.5
          )
      );
      const progressCurve = -4 * progress * progress + 4 * progress;

      p.push();
      p.translate(x, y);
      p.rotate(
        theta + p.QUARTER_PI * noise2D(x / NOISE_SCALE, y / NOISE_SCALE)
      );
      p.beginShape();

      for (
        let a = 0;
        a < p.TWO_PI + p.TWO_PI * (3 / SIDES);
        a += p.TWO_PI / SIDES
      ) {
        const d = p.map(
          noise2D(this.distance / NOISE_SCALE, p.cos(this.angle)),
          -1,
          1,
          (p.width / 6) * (this.angle % (p.TWO_PI / (5 * progressCurve))),
          (p.width / 3) * (this.angle % (p.TWO_PI / (5 * progressCurve)))
        );

        p.curveVertex(...polarToCartesian(0, 0, a, d, true));
      }

      p.endShape();
      p.pop();
    }
  }

  p.setup = function() {
    p.pixelDensity(1);
    p.frameRate(RATE);
    p.createCanvas(660, 840);
    p.createLoop(DURATION, {
      gif: RENDER ? { render: false, open: true } : false,
      noiseRadius: 0.8,
    });
    p.noFill();
    p.noSmooth();
    p.stroke(3);
    p.curveTightness(0.5);
    p.colorMode(p.HSB, 1);

    shapes = Array(HUES.length)
      .fill()
      .map((_, i) =>
        Array(COUNT)
          .fill()
          .map((_, j) => {
            return new Shape(
              (p.TWO_PI / COUNT) * j,
              p.map(
                p.noise(p.sin((p.TWO_PI / COUNT) * (j + 1) * (i + 1))),
                0,
                1,
                p.width / 10,
                p.width / 3
              )
            );
          })
      );
  };

  p.draw = function() {
    p.background(0);

    p.push();
    p.blendMode(p.HARD_LIGHT);
    shapes.forEach((set, i) => {
      p.stroke(HUES[i], 1 / (i + 1), 0.8, 0.2);
      set.forEach(e => e.draw());
    });
    p.pop();

    p.frameCount < DURATION * RATE &&
      console.log(`${p.frameCount} / ${DURATION * RATE}`);
  };
};

export default ({ location }) => (
  <SketchLayout sketch={sketch} path={location.pathname} description="" />
);
