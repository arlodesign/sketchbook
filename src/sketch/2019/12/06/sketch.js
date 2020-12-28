import p5 from "p5";
import "p5.createloop";
import polarToCartesian from "util/polarToCartesian";

const sketch = function (p) {
  const RENDER = p.getURLParams().render;
  const COLORS = p.shuffle(["cyan", "magenta", "yellow"]);

  p.setup = function () {
    if (RENDER) {
      p.pixelDensity(1);
      p.frameRate(30);
    }
    p.createCanvas(p.windowWidth, p.windowHeight);
    p.createLoop(20, {
      gif: RENDER ? { render: false, open: true } : false,
      noiseRadius: 0.5,
    });
    p.noStroke();
  };

  p.draw = function () {
    p.blendMode(p.BLEND);
    p.background(255);
    p.blendMode(p.MULTIPLY);

    const { theta, noise1D } = p.animLoop;

    p.translate(p.width / 2, p.height / 2);
    p.rotate(theta);
    for (let i = 0; i < 3; i++) {
      const a = i * (p.TWO_PI / 3);
      p.fill(COLORS[i]);
      p.push();
      p.translate(...polarToCartesian(0, 0, a, p.width * noise1D(0.1), true));
      p.rotate(-theta + a);
      p.ellipse(
        0,
        0,
        (p.width / 10) * (noise1D(0.2) + 2),
        (p.height / 2) * (noise1D(0.3) + 2)
      );
      p.pop();
    }

    for (let i = 0; i < 3; i++) {
      const a = i * (p.TWO_PI / 3);
      p.fill(COLORS[2 - i]);

      p.push();
      p.translate(
        ...polarToCartesian(0, 0, a, (p.width / 5) * noise1D(0.4), true)
      );
      p.rotate(theta + a);
      p.ellipse(
        0,
        0,
        (p.width / 2) * (noise1D(0.5) + 2),
        (p.height / 20) * (noise1D(0.6) + 2)
      );
      p.pop();
    }

    for (let i = 0; i < 18; i++) {
      const a = i * (p.TWO_PI / 18) + p.TWO_PI / 36;
      p.fill(COLORS[i % 3]);

      p.push();
      p.translate(
        ...polarToCartesian(0, 0, a, p.width * noise1D(0.7 + i), true)
      );
      p.rotate(theta + a);
      p.circle(0, 0, (p.width / 20) * (noise1D(0.8) + 1));
      p.pop();
    }
  };

  p.windowResized = function () {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };
};

new p5(sketch, "sketch");
