import p5 from "p5";
import polarToCartesian from "util/polarToCartesian";
import "p5.createloop";

const RENDER = process.env.DEV && false;

const sketch = function (p) {
  p.setup = function () {
    if (RENDER) {
      p.pixelDensity(1);
      p.frameRate(30);
    }

    p.createCanvas(p.windowWidth, p.windowHeight);
    p.noStroke();

    p.createLoop(30, {
      gif: RENDER ? { render: false, open: true } : false,
      noiseRadius: 1,
    });
  };

  p.draw = function () {
    p.background(p.lerpColor(p.color("white"), p.color("pink"), 0.2));
    p.push();
    p.translate(p.width / 2, p.height / 2);

    const size =
      (p.width / 3) *
      p.map(p.animLoop.noise1D(p.sin(p.animLoop.theta)), -1, 1, 0.5, 1.5);

    for (let i = 1; i > 0; i -= 0.02) {
      p.push();
      p.rotate(p.map(p.sin(p.animLoop.theta), -1, 1, -p.TWO_PI, p.TWO_PI) * i);
      p.fill(p.lerpColor(p.color("white"), p.color("pink"), i));
      p.beginShape();
      p.vertex(...polarToCartesian(0, 0, 0, size * i, true));
      p.vertex(...polarToCartesian(0, 0, p.TWO_PI * (2 / 5), size * i, true));
      p.vertex(...polarToCartesian(0, 0, p.TWO_PI * (4 / 5), size * i, true));
      p.vertex(...polarToCartesian(0, 0, p.TWO_PI * (1 / 5), size * i, true));
      p.vertex(...polarToCartesian(0, 0, p.TWO_PI * (3 / 5), size * i, true));
      p.endShape(p.CLOSE);
      p.pop();
    }
    p.pop();
  };

  p.windowResized = function () {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };
};

new p5(sketch, "sketch");
document.getElementById("description").innerHTML =
  "For my daughter. She requested a pink star.";
