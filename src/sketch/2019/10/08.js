import p5 from "p5";
import "p5.createloop";
import polarToCartesian from "util/polarToCartesian";
import lerpLine from "util/lerpLine";

const RENDER = process.env.DEV && true;
const DURATION = 360;

const sketch = function (p) {
  let th = 0;
  let phi = 0;
  let maxDist;

  const HUE = p.random(33);
  const HUES = [HUE, HUE + 33, HUE + 33];
  const SCALARS = Array(8)
    .fill()
    .map((_, i) => p.floor(p.random(i, i + 3)));

  p.setup = function () {
    p.createCanvas(p.windowWidth, p.windowHeight);
    p.colorMode(p.HSL, 100);
    p.blendMode(p.HARD_LIGHT);
    p.background(p.random(HUES), 100, 10);
    p.strokeWeight(2);
    p.createLoop(DURATION, {
      noiseRadius: 1,
    });

    maxDist = p.dist(0, 0, p.width / 2, p.height / 2);
  };

  p.draw = function () {
    const { theta, noise1D } = p.animLoop;
    const pointA = polarToCartesian(0, 0, theta * 2, maxDist, true);
    const pointB = polarToCartesian(
      0,
      0,
      -theta * SCALARS[0],
      p.height * noise1D(SCALARS[0] / 100),
      true
    );
    const pointC = polarToCartesian(
      0,
      0,
      theta * SCALARS[1],
      p.width * noise1D(SCALARS[1] / 100),
      true
    );
    const pointD = polarToCartesian(0, 0, -theta * 2, p.height / 2, true);
    p.translate(p.width / 2, p.height / 2);
    p.rotate(theta);
    p.stroke(
      HUES[p.floor(p.map(p.sin(theta * SCALARS[2]), -1, 1, 0, 3))],
      100,
      p.map(p.sin(theta * SCALARS[3]), -1, 1, 50, 100),
      p.map(p.cos(theta * SCALARS[4]), -1, 1, 50, 0)
    );
    p.noFill();
    lerpLine(
      p,
      ...pointA,
      ...pointB,
      p.abs(noise1D(SCALARS[5] / 100)) + 0.0000001
    );
    lerpLine(
      p,
      ...pointB,
      ...pointC,
      p.abs(noise1D(SCALARS[6] / 100)) + 0.0000001
    );
    lerpLine(
      p,
      ...pointC,
      ...pointD,
      p.abs(noise1D(SCALARS[7] / 100)) + 0.0000001
    );

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
