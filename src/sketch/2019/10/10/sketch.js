import p5 from "p5";
import attachCreateLoop from "p5.createloop/src/p5.createLoop";
window.p5 = p5;
attachCreateLoop();

const RENDER = process.env.DEV && false;

const sketch = function (p) {
  const HUE = p.random();
  let colors = [];

  p.setup = function () {
    p.pixelDensity(1);
    p.frameRate(RENDER ? 30 : 60);
    p.createCanvas(p.windowWidth, p.windowHeight);
    p.createLoop(49, {
      gif: RENDER ? { render: false, open: true } : false,
      noiseRadius: 0.5,
    });
    p.colorMode(p.HSB, 3);
    p.strokeWeight(2);
  };

  p.draw = function () {
    const { theta, noise1D } = p.animLoop;
    p.blendMode(p.BLEND);
    p.background(255);
    p.blendMode(p.HARD_LIGHT);

    const grid = p.floor(
      p.map(noise1D(0.5), -1, 1, p.height / 10, p.height / 3)
    );

    for (let y = 0; y < p.height / grid; y++) {
      const w = p.width / (y + 1);
      let i = 0;
      for (let x = 0; x < p.width; x += w) {
        p.fill(HUE + (i % 3), 1, 2);
        p.rect(x, y * grid, x + w, y * grid + grid);
        i++;
      }
    }
    p.push();
    p.translate(p.width, p.height);
    p.rotate(p.PI);
    for (let y = 0; y < p.height / grid; y++) {
      const w = p.width / (y + 1);
      let i = 0;
      for (let x = 0; x < p.width; x += w) {
        p.fill(HUE + (i % 3), 1, 2);
        p.rect(x, y * grid, x + w, y * grid + grid);
        i++;
      }
    }
    p.pop();

    p.noFill();
    for (let y = 0; y < p.height / grid; y++) {
      const w = p.width / (y + 1);
      let i = 0;
      for (let x = 0; x < p.width; x += w) {
        p.rect(x, y * grid, x + w, y * grid + grid);
        i++;
      }
    }
    p.translate(p.width, p.height);
    p.rotate(p.PI);
    for (let y = 0; y < p.height / grid; y++) {
      const w = p.width / (y + 1);
      let i = 0;
      for (let x = 0; x < p.width; x += w) {
        p.rect(x, y * grid, x + w, y * grid + grid);
        i++;
      }
    }
  };

  p.windowResized = function () {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };
};

new p5(sketch, "sketch");
