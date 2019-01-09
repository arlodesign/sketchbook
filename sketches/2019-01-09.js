const vectorCount = 250;

let vectors = [];
let boundary;
let maxDist;

function getVectorValue(max) {
  return constrain(randomGaussian(0, max * 0.75), -max, max);
}

function setup() {
  const myCanvas = createCanvas(660, 840, WEBGL);
  myCanvas.parent("my-canvas");

  boundary = width / 3;

  vectors = Array.from(Array(vectorCount / 2), () => ({
    vector: createVector(
      getVectorValue(boundary / 2),
      getVectorValue(boundary / 2),
      getVectorValue(boundary / 2)
    ),
    reached: false,
    reachedBy: 0
  }));
  vectors = vectors.concat(
    Array.from(Array(vectorCount), () => ({
      vector: createVector(
        getVectorValue(boundary),
        getVectorValue(boundary),
        getVectorValue(boundary)
      ),
      reached: false,
      reachedBy: 0
    }))
  );

  [-1, 1].forEach(x => {
    [-1, 1].forEach(y => {
      [-1, 1].forEach(z => {
        vectors.push({
          vector: createVector(boundary * x, boundary * y, boundary * z),
          reached: false,
          reachedBy: 0
        });
      });
    });
  });

  vectors[0].reached = true;
  vectors[0].reachedBy = -1;

  maxDist = dist(-boundary, -boundary, -boundary, boundary, boundary, boundary);
}

function draw() {
  background(0);
  rotateX(sin(frameCount / 200));
  rotateY(cos(frameCount / 300));

  stroke(255);
  noFill();

  vectors.forEach(({ vector, reached, reachedBy }, i) => {
    if (reached && reachedBy > -1) {
      const { x, y, z } = vectors[reachedBy].vector;
      stroke(i % 2 ? 255 : 0);
      strokeWeight(
        map(
          dist(0, 0, 0, vector.x, vector.y, vector.z),
          0,
          maxDist / 2,
          4,
          0.25
        )
      );
      bezier(vector.x, vector.y, vector.z, 0, 0, 0, 0, 0, 0, x, y, z);
    }
  });

  let shortestDist = maxDist;
  let reachedByIndex;
  let unreachedIndex;
  if (!drawingComplete) {
    vectors.forEach((uv, ui) => {
      if (!uv.reached) {
        vectors.forEach((rv, ri) => {
          if (rv.reached) {
            const thisDist = dist(
              uv.vector.x,
              uv.vector.y,
              uv.vector.z,
              rv.vector.x,
              rv.vector.y,
              rv.vector.z
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
  }
  if (
    vectors.filter(v => v.reached).length ===
    vectorCount + vectorCount / 2 + 8
  ) {
    drawingComplete = true;
  }
}
