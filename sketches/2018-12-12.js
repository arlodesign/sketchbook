window.sketchHeadline = "Move pointer over sketch.";

const gap = 10;

function setup() {
  pixelDensity(4);
  const myCanvas = createCanvas(660, 840);
  myCanvas.parent('my-canvas');
  noFill();
}

function draw() {
  background('white');

  const nearestY = Math.ceil(mouseY / gap) * gap;
  const yBottom = height - mouseY;

  for (let y = 0; y <= height; y += gap) {
    const pointX = map(
      Math.abs(mouseY - y),
      0, height,
      0, width / 3 - mouseX
    );
    const handleX = y < mouseY ?
      map(
        y,
        0, mouseY,
        mouseX, width / 3 - mouseX
      ) :
      map(
        y,
        mouseY, height,
        width / 3 - mouseX, mouseX
      );
    beginShape();
    line(0, y, pointX, y);
    bezier(
      pointX, y,
      handleX, y,
      0, mouseY,
      mouseX, mouseY
    );
    bezier(
      mouseX, mouseY,
      width, mouseY,
      width - handleX, y,
      width - pointX, y
    );
    line(width - pointX, y, width, y);
    endShape();
  }
}

function touchMoved() {
  if (mouseX >= 0 && mouseY >= 0 && mouseX <= width && mouseY <= height) {
    return false
  };
}