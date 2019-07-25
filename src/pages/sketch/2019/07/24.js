import React from "react";
import SketchLayout from "~components/sketch-layout";
import polarToCartesian from "~lib/polarToCartesian";
import "p5.createloop";

const RENDER = process.env.DEV && false;

const sketch = function(p) {
  p.setup = function() {
    if (RENDER) {
      p.pixelDensity(1);
      p.frameRate(30);
    }

    p.createCanvas(660, 840);
    p.noStroke();
    p.colorMode(p.HSB, 1);

    p.createLoop(30, {
      gif: RENDER ? { render: false, open: true } : false,
      noiseRadius: 0.5,
    });
  };

  p.draw = function() {
    p.blendMode(p.BLEND);
    p.background(0.5);
    p.blendMode(p.OVERLAY);
    p.push();
    p.translate(p.width / 2, p.height / 2);

    const size = p.width / 2;

    for (let i = 0; i < 1; i += 0.1) {
      p.push();
      p.rotate(
        p.map(p.sin(p.animLoop.theta), -1, 1, -p.TWO_PI, p.TWO_PI) * (i + 0.1)
      );
      p.fill(i, 1, 1, 0.5);
      p.beginShape();
      p.vertex(
        ...polarToCartesian(
          0,
          0,
          0,
          size *
            i *
            p.map(
              p.animLoop.noise2D(i * p.cos(p.animLoop.theta), 0),
              -1,
              1,
              0.25,
              1
            ),
          true
        )
      );
      p.vertex(
        ...polarToCartesian(
          0,
          0,
          p.TWO_PI * (2 / 5),
          size *
            i *
            p.map(
              p.animLoop.noise2D(
                i * p.cos(p.animLoop.theta),
                p.TWO_PI * (2 / 5)
              ),
              -1,
              1,
              0.5,
              2
            ),
          true
        )
      );
      p.vertex(
        ...polarToCartesian(
          0,
          0,
          p.TWO_PI * (4 / 5),
          size *
            i *
            p.map(
              p.animLoop.noise2D(
                i * p.cos(p.animLoop.theta),
                p.TWO_PI * (4 / 5)
              ),
              -1,
              1,
              0.5,
              3
            ),
          true
        )
      );
      p.vertex(
        ...polarToCartesian(
          0,
          0,
          p.TWO_PI * (1 / 5),
          size *
            i *
            p.map(
              p.animLoop.noise2D(
                i * p.cos(p.animLoop.theta),
                p.TWO_PI * (1 / 5)
              ),
              -1,
              1,
              0.5,
              4
            ),
          true
        )
      );
      p.vertex(
        ...polarToCartesian(
          0,
          0,
          p.TWO_PI * (3 / 5),
          size *
            i *
            p.map(
              p.animLoop.noise2D(
                i * p.cos(p.animLoop.theta),
                p.TWO_PI * (3 / 5)
              ),
              -1,
              1,
              0.5,
              5
            ),
          true
        )
      );
      p.endShape(p.CLOSE);
      p.pop();
    }
    p.pop();
  };
};

export default ({ location }) => (
  <SketchLayout sketch={sketch} path={location.pathname} description="" />
);
