window.sketchHeadline = "Move pointer over sketch.";

const triangleRatio = Math.sqrt(5) / 2;

function myTriangle(x, y, radius) {
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
}

function draw() {
  background('white');

  const radius = map(
    mouseX,
    0, width,
    30, 120,
    true
  );

  const overlap = map(
    mouseY,
    0, height,
    radius / 2, radius * 2,
    true
  );

  for (let y = height / 2; y <= height + radius * 3; y += radius * 3) {
    for (let x = width / 2; x <= width + radius * 3; x += triangleRatio * radius * 2) {
      push();
      fill(`rgba(0, 0, 0, ${noise(1)})`);
      translate(x, y - (radius / 2));
      myTriangle(0, 0, overlap);
      pop();

      push();
      fill(`rgba(0, 0, 0, ${noise(2)})`);
      translate(x, y + (radius / 2));
      rotate(180);
      myTriangle(0, 0, overlap);
      pop();

      push();
      fill(`rgba(0, 0, 0, ${noise(3)})`);
      translate(x + triangleRatio * radius, y + radius);
      myTriangle(0, 0, overlap);
      pop();

      push();
      fill(`rgba(0, 0, 0, ${noise(4)})`);
      translate(x + triangleRatio * radius, y + radius * 2);
      rotate(180);
      myTriangle(0, 0, overlap);
      pop();

      if (y > height / 2) {
        push();
        fill(`rgba(0, 0, 0, ${noise(5)})`);
        translate(x, height - y - (radius / 2));
        myTriangle(0, 0, overlap);
        pop();

        push();
        fill(`rgba(0, 0, 0, ${noise(6)})`);
        translate(x, height - y + (radius / 2));
        rotate(180);
        myTriangle(0, 0, overlap);
        pop();

        push();
        fill(`rgba(0, 0, 0, ${noise(7)})`);
        translate(x + triangleRatio * radius, height - y + radius);
        myTriangle(0, 0, overlap);
        pop();

        push();
        fill(`rgba(0, 0, 0, ${noise(8)})`);
        translate(x + triangleRatio * radius, height - y + radius * 2);
        rotate(180);
        myTriangle(0, 0, overlap);
        pop();
      }

      if (x > width / 2) {
        push();
        fill(`rgba(0, 0, 0, ${noise(9)})`);
        translate(width - x, y - (radius / 2));
        myTriangle(0, 0, overlap);
        pop();

        push();
        fill(`rgba(0, 0, 0, ${noise(10)})`);
        translate(width - x, y + (radius / 2));
        rotate(180);
        myTriangle(0, 0, overlap);
        pop();

        push();
        fill(`rgba(0, 0, 0, ${noise(11)})`);
        translate(width - x + triangleRatio * radius, y + radius);
        myTriangle(0, 0, overlap);
        pop();

        push();
        fill(`rgba(0, 0, 0, ${noise(12)})`);
        translate(width - x + triangleRatio * radius, y + radius * 2);
        rotate(180);
        myTriangle(0, 0, overlap);
        pop();
      }

      if (y > height / 2 && x > width / 2) {
        push();
        fill(`rgba(0, 0, 0, ${noise(13)})`);
        translate(width - x, height - y - (radius / 2));
        myTriangle(0, 0, overlap);
        pop();

        push();
        fill(`rgba(0, 0, 0, ${noise(14)})`);
        translate(width - x, height - y + (radius / 2));
        rotate(180);
        myTriangle(0, 0, overlap);
        pop();

        push();
        fill(`rgba(0, 0, 0, ${noise(15)})`);
        translate(width - x + triangleRatio * radius, height - y + radius);
        myTriangle(0, 0, overlap);
        pop();

        push();
        fill(`rgba(0, 0, 0, ${noise(16)})`);
        translate(width - x + triangleRatio * radius, height - y + radius * 2);
        rotate(180);
        myTriangle(0, 0, overlap);
        pop();
      }
    }
  }
}

function touchMoved() {
  if (mouseX >= 0 && mouseY >= 0 && mouseX <= width && mouseY <= height) {
    return false
  };
}