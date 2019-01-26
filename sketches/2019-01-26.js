const GRID = 30;

let points = [];

function drawPixel(x, y) {
  const C = getNearestPoint(x, y) * 4;
  fill(C, C, C, 255 / 2);
  rect(x, y, 2, 2);
  fill(C);
  rect(x, y, 1, 1);
}

function getNearestPoint(x, y) {
  points.sort(
    (a, b) =>
      dist(x, y, a.vector.x, a.vector.y) - dist(x, y, b.vector.x, b.vector.y)
  );
  return points[0].color;
}

function setup() {
  pixelDensity(4);
  const myCanvas = createCanvas(660, 840);
  myCanvas.parent("my-canvas");
  background(255);
  points = [...Array(64).keys()]
    .map(() => ({
      vector: createVector(
        randomGaussian(width / 2, (width / GRID) * 3),
        randomGaussian(height / 2, (height / GRID) * 3)
      )
    }))
    .sort(
      (a, b) =>
        dist(width / 2, height / 2, a.vector.x, a.vector.y) -
        dist(width / 2, height / 2, b.vector.x, b.vector.y)
    )
    .map((p, i) => Object.assign(p, { color: i }));
  noStroke();
  rectMode(CENTER);
}

function draw() {
  const Y = floor(frameCount / (width / GRID));
  const X = floor(frameCount - (width / GRID) * Y);

  if (Y < height / GRID) {
    for (let xi = 0; xi < GRID; xi++) {
      for (let yi = 0; yi < GRID; yi++) {
        drawPixel(X + (width / GRID) * xi, Y + (height / GRID) * yi);
      }
    }
  } else {
    addNoise(0.2);
    noLoop();
    drawingComplete = true;
  }
}
