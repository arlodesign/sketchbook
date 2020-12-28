import p5 from "p5";

const sketch = function (p) {
  const tri = 20;
  let rotation = 0;
  let rotationIncrement;

  function equilateralTriangle(x, y, radius) {
    p.triangle(
      x,
      y - radius,
      x - (Math.sqrt(3) / 2) * radius,
      y + radius / 2,
      x + (Math.sqrt(3) / 2) * radius,
      y + radius / 2
    );
  }

  p.setup = function () {
    p.createCanvas(p.windowWidth, p.windowHeight);
    p.noFill();
    p.angleMode(p.DEGREES);
  };

  p.draw = function () {
    p.background("white");
    rotation = p.map(p.mouseX, 0, p.width, 0, 60);
    rotationIncrement = p.map(
      p.mouseY,
      0,
      p.height,
      0,
      60 / (Math.floor(p.width / tri) * Math.floor(p.height / tri))
    );
    for (let h = 0; h < Math.ceil(p.height / (tri / 2)) + 2; h += 2) {
      for (let w = 0; w < Math.ceil(p.width / (tri / 2)) + 2; w += 2) {
        const x = w * (tri / 2);
        const y = h * (tri / 2);
        p.push();
        p.translate(x, y);
        p.rotate(rotation);
        equilateralTriangle(0, 0, tri);
        p.pop();
        rotation += rotationIncrement;
      }
    }
  };

  p.touchMoved = function () {
    if (
      p.mouseX >= 0 &&
      p.mouseY >= 0 &&
      p.mouseX <= p.width &&
      p.mouseY <= p.height
    ) {
      return false;
    }
  };

  p.windowResized = function () {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };
};

new p5(sketch, "sketch");
document.getElementById("description").innerHTML =
  "Move pointer or finger over sketch.";
