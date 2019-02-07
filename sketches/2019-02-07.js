/*---
description: Reload page for a different variation.
---*/

let shapes = [];

class Shape {
  constructor() {
    const colorFunctions = [
      angle => max(15, abs(sin(angle)) * 240),
      angle => max(15, abs(sin(angle + PI)) * 240),
      angle => max(15, abs(cos(-angle)) * 240),
      angle => max(15, abs(cos(-angle + PI)) * 240)
    ];
    this._cf = [
      random(colorFunctions),
      random(colorFunctions),
      random(colorFunctions)
    ];
    this.points = [...Array(7).keys()].map(_ => new Point());
  }
  _clr() {
    return color(
      this._cf[0](frameCount / 1000),
      this._cf[1](frameCount / 1000),
      this._cf[2](frameCount / 1000)
    );
  }
  draw() {
    fill(this._clr());
    beginShape();
    vertex(this.points[0].location.x, this.points[0].location.y);
    this.points.forEach(({ location }, i) => {
      if (i === 0) return;
      quadraticVertex(width / 2, height / 2, location.x, location.y);
      this.points[i].move();
    });
    quadraticVertex(
      width / 2,
      height / 2,
      this.points[0].location.x,
      this.points[0].location.y
    );
    endShape(CLOSE);
  }
}

class Point {
  constructor() {
    this._angle = random(TWO_PI);
    this._dist = random(height / 3, height / 2);
    this._speed = random(-0.01, 0.01);
    this.location = this._getLocation();
  }

  _getLocation() {
    return polarToCartesian(width / 2, height / 2, this._angle, this._dist);
  }

  move() {
    this._angle += this._speed;
    this.location = this._getLocation();
  }
}

function setup() {
  pixelDensity(4);
  const myCanvas = createCanvas(660, 840);
  myCanvas.parent("my-canvas");

  shapes = [...Array(5).keys()].map(_ => new Shape());

  noStroke();
  blendMode(HARD_LIGHT);
}

function draw() {
  background(0);
  shapes.forEach((shape, i) => shape.draw());
}

setTimeout(() => {
  drawingComplete = true;
}, 5000);
