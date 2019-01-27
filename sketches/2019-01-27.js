const GRID = 30;

let points = [];

function drawAThing(x, y) {
  const C = getNearestPointColor(x, y);
  fill(C);
  ellipse(
    x + 2 * map(noise(x, y), 0, 1, -1, 1),
    y + 2 * map(noise(y, x), 0, 1, -1, 1),
    2,
    2
  );
}

function getNearestPointColor(x, y) {
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
  points = [...Array(256).keys()].map(i => ({
    vector: polarToCartesian(width / 2, height / 2, i, width * (i / 256)),
    color: i
  }));
  noStroke();
}

function draw() {
  const Y = floor(frameCount / (width / GRID));
  const X = floor(frameCount - (width / GRID) * Y);

  if (Y < height / GRID) {
    for (let xi = 0; xi < GRID; xi++) {
      for (let yi = 0; yi < GRID; yi++) {
        drawAThing(X + (width / GRID) * xi, Y + (height / GRID) * yi);
      }
    }
  } else {
    noLoop();
    drawingComplete = true;
  }
}
