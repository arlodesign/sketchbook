import p5 from "p5";
import polarToCartesian from "util/polarToCartesian";

const sketch = function (p) {
  let t = 0;
  let prevVertex;

  p.setup = function () {
    p.createCanvas(p.windowWidth, p.windowHeight);
    p.background(0);
    p.stroke(255, 10);
    p.noFill();
  };

  p.draw = function () {
    p.translate(
      p.width / 2,
      p.map(p.cos(p.frameCount / 1000), -1, 1, 0, p.height)
    );
    p.beginShape();
    if (prevVertex) {
      p.vertex(...prevVertex);
    }
    for (let i = 0; i < p.TWO_PI; i += 0.01) {
      let prevVertex = polarToCartesian(
        0,
        0,
        i + t,
        p.map(p.noise(i, t), 0, 1, 0, p.width),
        true
      );
      p.curveVertex(...prevVertex);
    }
    p.endShape();
    t += 0.001;
    p.frameCount / 1000 > p.PI && p.noLoop();
  };

  p.windowResized = function () {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };
};

new p5(sketch, "sketch");
