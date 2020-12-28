import p5 from "p5";

const sketch = function (p) {
  const DIAMETER_Y = 20;

  let focus = {};

  p.setup = function () {
    p.createCanvas(p.windowWidth, p.windowHeight);
    p.background(255);
    focus = p.createVector(0, -DIAMETER_Y / 2);
    p.stroke(0);
    p.noFill();
  };

  p.draw = function () {
    focus.x = p.map(
      p.noise(focus.y / 50, p.frameCount / 5000),
      0,
      1,
      p.width * 0.25,
      p.width * 0.75
    );
    p.arc(
      focus.x,
      focus.y,
      p.map(
        p.noise(focus.y / 100, p.frameCount / 10000),
        0,
        1,
        0,
        p.width * 0.9
      ),
      DIAMETER_Y,
      p.frameCount % 2 ? 0 : p.PI,
      p.frameCount % 2 ? p.PI : 0
    );
    focus.y++;
    if (focus.y > p.height + DIAMETER_Y) {
      p.noLoop();
    }
  };

  p.windowResized = function () {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };
};

new p5(sketch, "sketch");
