window.sketchHeadline = "Move pointer over sketch.";

const tileSize = 60;

let img;

function preload() {
  img = loadImage('/images/susan.png')
}

function setup() {
  const myCanvas = createCanvas(660, 840);
  myCanvas.parent('my-canvas');
}

function draw() {
  background(img);
  const scale = map(
    mouseX,
    0, width,
    0, tileSize
  );
  for (let x = 0; x < width; x += tileSize) {
    for (let y = 0; y < height; y += tileSize) {
      const noiseVal = noise(x, y) * scale;
      blend(
        img,
        x, y,
        tileSize, tileSize,
        x - noiseVal,
        y - noiseVal,
        tileSize + (noiseVal * 2),
        tileSize + (noiseVal * 2),
        MULTIPLY
      );
    }
  }
}

function touchMoved() {
  if (mouseX >= 0 && mouseY >= 0 && mouseX <= width && mouseY <= height) {
    return false
  };
}

setTimeout(() => {
  drawingComplete = true;
}, 1000);