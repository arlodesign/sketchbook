const speed = 0.3;

let angle = 2;
let scalar = 3;

function setup() {
  pixelDensity(4);
  const myCanvas = createCanvas(660, 840);
  myCanvas.parent('my-canvas');
  background('white');
  noStroke();
  fill(0);
}

function draw() {
  const x = width / 2 + cos(angle) * scalar;
  const y = height / 2 + sin(angle) * scalar;
  const rectWidth = scalar / speed;
  rotate(PI / angle);
  rect(x, y, rectWidth, 1);
  if (rectWidth > width) {
    noLoop();
    drawingComplete = true;
  }
  angle += speed;
  scalar += speed;
}
