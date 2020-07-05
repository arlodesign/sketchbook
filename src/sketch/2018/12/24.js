import p5 from "p5";

const sketch = function (p) {
  let colorAlt;
  let weightAlt;
  let frameCountDiv;
  let dist;
  let distIncrement;

  p.setup = function () {
    p.createCanvas(p.windowWidth, p.windowHeight);
    while (
      colorAlt === weightAlt ||
      colorAlt % weightAlt === 0 ||
      weightAlt % colorAlt === 0
    ) {
      colorAlt = p.floor(p.random(5, 10));
      weightAlt = p.floor(p.random(5, 10));
    }
    p.frameCountDiv = -p.random(20, 30);
    dist = p.height / 3;
    distIncrement = -p.frameCountDiv / 100;
    p.background("white");
    p.noFill();
  };

  p.draw = function () {
    p.stroke(p.frameCount % colorAlt ? `rgba(0, 0, 0, 0.3)` : 255);
    p.strokeWeight(p.frameCount % weightAlt ? colorAlt * 2 : weightAlt * 2);
    const x = p.width / 2 + p.sin(p.frameCount / p.frameCountDiv) * dist;
    const y = p.height / 2 + p.cos(p.frameCount / p.frameCountDiv) * dist;
    p.bezier(
      p.width / 2,
      p.height / 2,
      p.lerp(p.width / 2, x, distIncrement),
      p.height / 2 + p.cos(p.frameCount / p.frameCountDiv + p.HALF_PI) * dist,
      p.width / 2 + p.sin(p.frameCount / p.frameCountDiv + p.HALF_PI) * dist,
      p.lerp(p.height / 2, y, distIncrement),
      x,
      y
    );
    p.bezier(
      p.width / 2,
      p.height / 2,
      p.lerp(p.width / 2, p.width - x, distIncrement),
      p.height / 2 + p.cos(p.frameCount / p.frameCountDiv - p.HALF_PI) * dist,
      p.width / 2 + p.sin(p.frameCount / p.frameCountDiv - p.HALF_PI) * dist,
      p.lerp(p.height / 2, p.height - y, distIncrement),
      p.width - x,
      p.height - y
    );
    dist -= distIncrement;
    if (dist <= 0) {
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
