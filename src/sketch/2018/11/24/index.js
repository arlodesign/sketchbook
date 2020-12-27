import p5 from "p5";

const sketch = function (p) {
  let index = 0;

  p.setup = function () {
    p.createCanvas(p.windowWidth, p.windowHeight);
    p.background("white");
  };

  p.draw = function () {
    p.rectMode(p.CENTER);
    p.strokeWeight(3);
    for (let index = 0; index < 60; index++) {
      p.translate(index, index / 2);
      p.rotate(p.PI / index);
      p.rect(index + 200, index + 10, p.width / 3, p.height / 3);
    }
  };

  p.windowResized = function () {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };
};

new p5(sketch, "sketch");
