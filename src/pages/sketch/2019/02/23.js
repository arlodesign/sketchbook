import React from "react";
import SketchLayout from "~components/sketch-layout";
import polarToCartesian from "~lib/polarToCartesian";
import alternate from "~lib/alternate";

const sketch = function(p) {
  const SPEED = 0.4;
  const ALPHA = 10;

  let axis;
  let distance;
  let hueA;
  let hueB;

  p.setup = function() {
    p.createCanvas(660, 840);

    p.noFill();
    p.background(240);
    p.colorMode(p.HSB, 100);
    p.blendMode(p.HARD_LIGHT);
    distance = p.dist(0, 0, p.width, p.height) * 3;
    hueA = p.random(0, 49);
    hueB = p.random(50, 100);
    axis = [-p.width / 3, -p.height / 3];
  };

  const drawShapes = nfn => {
    p.beginShape();
    for (let r = 0; r < p.TWO_PI; r += SPEED / 3) {
      const { x, y } = polarToCartesian(
        ...axis,
        r * p.noise(distance / 1000, nfn(r + p.frameCount / 1000)),
        distance * p.noise(r / 1000, nfn(r + p.frameCount / 500))
      );
      p.vertex(x, y);
    }
    p.endShape();
  };

  p.draw = function() {
    alternate(
      p.frameCount,
      () => {
        p.stroke(
          hueA,
          p.map(p.tan(p.frameCount / 300), -1, 1, 66, 33),
          66,
          ALPHA
        );
        drawShapes(Math.cos);
      },
      () => {
        p.stroke(
          hueB,
          p.map(p.tan(p.frameCount / 300), -1, 1, 33, 66),
          66,
          ALPHA
        );
        drawShapes(Math.sin);
      }
    );
    distance -= SPEED;

    if (distance < p.dist(0, 0, ...axis)) {
      p.noLoop();
    }
  };
};

export default ({ location }) => (
  <SketchLayout
    sketch={sketch}
    path={location.pathname}
    description="Be patient. Sometimes this one starts drawing off-canvas."
  />
);
