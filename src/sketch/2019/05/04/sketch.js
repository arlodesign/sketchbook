import p5 from "p5";
import lerpLine from "util/lerpLine";

const sketch = function (p) {
  const goldenRatio = 1.6180339887;

  let angle = 0;
  let r = 10;
  let apex = {};
  let spin;
  let grow;

  p.setup = function () {
    p.createCanvas(p.windowWidth, p.windowHeight);
    p.background(0);
    p.noFill();
    apex = {
      width: p.width / goldenRatio,
      height: p.height / goldenRatio,
    };
    spin = p.random(1, 3) * p.random();
    grow = spin * p.noise(spin) * 10;
  };

  p.draw = function () {
    angle += spin;
    r = r + grow;

    const noiseVal = p.noise(angle, r);
    const x = p.cos(angle * noiseVal) * r;
    const y = p.sin(angle * noiseVal) * r;
    const x2 = p.sin(angle * noiseVal) * r;
    const y2 = p.cos(angle * noiseVal) * r;

    p.stroke(`rgba(255, 255, 255, ${noiseVal})`);

    lerpLine(p, apex.width, apex.height, x, y, noiseVal / 100);
    lerpLine(p, apex.width, apex.height, x2, y2, noiseVal / 100);

    if (x > p.width * goldenRatio && y > p.height * goldenRatio) {
      p.noLoop();
    }
  };

  p.windowResized = function () {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };
};

new p5(sketch, "sketch");
