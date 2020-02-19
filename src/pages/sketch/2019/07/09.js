import React from "react";
import SketchLayout from "~components/sketch-layout";
import polarToCartesian from "~lib/polarToCartesian";
import "p5.createloop";

const RENDER = false;

const sketch = (w, h) =>
  function(p) {
    const COLORS = p.shuffle(["cyan", "yellow", "magenta"]);
    let SIZE = 30;

    let circles = [];

    class Circle {
      constructor(x, y) {
        this.x = x;
        this.y = y;
        this.startA = p.random(p.TWO_PI);
      }
      draw() {
        COLORS.forEach((c, i) => {
          p.fill(c);
          p.circle(
            ...polarToCartesian(
              this.x,
              this.y,
              this.startA + p.animLoop.theta + (p.TWO_PI / COLORS.length) * i,
              SIZE * p.map(p.cos(p.animLoop.theta), -1, 1, 0, 2),
              true
            ),
            p.map(
              p.cos(p.animLoop.theta),
              -1,
              1,
              SIZE / 3,
              p.map(p.animLoop.noise2D(this.x, this.y), -1, 1, 1, 3) * SIZE
            )
          );
        });
      }
    }
    p.setup = function() {
      p.pixelDensity(1);
      p.frameRate(30);

      w = w || p.min(p.windowWidth, 960);
      h = h || p.floor(w * (p.windowHeight / p.windowWidth));

      p.createCanvas(w, h);

      p.noStroke();
      p.createLoop(5, {
        gif: RENDER ? { render: false, open: true } : false,
        noiseRadius: 0.2,
      });
      circles.push(new Circle(p.width / 2, p.height / 2));

      let r = SIZE;
      let startA = 0;

      while (r < p.width / 2) {
        let ai = 0;
        while (
          p.dist(
            ...polarToCartesian(p.width / 2, p.height / 2, 0, r, true),
            ...polarToCartesian(p.width / 2, p.height / 2, ai, r, true)
          ) < SIZE
        ) {
          ai = ai + 0.001;
        }

        const circleCount = Math.floor(p.TWO_PI / ai);

        for (
          let a = startA;
          a < p.TWO_PI + startA;
          a += p.TWO_PI / circleCount
        ) {
          circles.push(
            new Circle(
              ...polarToCartesian(p.width / 2, p.height / 2, a, r, true)
            )
          );
        }

        r += SIZE;
        startA += ai;
      }
    };

    p.draw = function() {
      p.blendMode(p.BLEND);
      p.background(255);
      p.blendMode(p.MULTIPLY);
      circles.forEach(c => c.draw());
    };
  };

export default ({ location }) => (
  <SketchLayout
    sketch={sketch(660, 840)}
    path={location.pathname}
    description=""
  />
);

export { sketch };
