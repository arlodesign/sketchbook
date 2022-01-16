import p5 from "p5";
import attachCreateLoop from "p5.createloop/src/p5.createLoop";
window.p5 = p5;
attachCreateLoop();
import lerpGradient from "util/lerpGradient";
import font from "assets/SairaStencilOne-Regular.ttf";

const sketch = function (p) {
  const RENDER = p.getURLParams().render;
  const RENDER_SIZE = 540;
  const DURATION = 10;
  const LETTER =
    p.getURLParams().letter || p.random("ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""));

  let myFont;
  let colors = [];
  let points = [];

  p.preload = function () {
    myFont = p.loadFont(font);
  };

  p.setup = function () {
    p.pixelDensity(1);
    p.frameRate(RENDER ? 1 : 30);
    p.createCanvas(
      RENDER ? RENDER_SIZE : p.floor(RENDER_SIZE / 4),
      RENDER ? RENDER_SIZE : p.floor(RENDER_SIZE / 4)
    );
    p.background(255);
    p.noSmooth();
    p.createLoop(DURATION * (RENDER ? 60 : 1), {
      noiseRadius: 2,
    });

    // get points...
    points = myFont.textToPoints(LETTER, 0, p.height, p.height * 1.5, {
      sampleFactor: 0.05,
    });

    colors = [p.color("red"), p.color("white"), p.color("blue")];
  };

  p.draw = function () {
    const { progress, theta, noise1D, noise2D } = p.animLoop;
    const loopedProgress = p.sin(2 * p.PI * progress - p.PI / 2) / 2 + 0.5;

    p.background(255);

    p.loadPixels();
    for (let y = 0; y < p.height; y++) {
      for (let x = 0; x < p.width; x++) {
        const index = (x + y * p.width) * 4;
        const thesePoints = points.map((pt) => ({
          x: pt.x + noise1D(x / 100) * (p.width / 2) * loopedProgress,
          y: pt.y + noise1D(y / 100) * (p.width / 2) * loopedProgress,
        }));
        const dist = Math.min(
          ...thesePoints.map((pt) => p.dist(x, y, pt.x, pt.y))
        );
        const c = lerpGradient(
          p,
          p.abs(noise2D(x / dist / 50, y / dist / 50)),
          ...colors
        );

        p.pixels[index] = p.red(c);
        p.pixels[index + 1] = p.green(c);
        p.pixels[index + 2] = p.blue(c);
        p.pixels[index + 3] = 255;
      }
    }
    p.updatePixels();

    if (RENDER && p.frameCount <= DURATION * (RENDER ? 60 : 1)) {
      p.frameCount % 100 === 0 && console.info(`${p.ceil(progress * 100)}%`);
      p.save(
        `${LETTER}_${String(p.frameCount).padStart(
          String(DURATION * (RENDER ? 60 : 1)).length,
          "0"
        )}.png`
      );
    }
  };
};

new p5(sketch, "sketch");
