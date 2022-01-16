import p5 from "p5";
import attachCreateLoop from "p5.createloop/src/p5.createLoop";
window.p5 = p5;
attachCreateLoop();
import polarToCartesian from "util/polarToCartesian";

const RENDER = process.env.DEV && false;

const sketch = function (p) {
  p.setup = function () {
    if (RENDER) {
      p.pixelDensity(1);
      p.frameRate(30);
    }

    p.createCanvas(p.windowWidth, p.windowHeight);
    p.strokeWeight(10);

    p.createLoop(10, {
      gif: RENDER ? { render: false, open: true } : false,
      noiseRadius: 0.1,
    });
  };

  p.draw = function () {
    p.blendMode(p.BLEND);
    p.background(0);
    p.blendMode(p.SCREEN);

    const NOISE = p.animLoop.noise() + 1;

    for (let i = 0; i < 33; i++) {
      p.push();
      p.noFill();
      p.stroke(["red", "green", "blue"][i % 3]);
      p.translate(p.width / 2, p.height / 2);
      p.rotate((p.TWO_PI / 33) * i + p.animLoop.theta);
      p.ellipse(
        ...polarToCartesian(
          0,
          0,
          (p.TWO_PI / 33) * i,
          (p.width / 10) * NOISE,
          true
        ),
        (p.width / 2) * p.map(p.sin(p.animLoop.theta), -1, 1, NOISE, 0),
        (p.height / 2) * p.map(p.cos(p.animLoop.theta), -1, 1, 0, NOISE)
      );
      p.pop();
    }
  };

  // p.touchMoved = function() {
  //  if (
  //    p.mouseX >= 0 &&
  //    p.mouseY >= 0 &&
  //    p.mouseX <= p.width &&
  //    p.mouseY <= p.height
  //  ) {
  //    return false;
  //  }
  // };

  p.windowResized = function () {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };
};

new p5(sketch, "sketch");
