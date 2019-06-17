import React from "react";
import SketchLayout from "~components/sketch-layout";
import polarToCartesian from "~lib/polarToCartesian";

const sketch = function(p) {
  const GAP = 6;

  let initShape = [];
  let shapes = [];

  p.setup = function() {
    p.pixelDensity(1);
    p.createCanvas(660, 840);

    initShape = Array.from(Array(100), () => ({
      a: p.random(p.TWO_PI),
      d: p.random(10),
    }));

    initShape.sort((a, b) => a.a - b.a);
    shapes = [initShape];

    p.noFill();
  };

  p.draw = function() {
    p.background(0);

    for (let i = shapes.length - 1; i >= 0; i--) {
      const shape = shapes[i];

      p.stroke(255, p.map(i, 0, shapes.length, 255, 0));
      p.beginShape();
      p.curveVertex(
        ...polarToCartesian(
          p.width / 2,
          p.height / 2,
          shape[shape.length - 3].a,
          shape[shape.length - 3].d + i * GAP,
          true
        )
      );
      p.curveVertex(
        ...polarToCartesian(
          p.width / 2,
          p.height / 2,
          shape[shape.length - 2].a,
          shape[shape.length - 2].d + i * GAP,
          true
        )
      );
      p.curveVertex(
        ...polarToCartesian(
          p.width / 2,
          p.height / 2,
          shape[shape.length - 1].a,
          shape[shape.length - 1].d + i * GAP,
          true
        )
      );
      shape.forEach(pt =>
        p.curveVertex(
          ...polarToCartesian(
            p.width / 2,
            p.height / 2,
            pt.a,
            pt.d + i * GAP,
            true
          )
        )
      );
      p.endShape();
    }
    shapes.unshift(
      initShape.map(({ a, d }) => ({
        a: p.constrain(
          a * p.map(p.noise(a, p.frameCount / 500), 0, 1, 0.1, 1.9),
          0,
          p.TWO_PI
        ),
        d: d * p.noise(d, p.frameCount / 500) * 10,
      }))
    );
    if (shapes.length > p.height / (GAP * 2)) {
      shapes.pop();
    }
  };
};

export default ({ location }) => (
  <SketchLayout sketch={sketch} path={location.pathname} description="" />
);
