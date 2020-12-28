import p5 from "p5";
import "p5.createloop";

const sketch = function (p) {
  const RENDER = p.getURLParams().render;
  const DURATION = 20;
  const RATE = 30;
  const LINES = 200;

  let mask;

  p.setup = function () {
    p.pixelDensity(1);
    p.frameRate(RATE);
    p.createCanvas(p.windowWidth, p.windowHeight);
    p.background(255);
    p.createLoop(DURATION, {
      gif: RENDER ? { render: false, open: true } : false,
      noiseRadius: 0.1,
    });

    mask = p.createGraphics(p.width, p.height);
    mask.noStroke();
    mask.fill(0);
    mask.circle(p.width / 2, p.height / 2, p.width * 0.8);
  };

  p.draw = function () {
    const { progress, noise2D, theta } = p.animLoop;
    const canvas = p.createGraphics(p.width, p.height);

    p.background(255);

    canvas.background(255);
    canvas.noFill();
    canvas.noSmooth();
    canvas.translate(p.width / 2, p.height / 2);

    for (let j = 1; j <= 3; j++) {
      for (let i = 1; i <= LINES; i++) {
        canvas.ellipse(
          noise2D(j, 1) * (p.width / 10),
          noise2D(j + 1, 2) * (p.width / 10),
          canvas.height *
            (i / LINES) *
            p.map(noise2D(j + 2, 3), -1, 1, 1.5, 1.7),
          canvas.height *
            (i / LINES) *
            p.map(noise2D(j + 3, 4), -1, 1, 1.5, 1.7)
        );
      }
    }

    const canvasPixels = canvas.get();
    canvasPixels.mask(mask);
    p.image(canvasPixels, 0, 0);

    p.frameCount % 100 === 0 && console.info(`${p.floor(progress * 100)}%`);
    if (!RENDER && p.frameCount === DURATION * RATE) {
      console.info("100%");
    }
  };

  p.windowResized = function () {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };
};

new p5(sketch, "sketch");
