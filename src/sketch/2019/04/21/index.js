import p5 from "p5";

const sketch = function (p) {
  const TOTAL = 24;

  let i = 0;
  let y = 0;

  p.setup = function () {
    p.createCanvas(p.windowWidth, p.windowHeight);
    p.background(0);
    p.colorMode(p.HSB, 100);
    p.blendMode(p.ADD);
    p.rectMode(p.CENTER);
    p.noStroke();
  };

  p.draw = function () {
    p.fill(p.map(p.sin(p.frameCount / 2), -1, 1, 0, 100), 100, 100, 20);

    p.rect(
      p.map(
        p.noise(y / 100, p.frameCount / 10000),
        0,
        1,
        p.width * 0.333,
        p.width * 0.666
      ),
      y,
      p.map(
        p.noise(y / 200, p.frameCount / 100),
        0,
        1,
        p.width / TOTAL,
        (p.width / TOTAL) * (i + 1)
      ),
      3
    );

    y += 6;
    if (y > p.height) {
      y -= p.height;
      i++;
      i === TOTAL && p.noLoop();
    }
  };

  // p.touchMoved = function() {
  //  if (
  //    p.mouseX >= 0 &&
  //    p.mouseY >= 0 &&
  //    p.mouseX <= p.width &&
  //    p.mouseY <= p.height
  //  ) {
  //    return false;
  //  }
  // };

  p.windowResized = function () {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };
};

new p5(sketch, "sketch");
