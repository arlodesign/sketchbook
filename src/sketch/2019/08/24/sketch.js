import p5 from "p5";
import { DVMesh } from "@thi.ng/geom-voronoi";

import polarToCartesian from "util/polarToCartesian";
import attachCreateLoop from "p5.createloop/src/p5.createLoop";
window.p5 = p5;
attachCreateLoop();

const RENDER = process.env.DEV && false;

const sketch = function (p) {
  const STROKEWEIGHT = 20;

  let points;
  let bounds;

  class Point {
    constructor(x, y) {
      this.centerX = x;
      this.centerY = y;
      this.x = x;
      this.y = y;
      this.dist = p.random(p.width / 10);
      this.dir = p.random([1, -1]);
      this.offset = p.random(p.TWO_PI);
    }

    update() {
      const { noise2D, theta } = p.animLoop;
      const { x, y } = polarToCartesian(
        this.centerX,
        this.centerY,
        (this.offset + theta) * this.dir,
        this.dist * noise2D(this.x / 1000, this.y / 1000)
      );
      this.x = x;
      this.y = y;
    }

    getArray() {
      return [this.x, this.y];
    }
  }

  p.setup = function () {
    p.pixelDensity(1);
    p.frameRate(30);
    p.createCanvas(p.windowWidth, p.windowHeight);

    p.createLoop(30, {
      gif: RENDER ? { render: false, open: true } : false,
      noiseDetail: 0.5,
    });

    bounds = [
      [-p.width / 2 + STROKEWEIGHT, -p.width / 2 + STROKEWEIGHT],
      [p.width / 2 - STROKEWEIGHT, -p.width / 2 + STROKEWEIGHT],
      [p.width / 2 - STROKEWEIGHT, p.width / 2 - STROKEWEIGHT],
      [-p.width / 2 + STROKEWEIGHT, p.width / 2 - STROKEWEIGHT],
    ];

    points = new Array(10)
      .fill()
      .map(() => new Point(p.random(...bounds[3]), p.random(...bounds[3])));
  };

  p.draw = function () {
    const { theta } = p.animLoop;
    p.background(255);

    points.forEach((pt) => pt.update());

    p.translate(p.width / 2, p.height / 2);

    let mesh = new DVMesh(points.map((pt) => pt.getArray()));
    let cells = mesh.voronoi(bounds);

    cells.forEach((cell, i) => {
      const cellCanvas = p.createGraphics(
        p.width - STROKEWEIGHT,
        p.width - STROKEWEIGHT
      );
      const cellMask = p.createGraphics(
        p.width - STROKEWEIGHT,
        p.width - STROKEWEIGHT
      );

      cellCanvas.fill(255);
      cellMask.fill(0);

      [cellCanvas, cellMask].forEach((ctx) => {
        ctx.strokeWeight(STROKEWEIGHT);
        ctx.strokeJoin(p.BEVEL);
        ctx.translate(cellCanvas.width / 2, cellCanvas.height / 2);
        ctx.beginShape();
        cell.forEach((pt) => ctx.vertex(...pt));
        ctx.endShape(p.CLOSE);
      });

      cellCanvas.rotate((i + 1) * (p.TWO_PI / cells.length) + theta);

      let y = -p.width / 2;
      while (y < p.width * 2) {
        cellCanvas.line(-p.width, y - p.width, p.width, y - p.width);
        y += STROKEWEIGHT * 3;
      }

      const cellImage = cellCanvas.get();
      cellImage.mask(cellMask);
      p.image(
        cellImage,
        bounds[0][0] - STROKEWEIGHT / 2,
        bounds[0][1] - STROKEWEIGHT / 2
      );
    });

    p.noFill();
    p.strokeWeight(STROKEWEIGHT);
    p.square(...bounds[0], p.width - STROKEWEIGHT * 2);
  };

  p.windowResized = function () {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };
};

new p5(sketch, "sketch");
const description =
  "This one runs SUUUUUUUPER slow in the browser, but it makes a pretty rad GIF.";
