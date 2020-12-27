import p5 from "p5";

const sketch = function (p) {
  const triangleRatio = Math.sqrt(5) / 2;

  function myTriangle(x, y, radius) {
    p.triangle(
      x,
      y - radius,
      x - triangleRatio * radius,
      y + radius / 2,
      x + triangleRatio * radius,
      y + radius / 2
    );
  }

  p.setup = function () {
    p.createCanvas(p.windowWidth, p.windowHeight);
    p.angleMode(p.DEGREES);
    p.noStroke();
  };

  p.draw = function () {
    p.background("white");
    const radius = p.map(p.mouseX, 0, p.width, 30, 120, true);
    const overlap = p.map(p.mouseY, 0, p.height, radius / 2, radius * 2, true);
    for (let y = p.height / 2; y <= p.height + radius * 3; y += radius * 3) {
      for (
        let x = p.width / 2;
        x <= p.width + radius * 3;
        x += triangleRatio * radius * 2
      ) {
        p.push();
        p.fill(`rgba(0, 0, 0, ${p.noise(1)})`);
        p.translate(x, y - radius / 2);
        myTriangle(0, 0, overlap);
        p.pop();
        p.push();
        p.fill(`rgba(0, 0, 0, ${p.noise(2)})`);
        p.translate(x, y + radius / 2);
        p.rotate(180);
        myTriangle(0, 0, overlap);
        p.pop();
        p.push();
        p.fill(`rgba(0, 0, 0, ${p.noise(3)})`);
        p.translate(x + triangleRatio * radius, y + radius);
        myTriangle(0, 0, overlap);
        p.pop();
        p.push();
        p.fill(`rgba(0, 0, 0, ${p.noise(4)})`);
        p.translate(x + triangleRatio * radius, y + radius * 2);
        p.rotate(180);
        myTriangle(0, 0, overlap);
        p.pop();
        if (y > p.height / 2) {
          p.push();
          p.fill(`rgba(0, 0, 0, ${p.noise(5)})`);
          p.translate(x, p.height - y - radius / 2);
          myTriangle(0, 0, overlap);
          p.pop();
          p.push();
          p.fill(`rgba(0, 0, 0, ${p.noise(6)})`);
          p.translate(x, p.height - y + radius / 2);
          p.rotate(180);
          myTriangle(0, 0, overlap);
          p.pop();
          p.push();
          p.fill(`rgba(0, 0, 0, ${p.noise(7)})`);
          p.translate(x + triangleRatio * radius, p.height - y + radius);
          myTriangle(0, 0, overlap);
          p.pop();
          p.push();
          p.fill(`rgba(0, 0, 0, ${p.noise(8)})`);
          p.translate(x + triangleRatio * radius, p.height - y + radius * 2);
          p.rotate(180);
          myTriangle(0, 0, overlap);
          p.pop();
        }
        if (x > p.width / 2) {
          p.push();
          p.fill(`rgba(0, 0, 0, ${p.noise(9)})`);
          p.translate(p.width - x, y - radius / 2);
          myTriangle(0, 0, overlap);
          p.pop();
          p.push();
          p.fill(`rgba(0, 0, 0, ${p.noise(10)})`);
          p.translate(p.width - x, y + radius / 2);
          p.rotate(180);
          myTriangle(0, 0, overlap);
          p.pop();
          p.push();
          p.fill(`rgba(0, 0, 0, ${p.noise(11)})`);
          p.translate(p.width - x + triangleRatio * radius, y + radius);
          myTriangle(0, 0, overlap);
          p.pop();
          p.push();
          p.fill(`rgba(0, 0, 0, ${p.noise(12)})`);
          p.translate(p.width - x + triangleRatio * radius, y + radius * 2);
          p.rotate(180);
          myTriangle(0, 0, overlap);
          p.pop();
        }
        if (y > p.height / 2 && x > p.width / 2) {
          p.push();
          p.fill(`rgba(0, 0, 0, ${p.noise(13)})`);
          p.translate(p.width - x, p.height - y - radius / 2);
          myTriangle(0, 0, overlap);
          p.pop();
          p.push();
          p.fill(`rgba(0, 0, 0, ${p.noise(14)})`);
          p.translate(p.width - x, p.height - y + radius / 2);
          p.rotate(180);
          myTriangle(0, 0, overlap);
          p.pop();
          p.push();
          p.fill(`rgba(0, 0, 0, ${p.noise(15)})`);
          p.translate(
            p.width - x + triangleRatio * radius,
            p.height - y + radius
          );
          myTriangle(0, 0, overlap);
          p.pop();
          p.push();
          p.fill(`rgba(0, 0, 0, ${p.noise(16)})`);
          p.translate(
            p.width - x + triangleRatio * radius,
            p.height - y + radius * 2
          );
          p.rotate(180);
          myTriangle(0, 0, overlap);
          p.pop();
        }
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
