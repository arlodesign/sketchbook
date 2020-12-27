import p5 from "p5";

const sketch = function (p) {
  const w = 30;
  const overlap = 10;
  let x = 0;

  p.setup = function () {
    p.createCanvas(p.windowWidth, p.windowHeight);
    p.background(255);
    p.rectMode(p.CENTER);
    p.noStroke();
  };

  p.draw = function () {
    const noiseVal = p.noise(p.frameCount);
    p.fill(`rgba(0, 0, 0, ${noiseVal})`);
    p.rect(x, p.height / 2, w * noiseVal, p.height * noiseVal);
    x += (w - overlap) * noiseVal;
    if (x >= p.width) {
      for (let i = 0; i < 10000; i++) {
        p.stroke(i % 2 ? `rgba(0, 0, 0, 0.5)` : `rgba(255, 255, 255, 0.5)`);
        p.point(
          p.randomGaussian(p.width / 2, p.width / 3),
          p.randomGaussian(p.height / 2, p.height / 3)
        );
      }
      p.noLoop();
    }
  };

  p.windowResized = function () {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };
};

new p5(sketch, "sketch");
