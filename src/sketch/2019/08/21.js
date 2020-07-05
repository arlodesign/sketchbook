import p5 from "p5";
import "p5.createloop";

const RENDER = process.env.DEV && false;

const sketch = function (p) {
  const HUE = p.random();

  let yInterval = 3;
  let xInterval;

  p.setup = function () {
    if (RENDER) {
      p.pixelDensity(1);
      p.frameRate(30);
    }

    p.createCanvas(p.windowWidth, p.windowHeight);
    p.noFill();
    p.strokeWeight(2);
    p.colorMode(p.HSB, 1);

    xInterval = p.width / 15;

    p.createLoop(20, {
      gif: RENDER ? { render: false, open: true } : false,
      noiseRadius: 1,
    });
  };

  p.draw = function () {
    p.blendMode(p.BLEND);
    p.background(HUE, 0.9, 0.1);
    p.blendMode(p.HARD_LIGHT);

    const { noise1D, noise2D } = p.animLoop;

    for (let y = 0; y <= p.height; y += yInterval) {
      p.stroke(
        HUE,
        p.map(noise1D(y / 1000), -1, 1, 0.2, 0.8),
        p.map(noise1D(y), -1, 1, 0.2, 0.8),
        0.8
      );
      p.beginShape();
      p.curveVertex(-xInterval, y);
      for (let x = 0; x <= p.width; x += xInterval) {
        p.curveVertex(
          x,
          p.map(noise2D(x, y), -1, 1, y - yInterval * 10, y + yInterval * 10)
        );
      }
      p.curveVertex(p.width + xInterval, y);
      p.endShape();
    }
  };

  p.windowResized = function () {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };
};

new p5(sketch, "sketch");
document.getElementById("description").innerHTML =
  "Runs slow in the browser, but it made a nice GIF.";
