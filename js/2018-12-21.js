window.sketchHeadline = 'Reload page for a different variation.';

const points = 360;

let size;
let xFocus;
let yFocus;
let rectangles = false;

function setup() {
  pixelDensity(4);
  const myCanvas = createCanvas(660, 840);
  myCanvas.parent('my-canvas');
  background(255);
  rectMode(CENTER);
  size = random(150, 250);
  xFocus = width / 2;
  yFocus = height / 2;
}

function draw() {
  const noiseVal = noise(frameCount) + 0.5;

  const x = xFocus + cos((frameCount % points) * (TWO_PI / points)) * size * noiseVal;
  const y = yFocus + sin((frameCount % points) * (TWO_PI / points)) * size * noiseVal;

  if (!rectangles) {
    fill(`rgba(0, 0, 0, ${noise(x, y) / 5})`);
    noStroke();
    ellipse(x, y, size * noiseVal);

  } else {
    noFill();
    stroke(`rgba(255, 255, 255, ${noise(x, y) / 5})`);
    rect(x, y, size * (noiseVal / 2));
  }

  if (frameCount === points) {
    noLoop();
    drawingComplete = true;
  }

  if (frameCount === points * 2) {
    noLoop();
    drawingComplete = true;
  }
}