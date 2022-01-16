import p5 from "p5";
import attachCreateLoop from "p5.createloop/src/p5.createLoop";
window.p5 = p5;
attachCreateLoop();
import { easeInOutQuad as ease } from "util/easing";

const sketch = function (p) {
  const RENDER = p.getURLParams().render;
  const GRID = 2;

  p.setup = function () {
    RENDER && p.pixelDensity(1);
    RENDER && p.frameRate(30);
    p.createCanvas(p.windowWidth, p.windowHeight);

    p.createLoop(30, {
      gif: RENDER ? { render: false, open: true } : false,
      noiseRadius: 0.5,
    });

    p.rectMode(p.CORNERS);
    p.noStroke();
  };

  p.draw = function () {
    p.blendMode(p.BLEND);
    p.background(255);

    const { noise2D, theta } = p.animLoop;

    p.fill(0);
    p.beginShape();
    p.vertex(0, 0);
    p.vertex(p.width / 2, 0);
    for (let y = 0; y < p.height; y += GRID) {
      const noise = noise2D(0.005, y);
      const d = ease(p.abs(noise)) * (noise < 0 ? -1 : 1) * p.cos(theta);
      const x = p.map(d, -1, 1, GRID, p.width - GRID);
      p.vertex(x, y);
      p.vertex(x, y + GRID);
      p.vertex(p.width / 2, y + GRID);
    }
    p.vertex(p.width / 2, p.height);
    p.vertex(0, p.height);
    p.endShape(p.CLOSE);

    p.blendMode(p.DIFFERENCE);
    p.rect(0, 0, p.width, p.height);
    p.fill(255);
    p.beginShape();
    p.vertex(0, 0);
    p.vertex(0, p.height / 2);
    for (let x = 0; x < p.width; x += GRID) {
      const noise = noise2D(0.006, x);
      const d = ease(p.abs(noise)) * (noise < 0 ? -1 : 1) * p.cos(theta);
      const y = p.map(d, -1, 1, GRID, p.height - GRID);
      p.vertex(x, y);
      p.vertex(x + GRID, y);
      p.vertex(x + GRID, p.height / 2);
    }
    p.vertex(p.width, p.height / 2);
    p.vertex(p.width, 0);
    p.endShape(p.CLOSE);
  };

  p.windowResized = function () {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };
};

new p5(sketch, "sketch");
