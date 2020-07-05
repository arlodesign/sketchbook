import p5 from "p5";

const sketch = function (p) {
  let scalar;
  let x;
  let y;
  let x2;
  let y2;

  p.setup = function () {
    p.createCanvas(p.windowWidth, p.windowHeight);
    p.background("white");
    p.noFill();
    p.stroke(0);
    scalar = p.random(10, 20);
    x = x2 = p.width / 2;
    y = y2 = p.height / 2;
  };

  p.draw = function () {
    const moveX = p.random([-scalar, scalar]);
    const moveY = p.random([-scalar, scalar]);
    p.strokeWeight(scalar * p.noise(x, y));
    x = x2 + moveX;
    y = y2 + moveY;
    if (x > 0 && y > 0 && x < p.width && y < p.height) {
      p.line(x2, y2, x, y);
      p.line(p.width - x2, p.height - y2, p.width - x, p.height - y);
    } else {
      p.noLoop();
    }
    x2 = x;
    y2 = y;
  };

  p.windowResized = function () {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };
};

new p5(sketch, "sketch");
document.getElementById("description").innerHTML =
  "Reload page for a different variation.";
