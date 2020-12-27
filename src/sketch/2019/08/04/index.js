import p5 from "p5";
import "p5.createloop";

const RENDER = process.env.DEV && false;
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
    p.background(HUE, 20, 1);
    p.noFill();
    p.strokeWeight(0.5);
    p.colorMode(p.HSB, 100);

    margin = p.width / 20;
    color1 = p.color(HUE, 100, 80, 50);
    color2 = p.color(100 - HUE, 50, 100, 50);

    p.createLoop(DURATION, {
      gif: RENDER ? { render: false, open: true } : false,
      noiseRadius: 1,
    });
  };

  p.draw = function () {
    const { noise1D, theta } = p.animLoop;
    p.push();
    p.translate(p.width / 2, p.height / 2);
    p.stroke(p.lerpColor(color1, color2, p.map(p.sin(theta), -1, 1, 0, 1)));
    p.bezier(
      (-p.width / 2 + margin) * noise1D(-p.width / 2 + margin),
      (-p.height / 2 + margin) * noise1D(-p.height / 2 + margin),
      0,
      0,
      0,
      0,
      (p.width / 2 - margin) * noise1D(p.width / 2 - margin),
      (p.height / 2 - margin) * noise1D(p.height / 2 - margin)
    );
    p.pop();

    !RENDER && p.frameCount === DURATION * 30 && p.noLoop();
  };

  p.windowResized = function () {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };
};

new p5(sketch, "sketch");
