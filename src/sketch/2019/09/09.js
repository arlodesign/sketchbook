import p5 from "p5";
import font from "assets/Cousine-BoldItalic.otf";

import { DVMesh } from "@thi.ng/geom-voronoi";
import "p5.createloop";

const DURATION = 10;

const sketch = function (p) {
  const HUE = p.random(80);
  const start = 150;
  const lineHeight = 100;
  let myFont;
  let points;

  p.preload = function () {
    myFont = p.loadFont(font);
  };

  p.setup = function () {
    p.createCanvas(p.windowWidth, p.windowHeight);
    p.background(0);
    p.colorMode(p.HSL, 100);
    p.blendMode(p.HARD_LIGHT);
    p.strokeWeight(0.1);
    p.noFill();
    p.createLoop(DURATION, {
      noiseDetail: 0.1,
    });
  };

  p.draw = function () {
    const { theta } = p.animLoop;
    const sampleFactor = theta / (p.TWO_PI * 10);

    points = [];
    points = points.concat(
      myFont.textToPoints("It must", 50, start, 100, {
        sampleFactor,
      }),
      myFont.textToPoints("be the", 50, start + lineHeight, 100, {
        sampleFactor,
      }),
      myFont.textToPoints("one we", 50, start + lineHeight * 2, 100, {
        sampleFactor,
      }),
      myFont.textToPoints("want,", 50, start + lineHeight * 3, 100, {
        sampleFactor,
      }),
      myFont.textToPoints("or none", 50, start + lineHeight * 4, 100, {
        sampleFactor,
      }),
      myFont.textToPoints("at all.", 50, start + lineHeight * 5, 100, {
        sampleFactor,
      })
    );

    let mesh = new DVMesh(points.map(({ x, y }) => [x, y]));
    let cells = mesh.voronoi();

    p.stroke(
      p.map(p.sin(theta * 4), -1, 1, HUE - 20, HUE + 20),
      50,
      100 * p.abs(p.cos(theta)),
      25
    );

    cells.forEach((cell, i) => {
      p.beginShape();
      cell.forEach((pt) => p.vertex(...pt));
      p.endShape(p.CLOSE);
    });

    if (p.frameCount === DURATION * 60) {
      p.stroke(0);
      p.strokeWeight(1);
      p.beginShape();
      points.forEach(({ x, y }) => p.vertex(x, y));
      p.endShape(p.CLOSE);
      p.noLoop();
    }
  };

  p.windowResized = function () {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };
};

new p5(sketch, "sketch");
