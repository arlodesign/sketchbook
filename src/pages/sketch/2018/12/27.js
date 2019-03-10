import React from "react";
import SketchLayout from "~components/sketch-layout";

const sketch = function(p) {
  const MARGIN = 50;
  let scalar;
  let divisor;
  let noDrawCount1 = 0;
  let noDrawCount2 = 0;

  p.setup = function() {
    p.createCanvas(660, 840);
    p.background(0);
    scalar = p.random(10, 20);
    divisor = p.floor(p.random(3, 5));
  };

  p.draw = function() {
    p.stroke(255);
    p.strokeWeight(divisor);
    const x =
      p.width / 2 +
      (p.cos(p.frameCount / scalar) * p.frameCount) /
        (p.noise(p.frameCount) * (scalar / divisor));
    const y =
      p.height / 2 +
      (p.sin(p.frameCount / scalar) * p.frameCount) /
        (p.noise(p.frameCount) * (scalar / divisor));
    if (
      x > MARGIN &&
      y > MARGIN &&
      x < p.width - MARGIN &&
      y < p.height - MARGIN
    ) {
      p.line(x, y, p.width / 2, p.height / 2);
    } else {
      noDrawCount1++;
    }
    p.stroke(0);
    p.strokeWeight(divisor / 3);
    const x2 =
      p.width / 2 +
      (p.cos(p.frameCount / (scalar / (divisor - 1))) * p.frameCount) /
        (p.noise(p.frameCount) * scalar);
    const y2 =
      p.height / 2 +
      (p.sin(p.frameCount / (scalar / (divisor - 1))) * p.frameCount) /
        (p.noise(p.frameCount) * scalar);
    if (
      x2 > MARGIN &&
      y2 > MARGIN &&
      x2 < p.width - MARGIN &&
      y2 < p.height - MARGIN
    ) {
      p.line(x2, y2, p.width / 2, p.height / 2);
    } else {
      noDrawCount2++;
    }
    if (
      noDrawCount1 > (p.frameCount / scalar) * 2 &&
      noDrawCount2 > (p.frameCount / scalar) * 2
    ) {
      for (let i = 0; i < scalar * 1000; i++) {
        p.stroke(i % divisor ? 0 : 255);
        p.point(
          p.constrain(p.random(0, p.width), MARGIN, p.width - MARGIN),
          p.constrain(p.random(0, p.height), MARGIN, p.height - MARGIN)
        );
      }
      p.noLoop();
    }
  };
};

export default ({ location }) => (
  <SketchLayout sketch={sketch} path={location.pathname} description="Reload page for a different variation." />
);
