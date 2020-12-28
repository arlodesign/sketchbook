import p5 from "p5";
import lerpLine from "util/lerpLine";
import "p5.createloop";

const RENDER = process.env.DEV && false;

const sketch = function (p) {
  const GRID_SIZE = 10;

  p.setup = function () {
    if (RENDER) {
      p.pixelDensity(1);
      p.frameRate(30);
    }

    p.createCanvas(p.windowWidth, p.windowHeight);
    p.noStroke();
    p.rectMode(p.CENTER);
    p.createLoop(20, {
      gif: RENDER ? { render: false, open: true } : false,
      noiseRadius: 0.1,
    });
  };

  p.draw = function () {
    p.background(0);

    let yPoints = [];

    for (let x = 0; x <= p.width / 2; x += GRID_SIZE) {
      let y = [];
      const noiseVal = p.map(p.animLoop.noise1D(x / 10), -1, 1, 0, 0.5);
      for (let l = 0; l < 1; l += noiseVal) {
        l > 0 && y.push(p.lerp(0, p.height, l));
      }
      yPoints.push(y);
    }

    yPoints.forEach((col, i) => {
      col.forEach((y) => {
        let size = p.map(y, 0, p.height, GRID_SIZE, 1);

        p.rect(i * GRID_SIZE, y, size, size);
        p.rect(i * GRID_SIZE, p.height - y, size, size);
        p.rect(p.width - i * GRID_SIZE, y, size, size);
        p.rect(p.width - i * GRID_SIZE, p.height - y, size, size);
      });
    });
  };

  p.windowResized = function () {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };
};

new p5(sketch, "sketch");
