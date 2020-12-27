import p5 from "p5";

const sketch = function (p) {
  const HUE = p.random(0.5, 1);
  const ITERATIONS = 30;

  let a = 0;
  let i = 1;
  let x = 0;

  p.setup = function () {
    p.createCanvas(p.windowWidth, p.windowHeight);
    p.colorMode(p.HSB, 1);
    p.background(HUE, 0.8, 0.1);
    p.noFill();
    p.blendMode(p.OVERLAY);
    p.ellipseMode(p.CENTER);
  };

  p.draw = function () {
    const NOISE = p.noise(p.frameCount / (ITERATIONS * 100), x);

    p.push();
    p.stroke(
      p.map(p.cos(p.frameCount / (ITERATIONS * 10)), -1, 1, HUE, HUE - 0.5),
      0.5,
      0.8,
      NOISE
    );
    p.translate(x, p.height / 2);
    p.arc(
      0,
      0,
      50,
      p.height * NOISE,
      p.frameCount / ITERATIONS,
      p.frameCount / ITERATIONS + p.QUARTER_PI
    );
    p.pop();
    x++;

    console.log(i);

    a -= p.TWO_PI / (p.height * ITERATIONS);
    if (x > p.width) {
      x = 0;
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
