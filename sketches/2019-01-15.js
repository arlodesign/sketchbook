/*---
description: Move pointer or finger over sketch. Reload page for a different variation.
---*/

const LIMIT = 13;

let fun;

function setup() {
  const myCanvas = createCanvas(660, 840);
  myCanvas.parent("my-canvas");

  fun = floor(random(4));

  stroke(`rgba(0, 0, 0, 0.5)`);
  noFill();
}

function draw() {
  background(255);

  let angle = 0.0;
  let myMouseX = map(mouseX, 0, width, width / 5, width / 3, true);
  let myMouseY = map(mouseY, 0, height, 1, LIMIT, true);

  while (angle < PI) {
    angle += TWO_PI / (300 * map(myMouseY, 1, 7, 1, floor(LIMIT / 3)));

    let xAxis = width / 2 + cos(angle) * myMouseX;
    let yAxis = height / 2 + cos(angle) * myMouseX;

    let x1 = xAxis + cos(angle) * (height / 6);
    let y1 = yAxis + sin(angle * myMouseY) * (height / 6);
    let x2 = xAxis + cos(angle + PI / 6) * (height / 6);
    let y2 = yAxis + sin(angle * myMouseY + PI / 6) * (height / 6);
    let x3 = xAxis + cos(angle + PI) * (height / 6);
    let y3 = yAxis + sin(angle * myMouseY + PI) * (height / 6);
    let x4 = xAxis + cos(angle + (PI * 5) / 6) * (height / 6);
    let y4 = yAxis + sin(angle + (PI * 5) / 6) * (height / 6);

    switch (fun) {
      case 0:
        bezier(x1, y1, x2, y2, x3, y3, x4, y4);
        break;
      case 1:
        bezier(x2, y2, x3, y3, x4, y4, x1, y1);
        break;
      case 2:
        bezier(x3, y3, x4, y4, x1, y1, x2, y2);
        break;

      default:
        bezier(x4, y4, x1, y1, x2, y2, x3, y3);
        break;
    }
  }

  drawingComplete = true;
}

function touchMoved() {
  if (mouseX >= 0 && mouseY >= 0 && mouseX <= width && mouseY <= height) {
    return false;
  }
}
