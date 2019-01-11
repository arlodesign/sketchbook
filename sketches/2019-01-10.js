let myFont;
let vectorCount;
let vectors = [];
let boundary;
let maxDist;

function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function preload() {
  myFont = loadFont("/assets/NewsCycle-Bold.ttf");
}

function setup() {
  pixelDensity(1);
  const myCanvas = createCanvas(660, 840);
  myCanvas.parent("my-canvas");

  background(255);
  noStroke();
  fill(0);

  textFont(myFont, 130);
  text("YOUR FUTURE SELF IS A STRANGER", 35, 20, width - 10, height - 10);
  loadPixels();

  let darkPixels = [];
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const index = (x + y * width) * 4;
      if (pixels[index] !== 255) {
        darkPixels.push({ x, y });
      }
    }
  }

  darkPixels = shuffle(darkPixels);

  vectorCount = floor(darkPixels.length / 60);

  vectors = Array.from(Array(vectorCount - 2), (_, i) => ({
    vector: createVector(darkPixels[i].x, darkPixels[i].y),
    reached: false,
    reachedBy: 0
  }));

  vectors[0].reached = true;
  vectors[0].reachedBy = -1;

  maxDist = dist(0, 0, width, height);
}

function draw() {
  background(0);

  noStroke();
  fill(255);
  textFont(myFont, 130);
  text("YOUR FUTURE SELF IS A STRANGER", 25, 20, width - 10, height - 10);

  stroke(0);
  noFill();

  vectors.forEach(({ vector, reached, reachedBy }, i) => {
    if (reached && reachedBy > -1) {
      const { x, y } = vectors[reachedBy].vector;
      strokeWeight(dist(vector.x, vector.y, x, y) / 4);
      quad(vector.x, vector.y, vector.x, y, x, y, x, vector.y);
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
  }

  if (vectors.filter(v => v.reached).length === vectors.length) {
    noLoop();
    drawingComplete = true;
  }
}
