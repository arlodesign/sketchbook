const size = 250;
const goldenRatio = 1.6180339887;

let angle = 0;

function setup() {
  pixelDensity(4);
  const myCanvas = createCanvas(660, 840);
  myCanvas.parent("my-canvas");
  background("white");
  rectMode(CENTER);
  noFill();
}

function draw() {
  const x = width / goldenRatio + cos(angle) * size;
  const y = height / goldenRatio + sin(angle) * size;
  const noiseVal = noise(x, y);
  stroke(`rgba(0, 0, 0, ${noiseVal})`);
  strokeWeight(noiseVal);
  rect(x, y, size, size);
  stroke(`rgba(0, 0, 0, ${noiseVal / 2})`);
  ellipse(x, y, angle, angle);
  angle += goldenRatio;
  if (angle > 720) {
    noLoop();
    drawingComplete = true;
  }
}
