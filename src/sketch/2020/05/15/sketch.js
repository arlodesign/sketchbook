import p5 from "p5";
import attachCreateLoop from "p5.createloop/src/p5.createLoop";
window.p5 = p5;
attachCreateLoop();
import polarToCartesian from "util/polarToCartesian";

const sketch = function (p) {
  const RENDER = p.getURLParams().render;
  const DURATION = 30;
  const RATE = RENDER ? 60 : 30;
  const LINES = 400;
  const VERTICES = 20;
  const COLORS = p.shuffle(["cyan", "magenta", "yellow"]);

  let mask;

  p.setup = function () {
    p.pixelDensity(1);
    p.frameRate(RATE);
    p.createCanvas(p.windowWidth, p.windowHeight);
    p.background(0);
    p.createLoop(DURATION, {
      gif: RENDER ? { render: false, open: true } : false,
      noiseRadius: 0.2,
    });

    mask = p.createGraphics(p.width, p.height);
    mask.noStroke();
    mask.fill(0);
    mask.circle(p.width / 2, p.height / 2, p.width * 0.8);
  };

  p.draw = function () {
    const { progress, noise2D, theta } = p.animLoop;
    const canvas = p.createGraphics(p.width, p.height);

    p.background(0);

    canvas.background(255);
    canvas.blendMode(canvas.MULTIPLY);
    canvas.noFill();
    canvas.noSmooth();
    canvas.translate(p.width / 2, p.height / 2);

    for (let j = 1; j <= 3; j++) {
      canvas.stroke(COLORS[j - 1]);
      for (let i = 1; i <= LINES; i++) {
        const vertex = (a) => {
          const x = noise2D(j, 1) * (p.width / 2);
          const y =
            p.map(noise2D(j + 1, 2), -1, 1, p.width / 2, p.width) *
            (j % 2 ? -1 : 1);
          const angle = a > p.TWO_PI ? a - p.TWO_PI : a;
          const distance =
            canvas.height *
            (i / LINES) *
            p.map(
              noise2D(j + 3 * (i / LINES), angle * p.sin(angle)),
              -1,
              1,
              0.5,
              3
            );

          return polarToCartesian(
            x,
            y,
            angle + noise2D(j + 2, 3),
            distance,
            true
          );
        };

        canvas.beginShape();
        for (
          let a = 0;
          a <= p.TWO_PI + (p.TWO_PI / VERTICES) * 2;
          a += p.TWO_PI / VERTICES
        ) {
          canvas.curveVertex(...vertex(a));
        }

        canvas.endShape();
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
