import p5 from "p5";

const sketch = function (p) {
  const BOX_COUNT = 9;
  const MAX_SCALE = 3;

  p.setup = function () {
    p.createCanvas(p.windowWidth, p.windowHeight, p.WEBGL);
    p.fill(255);
    p.noStroke();
  };

  p.draw = function () {
    p.background(0);
    p.directionalLight(
      p.min(p.frameCount, 255),
      p.min(p.frameCount, 255),
      p.min(p.frameCount, 255),
      p.cos(p.frameCount / 100),
      p.sin(p.frameCount / 200),
      p.sin(p.frameCount / 100) / 2
    );
    for (let i = -p.floor(BOX_COUNT / 2); i < BOX_COUNT / 2; i++) {
      p.push();
      p.translate((p.width / BOX_COUNT) * i, 0);
      p.rotateY((p.frameCount / 1500) * (i % 2 ? -1 : 1));
      p.rotateX(p.frameCount / 2500);
      p.rotateZ(p.frameCount / 3500 + i * 1000);
      p.scale(
        p.map(p.sin(p.frameCount / 5500), -1, 1, 1 / MAX_SCALE, MAX_SCALE)
      );
      p.box(p.width / (BOX_COUNT / 2), p.height / 2, p.width / (BOX_COUNT / 2));
      p.pop();
    }
  };

  p.windowResized = function () {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };
};

new p5(sketch, "sketch");
