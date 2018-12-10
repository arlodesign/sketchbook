window.sketchHeadline = 'Reload page for a different variation.';

let jump = 0;
let scalar = 0;
let angle = 0;
let size;
let speed;

function setup() {
  pixelDensity(4);
  const myCanvas = createCanvas(660, 840);
  myCanvas.parent('my-canvas');
  background('white');
  noStroke();
  fill('rgba(0, 0, 0, .9)');
  size = random(50, 60);
  speed = random(5, 10);
}

function draw() {
  const x = width * 0.666 + cos(angle) * scalar;
  const y = height * 0.666 + sin(angle) * scalar;
  const noiseVal = noise(x, y);

  if (x > 0 && y > 0 && x < width && y < height) {
    ellipse(x, y, size * noiseVal);
  }

  angle += speed;

  if (angle / 360 > jump) {
    scalar += speed;
    speed += speed / size;
    jump++;
  }
}
