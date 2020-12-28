import p5 from "p5";

const sketch = function (p) {
  let count = 0;
  const total = 500;

  p.setup = function () {
    p.createCanvas(p.windowWidth, p.windowHeight);
    p.background("white");
    p.strokeWeight(4);
    p.noLoop();
  };

  p.draw = function () {
    while (count < total) {
      p.triangle(
        0,
        0,
        p.width,
        p.random(0, p.height),
        p.random(0, p.width),
        p.height
      );
      count++;
    }
  };

  p.windowResized = function () {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };
};

new p5(sketch, "sketch");
document.getElementById("description").innerHTML =
  "Reload page for a different variation.";
