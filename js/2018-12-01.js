window.sketchHeadline = "Move pointer over sketch.";

const centerWeight = 20;
const centerWeightGrowth = 6;

function setup() {
  pixelDensity(4);
  const myCanvas = createCanvas(660, 840);
  myCanvas.parent('my-canvas');
  strokeWeight(3);
  fill(1);
}

function draw() {
  background('white');
  const centerWeightX = map(
    Math.abs((width / 2) - mouseX),
    0, width / 2,
    centerWeight, centerWeight * centerWeightGrowth
  );
  const centerWeightY = map(
    Math.abs((height / 2) - mouseY),
    0, height / 2,
    centerWeight * centerWeightGrowth, centerWeight
  );
  // Sides, starting top and going clockwise
  stroke(0);
  line(mouseX, 0, mouseX, mouseY);
  line(width, mouseY, mouseX, mouseY);
  line(mouseX, height, mouseX, mouseY);
  line(0, mouseY, mouseX, mouseY);
  // Corners, starting top left and going clockwise
  stroke(255);
  quad(
    mouseX, mouseY,
    mouseX - centerWeightX, mouseY,
    0, 0,
    mouseX, mouseY - centerWeightY
  );
  quad(
    mouseX, mouseY,
    mouseX + centerWeightX, mouseY,
    width, 0,
    mouseX, mouseY - centerWeightY
  );
  quad(
    mouseX, mouseY,
    mouseX + centerWeightX, mouseY,
    width, height,
    mouseX, mouseY + centerWeightY
  );
  quad(
    mouseX, mouseY,
    mouseX - centerWeightX, mouseY,
    0, height,
    mouseX, mouseY + centerWeightY
  );
}