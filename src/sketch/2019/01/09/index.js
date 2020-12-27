import p5 from "p5";

const sketch = function (p) {
  const vectorCount = 250;
  let vectors = [];
  let boundary;
  let maxDist;
  let drawingComplete = false;

  function getVectorValue(max) {
    return p.constrain(p.randomGaussian(0, max * 0.75), -max, max);
  }

  p.setup = function () {
    p.createCanvas(p.windowWidth, p.windowHeight, p.WEBGL);
    boundary = p.width / 3;
    vectors = Array.from(Array(vectorCount / 2), () => ({
      vector: p.createVector(
        getVectorValue(boundary / 2),
        getVectorValue(boundary / 2),
        getVectorValue(boundary / 2)
      ),
      reached: false,
      reachedBy: 0,
    }));
    vectors = vectors.concat(
      Array.from(Array(vectorCount), () => ({
        vector: p.createVector(
          getVectorValue(boundary),
          getVectorValue(boundary),
          getVectorValue(boundary)
        ),
        reached: false,
        reachedBy: 0,
      }))
    );
    [-1, 1].forEach((x) => {
      [-1, 1].forEach((y) => {
        [-1, 1].forEach((z) => {
          vectors.push({
            vector: p.createVector(boundary * x, boundary * y, boundary * z),
            reached: false,
            reachedBy: 0,
          });
        });
      });
    });
    vectors[0].reached = true;
    vectors[0].reachedBy = -1;
    maxDist = p.dist(
      -boundary,
      -boundary,
      -boundary,
      boundary,
      boundary,
      boundary
    );
  };

  p.draw = function () {
    p.background(0);
    p.rotateX(p.sin(p.frameCount / 200));
    p.rotateY(p.cos(p.frameCount / 300));
    p.stroke(255);
    p.noFill();
    vectors.forEach(({ vector, reached, reachedBy }, i) => {
      if (reached && reachedBy > -1) {
        const { x, y, z } = vectors[reachedBy].vector;
        p.stroke(i % 2 ? 255 : 0);
        p.strokeWeight(
          p.map(
            p.dist(0, 0, 0, vector.x, vector.y, vector.z),
            0,
            maxDist / 2,
            4,
            0.25
          )
        );
        p.bezier(vector.x, vector.y, vector.z, 0, 0, 0, 0, 0, 0, x, y, z);
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
              const thisDist = p.dist(
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
      vectors.filter((v) => v.reached).length ===
      vectorCount + vectorCount / 2 + 8
    ) {
      drawingComplete = true;
    }
  };

  p.windowResized = function () {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };
};

new p5(sketch, "sketch");
