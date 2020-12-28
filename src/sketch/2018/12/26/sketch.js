import p5 from "p5";

const sketch = function (p) {
  let lineCount;

  p.setup = function () {
    p.createCanvas(p.windowWidth, p.windowHeight, p.WEBGL);
    p.fill(0);
    lineCount = p.floor(p.random(300, 600));
    p.strokeWeight(lineCount / 100);
  };

  p.draw = function () {
    p.background(0);
    p.camera(
      p.sin(p.frameCount / lineCount) * lineCount,
      p.cos(p.frameCount / lineCount) * lineCount,
      lineCount,
      0,
      0,
      0,
      0,
      1,
      0
    );
    for (let i = 0; i < lineCount; i++) {
      p.stroke(`rgba(255, 255, 255, ${i / lineCount})`);
      p.line(
        p.cos(p.frameCount + i) * i,
        p.sin(p.frameCount + i) * i,
        p.tan(p.frameCount + i) * i,
        p.cos(p.frameCount + i) * i,
        p.sin(p.frameCount + i) * i,
        0
      );
    }
  };

  p.windowResized = function () {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };
};

new p5(sketch, "sketch");
