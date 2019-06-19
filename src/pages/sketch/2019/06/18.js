import React from "react";
import SketchLayout from "~components/sketch-layout";
import polarToCartesian from "~lib/polarToCartesian";

const sketch = function(p) {
  const POINT_QTY = 5;
  const GAP = 20;

  let initShape = [];
  let shapes = [];

  p.setup = function() {
    p.pixelDensity(1);
    p.createCanvas(660, 840);

    initShape = Array.from(Array(POINT_QTY), (_, i) => ({
      a: p.random(p.TWO_PI * (i / POINT_QTY), p.TWO_PI * ((i + 1) / POINT_QTY)),
      d: p.random(10),
    }));

    initShape.sort((a, b) => a.a - b.a);
    shapes = [initShape];

    p.noStroke();
  };

  p.draw = function() {
    p.background(0);

    let aPrev;

    for (let i = shapes.length - 1; i >= 0; i--) {
      const shape = shapes[i].sort((a, b) => a.a - b.a);

      p.fill(i % 2 ? 255 : 0);
      p.beginShape();
      shape.forEach(pt =>
        p.vertex(
          ...polarToCartesian(
            p.width / 2,
            p.height / 2,
            pt.a,
            pt.d + i * GAP,
            true
          )
        )
      );
      p.vertex(
        ...polarToCartesian(
          p.width / 2,
          p.height / 2,
          shape[0].a,
          shape[0].d + i * GAP,
          true
        )
      );
      p.endShape(p.CLOSE);
    }
    shapes.unshift(
      initShape.map(({ a, d }) => ({
        a:
          p.TWO_PI -
          (a * p.map(p.noise(a, p.frameCount / 500), 0, 1, 0.1, 1.9) +
            (p.TWO_PI / 1080) * p.frameCount),
        d: d * p.map(p.noise(d, p.frameCount / 250), 0, 1, 0.1, 2),
      }))
    );
    if (shapes.length > p.height / GAP) {
      shapes.pop();
    }
  };
};

export default ({ location }) => (
  <SketchLayout sketch={sketch} path={location.pathname} description="" />
);
