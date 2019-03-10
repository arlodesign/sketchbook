import React from "react";
import SketchLayout from "~components/sketch-layout";

const sketch = function(p) {
  let pointsA = [];
  let pointsB = [];
  let hueA;
  let hueB;
  let alpha = 10;
  let fadeOut = false;

  function getPoints(x, y) {
    return new Array(10).fill().map(_ => ({
      position: p.createVector(
        p.randomGaussian(x, 100),
        p.randomGaussian(y, 100)
      ),
      velocity: p.createVector(
        p.randomGaussian(0, 0.1),
        p.randomGaussian(0, 0.1)
      ),
      acceleration: p.createVector(
        p.randomGaussian(0.001, 0.01),
        p.randomGaussian(0.001, 0.01)
      ),
    }));
  }

  p.setup = function() {
    p.pixelDensity(4);
    p.createCanvas(660, 840);
    p.background(64);
    p.colorMode(p.HSB, 100);
    p.noFill();
    p.blendMode(p.HARD_LIGHT);
    pointsA = getPoints(p.width * 0.1, p.height * 0.1);
    pointsB = getPoints(p.width * 0.2, p.height * 0.2);
    hueA = p.random(0, 49);
    hueB = p.random(50, 100);
    setTimeout(() => {
      fadeOut = true;
    }, 25000);
  };

  function drawPoints(points) {
    p.beginShape();
    points.forEach(point => {
      p.vertex(point.position.x, point.position.y);
      point.position.add(point.velocity.add(point.acceleration));
    });
    p.endShape(p.CLOSE);
  }

  p.draw = function() {
    if (p.frameCount % 2) {
      p.stroke(hueA * p.sin(p.frameCount / 200), 50, 100, alpha);
      drawPoints(pointsA);
      p.stroke(hueB * p.cos(p.frameCount / 200), 50, 100, alpha);
      drawPoints(pointsB);
    } else {
      p.stroke(hueB * p.cos(p.frameCount / 200), 50, 100, alpha);
      drawPoints(pointsB);
      p.stroke(hueA * p.sin(p.frameCount / 200), 50, 100, alpha);
      drawPoints(pointsA);
    }
    alpha = fadeOut ? alpha - 0.01 : alpha;
    if (alpha < 0) {
      p.noLoop();
    }
  };
};

export default ({ location }) => (
  <SketchLayout sketch={sketch} path={location.pathname} description="Reload page for a different variation." />
);
