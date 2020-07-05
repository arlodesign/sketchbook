import p5 from "p5";

const sketch = function (p) {
  let size;

  p.setup = function () {
    p.createCanvas(p.windowWidth, p.windowHeight, p.WEBGL);
    size = p.random(500, 700);
    p.stroke(255);
    p.strokeWeight(0.5);
  };

  p.draw = function () {
    p.background(0);
    p.camera(
      p.cos((p.frameCount + 200) / 200) * (size / 3),
      p.sin((p.frameCount + 200) / 100) * (size / 2),
      p.sin((p.frameCount + 200) / 300) * size,
      0,
      0,
      0,
      0,
      1,
      0
    );
    p.noFill();
    for (let r = 0; r < p.TWO_PI; r += p.TWO_PI / (size / 10)) {
      const noiseVal = p.noise(r);
      const anchorPoint = (size / 2) * noiseVal;
      p.push();
      p.rotateZ(r);
      p.rotateX(noiseVal / 2);
      p.rotateY(noiseVal * 2);
      p.bezier(
        -anchorPoint,
        0,
        anchorPoint,
        noiseVal,
        noiseVal,
        noiseVal,
        noiseVal,
        noiseVal,
        noiseVal,
        anchorPoint,
        0,
        anchorPoint
      );
      p.bezier(
        anchorPoint,
        0,
        anchorPoint,
        noiseVal,
        noiseVal,
        noiseVal,
        noiseVal,
        noiseVal,
        noiseVal,
        anchorPoint,
        0,
        -anchorPoint
      );
      p.bezier(
        anchorPoint,
        0,
        -anchorPoint,
        noiseVal,
        noiseVal,
        noiseVal,
        noiseVal,
        noiseVal,
        noiseVal,
        -anchorPoint,
        0,
        -anchorPoint
      );
      p.bezier(
        -anchorPoint,
        0,
        -anchorPoint,
        noiseVal,
        noiseVal,
        noiseVal,
        noiseVal,
        noiseVal,
        noiseVal,
        -anchorPoint,
        0,
        anchorPoint
      );
      p.pop();
    }
  };

  p.windowResized = function () {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };
};

new p5(sketch, "sketch");
