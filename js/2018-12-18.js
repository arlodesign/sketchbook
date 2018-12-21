window.sketchHeadline = 'Be patient. Reload page for a different variation.';

let jump = 0;
let scalar = 0;
let angle = 0;
let centerX;
let centerY;
let size;
let speed;
let drawn = false;
let drawCount = 0;

function setup() {
  pixelDensity(4);
  const myCanvas = createCanvas(660, 840);
  myCanvas.parent('my-canvas');
  background(0);
  noFill();
  strokeWeight(0.7);
  size = random(300, 500);
  speed = random(5, 10);
  centerX = width + 50;
  centerY = random(0, height);
}

function draw() {
  const x = centerX + cos(angle) * scalar;
  const y = centerY + sin(angle) * scalar;
  const noiseVal = noise(x, y);

  if (x > 0 && y > 0 && x < width && y < height) {
    drawn = true;
    drawCount++;
    stroke(`rgba(255, 255, 255, ${noiseVal})`);

    bezier(
      centerX,
      centerY,
      centerX + scalar * noiseVal,
      centerY + scalar * noiseVal,
      x + scalar * noiseVal,
      y + scalar * noiseVal,
      x,
      y
    );
  }

  angle += speed;

  if (angle / 360 > jump) {
    if (drawn && drawCount === 0) {
      noLoop();
      drawingComplete = true;
    }
    drawCount = 0;
    scalar += speed;
    speed += speed / size;
    jump++;
  }
}