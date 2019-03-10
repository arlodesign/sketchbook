import React from "react";
import SketchLayout from "~components/sketch-layout";

const sketch = function(p) {
  let vectors = [];
  let gridSize;
  let maxDist;
  let showDots = true;

  p.setup = function() {
    p.createCanvas(660, 840);
    p.background(255);
    gridSize = p.floor(p.random(25, 50));
    maxDist = p.dist(0, 0, p.width, p.height);
    for (let x = 0; x <= gridSize; x++) {
      for (let y = 0; y <= gridSize; y++) {
        if (p.random() < 0.2) {
          vectors.push({
            vector: p.createVector(
              (p.width / gridSize) * x,
              (p.height / gridSize) * y
            ),
            reached: false,
            reachedBy: 0,
          });
        }
      }
    }
    vectors[0].reached = true;
    vectors[0].reachedBy = -1;
  };

  p.draw = function() {
    p.push();
    p.stroke(showDots ? "red" : 255);
    p.strokeWeight(1);
    vectors
      .filter(v => !v.reached)
      .forEach(({ vector }) => p.point(vector.x, vector.y));
    p.pop();
    vectors.forEach(({ vector, reached, reachedBy }, i) => {
      if (reached && reachedBy > -1) {
        const { x, y } = vectors[reachedBy].vector;
        p.stroke(0);
        p.strokeWeight(2);
        p.noFill();
        p.line(vector.x, vector.y, x, y);
        p.fill(0);
        p.triangle(vector.x, vector.y, x, y, x, vector.y);
        if ((vector.x === x || vector.y === y) && i % 3 === 0) {
          p.ellipse(x, y, p.dist(x, y, vector.x, vector.y));
        }
      }
    });
    let shortestDist = maxDist;
    let reachedByIndex;
    let unreachedIndex;
    vectors.forEach((uv, ui) => {
      if (!uv.reached) {
        vectors.forEach((rv, ri) => {
          if (rv.reached) {
            const thisDist = p.dist(
              uv.vector.x,
              uv.vector.y,
              rv.vector.x,
              rv.vector.y
            );
            if (thisDist < shortestDist) {
              shortestDist = thisDist;
              unreachedIndex = ui;
              reachedByIndex = ri;
            }
          }
        });
      }
    });
    vectors[unreachedIndex].reached = true;
    vectors[unreachedIndex].reachedBy = reachedByIndex;

    if (vectors.filter(v => v.reached).length === vectors.length) {
      p.noLoop();
    }
  };
};

export default ({ location }) => (
  <SketchLayout sketch={sketch} path={location.pathname} description="Reload page for a different variation." />
);
