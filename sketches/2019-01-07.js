/*---
description: Be patient. Reload page for a different variation.
---*/

const goldenRatio = 1.6180339887;
const magicNumber = 5;

let marginH;
let marginV;
let vertices;
let pointTestIndex = 0;
let currentPoint;
let maxDist;

function setup() {
  pixelDensity(4);
  const myCanvas = createCanvas(660, 840);
  myCanvas.parent("my-canvas");

  marginH = (width - width / goldenRatio) / 2;
  marginV = (height - height / goldenRatio) / 2;
  vertices = Array.from(Array(2500), () => ({
    vector: createVector(
      constrain(
        randomGaussian(width / 2, width / goldenRatio / magicNumber),
        marginH,
        width - marginH
      ),
      constrain(
        randomGaussian(height / 2, height / goldenRatio / magicNumber),
        marginV,
        height - marginV
      )
    ),
    reached: false
  }));
  vertices[0] = {
    vector: createVector(width / 2, height / 2),
    reached: true
  };
  vertices.push({
    vector: createVector(marginH, marginV),
    reached: false
  });
  vertices.push({
    vector: createVector(width - marginH, marginV),
    reached: false
  });
  vertices.push({
    vector: createVector(marginH, height - marginV),
    reached: false
  });
  vertices.push({
    vector: createVector(width - marginH, height - marginV),
    reached: false
  });
  maxDist = dist(marginH, marginV, width - marginH, height - marginV);

  background(255);
}

function draw() {
  const reachedVertices = vertices.filter(v => v.reached);
  let shortestDist = maxDist;
  let reachedVector;
  let unreachedIndex;

  vertices.forEach((vertex, i) => {
    if (!vertex.reached) {
      reachedVertices.forEach(({ vector }) => {
        const thisDist = dist(
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

  strokeWeight(
    map(
      dist(
        width / 2,
        height / 2,
        vertices[unreachedIndex].vector.x,
        vertices[unreachedIndex].vector.y
      ),
      0,
      maxDist / 2,
      1,
      magicNumber
    )
  );
  line(
    reachedVector.x,
    reachedVector.y,
    vertices[unreachedIndex].vector.x,
    vertices[unreachedIndex].vector.y
  );

  vertices[unreachedIndex].reached = true;

  if (vertices.filter(v => v.reached).length === vertices.length) {
    noLoop();
    drawingComplete = true;
  }
}
