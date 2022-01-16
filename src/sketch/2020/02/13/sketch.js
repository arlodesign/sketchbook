import p5 from "p5";
import polarToCartesian from "util/polarToCartesian";
import attachCreateLoop from "p5.createloop/src/p5.createLoop";
window.p5 = p5;
attachCreateLoop();

const sketch = function (p) {
  const RENDER = p.getURLParams().render;
  const DURATION = 120;
  const RATE = 60;
  const H = p.random(0.7);
  const START = p.random(p.TWO_PI);

  let coord = [];

  p.setup = function () {
    p.frameRate(RATE);
    p.noSmooth();
    p.createCanvas(p.windowWidth, p.windowHeight);
    p.background(128);
    p.colorMode(p.HSB, 1);
    p.noFill();
    p.createLoop(DURATION, {
      gif: RENDER ? { render: false, open: true } : false,
      noiseRadius: 0.1,
    });
  };

  p.draw = function () {
    const { progress, theta, noise1D } = p.animLoop;
    let bezierPoints = [];

    const startPoint = polarToCartesian(
      p.width / 2,
      p.height / 2,
      START + theta * 1.5,
      p.width / 2 - p.width / 30,
      true
    );
    const endPoint = polarToCartesian(
      p.width / 2,
      p.height / 2,
      START + theta * 1.5 + p.PI,
      p.width / 2 - p.width / 30,
      true
    );

    bezierPoints.push(startPoint);
    bezierPoints.push(
      polarToCartesian(
        ...startPoint,
        theta * (400 + noise1D(0.05) * 100),
        p.height * noise1D(0.07),
        true
      )
    );
    bezierPoints.push(
      polarToCartesian(
        ...endPoint,
        -theta * (400 + noise1D(0.06) * 100),
        p.height * -noise1D(0.08),
        true
      )
    );
    bezierPoints.push(endPoint);

    coord.push([
      p.bezierPoint(...bezierPoints.map((cp) => cp[0]), progress),
      p.bezierPoint(...bezierPoints.map((cp) => cp[1]), progress),
    ]);

    p.stroke(
      p.lerpColor(
        p.color(H, progress, 1 - progress),
        p.color(H + 0.3, 1 - progress, progress),
        progress
      )
    );

    if (coord.length > 3) {
      p.curve(...coord.slice(-4).flat());
    }

    p.frameCount % 100 === 0 && console.info(`${p.floor(progress * 100)}%`);
    if (!RENDER && p.frameCount === DURATION * RATE) {
      console.info("100%");
      p.noLoop();
    }
  };

  p.windowResized = function () {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };
};

new p5(sketch, "sketch");
