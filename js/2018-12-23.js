let size;

function setup() {
  const myCanvas = createCanvas(660, 840, WEBGL);
  myCanvas.parent('my-canvas');
  size = random(500, 700);
  stroke(255);
  strokeWeight(0.5);
}

function draw() {
  background(0);

  camera(
    cos((frameCount + 200) / 200) * (size / 3),
    sin((frameCount + 200) / 100) * (size / 2),
    sin((frameCount + 200) / 300) * size,
    0, 0, 0,
    0, 1, 0
  );

  noFill();
  for (let r = 0; r < TWO_PI; r += TWO_PI / (size / 10)) {
    const noiseVal = noise(r);
    const anchorPoint = (size / 2) * noiseVal;
    push();

    rotateZ(r);
    rotateX(noiseVal / 2);
    rotateY(noiseVal * 2);

    bezier(
      -anchorPoint, 0, anchorPoint,
      noiseVal, noiseVal, noiseVal,
      noiseVal, noiseVal, noiseVal,
      anchorPoint, 0, anchorPoint
    );
    bezier(
      anchorPoint, 0, anchorPoint,
      noiseVal, noiseVal, noiseVal,
      noiseVal, noiseVal, noiseVal,
      anchorPoint, 0, -anchorPoint
    );
    bezier(
      anchorPoint, 0, -anchorPoint,
      noiseVal, noiseVal, noiseVal,
      noiseVal, noiseVal, noiseVal,
      -anchorPoint, 0, -anchorPoint
    );
    bezier(
      -anchorPoint, 0, -anchorPoint,
      noiseVal, noiseVal, noiseVal,
      noiseVal, noiseVal, noiseVal,
      -anchorPoint, 0, anchorPoint
    );
    pop();
  }
}

// UNCOMMENT FOR INTERACTIVE SKETCHES
// function touchMoved() {
//   if (mouseX >= 0 && mouseY >= 0 && mouseX <= width && mouseY <= height) {
//     return false
//   };
// }

// If you want to capture a screenshot of the drawing at a different time,
// set drawingComplete = true when it makes sense.
setTimeout(() => {
  drawingComplete = true;
}, 1000);