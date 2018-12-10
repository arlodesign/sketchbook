window.sketchHeadline = 'Reload page for a different variation.';

const size = 20;

let scalar = 0;
let angle = 0;
let speed;
let startX;
let startY;

function setup() {
  pixelDensity(4);
  const myCanvas = createCanvas(660, 840);
  myCanvas.parent('my-canvas');
  background('white');
  noStroke();
  fill(0);
  speed = random(5, 20);
  startX = width / 2;
  startY = height / 2;
}

function draw() {
  const x = width / 2 + cos(angle) * scalar;
  const y = height / 2 + sin(angle) * scalar;

  ellipse(x, y, random(size / 3, size));

  angle += speed;

  if (
    startX > x - speed &&
    startX < x + speed &&
    startY > y - speed &&
    startY < y + speed
  ) {
    startX = x;
    startY = y;
    scalar += speed;
    speed += speed / 4;
  }
}
