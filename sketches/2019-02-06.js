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
    this.points = [...Array(10).keys()].map(_ => new Point());
  }
  clr() {
    return color(
      this._cf[0](frameCount / 1000),
      this._cf[1](frameCount / 1000),
      this._cf[2](frameCount / 1000),
      128
    );
  }
  draw() {
    beginShape();
    this.points.forEach(({ location }, i) => {
      vertex(location.x, location.y);
      this.points[i].move();
    });
    endShape(CLOSE);
  }
}

class Point {
  constructor() {
    this.location = createVector(random(width), random(height));
    this._velocity = createVector(random(-1, 1), random(-1, 1));
  }

  move() {
    this.location.add(this._velocity);

    if (this.location.x > width || this.location.x < 0) {
      this._velocity.x = this._velocity.x * -1;
    }
    if (this.location.y > height || this.location.y < 0) {
      this._velocity.y = this._velocity.y * -1;
    }
  }
}

function setup() {
  pixelDensity(4);
  const myCanvas = createCanvas(660, 840);
  myCanvas.parent("my-canvas");

  shapes = [...Array(3).keys()].map(_ => new Shape());
}

function draw() {
  background(0);
  shapes.forEach((shape, i) => {
    if (i !== 1) {
      noStroke();
      fill(shape.clr());
    } else {
      noFill();
      strokeWeight(4);
      stroke(shape.clr());
    }

    shape.draw();
  });
}

setTimeout(() => {
  drawingComplete = true;
}, 5000);
