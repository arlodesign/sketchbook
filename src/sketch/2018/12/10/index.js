import p5 from "p5";

const sketch = function (p) {
  const size = 60;

  p.setup = function () {
    p.createCanvas(p.windowWidth, p.windowHeight);
    p.rectMode(p.CENTER);
    p.noStroke();
    p.noLoop();
  };

  p.draw = function () {
    p.background(255);
    p.translate(p.width / 3, p.height / 3);
    for (let x = 0; x <= p.width; x = x + size * 1.333) {
      for (let y = 0; y <= p.height; y = y + size * 1.333) {
        const noiseVal = p.noise(x, y);
        const rotateVal = p.map(noiseVal, 0, 1, 2, 4);
        p.rotate(p.PI / rotateVal);
        p.fill(`rgba(0, 0, 0, ${noiseVal / 4})`);
        p.rect(x, 0, size * 2 * noiseVal, p.height);
        p.fill(`rgba(0, 0, 0, ${noiseVal / 4})`);
        p.rect(0, y, p.width, size * noiseVal);
      }
    }
  };

  p.windowResized = function () {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };
};

new p5(sketch, "sketch");
