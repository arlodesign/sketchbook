import p5 from "p5";

const sketch = function (p) {
  const points = 360;
  let size;
  let xFocus;
  let yFocus;

  p.setup = function () {
    p.createCanvas(p.windowWidth, p.windowHeight);
    p.background(255);
    p.rectMode(p.CENTER);
    size = p.random(150, 250);
    xFocus = p.width / 2;
    yFocus = p.height / 2;
  };

  p.draw = function () {
    const noiseVal = p.noise(p.frameCount) + 0.5;
    const x =
      xFocus +
      p.cos((p.frameCount % points) * (p.TWO_PI / points)) * size * noiseVal;
    const y =
      yFocus +
      p.sin((p.frameCount % points) * (p.TWO_PI / points)) * size * noiseVal;
    p.fill(`rgba(0, 0, 0, ${p.noise(x, y) / 5})`);
    p.noStroke();
    p.ellipse(x, y, size * noiseVal);
    if (p.frameCount === points) {
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
