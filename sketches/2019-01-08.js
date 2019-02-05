/*---
description: Be patient. Reload page for a different variation. Click sketch to toggle the vertices.
---*/

const goldenRatio = 1.6180339887;

let magicNumber;
let vertexCount = 1;
let margin;
let vertices = [];
let maxDist;
let showDots = true;

function setup() {
  pixelDensity(4);
  const myCanvas = createCanvas(660, 840);
  myCanvas.parent("my-canvas");
  background(255);

  magicNumber = floor(random(5, 8));
  while (!isPrime(vertexCount)) {
    vertexCount = floor(random(magicNumber * 20, magicNumber * 25));
  }

  const sliceWidth = width / 2 / magicNumber;
  margin = sliceWidth / magicNumber;
  maxDist = width / 2 - margin;

  for (let i = 0; i < magicNumber; i++) {
    vertices = vertices.concat(
      Array.from(Array(vertexCount * (i + 1)), (_, k) => {
        const angle = map(k * magicNumber, 0, vertexCount, 0, TWO_PI);
        const distance = constrain(
          randomGaussian(
            (i * sliceWidth + (i + 1) * sliceWidth) / 2,
            sliceWidth / magicNumber + noise(angle) * magicNumber
          ),
          0,
          maxDist
        );

        return {
          vector: createVector(
            width / 2 + cos(angle) * distance,
            height / 2 + sin(angle) * distance
          ),
          reached: false
        };
      })
    );
  }

  vertices[floor(random(vertexCount))].reached = true;
}

function draw() {
  push();
  stroke(showDots ? "red" : 255);
  strokeWeight(1);
  vertices
    .filter(v => !v.reached)
    .forEach(({ vector }) => point(vector.x, vector.y));
  pop();

  const reachedVertices = vertices.filter(v => v.reached);
  let shortestDist = maxDist;
  let reachedVector;
  let unreachedIndex;

  strokeWeight(2);
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

function mousePressed() {
  showDots = !showDots;
}
