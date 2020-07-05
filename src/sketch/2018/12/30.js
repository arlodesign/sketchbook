import p5 from "p5";

const sketch = function (p) {
  let maxSize;
  let minSize;
  let circles = [];
  let increment = 1;
  let noDrawCount = 0;
  let noDrawLimit = 1500;

  class Circle {
    constructor(distance = 0) {
      this.distance = distance;
      this.angle = p.frameCount / increment;
      this.r = p.constrain(p.noise(this.angle) * maxSize, minSize, maxSize);
      this._setXY();
    }
    _setXY() {
      this.x = p.width / 2 + p.cos(this.angle) * this.distance;
      this.y = p.height / 2 + p.sin(this.angle) * this.distance;
    }
    setDistance(distance) {
      this.distance = distance;
      this._setXY();
    }
    increaseDistance() {
      this.distance += 1;
      this._setXY();
    }
    isOnCanvas() {
      return (
        this.x > this.r &&
        this.x < p.width - this.r &&
        this.y > this.r &&
        this.y < p.height - this.r
      );
    }
    draw() {
      p.ellipse(this.x, this.y, this.r * 2);
    }
  }

  p.setup = function () {
    p.createCanvas(p.windowWidth, p.windowHeight);
    maxSize = p.random(p.width / 4, p.width / 3);
    minSize = 5;
    circles.push(new Circle());
    p.fill(0);
    p.stroke(0);
    circles[0].r = maxSize;
    circles[0].draw();
  };

  p.draw = function () {
    p.background(255);
    if (maxSize === minSize && noDrawCount === noDrawLimit) {
      p.noLoop();
    }
    circles.forEach((c) => c.draw());
    if (noDrawCount < noDrawLimit) {
      p.push();
      p.noStroke();
      p.fill(255);
      p.rect(0, 0, 80, 30);
      p.fill(0);
      p.text(`${noDrawCount}/${noDrawLimit}`, 10, 20);
      p.pop();
    }
    const newCircle = new Circle();
    newCircle.setDistance(circles[0].r + newCircle.r);
    if (noDrawCount < noDrawLimit) {
      p.push();
      p.stroke("red");
      p.strokeWeight(1);
      p.line(
        p.width / 2,
        p.height / 2,
        p.width / 2 + p.cos(newCircle.angle) * p.height,
        p.height / 2 + p.sin(newCircle.angle) * p.height
      );
      p.pop();
    }
    while (
      circles.some(
        (c) => p.dist(newCircle.x, newCircle.y, c.x, c.y) < newCircle.r + c.r
      )
    ) {
      newCircle.increaseDistance();
    }
    if (newCircle.isOnCanvas()) {
      circles.push(newCircle);
      if (maxSize > minSize) increment += 5;
      noDrawCount = 0;
    } else {
      maxSize = p.max(maxSize - 0.1, minSize);
      increment = maxSize > minSize ? p.max(1, increment - 1) : increment;
      noDrawCount++;
    }
  };

  p.windowResized = function () {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };
};

new p5(sketch, "sketch");
document.getElementById("description").innerHTML =
  "Be patient. Reload page for a different variation.";
