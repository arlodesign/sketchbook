import p5 from "p5";
import polarToCartesian from "util/polarToCartesian";

const sketch = function (p) {
  let black = false;
  let t = 0;
  let prevVertex;

  p.setup = function () {
    p.createCanvas(p.windowWidth, p.windowHeight);
    p.background(255);
    p.strokeWeight(2);
    p.noFill();
  };

  p.draw = function () {
    p.translate(
      p.width / 2,
      p.map(
        p.sin(p.frameCount / 1000 + p.HALF_PI),
        -1,
        1,
        -p.width / 2,
        p.height - 200
      )
    );
    black = p.frameCount % 60 === 0 ? !black : black;
    p.stroke(black ? 0 : 255);
    p.beginShape();
    if (prevVertex) {
      p.vertex(...prevVertex);
    }
    for (let i = 0; i < p.PI; i += 0.01) {
      let prevVertex = polarToCartesian(
        0,
        0,
        i,
        p.map(p.noise(i, t), 0, 1, p.width / 2, p.width),
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
document.getElementById("description").innerHTML =
  "Be patient. This one starts drawing off-canvas.";
