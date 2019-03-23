import React from "react";
import SketchLayout from "~components/sketch-layout";
import polarToCartesian, {
  polarToCartesianEllipse,
} from "~lib/polarToCartesian";

const sketch = function(p) {
  const SPEED = 1 / 500;
  const DETAIL = 4;

  let size;
  let prevPoint;
  let outerAngle = 0;
  let innerAngle = p.PI;
  let outerSpeed = SPEED / DETAIL / p.TWO_PI;
  let innerSpeed = 1 / DETAIL / p.TWO_PI;
  let hue = p.random(100);

  p.setup = function() {
    p.createCanvas(660, 840);
    p.colorMode(p.HSB, 100);
    p.background(hue, 90, 10);
    p.noStroke();
    p.strokeWeight(0.5);
    size = p.width * 0.4;
  };

  p.draw = function() {
    p.fill(
      p.lerpColor(
        p.color(hue, 0, 0),
        p.lerpColor(p.color(hue, 95, 5), p.color(hue, 5, 95), 0.8),
        p.map(p.sin(innerAngle), -1, 1, 0, 1)
      )
    );

    const thisFocalPoint = polarToCartesianEllipse(
      p.width / 2,
      p.height / 2,
      outerAngle + p.HALF_PI,
      p.map(outerAngle, 0, p.TWO_PI * 2, size, 0),
      p.map(outerAngle, 0, p.TWO_PI * 2, size * (p.height / p.width), 0),
      true
    );

    const thisPoint = polarToCartesian(
      ...thisFocalPoint,
      innerAngle,
      (outerAngle > p.TWO_PI
        ? p.map(outerAngle, p.TWO_PI, p.TWO_PI * 2, size, 0)
        : p.map(outerAngle, 0, p.TWO_PI, 0, size)) *
        p.noise(0.01, 0.02, p.frameCount / (DETAIL * 1000)),
      true
    );
    if (prevPoint) {
      p.beginShape();
      p.vertex(...thisPoint);
      p.vertex(...prevPoint);
      p.vertex(...thisFocalPoint);
      p.endShape(p.CLOSE);
    }
    prevPoint = thisPoint;
    outerAngle += outerSpeed;
    innerAngle += innerSpeed;
    if (outerAngle > p.TWO_PI * 2) p.noLoop();
  };
};

export default ({ location }) => (
  <SketchLayout
    sketch={sketch}
    path={location.pathname}
    description="Be patient. This one takes a while to draw."
  />
);
