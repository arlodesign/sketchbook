import p5 from "p5";
import { DVMesh } from "@thi.ng/geom-voronoi";

import polarToCartesian from "util/polarToCartesian";
import "p5.createloop";

const RENDER = process.env.DEV && false;

const sketch = function (p) {
  const STROKEWEIGHT = 20;

  let bounds;
  let allBounds;
  let cells;
  let strokeHue = 0;

  class Point {
    constructor(x, y) {
      const { noise2D } = p.animLoop;

      const noiseVal = p.noise(x, y);

      this.centerX = x;
      this.centerY = y;
      this.x = x;
      this.y = y;
      this.onBoundary = allBounds.has(x) || allBounds.has(y);
      this.dist = p.map(noiseVal, -1, 1, 0, p.width / 10);
      this.dir = noiseVal < 0 ? -1 : 1;
      this.offset = p.map(noiseVal, -1, 1, 0, p.width / 10);
    }

    update() {
      if (this.onBoundary) {
        // never update if on a boundary
        return;
      }
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

  class Cell {
    constructor(pts) {
      this.pts = pts.map((pt) => new Point(...pt));
      this.dir = p.random([1, -1]);
      this.offset = p.random(p.TWO_PI);
    }
    update() {
      const { theta } = p.animLoop;

      this.pts.forEach((pt) => pt.update());

      const cellCanvas = p.createGraphics(
        p.width - STROKEWEIGHT,
        p.width - STROKEWEIGHT
      );
      const cellMask = p.createGraphics(
        p.width - STROKEWEIGHT,
        p.width - STROKEWEIGHT
      );

      cellCanvas.background(255);
      cellCanvas.noFill();
      cellCanvas.colorMode(p.HSB, 1);
      cellCanvas.stroke(strokeHue, 1, 1);

      cellMask.fill(0);

      cellCanvas.push();
      cellCanvas.translate(cellCanvas.width / 2, cellCanvas.height / 2);
      cellCanvas.rotate((this.offset + theta) * this.dir);
      cellCanvas.stroke(1 - strokeHue, 1, 1);
      cellCanvas.strokeWeight(STROKEWEIGHT);
      let y = -p.width / 2;
      while (y < p.width * 2) {
        cellCanvas.line(-p.width, y - p.width, p.width, y - p.width);
        y += STROKEWEIGHT * 2;
      }
      cellCanvas.pop();

      [cellCanvas, cellMask].forEach((ctx) => {
        ctx.strokeWeight(STROKEWEIGHT);
        ctx.strokeJoin(p.BEVEL);
        ctx.translate(ctx.width / 2, ctx.height / 2);
        ctx.beginShape();

        this.pts.forEach((pt) => ctx.vertex(...pt.getArray()));
        ctx.endShape(p.CLOSE);
      });

      const cellImage = cellCanvas.get();
      cellImage.mask(cellMask);
      p.image(
        cellImage,
        bounds[0][0] - STROKEWEIGHT / 2,
        bounds[0][1] - STROKEWEIGHT / 2
      );
    }
  }

  p.setup = function () {
    p.pixelDensity(1);
    p.frameRate(30);
    p.createCanvas(p.windowWidth, p.windowHeight);
    p.colorMode(p.HSB, 1);
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
    allBounds = new Set(bounds.flat());

    const points = new Array(10)
      .fill()
      .map(() => [p.random(...bounds[3]), p.random(...bounds[3])]);

    let mesh = new DVMesh(points);
    cells = mesh.voronoi(bounds).map((c) => new Cell(c));
  };

  p.draw = function () {
    strokeHue = p.map(p.sin(p.animLoop.theta), -1, 1, 0, 1);

    p.background(255);
    p.translate(p.width / 2, p.height / 2);
    cells.forEach((c) => c.update());
    p.noFill();
    p.stroke(strokeHue, 1, 1);
    p.strokeWeight(STROKEWEIGHT);
    p.square(...bounds[0], p.width - STROKEWEIGHT * 2);
  };

  p.windowResized = function () {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };
};

new p5(sketch, "sketch");
document.getElementById("description").innerHTML = `
        Improved version of yesterday’s. Still pokey in browser, but the GIF it
        makes is <code>:chefkiss:</code>.
      `;
