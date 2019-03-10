import React from "react";
import SketchLayout from "~components/sketch-layout";
import { withPrefix } from "gatsby";

const sketch = function(p) {
  const FONT_SIZE = 130;
  let myFont;
  let vectorCount;
  let vectors = [];
  let boundary;
  let maxDist;

  p.preload = function() {
    myFont = p.loadFont(withPrefix("/assets/NewsCycle-Bold.ttf"));
  };

  p.setup = function() {
    p.pixelDensity(1);
    p.createCanvas(660, 840);
    p.background(0);
    p.stroke(255);
    const string = "SELF-\nESTEEM\nSELF-\nRELIANCE\nSELF-\nCONTROL".split("\n");
    let points = [];
    string.forEach((str, line) => {
      points = points.concat(
        myFont.textToPoints(str, 25, FONT_SIZE * (line + 1), FONT_SIZE, {
          sampleFactor: 1 / (line + 6),
        })
      );
    });
    points.forEach(({ x, y }, i) => {
      const noiseFactor = p.map(i, 0, points.length, 0, 8);
      vectors.push({
        vector: p.createVector(
          x + p.map(p.noise(x, i), 0, 1, -noiseFactor, noiseFactor),
          y + p.map(p.noise(y, i), 0, 1, -noiseFactor, noiseFactor)
        ),
        reached: false,
        reachedBy: 0,
      });
    });
    vectors[0].reached = true;
    vectors[0].reachedBy = -1;
    maxDist = p.dist(0, 0, p.width, p.height);
  };

  p.draw = function() {
    p.background(0);
    vectors.forEach(({ vector, reached, reachedBy }, i) => {
      if (reached && reachedBy > -1) {
        const { x, y } = vectors[reachedBy].vector;
        const distance = p.ceil(p.dist(x, y, vector.x, vector.y));
        p.strokeWeight(p.map(distance, 5, 20, 1, 6, true));
        p.line(x, y, vector.x, vector.y);
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
  <SketchLayout sketch={sketch} path={location.pathname} />
);
