import p5 from "p5";

const sketch = function (p) {
  const centerWeight = 20;
  const centerWeightGrowth = 6;

  p.setup = function () {
    p.createCanvas(p.windowWidth, p.windowHeight);
    p.strokeWeight(3);
    p.fill(0);
  };

  p.draw = function () {
    p.background("white");
    const centerWeightX = p.map(
      Math.abs(p.width / 2 - p.mouseX),
      0,
      p.width / 2,
      centerWeight,
      centerWeight * centerWeightGrowth
    );
    const centerWeightY = p.map(
      Math.abs(p.height / 2 - p.mouseY),
      0,
      p.height / 2,
      centerWeight * centerWeightGrowth,
      centerWeight
    );
    p.stroke(0);
    p.line(p.mouseX, 0, p.mouseX, p.mouseY);
    p.line(p.width, p.mouseY, p.mouseX, p.mouseY);
    p.line(p.mouseX, p.height, p.mouseX, p.mouseY);
    p.line(0, p.mouseY, p.mouseX, p.mouseY);
    p.stroke(255);
    p.quad(
      p.mouseX,
      p.mouseY,
      p.mouseX - centerWeightX,
      p.mouseY,
      0,
      0,
      p.mouseX,
      p.mouseY - centerWeightY
    );
    p.quad(
      p.mouseX,
      p.mouseY,
      p.mouseX + centerWeightX,
      p.mouseY,
      p.width,
      0,
      p.mouseX,
      p.mouseY - centerWeightY
    );
    p.quad(
      p.mouseX,
      p.mouseY,
      p.mouseX + centerWeightX,
      p.mouseY,
      p.width,
      p.height,
      p.mouseX,
      p.mouseY + centerWeightY
    );
    p.quad(
      p.mouseX,
      p.mouseY,
      p.mouseX - centerWeightX,
      p.mouseY,
      0,
      p.height,
      p.mouseX,
      p.mouseY + centerWeightY
    );
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
