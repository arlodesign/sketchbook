import p5 from "p5";
import polarToCartesian from "util/polarToCartesian";
import lineIntersection from "util/lineIntersection";
import isPrime from "util/isPrime";
import { easeInOutQuad as ease } from "util/easing";
import "p5.createloop";

const DURATION = 120;

const sketch = function (p) {
  let drawing;
  let lastPoint;
  let circles = [];
  let viewGuides = true;

  const START = p.random(p.TWO_PI);

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
    p.createCanvas(p.windowWidth, p.windowHeight);
    p.frameRate(60);
    drawing = p.createGraphics(p.width, p.height);
    drawing.colorMode(p.HSL, 1);
    drawing.blendMode(p.HARD_LIGHT);
    drawing.strokeWeight(2);
    drawing.noStroke();

    const properties = p.shuffle([
      [SIZES[0], p.random(p.width / 10, p.width / 7), Math.sin],
      [SIZES[1], p.random(p.width / 7, p.width / 3), Math.cos],
      [SIZES[2], p.random(p.width / 3, p.width / 2), Math.tan],
    ]);

    circles.push(new Circle(0, 0, ...properties[0]));
    circles.push(new Circle(p.width, 0, ...properties[1]));
    circles.push(new Circle(p.width / 2, p.height * 1.5, ...properties[2]));

    p.createLoop(DURATION, { noiseRadius: 15 });
  };

  /*

               mid[0]
  circle[0] ---------- circle[1]
            \        /
             \      /
      mid[2]  \    / mid[1]
               \  /
                \/
             circle(2)

  */

  p.draw = function () {
    const { theta, noise1D } = p.animLoop;

    p.background(128);

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
      drawing.fill(
        p.abs(p.sin(theta + START)),
        p.abs(p.cos(theta * 3)),
        p.map(p.abs(p.cos(theta)), 0, 1, 0.75, 0.5),
        ease(p.abs(p.sin(theta))) / 4
      );

      drawing.triangle(
        thisPoint.x,
        thisPoint.y,
        lastPoint.x,
        lastPoint.y,
        p.width / 2,
        p.height / 2
      );
      p.image(drawing, 0, 0);
    }
    lastPoint = thisPoint;

    if (p.frameCount > DURATION * 60) {
      p.noLoop();
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

    if (p.frameCount % 100 === 0) {
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
