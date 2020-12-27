import p5 from "p5";
import "p5.createloop";
import lerpLine from "util/lerpLine";

const RENDER = process.env.DEV && true;
const DURATION = 60;

const sketch = function (p) {
  const HUE = p.random(100);

  let margin;
  let color1;
  let color2;

  p.setup = function () {
    p.frameRate(30);

    if (RENDER) {
      p.pixelDensity(1);
    }

    p.createCanvas(p.windowWidth, p.windowHeight);
    p.colorMode(p.HSL, 100);
    p.background(HUE, 50, 90);
    p.noFill();
    p.strokeWeight(2);

    margin = p.width / 20;
    color1 = p.color(HUE, 100, 20, 10);
    color2 = p.color(100 - HUE, 50, 50, 10);

    p.createLoop(DURATION, {
      gif: RENDER ? { render: false, open: true } : false,
      noiseRadius: 0.8,
    });
  };

  p.draw = function () {
    const { noise1D, theta } = p.animLoop;
    p.push();
    p.translate(p.width / 2, p.height / 2);
    p.stroke(p.lerpColor(color1, color2, p.map(p.sin(theta), -1, 1, 0, 1)));
    p.line(
      (-p.width / 2 + margin) * noise1D(-p.width / 2 + margin),
      -p.height / 2 + margin,
      (p.width / 2 - margin) * noise1D(p.width / 2 - margin),
      p.height / 2 - margin
    );
    p.pop();

    !RENDER && p.frameCount === DURATION * 30 && p.noLoop();
  };

  p.windowResized = function () {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };
};

new p5(sketch, "sketch");
