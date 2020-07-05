import p5 from "p5";
import "p5.createloop";

const sketch = function (p) {
  const RENDER = p.getURLParams().render;
  const GRID = 10;
  const H = p.random(0.5);

  p.setup = function () {
    p.pixelDensity(1);
    p.createCanvas(p.windowWidth, p.windowHeight);
    p.colorMode(p.HSL, 1);

    p.createLoop(60, {
      gif: RENDER ? { render: false, open: true } : false,
      noiseRadius: 0.7,
    });
  };

  p.draw = function () {
    p.background(255);

    const { noise2D } = p.animLoop;
    const H1 = p.color(H, 1, 0.5);
    const H2 = p.color(H, 0, 1);

    for (let x = p.width / 2 - GRID / 2; x < p.width; x += GRID) {
      for (
        let l = 1;
        l > 0;
        l -= p.abs(noise2D(0.003, x)) || 1 / (p.height * 0.75 - p.height * 0.25)
      ) {
        p.fill(p.lerpColor(H1, H2, l));
        p.noStroke();
        p.rect(x, p.height * 0.25, GRID, p.height * 0.5 * l);
        p.rect(p.width - x - GRID, p.height * 0.25, GRID, p.height * 0.5 * l);
      }
    }
  };

  p.windowResized = function () {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };
};

new p5(sketch, "sketch");
