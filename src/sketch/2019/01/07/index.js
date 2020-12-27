import p5 from "p5";

const sketch = function (p) {
  const goldenRatio = 1.6180339887;
  const magicNumber = 5;
  let marginH;
  let marginV;
  let vertices;
  let pointTestIndex = 0;
  let currentPoint;
  let maxDist;

  p.setup = function () {
    p.createCanvas(p.windowWidth, p.windowHeight);
    marginH = (p.width - p.width / goldenRatio) / 2;
    marginV = (p.height - p.height / goldenRatio) / 2;
    vertices = Array.from(Array(2500), () => ({
      vector: p.createVector(
        p.constrain(
          p.randomGaussian(p.width / 2, p.width / goldenRatio / magicNumber),
          marginH,
          p.width - marginH
        ),
        p.constrain(
          p.randomGaussian(p.height / 2, p.height / goldenRatio / magicNumber),
          marginV,
          p.height - marginV
        )
      ),
      reached: false,
    }));
    vertices[0] = {
      vector: p.createVector(p.width / 2, p.height / 2),
      reached: true,
    };
    vertices.push({
      vector: p.createVector(marginH, marginV),
      reached: false,
    });
    vertices.push({
      vector: p.createVector(p.width - marginH, marginV),
      reached: false,
    });
    vertices.push({
      vector: p.createVector(marginH, p.height - marginV),
      reached: false,
    });
    vertices.push({
      vector: p.createVector(p.width - marginH, p.height - marginV),
      reached: false,
    });
    maxDist = p.dist(marginH, marginV, p.width - marginH, p.height - marginV);
    p.background(255);
  };

  p.draw = function () {
    const reachedVertices = vertices.filter((v) => v.reached);
    let shortestDist = maxDist;
    let reachedVector;
    let unreachedIndex;
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
    p.strokeWeight(
      p.map(
        p.dist(
          p.width / 2,
          p.height / 2,
          vertices[unreachedIndex].vector.x,
          vertices[unreachedIndex].vector.y
        ),
        0,
        maxDist / 2,
        1,
        magicNumber
      )
    );
    p.line(
      reachedVector.x,
      reachedVector.y,
      vertices[unreachedIndex].vector.x,
      vertices[unreachedIndex].vector.y
    );
    vertices[unreachedIndex].reached = true;
    if (vertices.filter((v) => v.reached).length === vertices.length) {
      p.noLoop();
    }
  };

  p.windowResized = function () {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };
};

new p5(sketch, "sketch");
document.getElementById("description").innerHTML =
  "Be patient. Reload page for a different variation.";
