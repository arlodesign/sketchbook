import p5 from "p5";
import "p5.createloop";
import polarToCartesian from "util/polarToCartesian";
import { easeInOutQuad as ease } from "util/easing";

const sketch = function (p) {
  const RENDER = p.getURLParams().render;
  const DURATION = 20;
  const RATE = 30;
  const LINES = 75;
  const COLORS = p.shuffle(["red", "green", "blue"]);

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
      noiseRadius: 1,
    });
    p.noFill();

    margin = p.width / 20;
    w = p.width / 2 - margin;
    gap = (p.width - margin * 2) / LINES;

    mask = p.createGraphics(p.width, p.height);
    mask.noStroke();
    mask.fill(0);
    mask.circle(p.width / 2, p.height / 2, w * 2 - margin);
  };

  p.draw = function () {
    const { noise2D, theta, progress } = p.animLoop;
    const easedProgress = ease(progress);
    const rotation = -4 * easedProgress * easedProgress + 4 * easedProgress;
    const canvas = p.createGraphics(p.width, p.height);

    canvas.background(0);
    canvas.strokeWeight(gap / 3);
    canvas.push();
    canvas.translate(canvas.width / 2, canvas.height / 2);
    for (let x = -w; x <= w; x += gap) {
      canvas.blendMode(canvas.BLEND);
      canvas.stroke(COLORS[0]);
      canvas.line(x, -w, x, w);

      canvas.blendMode(canvas.SCREEN);

      canvas.push();
      canvas.rotate((-canvas.QUARTER_PI / 10) * rotation);
      canvas.stroke(COLORS[1]);

      canvas.beginShape();
      canvas.vertex(x, -w);
      canvas.vertex(x, -w);
      for (let y = -w + gap * (LINES / 10); y <= w; y += gap * (LINES / 10)) {
        canvas.curveVertex(
          ...polarToCartesian(
            x + noise2D(x / 200, y / 200) * gap,
            y + noise2D(x, y) * gap * 2,
            canvas.TWO_PI * noise2D(x / 100, y / 100) + theta,
            gap * noise2D(y / 100, x / 100) * 2,
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
      canvas.stroke(COLORS[2]);

      canvas.beginShape();
      canvas.vertex(x, -w);
      canvas.vertex(x, -w);
      for (let y = -w + gap * (LINES / 10); y <= w; y += gap * (LINES / 10)) {
        canvas.curveVertex(
          ...polarToCartesian(
            x + noise2D(x / 300, y / 300) * gap,
            y + noise2D(x / 50, y / 50) * gap * 2,
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
      p.frameCount < DURATION * RATE &&
      p.save(
        `${String(p.frameCount).padStart(
          String(DURATION * RATE * 2).length,
          "0"
        )}.png`
      );
  };

  p.windowResized = function () {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };
};

new p5(sketch, "sketch");
