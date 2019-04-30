import React from "react";
import SketchLayout from "~components/sketch-layout";
import shuffle from "~lib/shuffle";

const sketch = function(p) {
  let iterations = 0;
  let points = [];
  let h = 0;
  let hue = p.random(33);
  let divisors = shuffle([1, 2, 3, 5, 8, 13, 21, 34].map(d => d * 100));

  p.setup = function() {
    p.createCanvas(660, 840);
    p.background(192);
    p.colorMode(p.HSB, 100);
    p.blendMode(p.SOFT_LIGHT);
    p.curveTightness(5);
    p.strokeWeight(10);
  };

  p.draw = function() {
    let newPoints = [];
    p.stroke(hue + 33 * iterations, 100, 50);
    console.log(hue);

    for (
      let i = 1 / 3;
      i < 1;
      i += p.noise(p.frameCount / 200, h / 200) / (h / 200)
    ) {
      const x = p.curvePoint(
        p.map(p.cos(p.frameCount / divisors[0]), -1, 1, 0, p.width),
        h,
        h,
        p.map(p.cos(p.frameCount / divisors[1]), -1, 1, 0, p.width),
        i
      );
      const y = p.curvePoint(0, 0, p.height, p.height, i);

      newPoints.push({ x, y });
    }

    for (let i = 0; i < p.min(points.length, newPoints.length); i++) {
      p.line(points[i].x, points[i].y, newPoints[i].x, newPoints[i].y);
      p.line(
        points[i].x,
        p.height - points[i].y,
        newPoints[i].x,
        p.height - newPoints[i].y
      );
      p.line(
        p.width - points[i].x,
        points[i].y,
        p.width - newPoints[i].x,
        newPoints[i].y
      );
      p.line(
        p.width - points[i].x,
        p.height - points[i].y,
        p.width - newPoints[i].x,
        p.height - newPoints[i].y
      );
    }

    points = newPoints;
    h++;

    if (h > p.width) {
      h = 0;
      points = [];
      iterations++;
      iterations > 2 && p.noLoop();
    }
  };
};

export default ({ location }) => (
  <SketchLayout sketch={sketch} path={location.pathname} description="" />
);
