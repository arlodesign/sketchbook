window.sketchHeadline = "Move pointer over sketch.";

const count = 3;

let angle = 0;
let size;

function setup() {
  pixelDensity(4);
  const myCanvas = createCanvas(660, 840, WEBGL);
  myCanvas.parent('my-canvas');
  strokeWeight(2);
  noFill();
  stroke(255);
  size = width / count;
}

function draw() {
  background(0);
  const camY = map(
    mouseY,
    0, height,
    -1000, 1000,
    true
  )
  const camZ = map(
    mouseX,
    0, width,
    -1000, 1000,
    true
  );
  camera(camY + camZ, camY, camZ, 0, 0, 0, 0, 1, 0);
  for (let x = -ceil(count / 2); x <= ceil(count / 2); x++) {
    for (let y = -ceil(count / 2); y <= ceil(count / 2); y++) {
      for (let z = -ceil(count / 2); z <= ceil(count / 2); z++) {
        push();
        translate(size * x, size * y, size * z);
        box(size * noise(x, y), size * noise(x, z), size * noise(y, z));
        pop();
      }
    }
  }
}

function touchMoved() {
  if (mouseX >= 0 && mouseY >= 0 && mouseX <= width && mouseY <= height) {
    return false
  };
}

setTimeout(() => {
  drawingComplete = true;
}, 1000);