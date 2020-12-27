import p5 from "p5";
import polarToCartesian from "util/polarToCartesian";
import lerpLine from "util/lerpLine";

const sketch = function (p) {
  const SLICES = p.random([2, 3, 5]);

  let vertices = [];
  let maxDist;

  p.setup = function () {
    p.createCanvas(p.windowWidth, p.windowHeight);

    Array.from(Array(p.floor(3000 / SLICES)), () => ({
      theta: p.random(p.TWO_PI / SLICES),
      r: p.random(p.height / 2),
    })).forEach(({ theta, r }) => {
      for (let i = 0; i < SLICES; i++) {
        vertices.push({
          vector: polarToCartesian(
            p.width / 2,
            p.height / 2,
            theta + (p.TWO_PI / SLICES) * i,
            r
          ),
          reached: false,
          hue: p.map(p.sin(theta + (p.TWO_PI / SLICES) * i), -1, 1, 0, 100),
        });
      }
    });
    vertices = vertices.filter(
      ({ vector }) =>
        vector.x > 0 &&
        vector.x < p.width &&
        vector.y > 0 &&
        vector.y < p.height
    );
    vertices.push({
      vector: {
        x: p.width / 2,
        y: p.height / 2,
      },
      reached: true,
      hue: 0,
    });

    maxDist = p.dist(0, 0, p.width, p.height);

    p.background(0);
    p.colorMode(p.HSB, 100);
    p.strokeWeight(2);
  };

  p.draw = function () {
    const reachedVertices = vertices.filter(({ reached }) => reached);

    let shortestDist = maxDist;
    let reachedVector;
    let unreachedIndex;

    vertices.forEach((vertex, i) => {
      if (!vertex.reached) {
        reachedVertices.forEach(({ vector, hue }) => {
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

    p.stroke(vertices[unreachedIndex].hue, 80, 100);
    lerpLine(
      p,
      reachedVector.x,
      reachedVector.y,
      vertices[unreachedIndex].vector.x,
      vertices[unreachedIndex].vector.y,
      p.map(
        p.dist(p.width / 2, p.height / 2, reachedVector.x, reachedVector.y),
        0,
        maxDist / 2,
        0.1,
        0.5
      ),
      false
    );

    vertices[unreachedIndex].reached = true;

    p.push();
    p.noStroke();
    p.fill("black");
    p.rect(0, 0, 100, 20);

    if (vertices.filter((v) => v.reached).length === vertices.length) {
      p.noLoop();
    } else {
      p.fill("white");
      p.text(vertices.length - vertices.filter((v) => v.reached).length, 0, 18);
    }

    p.pop();
  };

  p.windowResized = function () {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };
};

new p5(sketch, "sketch");
document.getElementById("description").innerHTML = "Be patient.";
