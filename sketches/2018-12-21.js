window.sketchHeadline = 'Reload page for a different variation.';

const points = 360;

let size;
let xFocus;
let yFocus;

function setup() {
  pixelDensity(4);
  const myCanvas = createCanvas(660, 840);
  myCanvas.parent('my-canvas');
  background(255);
  noStroke();
  size = random(250, 350);
  xFocus = width / 2;
  yFocus = height / 2;
}

function draw() {
  const noiseVal = noise(frameCount);

  const x = xFocus + cos((frameCount % points) * (TWO_PI / points)) * size * noiseVal;
  const y = yFocus + sin((frameCount % points) * (TWO_PI / points)) * size * noiseVal;

  fill(`rgba(0, 0, 0, ${noise(x, y) / 5})`);
  ellipse(x, y, size * noiseVal);

  if (frameCount === points) {
    noLoop();
    drawingComplete = true;
  }
}