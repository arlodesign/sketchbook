import React from "react";
import SketchLayout from "~components/sketch-layout";
import addNoise from "~lib/addNoise";

const sketch = function(p) {
  let points = [];

  function getVectors() {
    return {
      position: p.createVector(
        p.randomGaussian(p.width / 2, p.width / 15),
        p.randomGaussian(p.height / 2, p.height / 15)
      ),
      velocity: p.createVector(p.random(-0.1, 0.1), p.random(-0.1, 0.1)),
      acceleration: p.createVector(p.random(-0.1, 0.1), p.random(-0.1, 0.1)),
    };
  }

  p.setup = function() {
    p.createCanvas(660, 840);
    points = new Array(50).fill().map(_ => getVectors());
    p.background(0);
  };

  p.draw = function() {
    points.forEach(({ position, velocity, acceleration }, i) => {
      points[i].position = position.add(velocity.add(acceleration));
      if (
        position.x < 0 ||
        position.x > p.width ||
        position.y < 0 ||
        position.y > p.height
      ) {
        points[i] = getVectors();
      }
    });
    let points2 = points.map(p => ({
      position: p.position,
      reached: false,
    }));
    points2[0].reached = true;
    while (points2.filter(point => point.reached).length < points2.length) {
      const MAX = p.dist(0, 0, p.width, p.height) * 2;
      let shortest = MAX;
      let reachedIndex;
      let unreachedIndex;
      points2.forEach((point, i) => {
        if (!point.reached) return;
        points2.forEach((point2, i2) => {
          if (point2.reached) return;
          const THIS_DIST = p.dist(
            point.position.x,
            point.position.y,
            point2.position.x,
            point2.position.y
          );
          if (THIS_DIST < shortest) {
            shortest = THIS_DIST;
            reachedIndex = i;
            unreachedIndex = i2;
          }
        });
      });
      p.stroke(
        255 * p.cos(p.frameCount / 100),
        p.map(
          p.dist(
            p.width / 2,
            p.height / 2,
            points2[unreachedIndex].position.x,
            points2[unreachedIndex].position.y
          ),
          0,
          p.dist(0, 0, p.width / 2, p.height / 2),
          64,
          0
        )
      );
      p.line(
        points2[reachedIndex].position.x,
        points2[reachedIndex].position.y,
        points2[unreachedIndex].position.x,
        points2[unreachedIndex].position.y
      );
      points2[unreachedIndex].reached = true;
    }
    addNoise(p, 0.02);
    if (p.frameCount > 800) {
      p.noLoop();
    }
  };
};

export default ({ location }) => (
  <SketchLayout sketch={sketch} path={location.pathname} />
);
