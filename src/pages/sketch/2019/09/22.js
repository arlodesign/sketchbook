import React from "react";
import SketchLayout from "~components/sketch-layout";
import polarToCartesian from "~lib/polarToCartesian";
import "p5.createloop";

const RENDER = process.env.DEV && false;

const sketch = function(p) {
  const PHI = (p.sqrt(5) + 1) / 2;

  p.setup = function() {
    if (RENDER) {
      p.pixelDensity(1);
    }

    p.createCanvas(660, 840);

    p.createLoop(40, {
      gif: RENDER
        ? {
            render: false,
            download: true,
            options: {
              quality: 1,
              workers: 10,
              dither: "FloydSteinberg-serpentine",
              debug: true,
            },
          }
        : false,
      noiseRadius: 0.5,
    });
  };

  p.draw = function() {
    const { noise2D, theta } = p.animLoop;
    p.blendMode(p.BLEND);
    p.background(255);
    p.blendMode(p.MULTIPLY);

    p.translate(p.width / 2, p.height / 2);

    for (let i = 0; i < 3; i++) {
      p.rotate(p.TWO_PI / 3 - theta);
      ["cyan", "magenta", "yellow"].forEach((c, i) => {
        let x = 1;
        p.stroke(c);
        while (x < p.height * 2) {
          p.strokeWeight(p.map(x, 0, p.height, 1, 20, true));
          p.bezier(x, -p.height, 0, 0, 0, 0, x, p.height);
          p.bezier(-x, -p.height, 0, 0, 0, 0, -x, p.height);
          x *= PHI * p.map(noise2D(PHI, i + 1), -1, 1, 1, 4);
        }
      });
    }
  };
};

export default ({ location }) => (
  <SketchLayout sketch={sketch} path={location.pathname} description="" />
);
