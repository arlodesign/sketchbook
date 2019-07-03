import React from "react";
import SketchLayout from "~components/sketch-layout";
import polarToCartesian from "~lib/polarToCartesian";

const sketch = function(p) {
  const GAP = 6;
  const HUE = p.random(80);

  let initShape = [];
  let shapes = [];

  p.setup = function() {
    p.pixelDensity(1);
    p.createCanvas(660, 840);
    p.colorMode(p.HSB, 100);

    initShape = Array.from(Array(15), () => ({
      x: p.mouseX,
      y: p.mouseY,
      a: p.random(p.TWO_PI),
      d: p.random(GAP),
    }));

    initShape.sort((a, b) => a.a - b.a);
    shapes = [initShape];

    p.noStroke();
    // p.strokeWeight(GAP);
  };

  p.draw = function() {
    p.background(HUE + 20, 100, 20);

    for (let i = shapes.length - 1; i >= 0; i--) {
      const shape = shapes[i];

      p.fill(
        p.map(i, 0, shapes.length, HUE, HUE + 20),
        100,
        p.map(i, 0, shapes.length, 100, 20)
      );
      p.beginShape();
      p.curveVertex(
        ...polarToCartesian(
          shape[shape.length - 3].x,
          shape[shape.length - 3].y,
          shape[shape.length - 3].a,
          shape[shape.length - 3].d + i * GAP,
          true
        )
      );
      p.curveVertex(
        ...polarToCartesian(
          shape[shape.length - 2].x,
          shape[shape.length - 2].y,
          shape[shape.length - 2].a,
          shape[shape.length - 2].d + i * GAP,
          true
        )
      );
      p.curveVertex(
        ...polarToCartesian(
          shape[shape.length - 1].x,
          shape[shape.length - 1].y,
          shape[shape.length - 1].a,
          shape[shape.length - 1].d + i * GAP,
          true
        )
      );
      shape.forEach(pt =>
        p.curveVertex(
          ...polarToCartesian(pt.x, pt.y, pt.a, pt.d + i * GAP, true)
        )
      );
      p.endShape();
    }
    shapes.unshift(
      initShape.map(({ a, d }) => ({
        x: p.mouseX,
        y: p.mouseY,
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

  p.touchMoved = function() {
    if (
      p.mouseX >= 0 &&
      p.mouseY >= 0 &&
      p.mouseX <= p.width &&
      p.mouseY <= p.height
    ) {
      return false;
    }
  };
};

export default ({ location }) => (
  <SketchLayout
    sketch={sketch}
    path={location.pathname}
    description="Move pointer or finger over sketch."
  />
);
