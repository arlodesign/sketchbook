import p5 from "p5";
import "p5.createloop";
import { easeInOutQuad } from "util/easing";
import polarToCartesian from "util/polarToCartesian";

const sketch = function (p) {
  const RENDER = p.getURLParams().render;
  const RENDER_SIZE = 1080;
  const DURATION = 40 * (RENDER ? 60 : 1);
  const RATE = RENDER ? 1 : 60;
  const OFFSET = 2;
  const HUE = p.random();
  const COLORS = p.shuffle([HUE, (HUE + 3 / 8) % 1, (HUE + 5 / 8) % 1]);

  let points = [{}, {}, {}];

  p.setup = function () {
    p.pixelDensity(1);
    p.frameRate(RATE);
    p.createCanvas(RENDER_SIZE, RENDER_SIZE);
    p.noSmooth();
    p.background(255);
    p.strokeWeight(2);
    p.blendMode(p.HARD_LIGHT);
    p.colorMode(p.HSB, 1);
    p.createLoop(DURATION, {
      noiseRadius: 1.3,
    });
  };

  p.draw = function () {
    const { progress, noise1D } = p.animLoop;
    const loopedProgress = easeInOutQuad(
      easeInOutQuad(p.sin(2 * p.PI * progress - p.PI / 2) / 2 + 0.5)
    );
    const x = p.map(progress, 0, 1, p.width / 10, p.width - p.width / 10);

    for (let i = 0; i < points.length; i++) {
      const clr = p.color(COLORS[i], p.map(i, 0, 2, 0.5, 1), 1, 0.7);
      p.stroke(clr);

      for (let y = p.height / 10; y < p.height - p.height / 10; y += OFFSET) {
        const pt = polarToCartesian(
          x,
          y,
          noise1D(y / (250 * (i + 1))) * p.TWO_PI,
          OFFSET *
            ((loopedProgress + OFFSET) * OFFSET) *
            noise1D(y / (1000 * (i + 1)))
        );
        if (points[i][y]) {
          p.line(points[i][y].x, points[i][y].y, pt.x, pt.y);
        }
        points[i][y] = points[i][y] || {};
        points[i][y].x = pt.x;
        points[i][y].y = pt.y;
      }
    }
    if (RENDER && p.frameCount <= DURATION * RATE) {
      p.frameCount % 100 === 0 && console.info(`${p.ceil(progress * 100)}%`);
      p.save(
        `${String(p.frameCount).padStart(
          String(DURATION * RATE).length,
          "0"
        )}.png`
      );
    }
    if (p.frameCount === DURATION * RATE) {
      p.noLoop();
      !RENDER && p.save(`2020-11-26_${Date.now()}.png`);
    }
  };
};

new p5(sketch, "sketch");
