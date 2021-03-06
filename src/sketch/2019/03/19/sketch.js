import p5 from "p5";
import polarToCartesian from "util/polarToCartesian";

const sketch = function (p) {
  let lastPoint;
  let maxDist;
  let hues = [];

  p.setup = function () {
    p.createCanvas(p.windowWidth, p.windowHeight);
    maxDist = p.dist(-100, -100, p.width + 100, p.height + 100);
    hues = [p.random(20, 40), p.random(60, 80)];
    p.background(hues[0]);
    p.colorMode(p.HSB, 100);
    p.blendMode(p.DIFFERENCE);
    p.noStroke();
  };

  p.draw = function () {
    const focus = polarToCartesian(
      -100,
      -100,
      p.frameCount / 100,
      p.width * p.noise(p.frameCount / 1000),
      true
    );
    let thisPoint = polarToCartesian(
      ...focus,
      p.frameCount / 2,
      maxDist * p.noise(p.frameCount / 100),
      true
    );
    p.fill(p.frameCount % 2 ? hues[0] : hues[1], 50, 75);
    if (lastPoint) {
      p.beginShape();
      p.vertex(-100, -100);
      p.vertex(...lastPoint);
      p.vertex(...thisPoint);
      p.endShape(p.CLOSE);
    }
    lastPoint = thisPoint;
    maxDist--;
    if (maxDist < 0) {
      p.noLoop();
    }
  };

  p.windowResized = function () {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };
};

new p5(sketch, "sketch");
