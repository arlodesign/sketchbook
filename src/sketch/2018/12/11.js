import p5 from "p5";

const sketch = function (p) {
  const gap = 20;

  p.setup = function () {
    p.createCanvas(p.windowWidth, p.windowHeight);
    p.noFill();
  };

  p.draw = function () {
    p.background("white");
    const mx = p.map(p.mouseX, 0, p.width, -p.width, p.width * 2, true);
    const my = p.map(p.mouseY, 0, p.height, -p.height, p.height * 2, true);
    for (let y = 0; y <= p.height; y += gap) {
      p.bezier(0, y, mx, my, p.width - mx, p.height - my, p.width, y);
    }
    for (let x = gap; x < p.width; x += gap) {
      p.bezier(x, 0, mx, my, p.width - mx, p.height - my, x, p.height);
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
