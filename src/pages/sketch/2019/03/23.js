import React from "react";
import SketchLayout from "~components/sketch-layout";
import polarToCartesian from "~lib/polarToCartesian";

const sketch = function(p) {
  const SPEED = 1;

  let size;
  let prevPoint;
  let outerAngle = 0;
  let innerAngle = p.PI;
  let outerSpeed = SPEED / 250 / p.TWO_PI;
  let innerSpeed = SPEED / p.TWO_PI;
  let hue = p.random(100);

  p.setup = function() {
    p.createCanvas(660, 840);
    p.background(64);
    p.noFill();
    p.strokeWeight(0.5);
    p.colorMode(p.HSB);
    size = p.width * 0.4;
  };

  p.draw = function() {
    p.stroke(hue, p.map(outerAngle, 0, p.TWO_PI * 2, 0, 100), 100);

    const thisFocalPoint = polarToCartesian(
      p.width / 2,
      p.height / 2,
      outerAngle,
      p.map(outerAngle, 0, p.TWO_PI * 2, size, 0),
      true
    );

    const thisPoint = polarToCartesian(
      ...thisFocalPoint,
      innerAngle,
      (outerAngle > p.TWO_PI
        ? p.map(outerAngle, p.TWO_PI, p.TWO_PI * 2, size, 0)
        : p.map(outerAngle, 0, p.TWO_PI, 0, size)) *
        p.noise(0.01, 0.02, p.frameCount / 2000),
      true
    );
    if (prevPoint) {
      p.line(...thisPoint, ...prevPoint);
    }
    prevPoint = thisPoint;
    outerAngle += outerSpeed;
    innerAngle += innerSpeed;
    if (outerAngle > p.TWO_PI * 2) p.noLoop();
  };
};

export default ({ location }) => (
  <SketchLayout sketch={sketch} path={location.pathname} description="" />
);
