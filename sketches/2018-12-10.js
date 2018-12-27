const size = 60;

function setup() {
  pixelDensity(4);
  const myCanvas = createCanvas(660, 840);
  myCanvas.parent("my-canvas");
  rectMode(CENTER);
  noStroke();
  noLoop();
}

function draw() {
  background(255);
  translate(width / 3, height / 3);

  for (let x = 0; x <= width; x = x + size * 1.333) {
    for (let y = 0; y <= height; y = y + size * 1.333) {
      const noiseVal = noise(x, y);
      const rotateVal = map(noiseVal, 0, 1, 2, 4);

      rotate(PI / rotateVal);

      fill(`rgba(0, 0, 0, ${noiseVal / 4})`);
      rect(x, 0, size * 2 * noiseVal, height);
      fill(`rgba(0, 0, 0, ${noiseVal / 4})`);
      rect(0, y, width, size * noiseVal);
    }
  }
  drawingComplete = true;
}
