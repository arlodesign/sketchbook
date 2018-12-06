window.sketchHeadline = `Click to draw.
  <a href="javascript: location.reload()">Refresh</a>
`;

const speed = 6;

let scalar;
let jump = 0;
let angle = 0;
let size;
let letsDraw = false;

function setup() {
  pixelDensity(4);
  const myCanvas = createCanvas(660, 840);
  myCanvas.parent('my-canvas');
  background('white');
  noStroke();
  fill('rgba(0, 0, 0, .9)');
  scalar = random(10, 20);
  size = random(10, 20);
}

function draw() {
  const x = mouseX + cos(angle) * scalar;
  const y = mouseY + sin(angle) * scalar;
  const noiseVal = noise(x, y);

  if (x > 0 && y > 0 && x < width && y < height && mouseIsPressed) {
    ellipse(x, y, size * noiseVal);
  }

  angle += speed;
}