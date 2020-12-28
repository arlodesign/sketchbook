import p5 from "p5";
import shuffle from "util/shuffle";

const sketch = function (p) {
  const HUE = p.random(100);
  const FRAME_COUNTDOWN = 5000;
  const MAX_ALPHA = 100;

  let divisors = shuffle([1, 2, 3, 5, 8, 13, 21, 34].map((d) => d * 100));
  let alpha = 0;

  p.setup = function () {
    p.createCanvas(p.windowWidth, p.windowHeight);
    p.background(0);
    p.noStroke();
    p.colorMode(p.HSB, 100);
    p.blendMode(p.HARD_LIGHT);
    p.curveTightness(-3);
  };

  p.draw = function () {
    p.fill(
      HUE,
      p.map(p.cos(p.frameCount / divisors[4]), -1, 1, 20, 50),
      p.map(p.cos(p.frameCount / divisors[5]), -1, 1, 60, 100),
      alpha
    );

    for (let i = 0.0; i < 1; i += p.noise(p.frameCount / 100) / 10) {
      const x1 = p.curvePoint(
        0,
        p.map(p.cos(p.frameCount / divisors[5]), -1, 1, 50, 100),
        p.map(
          p.cos(p.frameCount / divisors[6]),
          -1,
          1,
          p.width - 100,
          p.width - 50
        ),
        p.width,
        i
      );
      const y1 = p.curvePoint(
        p.map(p.cos(p.frameCount / divisors[0]), -1, 1, 100, p.height - 100),
        p.map(p.cos(p.frameCount / divisors[1]), -1, 1, 100, p.height - 100),
        p.map(p.cos(p.frameCount / divisors[2]), -1, 1, 100, p.height - 100),
        p.map(p.cos(p.frameCount / divisors[3]), -1, 1, 100, p.height - 100),
        i
      );

      p.circle(x1, y1, 1);
    }

    if (p.frameCount > FRAME_COUNTDOWN) {
      alpha -= 0.1;
      alpha < 0 && p.noLoop();
    } else {
      alpha = alpha < MAX_ALPHA ? alpha + 0.1 : alpha;
    }
  };

  p.windowResized = function () {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };
};

new p5(sketch, "sketch");
document.getElementById("description").innerHTML =
  "Reload page for a different variation.";
