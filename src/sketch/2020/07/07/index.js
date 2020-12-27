import p5 from "p5";
import "p5.createloop";
import polarToCartesian from "util/polarToCartesian";

const sketch = function (p) {
  const RENDER = p.getURLParams().render;
  const DURATION = 30;
  const RATE = 30;
  const SHAPES = 90;
  const POINTS = 6;
  const COLORS = ["red", "orange", "black"];

  let maxSize;

  p.setup = function () {
    p.pixelDensity(1);
    p.frameRate(RATE);
    p.createCanvas(
      RENDER ? 1080 : p.windowWidth,
      RENDER ? 1080 : p.windowHeight
    );
    p.background(255);
    p.noSmooth();
    p.createLoop(DURATION, {
      gif: RENDER
        ? { render: false, open: true, fileName: "2020-07-07.gif" }
        : false,
      noiseRadius: 1.2,
    });
    p.noFill();
    p.strokeWeight(Math.max(2, p.width / 500));

    maxSize = Math.min(p.width, p.height) - p.width / 10;
  };

  p.draw = function () {
    const { noise2D, theta } = p.animLoop;
    p.background(0);
    for (let i = 0; i < SHAPES; i++) {
      COLORS.forEach((c, index) => {
        const j = index + 1;
        p.curveTightness(j / 10);

        let points = [];
        p.push();
        p.translate(p.width / 2, p.height / 2);
        p.rotate((j % 2 ? -theta : theta) * j);
        p.stroke(c);
        p.beginShape();
        for (let a = 0; a < POINTS; a++) {
          const angle = (p.TWO_PI / POINTS) * a;
          const point = polarToCartesian(
            0,
            0,
            p.map(
              noise2D((i + 1) / 50, a / (5 * j)),
              -1,
              1,
              angle,
              angle + p.TWO_PI / POINTS
            ),
            (maxSize / 2 / SHAPES) *
              i *
              p.map(
                noise2D((i + 1) / 100, a / (10 * j)),
                -1,
                1,
                p.map(i, 0, SHAPES, 0.2, 1),
                p.map(i, 0, SHAPES, 1.5, 1)
              ),
            true
          );
          p.curveVertex(...point);
          points.push(point);
        }
        p.curveVertex(...points[0]);
        p.curveVertex(...points[1]);
        p.curveVertex(...points[2]);
        p.endShape();
        p.pop();
      });
    }
  };

  p.windowResized = function () {
    if (RENDER) return;

    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };
};

new p5(sketch, "sketch");
