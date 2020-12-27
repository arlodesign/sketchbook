import p5 from "p5";
import polarToCartesian from "util/polarToCartesian";

const sketch = function (p) {
  const SIZE = 300;
  let sides;
  let a = 0;
  let aSpeed;
  let canvasRotationDirection;
  let quadraticVariant;
  let rOpt;
  let gOpt;
  let bOpt;
  const colorFunctions = [
    (angle) => p.abs(p.sin(angle)) * 240,
    (angle) => p.abs(p.cos(angle)) * 240,
    (angle) => p.abs(p.tan(angle)) * 240,
    (angle) => p.abs(p.sin(angle + p.PI)) * 240,
    (angle) => p.abs(p.cos(angle + p.PI)) * 240,
    (angle) => p.abs(p.tan(angle + p.PI)) * 240,
    (angle) => p.abs(p.sin(-angle)) * 240,
    (angle) => p.abs(p.cos(-angle)) * 240,
    (angle) => p.abs(p.tan(-angle)) * 240,
    (angle) => p.abs(p.sin(-angle + p.PI)) * 240,
    (angle) => p.abs(p.cos(-angle + p.PI)) * 240,
    (angle) => p.abs(p.tan(-angle + p.PI)) * 240,
    () => 240,
    () => 15,
    () => 128,
  ];

  p.setup = function () {
    p.createCanvas(p.windowWidth, p.windowHeight);
    p.background(128);
    sides = p.floor(p.random(3, 7));
    aSpeed = p.random(0.01, 0.05);
    canvasRotationDirection = p.random([-1, 1]);
    quadraticVariant = p.random(1, 2);
    while (Array.from(new Set([rOpt, gOpt, bOpt])).length < 3) {
      rOpt = p.random(colorFunctions);
      gOpt = p.random(colorFunctions);
      bOpt = p.random(colorFunctions);
    }
    p.strokeWeight(0.25);
    p.noFill();
    p.blendMode(p.HARD_LIGHT);
  };

  p.draw = function () {
    p.translate(
      ...Object.values(polarToCartesian(p.width / 2, p.height / 2, a, SIZE))
    );
    p.rotate((canvasRotationDirection * a) / sides);
    const { x, y } = polarToCartesian(0, 0, a, p.cos(a * sides) * SIZE);
    p.stroke(rOpt(a / sides), gOpt(a / sides), bOpt(a / sides));
    p.beginShape();
    p.vertex(
      ...Object.values(polarToCartesian(0, 0, 0, SIZE * quadraticVariant))
    );
    for (let i = 1; i <= sides; i++) {
      p.quadraticVertex(
        x,
        y,
        ...Object.values(
          polarToCartesian(
            0,
            0,
            (p.TWO_PI / sides) * i,
            SIZE * quadraticVariant
          )
        )
      );
    }
    p.endShape();
    a += aSpeed / p.TWO_PI;
    if (a > p.TWO_PI * sides) {
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
