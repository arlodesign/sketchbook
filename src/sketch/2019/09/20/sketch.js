import p5 from "p5";
import attachCreateLoop from "p5.createloop/src/p5.createLoop";
window.p5 = p5;
attachCreateLoop();

const RENDER = process.env.DEV && false;

const MAX_CIRCLES = 75;

const sketch = function (p) {
  let maxDiameter;

  const colors = p.shuffle([
    p.color("red"),
    p.color("green"),
    p.color("blue"),
    p.color("yellow"),
  ]);

  p.setup = function () {
    p.createCanvas(p.windowWidth, p.windowHeight);
    p.pixelDensity(1);
    p.strokeWeight(2);
    p.noFill();

    maxDiameter = p.dist(0, 0, p.width, p.height);

    p.createLoop(50, {
      gif: RENDER
        ? {
            render: false,
            download: true,
            options: {
              quality: 1,
              workers: 10,
              dither: "FloydSteinberg-serpentine",
              debug: true,
            },
          }
        : false,
      noiseRadius: 0.5,
    });
  };

  p.draw = function () {
    p.blendMode(p.BLEND);
    p.background(0);

    p.blendMode(p.SCREEN);
    p.translate(p.width / 2, p.height / 2);

    const { theta } = p.animLoop;

    colors[0].setAlpha(192);
    p.stroke(colors[0]);
    const circles = p.map(p.cos(theta), -1, 1, 1, MAX_CIRCLES);
    for (let i = maxDiameter; i > 0; i -= maxDiameter / circles) {
      p.circle(0, 0, i);
    }

    p.push();
    p.rotate(p.animLoop.theta);
    colors[1].setAlpha(192);
    p.stroke(colors[1]);
    for (let i = 0; i < maxDiameter; i += maxDiameter / circles) {
      p.line(-i / 2, -p.height, -i / 2, p.height);
      i > 0 && p.line(i / 2, -p.height, i / 2, p.height);
    }
    p.pop();

    p.push();
    p.rotate(-p.animLoop.theta + (p.TWO_PI / 3) * p.cos(theta * 4));
    colors[2].setAlpha(192);
    p.stroke(colors[2]);
    for (let i = 0; i < maxDiameter; i += maxDiameter / circles) {
      p.line(-i / 2, -p.height, -i / 2, p.height);
      i > 0 && p.line(i / 2, -p.height, i / 2, p.height);
    }
    p.pop();

    p.push();
    p.rotate(-p.animLoop.theta - (p.TWO_PI / 3) * p.cos(theta * 4));
    colors[3].setAlpha(192);
    p.stroke(colors[3]);
    for (let i = 0; i < maxDiameter; i += maxDiameter / circles) {
      p.line(-i / 2, -p.height, -i / 2, p.height);
      i > 0 && p.line(i / 2, -p.height, i / 2, p.height);
    }
    p.pop();
  };

  p.windowResized = function () {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };
};

new p5(sketch, "sketch");
