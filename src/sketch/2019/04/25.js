import p5 from "p5";
import polarToCartesian from "util/polarToCartesian";
import { makeNoise4D } from "open-simplex-noise";

const noise = new makeNoise4D(Date.now());

const sketch = function (p) {
  const STEPS = 1000;

  let hue = p.random(67, 100);
  let alpha = 5;
  let a = 0;
  let i = 0;

  p.setup = function () {
    p.createCanvas(p.windowWidth, p.windowHeight);
    p.background(128);
    p.colorMode(p.HSB);
    p.blendMode(p.OVERLAY);
    p.strokeWeight(1);
  };

  p.draw = function () {
    p.translate(p.width / 2, p.height / 2);
    p.stroke(hue, 100, 100, alpha);

    const noiseVal = p.map(
      noise(
        (i + 0.1) / 10,
        (i + 0.2) / 10,
        p.cos(p.TWO_PI * (p.frameCount / STEPS)),
        p.sin(p.TWO_PI * (p.frameCount / STEPS))
      ),
      -1,
      1,
      0,
      1
    );
    const { x, y } = polarToCartesian(0, 0, a, p.width * noiseVal);
    let flip = true;

    for (let l = 0; l < 1; l += noiseVal / 4 + 0.0000001) {
      flip && p.beginShape();
      p.vertex(p.lerp(0, x, l), p.lerp(0, y, l));
      !flip && p.endShape();
      flip = !flip;
    }
    p.endShape();

    a += p.TWO_PI / STEPS;
    if (a > p.TWO_PI) {
      i += 1000;
      alpha /= 2;
      a = 0;
      hue -= 33;
      if (hue < 0) p.noLoop();
    }
  };

  p.windowResized = function () {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };
};

new p5(sketch, "sketch");
