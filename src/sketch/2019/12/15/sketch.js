import p5 from "p5";
import { easeInOutQuad as ease } from "util/easing";

const sketch = function (p) {
  const HUE = p.random();
  const GRID = 60;
  const HUE_COUNT = 5;

  class Box {
    constructor(x, y) {
      this.x = x;
      this.y = y;
      this.rotate = p.random([0, p.HALF_PI, p.PI, p.HALF_PI + p.PI]);

      const hue = HUE * p.floor(p.random(HUE_COUNT));
      this.colors = Array(3)
        .fill()
        .map((_, i) =>
          p.color(
            p.random() < 0.3 ? HUE * p.floor(p.random(HUE_COUNT)) : hue,
            HUE_COUNT / 2,
            (HUE_COUNT / 3) * i
          )
        );

      this.box = p.random([true, false]);
    }
    draw() {
      p.push();

      p.translate(this.x + GRID / 2, this.y + GRID / 2);
      p.rotate(this.rotate);
      p.translate(-GRID / 2, -GRID / 2);
      p.noStroke();

      this.box ? this.boxes() : this.gradient();

      p.pop();
    }
    boxes() {
      for (let i = 0; i < 3; i++) {
        p.fill(this.colors[i]);
        p.rect((GRID / 3) * i, 0, GRID / 3, GRID);
      }
    }
    gradient() {
      p.fill(p.lerpColor(this.colors[2], p.color(255), 0.5));
      p.square(0, 0, GRID);
      const clr = this.colors[0];
      for (let x = 0; x < GRID; x++) {
        clr.setAlpha(ease(x / GRID) * HUE_COUNT);
        p.fill(clr);
        p.rect(x, 0, 1, GRID);
      }
    }
  }

  class Circle {
    constructor(y) {
      this.margin = GRID + GRID / 2;
      this.circleWidth = p.width - this.margin * 2;

      this.y = p.lerp(
        this.margin + this.circleWidth,
        p.height - this.margin - this.circleWidth,
        y
      );
      this.colorA = p.color(
        HUE * p.floor(p.random(HUE_COUNT)),
        HUE_COUNT,
        HUE_COUNT,
        p.random(HUE_COUNT / 2, HUE_COUNT)
      );
      this.colorB = p.lerpColor(
        p.color(HUE * p.floor(p.random(HUE_COUNT), HUE_COUNT, HUE_COUNT)),
        p.color(255),
        p.random()
      );
      this.colorB.setAlpha(p.random(1, HUE_COUNT));
      this.rotate = p.random([0, p.PI]);

      this.mask = p.createGraphics(this.circleWidth, this.circleWidth);
      this.mask.noStroke();
      this.mask.fill(0);
      this.mask.circle(
        this.circleWidth / 2,
        this.circleWidth / 2,
        this.circleWidth
      );
    }
    draw() {
      const cir = p.createGraphics(this.circleWidth, this.circleWidth);
      cir.noStroke();
      for (let y = 0; y < this.circleWidth; y++) {
        const fillColor = p.lerpColor(
          this.colorA,
          this.colorB,
          ease(y / this.circleWidth)
        );

        cir.fill(fillColor);
        cir.rect(0, y, this.circleWidth, 1);
      }
      const cirImage = cir.get();
      cirImage.mask(this.mask);

      p.push();
      p.translate(p.width / 2, this.y);
      p.rotate(this.rotate);
      p.translate(-this.circleWidth / 2, -this.circleWidth / 2);
      p.image(cirImage, 0, 0);

      p.pop();
    }
  }

  let boxes = [];
  let circles = [];

  p.setup = function () {
    p.createCanvas(p.windowWidth, p.windowHeight);
    p.background(255);
    p.colorMode(p.HSB, HUE_COUNT);
    p.noStroke();

    for (let x = 0; x < p.width; x += GRID) {
      for (let y = 0; y < p.height; y += GRID) {
        boxes.push(new Box(x, y));
      }
    }

    circles.push(new Circle(0));
    circles.push(new Circle(p.random()));
    circles.push(new Circle(1));
  };

  p.draw = function () {
    boxes.forEach((box) => box.draw());
    p.blendMode(p.HARD_LIGHT);
    circles.forEach((circle) => circle.draw());
    p.noLoop();
  };

  p.windowResized = function () {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };
};

new p5(sketch, "sketch");
document.getElementById("description").innerHTML = `
        Deeply inspired by the work of 
        <Link href="http://www.gfellerhellsgard.com/">Gfeller + Hellsgård</Link>
        .
      `;
