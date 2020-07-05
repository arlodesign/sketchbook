import p5 from "p5";
import polarToCartesian from "util/polarToCartesian";

const sketch = function (p) {
  const HUE = p.random(20, 80);
  const TRAILS = 20;

  let verticesArray = [];

  class Vertex {
    constructor() {
      this.angle = p.random(p.TWO_PI);
      this.distance = p.random(p.height / 2 - 10);
      this.speed = p.random([-1, 1]) * p.random(0.001, 0.01);
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
      if (this.angle < 0) {
        this.angle = p.TWO_PI + this.angle;
      }
      if (this.angle > p.TWO_PI) {
        this.angle = this.angle - p.TWO_PI;
      }
      this.set();
    }
  }

  p.setup = function () {
    p.createCanvas(p.windowWidth, p.windowHeight);
    verticesArray = Array.from(Array(10), () =>
      Array.from(Array(5), () => new Vertex())
    );
    p.colorMode(p.HSB, 100);
    p.strokeJoin(p.ROUND);
    p.strokeWeight(20);
    p.noFill();
  };

  p.draw = function () {
    p.blendMode(p.BLEND);
    p.background(10);
    p.blendMode(p.ADD);

    verticesArray.forEach((vertices, i) => {
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

        reached.push(unreached[ui]);
        unreached.splice(ui, 1);
      }

      p.stroke(i * (100 / verticesArray.length), 100, 100);
      p.beginShape();
      vertices
        .sort((a, b) => a.angle - b.angle)
        .forEach((v) => {
          p.vertex(v.vertex.x, v.vertex.y);
          v.update();
        });
      p.endShape(p.CLOSE);
    });
  };

  p.windowResized = function () {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };
};

new p5(sketch, "sketch");
