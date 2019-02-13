/*---
description: 
---*/

class Thing {
  constructor() {
    this.pA = createVector(random(width), random(height));
    this.vA = createVector(random(), random());
    this.aA = createVector(random(0.1), random(0.1));
    this.pB = createVector(random(width), random(height));
    this.vB = createVector(random(), random());
    this.aB = createVector(random(0.1), random(0.1));
  }
  draw() {
    beginShape();
    vertex(this.pA.x, this.pA.y);
    quadraticVertex(0, height, this.pB.x, this.pB.y);
    endShape();

    this.vA.add(this.aA);
    this.vB.add(this.aB);

    this.pA.add(this.vA);
    this.pB.add(this.vB);

    if (this.pA.x < 0) {
      this.pA.x = 0;
      this.vA.x *= -1;
    }
    if (this.pA.x > width) {
      this.pA.x = width;
      this.vA.x *= -1;
    }
    if (this.pA.y < 0) {
      this.pA.y = 0;
      this.vA.y *= -1;
    }
    if (this.pA.y > height) {
      this.pA.y = height;
      this.vA.y *= -1;
    }
    if (this.pB.x < 0) {
      this.pB.x = 0;
      this.vB.x *= -1;
    }
    if (this.pB.x > width) {
      this.pB.x = width;
      this.vB.x *= -1;
    }
    if (this.pB.y < 0) {
      this.pB.y = 0;
      this.vB.y *= -1;
    }
    if (this.pB.y > height) {
      this.pB.y = height;
      this.vB.y *= -1;
    }
  }
}

let things;

function setup() {
  pixelDensity(4);
  const myCanvas = createCanvas(660, 840);
  myCanvas.parent("my-canvas");
  things = [...Array(5).keys()].map(_ => new Thing());
  background(0);
  noFill();
  stroke(255, 20);
  strokeWeight(0.25);

  setTimeout(() => {
    noLoop();
    drawingComplete = true;
  }, 15000);
}

function draw() {
  things.forEach(t => t.draw());
}
