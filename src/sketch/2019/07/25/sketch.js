import p5 from "p5";
import attachCreateLoop from "p5.createloop/src/p5.createLoop";
window.p5 = p5;
attachCreateLoop();

const RENDER = process.env.DEV && false;

const sketch = function (p) {
  p.setup = function () {
    if (RENDER) {
      p.pixelDensity(1);
      p.frameRate(30);
    }

    p.createCanvas(p.windowWidth, p.windowHeight);
    p.noFill();
    p.strokeWeight(3);
    p.rectMode(p.CENTER);

    p.createLoop(20, {
      gif: RENDER ? { render: false, open: true } : false,
    });
  };

  p.draw = function () {
    p.blendMode(p.BLEND);
    p.background(255);
    p.blendMode(p.MULTIPLY);

    ["cyan", "magenta", "yellow"].forEach((c, index) => {
      for (let i = 0; i < p.PI; i += p.PI / 20) {
        p.push();
        p.stroke(c);
        p.translate(p.width / 2, p.height / 2);
        p.rotate(
          i * p.cos(p.animLoop.theta) -
            p.animLoop.theta +
            p.TWO_PI * (index / 3)
        );
        p.translate(
          p.sin(p.animLoop.theta) * (p.width / 20) * i,
          p.sin(p.animLoop.theta) * (p.height / 20) * i
        );
        p.ellipse(
          0,
          0,
          p.map(p.cos(p.animLoop.theta), -1, 1, 2, p.height / 2),
          p.width / 2
        );
        p.pop();
      }
    });
  };

  p.windowResized = function () {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };
};

new p5(sketch, "sketch");
