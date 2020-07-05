import p5 from "p5";
import shuffle from "util/shuffle";

const sketch = function (p) {
  const HUE = p.random(100);
  const FRAME_COUNTDOWN = 10000;
  let divisors = shuffle([1, 2, 3, 5, 8, 13].map((d) => d * 100));
  let alpha = 10;

  p.setup = function () {
    p.createCanvas(p.windowWidth, p.windowHeight);
    p.background("gray");
    p.noFill();
    p.colorMode(p.HSB, 100);
    p.blendMode(p.OVERLAY);
    p.curveTightness(-3);
  };

  p.draw = function () {
    p.stroke(
      HUE,
      p.map(p.cos(p.frameCount / divisors[4]), -1, 1, 33, 66),
      p.map(p.cos(p.frameCount / divisors[5]), -1, 1, 60, 80),
      alpha
    );
    p.curve(
      0,
      p.map(p.cos(p.frameCount / divisors[0]), -1, 1, 100, p.height - 100),
      100,
      p.map(p.cos(p.frameCount / divisors[1]), -1, 1, 100, p.height - 100),
      p.width - 100,
      p.map(p.cos(p.frameCount / divisors[2]), -1, 1, 100, p.height - 100),
      p.width,
      p.map(p.cos(p.frameCount / divisors[3]), -1, 1, 100, p.height - 100)
    );
    p.push();
    p.noStroke();
    p.blendMode(p.BLEND);
    p.fill("gray");
    p.rect(0, 0, p.width, 100);
    p.rect(0, p.height - 100, p.width, p.height);
    p.fill("black");
    if (p.frameCount > FRAME_COUNTDOWN) {
      alpha -= 0.01;
      alpha < 0 && p.noLoop();
    } else {
      p.text(FRAME_COUNTDOWN - p.frameCount, 10, 20);
    }
    p.pop();
  };

  p.windowResized = function () {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };
};

new p5(sketch, "sketch");
document.getElementById("description").innerHTML =
  "Reload page for a different variation.";
