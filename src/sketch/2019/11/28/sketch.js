import p5 from "p5";
import polarToCartesian from "util/polarToCartesian";
import lineIntersection from "util/lineIntersection";
import isPrime from "util/isPrime";
import { easeInOutQuint as ease } from "util/easing";
import attachCreateLoop from "p5.createloop/src/p5.createLoop";
window.p5 = p5;
attachCreateLoop();
import lerpLine from "util/lerpLine";

const DURATION = 45;

const sketch = function (p) {
  const RENDER = p.getURLParams().render;

  let drawing;
  let lastPoint;
  let circles = [];
  let viewGuides = !RENDER;

  const START = p.random(p.TWO_PI);
  const HUE = p.random(0.333);

  const SIZES = Array(3)
    .fill()
    .map((_, i) => {
      let x;
      do {
        x = p.floor(p.random(i * 10, i * 20));
      } while (!isPrime(x));
      return x;
    });

  class Circle {
    constructor(x, y, rate, radius, sizeFunction) {
      this.centerX = x;
      this.centerY = y;
      this._radius = radius;
      this.rate = rate;
      this.direction = p.random([1, -1]);
      this.sizeFunction = sizeFunction;
    }
    get position() {
      const { theta } = p.animLoop;

      return polarToCartesian(
        this.centerX,
        this.centerY,
        (theta + START) * this.rate * this.direction,
        this.radius
      );
    }
    get radius() {
      const { theta } = p.animLoop;
      return this._radius * (this.sizeFunction(theta) + 1);
    }
    draw() {
      p.circle(this.centerX, this.centerY, this.radius * 2);
    }
  }

  p.setup = function () {
    p.pixelDensity(RENDER ? 1 : 2);
    p.createCanvas(p.windowWidth, p.windowHeight);
    p.frameRate(60);

    drawing = p.createGraphics(p.width, p.height);
    drawing.colorMode(p.HSL, 1);
    drawing.blendMode(p.HARD_LIGHT);
    drawing.noFill();

    const properties = p.shuffle([
      [SIZES[0], p.random(p.width / 10, p.width / 7), Math.sin],
      [SIZES[1], p.random(p.width / 7, p.width / 3), Math.cos],
      [SIZES[2], p.random(p.width / 3, p.width / 2), Math.sin],
    ]);

    circles.push(new Circle(0, 0, ...properties[0]));
    circles.push(new Circle(p.width, 0, ...properties[1]));
    circles.push(new Circle(p.width / 2, p.height * 1.5, ...properties[2]));

    p.createLoop(DURATION, {
      gif: RENDER ? { render: false, open: true } : false,
      noiseRadius: 2,
    });
  };

  p.draw = function () {
    const { theta, noise1D } = p.animLoop;

    p.background(32);

    let mid = circles.map((cA, i) => {
      let cB = circles[i === 2 ? 0 : i + 1];
      return {
        x: p.lerp(cA.position.x, cB.position.x, 0.5),
        y: p.lerp(cA.position.y, cB.position.y, 0.5),
      };
    });

    const thisPoint = lineIntersection(
      circles[0].position.x,
      circles[0].position.y,
      mid[1].x,
      mid[1].y,
      circles[1].position.x,
      circles[1].position.y,
      mid[2].x,
      mid[2].y
    );

    if (lastPoint) {
      drawing.stroke(
        p.lerp(HUE, 1 - HUE, ease(p.abs(p.sin(theta)))),
        p.abs(p.cos(theta * 3)),
        p.map(p.abs(p.cos(theta)), 0, 1, 0.75, 0.5)
      );

      lerpLine(
        drawing,
        thisPoint.x,
        thisPoint.y,
        mid[p.frameCount % 3].x,
        mid[p.frameCount % 3].y,
        p.map(ease(p.abs(noise1D(0.09))), 0, 1, 0.001, 0.8),
        false
      );

      p.image(drawing, 0, 0);
    }
    lastPoint = thisPoint;

    if (p.frameCount > DURATION * 60) {
      !RENDER && p.noLoop();
      viewGuides = false;
    }

    if (viewGuides) {
      p.stroke("red");
      p.noFill();
      circles.forEach((cA, i) => {
        let cB = circles[i === 2 ? 0 : i + 1];
        p.circle(cA.centerX, cA.centerY, cA.radius * 2);
        p.line(cA.position.x, cA.position.y, cB.position.x, cB.position.y);
        p.circle(mid[i].x, mid[i].y, 5);
      });
      p.line(circles[0].position.x, circles[0].position.y, mid[1].x, mid[1].y);
      p.line(circles[1].position.x, circles[1].position.y, mid[2].x, mid[2].y);
      p.line(circles[2].position.x, circles[2].position.y, mid[0].x, mid[0].y);
    }

    if (p.frameCount % 100 === 0 && p.frameCount < DURATION * 60) {
      console.info(p.frameCount + " of " + DURATION * 60);
    }
  };

  p.mousePressed = function () {
    viewGuides = !viewGuides;
  };

  p.windowResized = function () {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };
};

new p5(sketch, "sketch");
document.getElementById("description").innerHTML =
  "Click or tap canvas to toggle guides.";
