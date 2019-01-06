const w = 30;
const overlap = 10;

let x = 0;

function setup() {
  pixelDensity(4);
  const myCanvas = createCanvas(660, 840);
  myCanvas.parent("my-canvas");
  background(255);
  rectMode(CENTER);
  noStroke();
}

function draw() {
  const noiseVal = noise(frameCount);
  fill(`rgba(0, 0, 0, ${noiseVal})`);
  rect(x, height / 2, w * noiseVal, height * noiseVal);
  x += (w - overlap) * noiseVal;
  if (x >= width) {
    for (let i = 0; i < 10000; i++) {
      stroke(i % 2 ? `rgba(0, 0, 0, 0.5)` : `rgba(255, 255, 255, 0.5)`);
      point(
        randomGaussian(width / 2, width / 3),
        randomGaussian(height / 2, height / 3)
      );
    }

    noLoop();
    drawingComplete = true;
  }
}
