import React from "react";
import SketchLayout from "~components/sketch-layout";
import shuffle from "~lib/shuffle";

const sketch = function(p) {
  let gridSize;
  let vectors = [];
  let maxDist;
  let colors = [];
  let iteration = false;

  function drawShape(x, y, shape) {
    p.push();
    p.translate(x + gridSize / 2, y + gridSize / 2);
    shape(x, y);
    p.pop();
  }
  const triangle = () => {
    p.rotate(p.random([0, p.HALF_PI, p.PI, p.HALF_PI + p.PI]));
    p.beginShape();
    p.vertex(-gridSize / 2, -gridSize / 2);
    p.vertex(gridSize / 2, gridSize / 2);
    p.vertex(-gridSize / 2, gridSize / 2);
    p.endShape(p.CLOSE);
  };
  const circle = () => {
    p.scale(0.8);
    p.ellipse(0, 0, gridSize);
  };
  const square = () => {
    p.rect(-gridSize / 2, -gridSize / 2, gridSize, gridSize);
  };
  const point = (x, y) => {
    p.point(0, 0);
    vectors.push({
      vector: { x: x + gridSize / 2, y: y + gridSize / 2 },
      reached: false,
      reachedBy: 0,
    });
  };

  p.setup = function() {
    p.createCanvas(660, 840);
    p.colorMode(p.HSB, 100);

    const hue = p.random(33);
    colors = shuffle([
      p.color(hue, p.random([20, 40, 60]), 33),
      p.color(hue * 2, p.random([20, 40, 60]), 66),
      p.color(hue * 3, p.random([20, 40, 60]), 99),
    ]);

    gridSize = p.random([20, 30, 60]);

    p.background(colors[0]);

    p.noStroke();
    p.fill(colors[1]);

    for (let x = 0; x < p.width; x += gridSize) {
      for (let y = 0; y < p.height; y += gridSize) {
        drawShape(
          x,
          y,
          p.random([triangle, circle, square, point, point, point])
        );
      }
    }

    p.stroke(colors[0]);
    p.strokeWeight(gridSize / 3);

    vectors[0].reached = true;
    vectors[0].reachedBy = -1;
    maxDist = p.dist(0, 0, p.width, p.height);
  };

  p.draw = function() {
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

    vectors.forEach(({ vector, reached, reachedBy }, i) => {
      if (reached && reachedBy > -1) {
        const { x, y } = vectors[reachedBy].vector;
        p.line(vector.x, vector.y, x, y);
      }
    });
    if (vectors.filter(v => v.reached).length === vectors.length) {
      if (iteration) {
        p.noLoop();
      } else {
        p.stroke(colors[2]);
        p.strokeWeight(gridSize / 5);
        vectors.forEach((_, i) => {
          vectors[i].reached = false;
          vectors[i].reachedBy = 0;
        });
        vectors[0].reached = true;
        vectors[0].reachedBy = -1;
      }
    }
  };
};

export default ({ location }) => (
  <SketchLayout
    sketch={sketch}
    path={location.pathname}
    description="Be patient. Sometimes this will look like it’s doing nothing for a few seconds. Refresh page for a different variation."
  />
);
