import p5 from "p5";
import attachCreateLoop from "p5.createloop/src/p5.createLoop";
window.p5 = p5;
attachCreateLoop();

const RENDER = false;

const sketch = function (p) {
  const COLORS = p.shuffle(["magenta", "yellow", "cyan"]);

  p.setup = function () {
    p.createCanvas(p.windowWidth, p.windowHeight);
    p.createLoop(3, {
      gif: RENDER ? { render: false, open: true } : false,
      noiseRadius: 0.1,
    });
    p.rectMode(p.CENTER);
    p.noStroke();
  };

  p.draw = function () {
    p.blendMode(p.BLEND);
    p.background(255);

    p.blendMode(p.MULTIPLY);

    [p.width / 30, p.width / 10, p.width / 5].forEach((g, i) => {
      for (let x = 0; x < p.width; x += g) {
        for (let y = 0; y < p.height; y += g) {
          p.push();
          p.fill(COLORS[i]);
          p.translate(x + g / 2, y + g / 2);
          p.scale(p.animLoop.noise2D(x + g / 2, y + g / 2));
          p.circle(0, 0, g);
          p.pop();
        }
      }
    });
  };

  p.windowResized = function () {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };
};

new p5(sketch, "sketch");
