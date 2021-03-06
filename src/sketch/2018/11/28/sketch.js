import p5 from "p5";

const sketch = function (p) {
  let angle = 0;
  let scalar = 0;
  let speed;
  let max;

  p.setup = function () {
    p.createCanvas(p.windowWidth, p.windowHeight);
    p.background("white");
    p.noFill();
    p.strokeWeight(2);
    speed = p.random(10, 20);
    max =
      Math.sqrt(
        Math.pow(p.width * (2 / 3), 2) + Math.pow(p.height * (2 / 3), 2)
      ) * 2;
  };

  p.draw = function () {
    const x1 =
      p.width / 3 + p.cos(angle) * p.random(scalar - 100, scalar + 100);
    const y1 =
      p.height / 3 + p.sin(angle) * p.random(scalar - 100, scalar + 100);
    const x2 =
      p.width / 3 + p.sin(angle) * p.random(scalar - 100, scalar + 100);
    const y2 =
      p.height / 3 + p.cos(angle) * p.random(scalar - 100, scalar + 100);
    p.triangle(p.width / 3, p.height / 3, x1, y1, x2, y2);
    p.push();
    p.strokeWeight(1);
    p.ellipse(p.width / 3, p.height / 3, scalar);
    p.pop();
    if (scalar > max) {
      p.noLoop();
    }
    angle += speed;
    scalar += speed;
  };

  p.windowResized = function () {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };
};

new p5(sketch, "sketch");
document.getElementById("description").innerHTML =
  "Reload page for a different variation.";
