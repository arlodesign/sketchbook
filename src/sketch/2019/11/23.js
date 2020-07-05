import p5 from "p5";
import polarToCartesian from "util/polarToCartesian";
import "p5.createloop";
import lineIntersection from "util/lineIntersection";
import bezierEasing from "bezier-easing";

const ease = bezierEasing(0, 1, 1, 0);
const DURATION = 1800;

const sketch = function (p) {
  const HUE = p.random();

  let drawing;
  let lastPoint;
  let circles = [];
  let viewGuides = true;

  class Circle {
    constructor(x, y, rate, radius) {
      this.centerX = x;
      this.centerY = y;
      this._radius = radius;
      this.rate = rate;
      this.direction = p.random([1, -1]);
      this.sizeFunction = p.random([Math.sin, Math.cos]);
    }
    get position() {
      return polarToCartesian(
        this.centerX,
        this.centerY,
        p.animLoop.theta * this.rate * this.direction,
        this.radius
      );
    }
    get radius() {
      return this._radius * ((this.sizeFunction(p.animLoop.theta / 2) + 1) / 2);
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
    drawing.strokeWeight(0.5);

    const properties = p.shuffle([
      [1, p.random(p.width / 20, p.width / 10)],
      [p.floor(p.random(3, 7)), p.random(p.width / 2, p.width)],
      [p.floor(p.random(500, 1000)), p.random(p.width, p.width * 2)],
    ]);

    circles.push(new Circle(0, 0, ...properties[0]));
    circles.push(new Circle(p.width, 0, ...properties[1]));
    circles.push(new Circle(p.width / 2, p.height * 1.5, ...properties[2]));

    p.createLoop(DURATION);
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
    p.background(0);

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
        HUE,
        p.abs(p.sin(p.animLoop.theta)),
        p.abs(p.cos(p.animLoop.theta)),
        ease(p.abs(p.sin(p.animLoop.theta)))
      );
      drawing.line(thisPoint.x, thisPoint.y, lastPoint.x, lastPoint.y);
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
