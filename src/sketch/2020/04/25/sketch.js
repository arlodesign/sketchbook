import p5 from "p5";
import attachCreateLoop from "p5.createloop/src/p5.createLoop";
window.p5 = p5;
attachCreateLoop();
import lerpLine from "util/lerpLine";

const sketch = function (p) {
  const RENDER = p.getURLParams().render;
  const DURATION = 20;
  const RATE = 30;
  const LINES = 150;
  const HUE = p.random(0, 1 / 3);
  const HUES = p.shuffle([HUE, HUE + 1 / 3, HUE + 2 / 3]);

  let margin;
  let gap;
  let w;
  let mask;

  p.setup = function () {
    p.pixelDensity(RENDER ? 2 : 1);
    p.frameRate(RATE);
    p.createCanvas(p.windowWidth, p.windowHeight);
    p.background(0);
    p.createLoop(DURATION, {
      noiseRadius: 0.8,
    });
    p.noFill();
    p.colorMode(p.HSB, 1);

    margin = p.width / 20;
    w = p.width / 2 - margin;
    gap = (p.width - margin * 2) / LINES;

    mask = p.createGraphics(p.width, p.height);
    mask.noStroke();
    mask.fill(0);
    mask.circle(p.width / 2, p.height / 2, w * 2 - margin);
  };

  p.draw = function () {
    const { noise2D, noise1D } = p.animLoop;
    const canvas = p.createGraphics(p.width, p.height);

    canvas.colorMode(p.HSB, 1);
    canvas.background(0);
    canvas.strokeWeight(gap);

    canvas.push();
    canvas.translate(canvas.width / 2, canvas.height / 2);

    for (let x = -w; x <= w; x += gap) {
      canvas.blendMode(canvas.BLEND);

      canvas.push();
      for (let y = -w; y < w; y += gap) {
        const y1 = y + noise2D(x, y) * gap;
        const y2 = y1 + gap * noise2D(y / 50, x / 50);
        const r = p.abs(noise2D(x / 50, y / 50));

        canvas.stroke(HUES[0], 1, p.abs(noise1D(y1 / 2)), 0.5);
        lerpLine(canvas, x, y1, x, y2, r);
      }
      canvas.pop();

      canvas.blendMode(canvas.SCREEN);

      canvas.push();
      for (let y = -w; y < w; y += gap) {
        const y1 = y + noise2D(x / 25, y / 25) * gap;
        const y2 = y1 + gap * noise2D(y / 100, x / 100);
        const r = p.abs(noise2D(x / 100, y / 100));

        canvas.stroke(HUES[1], 1, p.abs(noise1D(y1)), 0.5);
        lerpLine(canvas, x, y1, x, y2, r);
      }
      canvas.pop();

      canvas.push();
      for (let y = -w; y <= w; y += gap) {
        const y1 = y + noise2D(x / 50, y / 50) * gap;
        const y2 = y1 + gap * noise2D(y / 150, x / 150);
        const r = p.abs(noise2D(x / 150, y / 150));

        canvas.stroke(HUES[2], 1, p.abs(noise1D(y1 / 3)), 0.5);
        lerpLine(canvas, x, y1, x, y2, r);
      }
      canvas.pop();
    }

    canvas.pop();

    const canvasPixels = canvas.get();
    canvasPixels.mask(mask);
    p.image(canvasPixels, 0, 0);

    RENDER &&
      process.env.DEV &&
      p.frameCount <= DURATION * RATE &&
      p.save(
        `${String(p.frameCount).padStart(
          String(DURATION * RATE).length,
          "0"
        )}.png`
      );
  };

  p.windowResized = function () {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };
};

new p5(sketch, "sketch");
