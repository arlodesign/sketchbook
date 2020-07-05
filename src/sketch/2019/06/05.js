import p5 from "p5";
import polarToCartesian from "util/polarToCartesian";

const sketch = function (p) {
  const HUE = p.random(20, 80);
  const TRAILS = 20;

  let vertices = [];

  class Triangle {
    constructor() {
      this.lines = [];
    }

    draw(x1, y1, x2, y2) {
      p.strokeWeight(10);
      p.stroke(0);
      p.fill(HUE, 100, 100, 80);
      p.triangle(x1, y1, x2, y2, p.width / 2, p.height / 2);

      this.lines.push([x1, y1, x2, y2]);
      if (this.lines.length > TRAILS) {
        this.lines = this.lines.slice(1, TRAILS);
      }
    }

    drawTrails() {
      p.noFill();
      p.strokeWeight(1);
      this.lines.forEach((l, i) => {
        p.stroke(
          100 - HUE,
          p.map(i, 0, TRAILS - 1, 0, 100),
          p.map(i, 0, TRAILS - 1, 0, 100),
          p.map(i, 0, TRAILS - 1, 0, 100)
        );
        p.triangle(...l, p.width / 2, p.height / 2);
      });
    }
  }

  class Vertex {
    constructor() {
      this.angle = p.random(p.TWO_PI);
      this.distance = p.random(p.height / 2 - 10);
      this.speed = p.random([-1, 1]) * p.random(0.001, 0.01);
      this.triangle = new Triangle();
      this.set();
    }
    set() {
      this.vertex = polarToCartesian(
        p.width / 2,
        p.height / 2,
        this.angle,
        this.distance
      );
    }
    update() {
      this.angle += this.speed;
      this.set();
    }
  }

  p.setup = function () {
    p.createCanvas(p.windowWidth, p.windowHeight);
    vertices = Array.from(Array(10), () => new Vertex());
    p.colorMode(p.HSL, 100);
    p.blendMode(p.HARD_LIGHT);
    p.strokeJoin(p.ROUND);
  };

  p.draw = function () {
    p.background(0);

    let reached = [];
    let unreached = [...vertices];

    reached.push(unreached[0]);
    unreached.splice(0, 1);

    while (unreached.length > 0) {
      let record = p.dist(0, 0, p.width, p.height);
      let ri;
      let ui;
      for (let i = 0; i < reached.length; i++) {
        for (let j = 0; j < unreached.length; j++) {
          const a = reached[i].vertex;
          const b = unreached[j].vertex;
          const d = p.dist(a.x, a.y, b.x, b.y);
          if (d < record) {
            record = d;
            ri = i;
            ui = j;
          }
        }
      }
      vertices[ui].triangle.draw(
        reached[ri].vertex.x,
        reached[ri].vertex.y,
        unreached[ui].vertex.x,
        unreached[ui].vertex.y
      );

      reached.push(unreached[ui]);
      unreached.splice(ui, 1);
    }

    vertices.forEach((v) => {
      v.triangle.drawTrails();
      v.update();
    });
  };

  p.windowResized = function () {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };
};

new p5(sketch, "sketch");
