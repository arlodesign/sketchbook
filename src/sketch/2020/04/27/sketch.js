import p5 from "p5";
import attachCreateLoop from "p5.createloop/src/p5.createLoop";
window.p5 = p5;
attachCreateLoop();
import polarToCartesian from "util/polarToCartesian";
import { easeInOutQuad as ease } from "util/easing";

const sketch = function (p) {
  const RENDER = p.getURLParams().render;
  const DURATION = 20;
  const RATE = 30;
  const LINES = 200;
  const HUES = p.shuffle([1 / 3, 2 / 3, 1]);

  let margin;
  let gap;
  let w;
  let mask;

  p.setup = function () {
    p.pixelDensity(2);
    p.frameRate(RATE);
    p.createCanvas(p.windowWidth, p.windowHeight);
    p.background(0);
    p.createLoop(DURATION, {
      noiseRadius: 2,
    });
    p.noFill();
    p.noSmooth();

    margin = p.width / 20;
    w = p.width / 2 - margin;
    gap = (p.width - margin * 2) / LINES;

    mask = p.createGraphics(p.width, p.height);
    mask.noStroke();
    mask.fill(0);
    mask.circle(p.width / 2, p.height / 2, w * 2 - margin);
  };

  p.draw = function () {
    const { noise, noise1D, noise2D, theta, progress } = p.animLoop;
    const easedProgress = ease(progress);
    const rotation = -4 * easedProgress * easedProgress + 4 * easedProgress;
    const canvas = p.createGraphics(p.width, p.height);

    canvas.background(255);
    canvas.strokeWeight(gap / 2);
    canvas.noFill();
    canvas.colorMode(p.HSB, 1);

    canvas.push();
    canvas.translate(canvas.width / 2, canvas.height / 2);
    for (let x = -w; x <= w; x += gap) {
      canvas.blendMode(canvas.BLEND);
      canvas.stroke(HUES[0] * rotation, 1, p.abs(noise()), 0.5);
      canvas.line(
        x + noise1D(x / 100) * gap,
        -w,
        x + noise1D(x / 100) * gap,
        w
      );

      canvas.blendMode(canvas.MULTIPLY);

      canvas.push();
      canvas.rotate((-canvas.QUARTER_PI / 10) * rotation);

      canvas.beginShape();
      canvas.vertex(x, -w);
      canvas.vertex(x, -w);
      for (let y = -w + gap * (LINES / 10); y <= w; y += gap * (LINES / 10)) {
        const y1 = y + noise2D(x, y) * gap * 2;
        canvas.stroke(HUES[1] * rotation, 1, p.abs(noise1D(y1)), 0.5);
        canvas.curveVertex(
          ...polarToCartesian(
            x + noise2D(x / 200, y / 200) * gap,
            y1,
            canvas.TWO_PI * noise2D(x / 100, y / 100) + theta,
            gap * noise2D(y / 100, x / 100) * 3,
            true
          )
        );
      }

      canvas.vertex(x, w);
      canvas.vertex(x, w);
      canvas.endShape();
      canvas.pop();

      canvas.push();
      canvas.rotate((canvas.QUARTER_PI / 10) * rotation);

      canvas.beginShape();
      canvas.vertex(x, -w);
      canvas.vertex(x, -w);
      for (let y = -w + gap * (LINES / 10); y <= w; y += gap * (LINES / 10)) {
        const y1 = y + noise2D(x / 50, y / 50) * gap * 2;
        canvas.stroke(HUES[2] * rotation, 1, p.abs(noise1D(y1 / 3)), 0.5);
        canvas.curveVertex(
          ...polarToCartesian(
            x + noise2D(x / 300, y / 300) * gap,
            y1,
            canvas.TWO_PI * noise2D(x / 150, y / 150) + theta,
            gap * noise2D(y / 150, x / 150) * 2,
            true
          )
        );
      }

      canvas.vertex(x, w);
      canvas.vertex(x, w);
      canvas.endShape();
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
