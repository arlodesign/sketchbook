let lineCount;

function setup() {
  const myCanvas = createCanvas(660, 840, WEBGL);
  myCanvas.parent('my-canvas');
  fill(0);
  lineCount = floor(random(300, 600));
  strokeWeight(lineCount / 100);
}

function draw() {
  background(0);
  camera(
    sin(frameCount / lineCount) * lineCount,
    cos(frameCount / lineCount) * lineCount,
    lineCount,
    0, 0, 0,
    0, 1, 0
  );
  for (let i = 0; i < lineCount; i++) {
    stroke(`rgba(255, 255, 255, ${i/lineCount})`);
    line(
      cos(frameCount + i) * i,
      sin(frameCount + i) * i,
      tan(frameCount + i) * i,
      cos(frameCount + i) * i,
      sin(frameCount + i) * i,
      0
    );
  }
  if (frameCount === lineCount) {
    drawingComplete = true;
  }
}