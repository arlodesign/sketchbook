import p5 from "p5";

const sketch = function (p) {
  let angle = 0;
  let angleIncrement;
  let distance;
  let variantA;
  let variantB;

  p.setup = function () {
    p.createCanvas(p.windowWidth, p.windowHeight);
    angleIncrement = 0.01 / p.TWO_PI;
    distance = p.height / 2;
    variantA = p.floor(p.random([1, 2, 3, 5]));
    variantB = p.floor(p.random([7, 11, 13, 17]));
    p.background(255);
    p.strokeWeight(0.25);
    p.noFill();
  };

  p.draw = function () {
    angle += angleIncrement;
    let x1 = p.width / 2 + p.cos(angle * variantA) * distance;
    let y1 = p.height / 2 + p.sin(angle * variantB) * distance;
    let x2 = p.width / 2 + p.cos(angle * variantB + p.HALF_PI) * distance;
    let y2 = p.height / 2 + p.sin(angle * variantA + p.HALF_PI) * distance;
    let x3 = p.width / 2 + p.cos(angle * variantA + p.PI) * distance;
    let y3 = p.height / 2 + p.sin(angle * variantB + p.PI) * distance;
    let x4 = p.width / 2 + p.cos(angle * variantB + p.PI * 0.75) * distance;
    let y4 = p.height / 2 + p.sin(angle * variantA + p.PI * 0.75) * distance;
    p.bezier(x1, y1, x2, y2, x3, y3, x4, y4);
    if (angle > p.PI) {
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
