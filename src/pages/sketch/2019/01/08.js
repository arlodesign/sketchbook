import React from "react";
import SketchLayout from "~components/sketch-layout";
import isPrime from "~lib/isPrime";

const sketch = function(p) {
  const goldenRatio = 1.6180339887;
  let magicNumber;
  let vertexCount = 1;
  let margin;
  let vertices = [];
  let maxDist;
  let showDots = true;

  p.setup = function() {
    p.createCanvas(660, 840);
    p.background(255);
    magicNumber = p.floor(p.random(5, 8));
    while (!isPrime(vertexCount)) {
      vertexCount = p.floor(p.random(magicNumber * 20, magicNumber * 25));
    }
    const sliceWidth = p.width / 2 / magicNumber;
    margin = sliceWidth / magicNumber;
    maxDist = p.width / 2 - margin;
    for (let i = 0; i < magicNumber; i++) {
      vertices = vertices.concat(
        Array.from(Array(vertexCount * (i + 1)), (_, k) => {
          const angle = p.map(k * magicNumber, 0, vertexCount, 0, p.TWO_PI);
          const distance = p.constrain(
            p.randomGaussian(
              (i * sliceWidth + (i + 1) * sliceWidth) / 2,
              sliceWidth / magicNumber + p.noise(angle) * magicNumber
            ),
            0,
            maxDist
          );
          return {
            vector: p.createVector(
              p.width / 2 + p.cos(angle) * distance,
              p.height / 2 + p.sin(angle) * distance
            ),
            reached: false,
          };
        })
      );
    }
    vertices[p.floor(p.random(vertexCount))].reached = true;
  };

  p.draw = function() {
    p.push();
    p.stroke(showDots ? "red" : 255);
    p.strokeWeight(1);
    vertices
      .filter(v => !v.reached)
      .forEach(({ vector }) => p.point(vector.x, vector.y));
    p.pop();
    const reachedVertices = vertices.filter(v => v.reached);
    let shortestDist = maxDist;
    let reachedVector;
    let unreachedIndex;
    p.strokeWeight(2);
    vertices.forEach((vertex, i) => {
      if (!vertex.reached) {
        reachedVertices.forEach(({ vector }) => {
          const thisDist = p.dist(
            vector.x,
            vector.y,
            vertex.vector.x,
            vertex.vector.y
          );
          if (thisDist < shortestDist) {
            shortestDist = thisDist;
            unreachedIndex = i;
            reachedVector = vector;
          }
        });
      }
    });
    p.line(
      reachedVector.x,
      reachedVector.y,
      vertices[unreachedIndex].vector.x,
      vertices[unreachedIndex].vector.y
    );
    vertices[unreachedIndex].reached = true;
    if (vertices.filter(v => v.reached).length === vertices.length) {
      p.noLoop();
    }
  };

  p.mousePressed = function() {
    showDots = !showDots;
  };
};

export default ({ location }) => (
  <SketchLayout
    sketch={sketch}
    path={location.pathname}
    description="
      Be patient. Reload page for a different variation. Click sketch to toggle
      the vertices.
    "
  />
);
