import p5 from "p5";
import "p5.createloop";
import { easeInOutQuart, easeInOutQuad } from "util/easing";

const sketch = function (p) {
  const RENDER = p.getURLParams().render;
  const DURATION = 20;
  const RATE = 30;
  const GRID = 15;

  p.setup = function () {
    p.pixelDensity(RENDER ? 2 : 1);
    p.frameRate(RATE);
    p.createCanvas(p.windowWidth, p.windowHeight, p.WEBGL);
    p.noStroke();
    p.createLoop(DURATION, {
      gif: RENDER ? { render: false, open: true } : false,
    });
  };

  p.draw = function () {
    const { theta } = p.animLoop;
    p.background(128);

    for (let x = -p.width / 2; x <= p.width / 2; x += GRID) {
      for (let y = -p.height / 2; y <= p.height / 2; y += GRID) {
        p.push();
        p.translate(x, y, 0);
        p.rotateY(
          theta +
            (easeInOutQuad(p.map(y, -p.height / 2, p.height / 2, 0, 1)) *
              p.TWO_PI *
              2 +
              easeInOutQuart(p.map(x, -p.width / 2, p.width / 2, 0, 1)) *
                p.TWO_PI) *
              easeInOutQuad(p.abs(p.sin(theta)))
        );
        p.fill(255);
        p.push();
        p.translate(0, 0, 1);
        p.plane(GRID, GRID);
        p.pop();
        p.push();
        p.translate(0, 0, -1);
        p.fill(0);
        p.plane(GRID, GRID);
        p.pop();
        p.pop();
      }
    }
  };

  p.windowResized = function () {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };
};

new p5(sketch, "sketch");
