import p5 from "p5";
import polarToCartesian from "util/polarToCartesian";

const sketch = function (p) {
  const HEX_RADIUS = 20;
  const HEX_WIDTH = p.sqrt(3) * HEX_RADIUS;
  const HEX_HEIGHT = HEX_RADIUS * 2;
  const HUE = p.random();
  const COMPLEMENT = 1 - HUE;
  const WEIGHT = 5;

  let hexagons = [];
  let vertices = [];
  let maxDist;
  let cols;
  let rows;
  let gridWidth;
  let gridHeight;

  class Hexagon {
    constructor(x, y) {
      this.x = x;
      this.y = y;
    }

    draw() {
      p.beginShape();
      for (let a = 0; a < p.TWO_PI; a += p.TWO_PI / 6) {
        p.vertex(
          ...polarToCartesian(
            this.x,
            this.y,
            a + p.TWO_PI / 12,
            HEX_RADIUS,
            true
          )
        );
      }
      p.endShape();
    }

    get points() {
      let points = [];

      const probability =
        p.dist(this.x, this.y, p.width / 2, p.height / 2) / maxDist;

      for (let a = 0; a < p.TWO_PI; a += p.TWO_PI / 6) {
        const pt = polarToCartesian(
          this.x,
          this.y,
          a + p.TWO_PI / 12,
          HEX_RADIUS
        );

        if (p.noise(pt.x, pt.y) / 4 < probability) {
          points.push([pt.x, pt.y]);
        }
      }

      p.noise(this.x, this.y) / 2 < probability &&
        points.push([this.x, this.y]);

      return points;
    }
  }

  p.setup = function () {
    p.createCanvas(p.windowWidth, p.windowHeight);
    p.colorMode(p.HSB, 1);
    p.background(COMPLEMENT, 0.7, 0.5);

    maxDist = p.dist(0, 0, p.width / 2, p.height / 2);
    cols = p.floor((p.width - HEX_WIDTH / 2) / HEX_WIDTH);
    rows = p.floor((p.width - HEX_HEIGHT / 4) / (HEX_HEIGHT * 0.75));
    gridWidth = cols * HEX_WIDTH + HEX_WIDTH / 2;
    gridHeight = rows * (HEX_HEIGHT * 0.75) + HEX_HEIGHT / 4;

    for (let x = 0; x < cols; x++) {
      for (let y = 0; y < rows; y++) {
        const hexX =
          x * HEX_WIDTH +
          (y % 2 ? HEX_WIDTH : HEX_WIDTH / 2) +
          (p.width - gridWidth) / 2;
        const hexY =
          y * HEX_HEIGHT * 0.75 + HEX_HEIGHT / 2 + (p.height - gridHeight) / 2;
        p.noise(hexX, hexY) < 0.5 && hexagons.push(new Hexagon(hexX, hexY));
      }
    }

    p.stroke(COMPLEMENT, 0.5, 0.7);
    p.fill(COMPLEMENT, 0.5, 0.7);
    p.strokeWeight(0.25);

    hexagons.forEach((hex) => {
      hex.draw();
      hex.points.forEach(([x, y]) =>
        vertices.push({ vector: { x, y }, reached: false })
      );
    });

    vertices[p.floor(p.random(vertices.length))].reached = true;

    p.stroke(HUE, 0.8, 0.2);
    p.strokeWeight(WEIGHT);
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

    p.line(
      reachedVector.x + WEIGHT,
      reachedVector.y + WEIGHT,
      vertices[unreachedIndex].vector.x + WEIGHT,
      vertices[unreachedIndex].vector.y + WEIGHT
    );
    vertices[unreachedIndex].reached = true;

    if (vertices.filter((v) => v.reached).length === vertices.length) {
      p.noLoop();
    } else {
      console.info(
        `${p.floor(
          (vertices.filter((v) => v.reached).length / vertices.length) * 100
        )}%`
      );
    }
  };

  p.windowResized = function () {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };
};

new p5(sketch, "sketch");
document.getElementById("description").innerHTML =
  "Be patient. Reload page for a different variation.";
