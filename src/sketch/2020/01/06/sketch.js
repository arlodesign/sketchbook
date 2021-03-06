import p5 from "p5";
import "p5.createloop";

import susan from "assets/susan.png";

const sketch = function (p) {
  const RENDER = p.getURLParams().render;
  const DURATION = 20;
  const RATE = 30;
  const GRID = 60;

  let img;

  p.preload = function () {
    img = p.loadImage(susan);
  };

  p.setup = function () {
    p.pixelDensity(RENDER ? 2 : 1);
    p.frameRate(RATE);
    p.createCanvas(p.windowWidth, p.windowHeight, p.WEBGL);

    p.createLoop(DURATION, {
      gif: RENDER ? { render: false, open: true } : false,
      noiseRadius: 0.5,
    });
  };

  p.draw = function () {
    const { theta, noise2D } = p.animLoop;

    p.background(0);
    p.texture(img);

    for (let x = -p.width / 2; x < p.width / 2; x += GRID) {
      for (let y = -p.height / 2; y < p.height / 2; y += GRID) {
        p.push();
        p.translate(x, y);

        p.beginShape();
        p.vertex(
          0,
          0,
          (p.width / 2) * p.sin(theta) * noise2D(x, y),
          x + p.width / 2,
          y + p.height / 2
        );
        p.vertex(
          GRID,
          0,
          (p.width / 2) * p.sin(theta) * noise2D(x + GRID, y),
          x + p.width / 2 + GRID,
          y + p.height / 2
        );
        p.vertex(
          GRID,
          GRID,
          (p.width / 2) * p.sin(theta) * noise2D(x + GRID, y + GRID),
          x + p.width / 2 + GRID,
          y + p.height / 2 + GRID
        );
        p.vertex(
          0,
          GRID,
          (p.width / 2) * p.sin(theta) * noise2D(x, y + GRID),
          x + p.width / 2,
          y + p.height / 2 + GRID
        );

        p.endShape(p.CLOSE);
        p.pop();
      }
    }
  };

  p.windowResized = function () {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };
};

new p5(sketch, "sketch");
