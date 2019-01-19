const FONT_SIZE = 130;

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

  background(0);
  stroke(255);

  const string = "SELF-\nESTEEM\nSELF-\nRELIANCE\nSELF-\nCONTROL".split("\n");
  let points = [];

  string.forEach((str, line) => {
    points = points.concat(
      myFont.textToPoints(str, 25, FONT_SIZE * (line + 1), FONT_SIZE, {
        sampleFactor: 1 / (line + 6)
      })
    );
  });

  points.forEach(({ x, y }, i) => {
    const noiseFactor = map(i, 0, points.length, 0, 8);
    vectors.push({
      vector: createVector(
        x + map(noise(x, i), 0, 1, -noiseFactor, noiseFactor),
        y + map(noise(y, i), 0, 1, -noiseFactor, noiseFactor)
      ),
      reached: false,
      reachedBy: 0
    });
  });
  vectors[0].reached = true;
  vectors[0].reachedBy = -1;

  maxDist = dist(0, 0, width, height);
}

function draw() {
  background(0);

  vectors.forEach(({ vector, reached, reachedBy }, i) => {
    if (reached && reachedBy > -1) {
      const { x, y } = vectors[reachedBy].vector;
      const distance = ceil(dist(x, y, vector.x, vector.y));
      strokeWeight(map(distance, 5, 20, 1, 6, true));
      line(x, y, vector.x, vector.y);
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
