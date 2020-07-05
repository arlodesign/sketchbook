import p5 from "p5";

const sketch = function (p) {
  let vectors = [];
  let maxDist;
  let gridSize;
  let showDots = true;

  p.setup = function () {
    p.pixelDensity(1);
    p.createCanvas(p.windowWidth, p.windowHeight);
    gridSize = p.floor(p.random(25, 50));
    for (let x = 0; x <= gridSize; x++) {
      for (let y = 0; y <= gridSize; y++) {
        const xc = p.floor((p.width / gridSize) * x);
        const yc = p.floor((p.height / gridSize) * y);
        if (
          p.dist(xc, yc, p.width / 2, p.height / 2) < p.width / 2 - 100 &&
          p.random() < 0.5
        ) {
          vectors.push({
            vector: p.createVector(xc, yc),
            reached: false,
            reachedBy: 0,
          });
        }
      }
    }
    vectors[0].reached = true;
    vectors[0].reachedBy = -1;
    maxDist = p.dist(0, 0, p.width, p.height);
    p.background(0);
    p.strokeWeight(2);
    p.fill(0);
  };

  p.draw = function () {
    p.fill(255);
    p.ellipse(
      p.width / 2,
      p.height / 2,
      p.width / 2 + 100 + (p.width / gridSize) * 8
    );
    p.push();
    p.stroke(showDots ? "red" : 255);
    vectors
      .filter((v) => !v.reached)
      .forEach(({ vector }) => p.point(vector.x, vector.y));
    p.pop();
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
        p.stroke(0);
        p.strokeWeight(2);
        p.noFill();
        p.line(vector.x, vector.y, x, y);
        p.fill(0);
        p.strokeWeight(1);
        p.triangle(vector.x, vector.y, x, y, x, vector.y);
        if ((vector.x === x || vector.y === y) && i % 4 === 0) {
          p.ellipse(x, y, p.dist(x, y, vector.x, vector.y));
        }
      }
    });
    if (vectors.filter((v) => v.reached).length === vectors.length) {
      p.noLoop();
    }
  };

  p.windowResized = function () {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };
};

new p5(sketch, "sketch");
document.getElementById("description").innerHTML =
  "Reload page for a different variation.";
