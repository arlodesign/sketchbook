/*---
description: Reload page for a different variation.
---*/

let SHAPES_COUNT = 3;
let POINTS_PER_SHAPE = 4;
let axis;
let shapes = [];

function preload() {
  img = loadImage("/assets/susan.png");
}

class Shape {
  constructor() {
    const colorFunctions = [
      angle => abs(sin(angle)) * 240,
      angle => abs(cos(angle)) * 240,
      angle => abs(tan(angle)) * 240,
      angle => abs(sin(angle + PI)) * 240,
      angle => abs(cos(angle + PI)) * 240,
      angle => abs(tan(angle + PI)) * 240,
      angle => abs(sin(-angle)) * 240,
      angle => abs(cos(-angle)) * 240,
      angle => abs(tan(-angle)) * 240,
      angle => abs(sin(-angle + PI)) * 240,
      angle => abs(cos(-angle + PI)) * 240,
      angle => abs(tan(-angle + PI)) * 240
    ];
    this.cf = [];
    while ([...new Set(this._cf)].length < 3) {
      this._cf = [
        random(colorFunctions),
        random(colorFunctions),
        random(colorFunctions)
      ];
    }
    this.points = [...Array(POINTS_PER_SHAPE).keys()].map(_ => new Point());
  }
  _clr() {
    return color(
      this._cf[0](frameCount),
      this._cf[1](frameCount),
      this._cf[2](frameCount)
    );
  }
  draw() {
    blendMode(frameCount % 3 ? DIFFERENCE : ADD);
    noStroke();
    fill(this._clr());
    beginShape();
    vertex(this.points[0].location.x, this.points[0].location.y);
    this.points.forEach(({ location }, i) => {
      if (i === 0) return;
      vertex(location.x, location.y);
      this.points[i].move();
    });
    vertex(this.points[0].location.x, this.points[0].location.y);
    endShape(CLOSE);
  }
}

class Point {
  constructor() {
    this._angle = random(TWO_PI);
    this._dist = random(200, 350);
    this._speed = random([-0.05, 0.05]);
    this.location = this._getLocation();
  }

  _getLocation() {
    return polarToCartesian(axis.x, axis.y, this._angle, this._dist);
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
  background(255);
  axis = createVector(width / 2, 350);
  shapes = [...Array(SHAPES_COUNT).keys()].map(_ => new Shape());

  setTimeout(() => {
    noLoop();
    drawingComplete = true;
  }, 20000);
}

function draw() {
  shapes.forEach((shape, i) => shape.draw());

  blendMode(DARKEST);
  image(img, 0, 0, width, height);
}
