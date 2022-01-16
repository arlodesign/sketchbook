import p5 from "p5";
import attachCreateLoop from "p5.createloop/src/p5.createLoop";
window.p5 = p5;
attachCreateLoop();
import polarToCartesian from "util/polarToCartesian";
import lineIntersection from "util/lineIntersection";
import { easeInOutQuint as ease } from "util/easing";

const sketch = function (p) {
  const DURATION = 360;
  const RATE = 60;
  const M = p.shuffle([1, 2, 3, 5, 7, 9, 11, 13, 17]);
  const OFFSET = p.shuffle([p.QUARTER_PI, p.HALF_PI, p.PI]);
  const HUE = p.random(0.5, p.TWO_PI - 0.5);
  const SIDE_COUNT = p.random([3, 4, 5, 6]);

  let shapes = [];
  let r;
  let complete = 0;

  p.setup = function () {
    p.frameRate(RATE);
    p.createCanvas(p.windowWidth, p.windowHeight);
    p.colorMode(p.HSB, p.TWO_PI);
    p.background(p.TWO_PI - HUE, p.QUARTER_PI, p.QUARTER_PI);
    p.createLoop(DURATION, {
      noiseRadius: 10,
    });
    p.blendMode(p.HARD_LIGHT);

    r = p.width / 4 - p.width / 30;

    shapes = [-1, 1].map((d) =>
      Array(SIDE_COUNT)
        .fill()
        .map((_, i) => [
          polarToCartesian(
            p.width / 2 + r * d,
            p.height / 2 + r * d,
            (p.TWO_PI / SIDE_COUNT) * i,
            r * d,
            true
          ),
          polarToCartesian(
            p.width / 2 + r * d,
            p.height / 2 + r * d,
            (p.TWO_PI / SIDE_COUNT) * (i + 1),
            r * d,
            true
          ),
        ])
    );
  };

  p.draw = function () {
    const { theta, noise, noise1D, progress } = p.animLoop;

    const thetaA = theta * M[0];
    const thetaB = theta * M[1] + OFFSET[0];
    const thetaC = theta * M[2] + OFFSET[1];
    const thetaD = theta * M[3] + OFFSET[2];

    let a = { x: null, y: null };
    let b = { x: null, y: null };

    for (let i = 0; i < SIDE_COUNT; i++) {
      a =
        a.x && a.y
          ? a
          : lineIntersection(
              p.width / 2 - r,
              p.height / 2 - r,
              ...polarToCartesian(
                p.width / 2 - r,
                p.height / 2 - r,
                thetaA,
                p.width / 2,
                true
              ),
              ...shapes[0][i][0],
              ...shapes[0][i][1]
            );

      b =
        b.x && b.y
          ? b
          : lineIntersection(
              p.width / 2 + r,
              p.height / 2 + r,
              ...polarToCartesian(
                p.width / 2 + r,
                p.height / 2 + r,
                thetaB,
                p.width / 2,
                true
              ),
              ...shapes[1][i][0],
              ...shapes[1][i][1]
            );
    }

    p.stroke(
      HUE + noise() / 2,
      p.asin(p.sin(theta * M[4])) + p.PI / 2,
      p.acos(p.cos(theta * M[5])) + p.PI / 2,
      ((-(2 * progress * progress) + 2 * progress) / 2) * p.TWO_PI
    );
    p.noFill();
    if (a.x && a.y && b.x && b.y) {
      p.bezier(
        a.x,
        a.y,
        ...polarToCartesian(
          p.width / 2,
          p.height / 2,
          thetaC,
          r * ease((noise1D(M[6]) + 1) / 2),
          true
        ),
        ...polarToCartesian(
          p.width / 2,
          p.height / 2,
          thetaD,
          r * ease((noise1D(M[7]) + 1) / 2),
          true
        ),
        b.x,
        b.y
      );
    }

    p.frameCount % 100 === 0 && console.info(`${p.floor(progress * 100)}%`);
    if (p.frameCount === DURATION * RATE) {
      console.info("100%");
      p.noLoop();
    }
  };

  p.windowResized = function () {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };
};

new p5(sketch, "sketch");
