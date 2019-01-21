const SIZE = 300;

function setup() {
  const myCanvas = createCanvas(660, 840, WEBGL);
  myCanvas.parent("my-canvas");
  noStroke();
}

function draw() {
  background(0);

  camera(
    sin(frameCount / (SIZE * 2)) * (SIZE * 2),
    cos(frameCount / (SIZE * 2)) * (SIZE * 2),
    SIZE * 2,
    0,
    0,
    0,
    0,
    1,
    0
  );

  directionalLight(
    min(frameCount, 255),
    min(frameCount, 255),
    min(frameCount, 255),
    cos(frameCount / 100),
    sin(frameCount / 200),
    sin(frameCount / 100) / 2
  );

  push();
  rotateZ(frameCount * 0.005);
  rotateX(frameCount * 0.005);
  rotateY(frameCount * 0.005);
  box(SIZE);
  pop();

  push();
  rotateZ(frameCount * -0.004);
  rotateX(frameCount * -0.004);
  rotateY(frameCount * -0.004);
  box(SIZE, SIZE, SIZE * 1.333);
  pop();

  push();
  rotateZ(frameCount * -0.003);
  rotateX(frameCount * 0.003);
  rotateY(frameCount * -0.003);
  box(SIZE, SIZE * 1.333, SIZE);
  pop();

  push();
  rotateZ(frameCount * 0.002);
  rotateX(frameCount * -0.002);
  rotateY(frameCount * 0.002);
  box(SIZE * 1.333, SIZE, SIZE);
  pop();
}

setTimeout(() => {
  drawingComplete = true;
}, 4000);
