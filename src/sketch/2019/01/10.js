import p5 from "p5";
import font from "assets/NewsCycle-Bold.ttf";

const sketch = function (p) {
  let myFont;
  let vectorCount;
  let vectors = [];
  let boundary;
  let maxDist;
  let drawingComplete = false;

  p.preload = function () {
    myFont = p.loadFont(font);
  };

  p.setup = function () {
    p.pixelDensity(1);
    p.createCanvas(p.windowWidth, p.windowHeight);
    p.background(255);
    p.noStroke();
    p.fill(0);
    p.textFont(myFont, 130);
    p.text(
      "YOUR FUTURE SELF IS A STRANGER",
      35,
      20,
      p.width - 10,
      p.height - 10
    );
    p.loadPixels();
    let darkPixels = [];
    for (let y = 0; y < p.height + 0; y++) {
      for (let x = 0; x < p.width + 0; x++) {
        const index = (x + y * p.width) * 4;
        if (p.pixels[index] !== 255) {
          darkPixels.push({
            x,
            y,
          });
        }
      }
    }
    darkPixels = p.shuffle(darkPixels);
    vectorCount = p.floor(darkPixels.length / 60);
    vectors = Array.from(Array(vectorCount - 2), (_, i) => ({
      vector: p.createVector(darkPixels[i].x, darkPixels[i].y),
      reached: false,
      reachedBy: 0,
    }));
    vectors[0].reached = true;
    vectors[0].reachedBy = -1;
    maxDist = p.dist(0, 0, p.width, p.height);
  };

  p.draw = function () {
    p.background(0);
    p.noStroke();
    p.fill(255);
    p.textFont(myFont, 130);
    p.text(
      "YOUR FUTURE SELF IS A STRANGER",
      25,
      20,
      p.width - 10,
      p.height - 10
    );
    p.stroke(0);
    p.noFill();
    vectors.forEach(({ vector, reached, reachedBy }, i) => {
      if (reached && reachedBy > -1) {
        const { x, y } = vectors[reachedBy].vector;
        p.strokeWeight(p.dist(vector.x, vector.y, x, y) / 4);
        p.quad(vector.x, vector.y, vector.x, y, x, y, x, vector.y);
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

    if (vectors.filter((v) => v.reached).length === vectors.length) {
      p.noLoop();
    }
  };

  p.windowResized = function () {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };
};

new p5(sketch, "sketch");
