/*---
description: 
---*/

function setup() {
  pixelDensity(4);
  const myCanvas = createCanvas(660, 840);
  myCanvas.parent('my-canvas');
  // SETUP
}

function draw() {
  background('white');
  // DRAW
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