import p5 from "p5";

const sketch = function (p) {
  let jump = 0;
  let scalar = 0;
  let angle = 0;
  let size;
  let speed;

  p.setup = function () {
    p.createCanvas(p.windowWidth, p.windowHeight);
    p.background("white");
    p.noStroke();
    p.fill("rgba(0, 0, 0, .9)");
    size = p.random(50, 60);
    speed = p.random(5, 10);
  };

  p.draw = function () {
    const x = p.width * 0.666 + p.cos(angle) * scalar;
    const y = p.height * 0.666 + p.sin(angle) * scalar;
    const noiseVal = p.noise(x, y);
    if (x > 0 && y > 0 && x < p.width && y < p.height) {
      p.ellipse(x, y, size * noiseVal);
    }
    angle += speed;
    if (angle / 360 > jump) {
      scalar += speed;
      speed += speed / size;
      jump++;
    }
  };

  p.windowResized = function () {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };
};

new p5(sketch, "sketch");
document.getElementById("description").innerHTML =
  "Reload page for a different variation.";
