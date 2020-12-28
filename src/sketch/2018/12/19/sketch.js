import p5 from "p5";

const sketch = function (p) {
  let maxRotation;
  let size;
  let scalar;
  let xFocus;
  let yFocus;
  let angle = 0;

  p.setup = function () {
    p.createCanvas(p.windowWidth, p.windowHeight);
    p.background(0);
    p.noFill();
    maxRotation = 60 * p.PI;
    size = p.random(250, 300);
    scalar = p.random(10, 15) / maxRotation;
    xFocus = p.width / 2;
    yFocus = p.height / 2;
  };

  p.draw = function () {
    let xEnd;
    let yEnd;
    let xHandle;
    let yHandle;
    switch (p.frameCount % 3) {
      case 0:
        xEnd = xFocus + (p.cos((7 * p.PI) / 6) * size) / 2;
        yEnd = yFocus + (p.sin((7 * p.PI) / 6) * size) / 2;
        xHandle = xFocus + p.cos((7 * p.PI) / 6) * size * 2;
        yHandle = yFocus + p.sin((7 * p.PI) / 6) * size * 2;
        break;
      case 1:
        xEnd = xFocus + (p.cos((11 * p.PI) / 6) * size) / 2;
        yEnd = yFocus + (p.sin((11 * p.PI) / 6) * size) / 2;
        xHandle = xFocus + p.cos((11 * p.PI) / 6) * size * 2;
        yHandle = yFocus + p.sin((11 * p.PI) / 6) * size * 2;
        break;
      case 2:
        xEnd = xFocus + (p.cos(p.HALF_PI) * size) / 2;
        yEnd = yFocus + (p.sin(p.HALF_PI) * size) / 2;
        xHandle = xFocus + p.cos(p.HALF_PI) * size * 2;
        yHandle = yFocus + p.sin(p.HALF_PI) * size * 2;
        break;
    }
    const noiseVal = p.noise(p.frameCount) * (size / 20);
    const xStart = xFocus + p.cos(angle) * (size - noiseVal);
    const yStart = yFocus + p.sin(angle) * (size - noiseVal);
    p.stroke(p.frameCount % 5 ? 255 : 0);
    p.strokeWeight(p.frameCount % 5 ? 1 : 2);
    p.bezier(xStart, yStart, xFocus, yFocus, xHandle, yHandle, xEnd, yEnd);
    angle += scalar;
    if (angle > maxRotation) {
      p.noLoop();
    }
  };

  p.windowResized = function () {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };
};

new p5(sketch, "sketch");
document.getElementById("description").innerHTML =
  "Reload page for a different variation.";
