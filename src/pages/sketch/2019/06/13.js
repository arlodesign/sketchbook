import React from "react";
import SketchLayout from "~components/sketch-layout";
import polarToCartesian from "~lib/polarToCartesian";

const sketch = function(p) {
  const STEPS = 50;

  let points = [];

  p.setup = function() {
    p.createCanvas(660, 840);
    p.stroke(255);
    p.strokeWeight(2);
    p.noFill();
    p.colorMode(p.HSB, 100);

    const initPoints = Array.from(Array(3), () => ({
      a: p.random(p.TWO_PI),
      d: p.random(p.height),
      aSpeed: p.random(0.01) * p.random([-1, 1]),
    }));

    for (let angle = 0; angle < p.TWO_PI; angle += p.TWO_PI / STEPS) {
      points = points.concat(
        initPoints.map(pt => Object.assign({}, pt, { a: pt.a + angle }))
      );
    }
  };

  p.draw = function() {
    p.background(0);

    p.beginShape();
    p.curveVertex(
      ...polarToCartesian(
        p.width / 2,
        p.height / 2,
        points[points.length - 3].a,
        points[points.length - 3].d,
        true
      )
    );
    p.curveVertex(
      ...polarToCartesian(
        p.width / 2,
        p.height / 2,
        points[points.length - 2].a,
        points[points.length - 2].d,
        true
      )
    );
    p.curveVertex(
      ...polarToCartesian(
        p.width / 2,
        p.height / 2,
        points[points.length - 1].a,
        points[points.length - 1].d,
        true
      )
    );
    points.forEach(({ a, d, aSpeed }, i) => {
      p.curveVertex(...polarToCartesian(p.width / 2, p.height / 2, a, d, true));
      points[i].a += aSpeed;
    });

    p.endShape();

    p.push();
    p.blendMode(p.MULTIPLY);
    p.fill(p.map(p.sin(p.frameCount / 500), -1, 1, 0, 100), 100, 100);
    p.rect(0, 0, p.width, p.height);
    p.pop();
  };
};

export default ({ location }) => (
  <SketchLayout sketch={sketch} path={location.pathname} description="" />
);
