import React from "react";
import SketchLayout from "~components/sketch-layout";
import polarToCartesian from "~lib/polarToCartesian";

const sketch = function(p) {
  const STEPS = 3;
  const HUE = p.random(50);

  let points = [[], [], []];
  let alpha = 15;

  p.setup = function() {
    p.createCanvas(660, 840);
    p.background(32);
    p.noFill();
    p.colorMode(p.HSL, 100);
    p.blendMode(p.OVERLAY);

    for (let i = 0; i < points.length; i++) {
      const initPoints = Array.from(Array(3), () => ({
        a: p.random(p.TWO_PI),
        d: p.random(
          (p.width / points.length) * (i + 1),
          (p.height / points.length) * (i + 1)
        ),
        aSpeed: p.random(0.005, 0.01) * p.random([-1, 1]),
      }));

      for (let angle = 0; angle < p.TWO_PI; angle += p.TWO_PI / STEPS) {
        points[i] = points[i].concat(
          initPoints.map(pt => Object.assign({}, pt, { a: pt.a + angle }))
        );
      }
    }
  };

  p.draw = function() {
    for (let i = 0; i < points.length; i++) {
      const pts = points[i];

      p.stroke(
        p.map(p.sin(p.frameCount / (250 * (i + 1))), -1, 1, HUE, HUE + 50),
        100,
        p.map(p.cos(p.frameCount / (750 * (i + 1))), -1, 1, 20, 80),
        alpha
      );

      p.beginShape();
      p.curveVertex(
        ...polarToCartesian(
          p.width / 2,
          p.height / 2,
          pts[pts.length - 3].a,
          pts[pts.length - 3].d,
          true
        )
      );
      p.curveVertex(
        ...polarToCartesian(
          p.width / 2,
          p.height / 2,
          pts[pts.length - 2].a,
          pts[pts.length - 2].d,
          true
        )
      );
      p.curveVertex(
        ...polarToCartesian(
          p.width / 2,
          p.height / 2,
          pts[pts.length - 1].a,
          pts[pts.length - 1].d,
          true
        )
      );
      pts.forEach(({ a, d, aSpeed }, j) => {
        p.curveVertex(
          ...polarToCartesian(p.width / 2, p.height / 2, a, d, true)
        );
        points[i][j].a += aSpeed;
      });

      p.endShape();
    }

    alpha -= 0.005;

    if (alpha < 0) {
      p.noLoop();
    }
  };
};

export default ({ location }) => (
  <SketchLayout sketch={sketch} path={location.pathname} description="" />
);
