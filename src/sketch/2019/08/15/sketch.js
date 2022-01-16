import p5 from "p5";
import attachCreateLoop from "p5.createloop/src/p5.createLoop";
window.p5 = p5;
attachCreateLoop();
import polarToCartesian from "util/polarToCartesian";

const RENDER = process.env.DEV && false;
const DURATION = 60;

const sketch = function (p) {
  p.setup = function () {
    p.frameRate(30);

    if (RENDER) {
      p.pixelDensity(1);
    }

    p.createCanvas(p.windowWidth, p.windowHeight);
    p.background(255);
    p.noFill();
    p.strokeWeight(10);

    p.createLoop(DURATION, {
      gif: RENDER ? { render: false, open: true } : false,
      noiseRadius: 0.01,
    });
  };

  p.draw = function () {
    const { noise1D, theta } = p.animLoop;

    p.stroke(
      p.map(noise1D(p.sin(theta)), -1, 1, 0, 255),
      p.map(noise1D(p.cos(theta)), -1, 1, 255, 0),
      p.map(noise1D(p.tan(theta)), -1, 1, 0, 255),
      16
    );
    const x1 = p.map(noise1D(p.sin(theta)), -1, 1, p.width / 4, p.width);
    const y1 = p.map(noise1D(p.cos(theta)), -1, 1, p.height / 4, p.height);
    const x2 = p.map(noise1D(p.cos(theta)), -1, 1, p.width, p.width / 4);
    const y2 = p.map(noise1D(p.sin(theta)), -1, 1, p.height, p.height / 4);
    const handle = polarToCartesian(
      p.width / 2,
      p.height / 2,
      theta,
      p.width / 3,
      true
    );
    p.bezier(x1, y1, ...handle, ...handle, x2, y2);
    p.bezier(
      p.width - x1,
      p.height - y1,
      p.width - handle[0],
      p.height - handle[1],
      p.width - handle[0],
      p.height - handle[1],
      p.width - x2,
      p.height - y2
    );

    !RENDER && p.frameCount === DURATION * 30 && p.noLoop();
  };

  p.windowResized = function () {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };
};

new p5(sketch, "sketch");
