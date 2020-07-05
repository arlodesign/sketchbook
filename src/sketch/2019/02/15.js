import p5 from "p5";

const sketch = function (p) {
  const GRID_SIZE = 5;
  const MAX_Z = 400;

  p.setup = function () {
    p.createCanvas(p.windowWidth, p.windowHeight, p.WEBGL);
    p.stroke(255);
    p.strokeWeight(0.5);
    p.noFill();
    p.noiseDetail(4, 0.5);
    p.rectMode(p.CENTER);
    p.camera(
      -p.width / 4,
      -p.height / 4,
      MAX_Z,
      -p.width / 4,
      -p.height / 4,
      0,
      0,
      1,
      0
    );
  };

  p.draw = function () {
    p.background(0);
    let x = GRID_SIZE - p.width / 2;
    let y = GRID_SIZE - p.height / 2;
    let points = [];
    while (x < 0) {
      let col = [];
      while (y < 0) {
        const N = p.noise(
          x * (GRID_SIZE / 1000),
          y * (GRID_SIZE / 1000),
          p.frameCount / 250
        );
        col.push([x, y, p.map(N, 0, 1, -MAX_Z, MAX_Z)]);
        y += GRID_SIZE;
      }
      points.push(col);
      x += GRID_SIZE;
      y = GRID_SIZE - p.height / 2;
    }
    points.forEach((col) => {
      p.beginShape();
      col.forEach((point) => p.vertex(...point));
      p.endShape();
    });
    for (let i = 0; i < points[0].length; i++) {
      p.beginShape();
      for (let j = 0; j < points.length; j++) {
        p.vertex(...points[j][i]);
      }
      p.endShape();
    }
  };

  p.windowResized = function () {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };
};

new p5(sketch, "sketch");
