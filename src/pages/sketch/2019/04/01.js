import React from "react";
import SketchLayout from "~components/sketch-layout";
import polarToCartesian, {
  polarToCartesianEllipse,
} from "~lib/polarToCartesian";

const sketch = function(p) {
  const CURVE_COUNT = 100;

  let ellipseA = [];
  let ellipseB = [];
  let speedA = p.random(0.1, 0.5) / p.TWO_PI;
  let speedB = p.random(0.1, 0.5) / p.TWO_PI;
  let speedStart = p.random(0.01, 0.05) / p.TWO_PI;
  let angleA = 0;
  let angleB = p.PI;
  let angleStart = 0;
  let curves = [];

  p.setup = function() {
    p.createCanvas(660, 840);
    p.colorMode(p.HSL, 100);
    ellipseA = [
      p.random(p.width / 3, p.width / 2),
      p.random(p.height / 3, p.height / 2),
    ];
    ellipseB = [
      p.random(p.width / 3, p.width / 2),
      p.random(p.height / 3, p.height / 2),
    ];
  };

  p.draw = function() {
    p.background(0);
    p.stroke(255);
    p.noFill();

    curves.push({
      pointA: polarToCartesianEllipse(
        p.width / 2,
        p.height / 2,
        angleA,
        ...ellipseA,
        true
      ),
      pointB: polarToCartesianEllipse(
        p.width / 2,
        p.height / 2,
        angleB,
        ...ellipseB,
        true
      ),
      hue: p.map(p.sin(p.frameCount / 1000), -1, 1, 0, 100),
    });

    const start = polarToCartesian(
      p.width / 2,
      p.height / 2,
      angleStart,
      p.width * 0.4,
      true
    );
    const end = polarToCartesian(
      p.width / 2,
      p.height / 2,
      angleStart + p.PI,
      p.width * 0.4,
      true
    );

    if (curves.length > CURVE_COUNT) curves.shift();
    curves.forEach((c, i) => {
      p.stroke(c.hue, 50, 75, 100 * (i / CURVE_COUNT));
      p.beginShape();
      p.vertex(...start);
      p.bezierVertex(...c.pointA, ...c.pointB, ...end);
      p.endShape();
      p.stroke(c.hue, 50, 50, 25);
      p.line(...c.pointA, ...c.pointB);
    });

    angleA += speedA;
    angleB -= speedB;
    angleStart += speedStart;
  };
};

export default ({ location }) => (
  <SketchLayout sketch={sketch} path={location.pathname} description="" />
);
