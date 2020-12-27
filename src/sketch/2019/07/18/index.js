import p5 from "p5";
import polarToCartesian from "util/polarToCartesian";

const sketch = function (p) {
  const HUE = p.random(80);
  const ITERATIONS = 15;
  const COUNT = 720;

  let aElement = 0;
  let i = 1;
  let aPosition = 0;

  p.setup = function () {
    p.createCanvas(p.windowWidth, p.windowHeight);
    p.colorMode(p.HSL, 100);
    p.background(HUE, 30, 80);
    p.noFill();
    p.blendMode(p.OVERLAY);
    p.ellipseMode(p.CENTER);
  };

  p.draw = function () {
    const NOISE = p.noise(p.frameCount / (ITERATIONS * 100), aPosition);

    p.push();
    p.stroke(
      p.map(p.cos(p.frameCount / (ITERATIONS * 10)), -1, 1, HUE, HUE + 20),
      50,
      p.map(p.sin(aPosition), -1, 1, 90, 25),
      20 * (1 - NOISE)
    );
    p.translate(
      ...polarToCartesian(
        p.width / 2,
        p.height / 2,
        aPosition,
        (p.width / 3) * NOISE,
        true
      )
    );
    p.rotate(aElement);
    p.arc(
      0,
      0,
      p.width * NOISE,
      50,
      p.frameCount / ITERATIONS,
      p.frameCount / ITERATIONS + p.PI
    );
    p.pop();
    aPosition += p.TWO_PI / COUNT;

    console.log(i);

    aElement -= p.HALF_PI / (COUNT * ITERATIONS);
    if (aPosition > p.TWO_PI) {
      aPosition = 0;
      i++;
      if (i > ITERATIONS) {
        p.noLoop();
        console.log("done");
      }
    }
  };

  p.windowResized = function () {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };
};

new p5(sketch, "sketch");
