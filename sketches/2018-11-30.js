window.sketchHeadline = "Move pointer over sketch.";

const scalar = 15;

let diagonal;
let gridWidth;
let gridHeight;

function getHypotenuse(a, b) {
  return Math.sqrt(a * a + b * b);
}

function getDistanceFromPointer(x, y) {
  const a = Math.abs(mouseX - x);
  const b = Math.abs(mouseY - y);
  return getHypotenuse(a, b);
}

function setup() {
  pixelDensity(4);
  const myCanvas = createCanvas(660, 840);
  myCanvas.parent('my-canvas');
  rectMode(CENTER);
  noFill();
  diagonal = getHypotenuse(width, height);
  gridWidth = width / scalar;
  gridHeight = height / scalar;
}

function draw() {
  background('white');
  for (let h = -(Math.floor(gridHeight / 2)); h < Math.ceil(gridHeight / 2); h++) {
    for (let w = -(Math.floor(gridWidth / 2)); w < Math.ceil(gridWidth / 2); w++) {
      const x = (width / 2) + (scalar * 3 * w);
      const y = (height / 2) + (scalar * 3 * h);
      const distanceFromPointer = getDistanceFromPointer(x, y);
      const rectSize = map(
        distanceFromPointer,
        0, diagonal,
        scalar * 10, scalar * 3
      );
      strokeWeight(map(
        distanceFromPointer,
        0, diagonal,
        2, 1
      ));
      rect(x, y, rectSize, rectSize);
    }
  }
  first = false;
}