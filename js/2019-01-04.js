const BOX_COUNT = 9;
const MAX_SCALE = 3;

function setup() {
  const myCanvas = createCanvas(660, 840, WEBGL);
  myCanvas.parent("my-canvas");
  fill(255);
  noStroke();
}

function draw() {
  background(0);
  directionalLight(
    min(frameCount, 255),
    min(frameCount, 255),
    min(frameCount, 255),
    cos(frameCount / 100),
    sin(frameCount / 200),
    sin(frameCount / 100) / 2
  );

  for (let i = -floor(BOX_COUNT / 2); i < BOX_COUNT / 2; i++) {
    push();
    translate((width / BOX_COUNT) * i, 0);
    rotateY((frameCount / 1500) * (i % 2 ? -1 : 1));
    rotateX(frameCount / 2500);
    rotateZ(frameCount / 3500 + i * 1000);
    scale(map(sin(frameCount / 5500), -1, 1, 1 / MAX_SCALE, MAX_SCALE));
    box(width / (BOX_COUNT / 2), height / 2, width / (BOX_COUNT / 2));
    pop();
  }
}

setTimeout(() => {
  drawingComplete = true;
}, 8000);
