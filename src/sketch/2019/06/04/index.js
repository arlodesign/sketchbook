import p5 from "p5";
import polarToCartesian from "util/polarToCartesian";
import { makeNoise4D } from "open-simplex-noise";
import lerpLine from "util/lerpLine";

const noise = new makeNoise4D(Date.now());

const sketch = function (p) {
  let steps = 300;
  let hue = p.random(67, 100);
  let alpha = 5;
  let a = 0;
  let i = 0;

  p.setup = function () {
    p.createCanvas(p.windowWidth, p.windowHeight);
    p.background(64);
    p.colorMode(p.HSB);
    p.strokeWeight(5);
  };

  p.draw = function () {
    p.translate(p.width / 2, p.height / 2);
    p.stroke(hue, 100, 100, alpha);

    const noiseVal = p.map(
      noise(
        (i + 0.1) / 10,
        (i + 0.2) / 10,
        p.cos(p.TWO_PI * (p.frameCount / steps)),
        p.sin(p.TWO_PI * (p.frameCount / steps))
      ),
      -1,
      1,
      0,
      1
    );
    const { x, y } = polarToCartesian(0, 0, a, p.width * noiseVal);

    lerpLine(p, 0, 0, x, y, 6 / p.dist(0, 0, x, y));

    a += p.TWO_PI / steps;
    if (a > p.TWO_PI) {
      i += 1000;
      alpha /= 2;
      a = 0;
      steps /= 2;
      hue -= 33;
      if (hue < 0) p.noLoop();
    }
  };

  p.windowResized = function () {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };
};

new p5(sketch, "sketch");
