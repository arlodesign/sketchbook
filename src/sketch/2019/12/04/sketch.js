import p5 from "p5";
import susan from "assets/susan.png";

import { easeInOutQuint as ease } from "util/easing";
import attachCreateLoop from "p5.createloop/src/p5.createLoop";
window.p5 = p5;
attachCreateLoop();

const sketch = function (p) {
  const RENDER = p.getURLParams().render;
  const GRID = 60;

  let img;

  p.preload = function () {
    img = p.loadImage(susan);
  };

  p.setup = function () {
    p.pixelDensity(1);
    p.createCanvas(p.windowWidth, p.windowHeight);
    p.createLoop(20, {
      gif: RENDER ? { render: false, open: true } : false,
      noiseRadius: 0.1,
    });
    p.noStroke();
  };

  p.draw = function () {
    p.background(img);
    const { theta } = p.animLoop;

    for (let x = 0; x < p.width; x += GRID) {
      for (let y = 0; y < p.height; y += GRID) {
        p.push();
        p.translate(x + GRID / 2, y + GRID / 2);

        const scale =
          ease(
            (p.sin(p.dist(x, y, p.width / 2, p.height / 3) + theta) + 1) / 2
          ) * 2;
        p.scale(scale);

        p.fill(255, (scale / 2) * 255);
        p.square(-GRID / 2, -GRID / 2, GRID);

        p.pop();
      }
    }

    for (let x = 0; x < p.width; x += GRID) {
      for (let y = 0; y < p.height; y += GRID) {
        p.push();
        p.translate(x + GRID / 2, y + GRID / 2);

        const scale =
          ease(
            (p.sin(p.dist(x, y, p.width / 2, p.height / 3) + theta) + 1) / 2
          ) * 2;
        p.scale(scale);

        p.blendMode(p.MULTIPLY);
        p.image(img, -GRID / 2, -GRID / 2, GRID, GRID, x, y, GRID, GRID);

        p.pop();
      }
    }
  };

  p.windowResized = function () {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };
};

new p5(sketch, "sketch");
