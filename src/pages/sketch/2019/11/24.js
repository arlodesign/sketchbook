import React from "react";
import SketchLayout from "~components/sketch-layout";
import polarToCartesian from "~lib/polarToCartesian";
import "p5.createloop";
import lineIntersection from "~lib/lineIntersection";
import bezierEasing from "bezier-easing";

const ease = bezierEasing(0, 1, 1, 0);
const DURATION = 1800;

const sketch = function(p) {
  let drawing;
  // let lastPoint;
  let circles = [];
  let viewGuides = true;

  const START = p.random(p.TWO_PI);

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
      const { theta } = p.animLoop;

      return polarToCartesian(
        this.centerX,
        this.centerY,
        theta * this.rate * this.direction,
        this.radius
      );
    }
    get radius() {
      const { theta } = p.animLoop;
      return this._radius * ((this.sizeFunction(theta / 2) + 1) / 2);
    }
    draw() {
      p.circle(this.centerX, this.centerY, this.radius * 2);
    }
  }

  p.setup = function() {
    p.createCanvas(660, 840);
    p.frameRate(60);
    drawing = p.createGraphics(p.width, p.height);
    drawing.colorMode(p.HSL, p.TWO_PI);
    drawing.blendMode(p.HARD_LIGHT);
    drawing.strokeWeight(0.5);
    drawing.noFill();

    const properties = p.shuffle([
      [p.floor(p.random(2, 9)), p.random(p.width / 10, p.width / 5)],
      [p.floor(p.random(30, 70)), p.random(p.width / 2, p.width)],
      [p.floor(p.random(500, 1000)), p.random(p.height, p.height * 2)],
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

  p.draw = function() {
    const { theta, noise1D } = p.animLoop;

    p.background(255);

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
    drawing.stroke(
      theta + START > p.TWO_PI ? theta + START - p.TWO_PI : theta + START,
      p.map(p.cos(theta), -1, 1, 0, p.TWO_PI),
      p.map(p.sin(theta * 4), -1, 1, 0, p.TWO_PI),
      ease(p.map(p.sin(theta * 100), -1, 1, 0, p.TWO_PI / 10))
    );
    drawing.bezier(
      thisPoint.x,
      thisPoint.y,
      ...polarToCartesian(
        p.width / 2,
        p.height / 2,
        p.height * 10,
        theta * noise1D(((p.frameCount % 3) + 1) * 0.01),
        true
      ),
      mid[2].x,
      mid[2].y,
      mid[0].x,
      mid[0].y
    );

    p.image(drawing, 0, 0);
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

  p.mousePressed = function() {
    viewGuides = !viewGuides;
  };
};

export default ({ location }) => (
  <SketchLayout
    sketch={sketch}
    path={location.pathname}
    description="Click or tap canvas to toggle guides."
  />
);
