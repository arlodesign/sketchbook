window.sketchHeadline = "";

let size;
let spheres = [];

function getCoordinate() {
  const value = random(-size, size);;
  return Math.min(Math.max(value, -size / 2), size / 2);
}

function setup() {
  const myCanvas = createCanvas(660, 840, WEBGL);
  myCanvas.parent('my-canvas');
  noFill();
  strokeWeight(0.5);
  size = random(300, 500);
  for (let i = 0; i < size * 2; i++) {
    spheres[i] = {
      x: getCoordinate(),
      y: getCoordinate(),
      z: getCoordinate()
    }
  }
}

function draw() {
  background('white');

  camera(
    cos(frameCount / 100) * size,
    sin(frameCount / 100) * size,
    sin(frameCount / 100) * size,
    0, 0, 0,
    0, 1, 0
  );

  for (let i = 0; i < spheres.length; i++) {
    const s = spheres[i];

    push();
    translate(s.x, s.y, s.z);
    sphere((size / 100) * noise(s.x, s.y, s.z));
    pop();

    if (i < spheres.length / 2) {
      const oppositeS = spheres[(spheres.length - 1) - i];
      bezier(
        s.x, s.y, s.z,
        -size / 100, -size / 100, -size / 100,
        size / 100, size / 100, size / 100,
        oppositeS.x, oppositeS.y, oppositeS.z
      );
    }
  }
  drawingComplete = true;
}