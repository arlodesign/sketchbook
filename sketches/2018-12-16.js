window.sketchHeadline = "";

const triangleRatio = Math.sqrt(3) / 2;

let radius;

function equilateralTriangle(x, y, radius) {
  triangle(
    x, y - radius,
    x - triangleRatio * radius, y + (radius / 2),
    x + triangleRatio * radius, y + (radius / 2)
  );
}

function setup() {
  pixelDensity(4);
  const myCanvas = createCanvas(660, 840);
  myCanvas.parent('my-canvas');
  angleMode(DEGREES);
  noStroke();
  fill(`rgba(255,0,0,.5)`);
  noLoop();
}

function draw() {
  background('white');

  stroke(0, 255, 255);
  line(width / 2, 0, width / 2, height);
  line(0, height / 2, width, height / 2);
  radius = 60;

  for (let y = height / 2; y <= height + radius * 2; y += radius * 3) {
    for (let x = width / 2; x <= width + radius * 2; x += triangleRatio * radius * 2) {
      push();
      translate(x, y - (radius / 2));
      equilateralTriangle(0, 0, radius);
      pop();

      push();
      translate(x, y + (radius / 2));
      rotate(180);
      equilateralTriangle(0, 0, radius);
      pop();

      push();
      translate(x + triangleRatio * radius, y + radius);
      equilateralTriangle(0, 0, radius);
      pop();

      push();
      translate(x + triangleRatio * radius, y + radius * 2);
      rotate(180);
      equilateralTriangle(0, 0, radius);
      pop();

      if (y > height / 2) {
        push();
        translate(x, height - y - (radius / 2));
        equilateralTriangle(0, 0, radius);
        pop();

        push();
        translate(x, height - y + (radius / 2));
        rotate(180);
        equilateralTriangle(0, 0, radius);
        pop();

        push();
        translate(x + triangleRatio * radius, height - y + radius);
        equilateralTriangle(0, 0, radius);
        pop();

        push();
        translate(x + triangleRatio * radius, height - y + radius * 2);
        rotate(180);
        equilateralTriangle(0, 0, radius);
        pop();
      }

      if (x > width / 2) {
        push();
        translate(width - x, y - (radius / 2));
        equilateralTriangle(0, 0, radius);
        pop();

        push();
        translate(width - x, y + (radius / 2));
        rotate(180);
        equilateralTriangle(0, 0, radius);
        pop();

        push();
        translate(width - x + triangleRatio * radius, y + radius);
        equilateralTriangle(0, 0, radius);
        pop();

        push();
        translate(width - x + triangleRatio * radius, y + radius * 2);
        rotate(180);
        equilateralTriangle(0, 0, radius);
        pop();
      }

      if (y > height / 2 && x > width / 2) {
        push();
        translate(width - x, height - y - (radius / 2));
        equilateralTriangle(0, 0, radius);
        pop();

        push();
        translate(width - x, height - y + (radius / 2));
        rotate(180);
        equilateralTriangle(0, 0, radius);
        pop();

        push();
        translate(width - x + triangleRatio * radius, height - y + radius);
        equilateralTriangle(0, 0, radius);
        pop();

        push();
        translate(width - x + triangleRatio * radius, height - y + radius * 2);
        rotate(180);
        equilateralTriangle(0, 0, radius);
        pop();
      }
    }
  }

  //   push();
  //   translate(width / 2, y1);
  //   equilateralTriangle(0, 0, radius);
  //   ellipse(0, 0, 2);
  //   pop();
  //   push();
  //   translate(width / 2, height - y1);
  //   rotate(180);
  //   equilateralTriangle(0, 0, radius);
  //   ellipse(0, 0, 2);
  //   pop();


}



// push();
// translate(width / 2 - triangleRatio * radius, (height / 2) - radius);
// rotate(180);
// equilateralTriangle(0, 0, radius);
// ellipse(0, 0, 2);
// pop();

// push();
// translate(width / 2, (height / 2) + (radius / 2));
// rotate(180);
// equilateralTriangle(0, 0, radius);
// ellipse(0, 0, 2);
// pop();

// push();
// translate(width / 2 + triangleRatio * radius, (height / 2) + radius);
// // rotate(180);
// equilateralTriangle(0, 0, radius);
// ellipse(0, 0, 2);
// pop();



// UNCOMMENT FOR INTERACTIVE SKETCHES
// function touchMoved() {
//   if (mouseX >= 0 && mouseY >= 0 && mouseX <= width && mouseY <= height) {
//     return false
//   };
// }