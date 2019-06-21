import React from "react";
import SketchLayout from "~components/sketch-layout";
import polarToCartesian from "~lib/polarToCartesian";

const sketch = function(p) {
  const GAP = 10;

  let initShape = [];
  let shapes = [];

  p.setup = function() {
    p.createCanvas(660, 840, p.WEBGL);

    initShape = Array.from(Array(10), () => ({
      a: p.random(p.TWO_PI),
      d: p.random(),
    }));

    initShape.sort((a, b) => a.a - b.a);
    shapes = [initShape];

    p.noFill();
  };

  p.draw = function() {
    p.background(0);

    p.camera(
      p.sin(p.frameCount / 200) * 200,
      p.cos(p.frameCount / 200) * 200,
      p.map(p.cos(p.frameCount / 1000), -1, 1, 0, 1) * 500,
      0,
      0,
      0,
      0,
      1,
      0
    );

    for (let i = shapes.length - 1; i >= 0; i--) {
      const shape = shapes[i];

      p.stroke(255, p.map(i, 0, shapes.length, 255, 0));
      p.rotateX(p.map(i, 0, shapes.length, 0, p.HALF_PI));
      p.beginShape();
      shape.forEach(pt =>
        p.vertex(...polarToCartesian(0, 0, pt.a, pt.d + i * GAP, true))
      );
      p.endShape(p.CLOSE);
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
