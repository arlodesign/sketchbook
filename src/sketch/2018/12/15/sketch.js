import p5 from "p5";
import rope from "assets/rope.png";

const sketch = function (p) {
  const scalar = 36;
  let img;

  p.preload = function () {
    img = p.loadImage(rope);
  };

  p.setup = function () {
    p.createCanvas(p.windowWidth, p.windowHeight);
  };

  p.draw = function () {
    p.background(img);
    const offset = p.map(p.mouseX, 0, p.width, 0, scalar, true);
    const spin = p.map(p.mouseY, 0, p.height, 0, p.PI / scalar, true);
    p.translate(p.width / 2, p.height / 2);
    p.push();
    p.rotate(spin);
    p.tint(255, 128);
    p.image(
      img,
      -p.width / 2 - offset,
      -p.height / 2 - offset,
      p.width + offset * 2,
      p.height + offset * 2
    );
    p.pop();
    p.push();
    p.rotate(spin * 2);
    p.tint(255, 64);
    p.image(
      img,
      -p.width / 2 - offset * 2,
      -p.height / 2 - offset * 2,
      p.width + offset * 4,
      p.height + offset * 4
    );
    p.pop();
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
