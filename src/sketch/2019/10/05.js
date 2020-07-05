import p5 from "p5";
import "p5.createloop";
import polarToCartesian from "util/polarToCartesian";

const RENDER = process.env.DEV && true;
const DURATION = 180;

const sketch = function (p) {
  let th = 0;
  let phi = 0;
  const HUE = p.random(80);
  const SCALARS = Array(3)
    .fill()
    .map(() => p.floor(p.random(1, 9)));

  p.setup = function () {
    p.createCanvas(p.windowWidth, p.windowHeight);
    p.colorMode(p.HSL, 100);
    p.background(HUE, 100, 90);
    p.createLoop(DURATION, {
      noiseRadius: 0.1,
    });
  };

  p.draw = function () {
    const { theta, noise1D } = p.animLoop;
    const pointA = polarToCartesian(0, 0, theta * 2, p.height / 3, true);
    const pointB = polarToCartesian(
      0,
      0,
      -theta * SCALARS[0],
      (p.width / 2) * noise1D(SCALARS[0] / 100),
      true
    );
    const pointC = polarToCartesian(
      0,
      0,
      theta * SCALARS[1],
      (p.width / 2) * noise1D(SCALARS[1] / 100),
      true
    );
    const pointD = polarToCartesian(0, 0, -theta * 2, p.width / 3, true);
    p.translate(p.width / 2, p.height / 2);
    p.rotate(theta);
    p.stroke(
      p.map(noise1D(SCALARS[3] / 100), -1, 1, HUE - 20, HUE + 20),
      100,
      p.map(p.cos(theta * 3), -1, 1, 50, 100),
      p.map(p.cos(theta * 2), -1, 1, 10, 0)
    );
    p.noFill();
    p.beginShape();
    p.curveVertex(...pointA);
    p.curveVertex(...pointB);
    p.curveVertex(...pointC);
    p.curveVertex(...pointD);
    p.curveVertex(...pointA);
    p.curveVertex(...pointB);
    p.curveVertex(...pointC);
    p.endShape();

    if (p.frameCount === DURATION * 60) {
      p.noLoop();
      RENDER && alert("done");
    }
  };

  p.windowResized = function () {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };
};

new p5(sketch, "sketch");
