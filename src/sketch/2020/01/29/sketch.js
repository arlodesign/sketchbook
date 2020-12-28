import p5 from "p5";
import "p5.createloop";
import polarToCartesian from "util/polarToCartesian";

const sketch = function (p) {
  const RENDER = p.getURLParams().render;
  const DURATION = 20;
  const RATE = 30;
  const SLICES = 100;

  let size;
  let texture;
  let cam;

  p.setup = function () {
    p.pixelDensity(2);
    p.frameRate(RATE);
    p.createCanvas(p.windowWidth, p.windowHeight, p.WEBGL);
    p.createLoop(DURATION, {
      gif: RENDER ? { render: false, open: true } : false,
      noiseRadius: 0.8,
    });
    p.noStroke();

    size = p.width / 2;
    texture = p.createGraphics(size, size / SLICES);
    cam = p.createCamera();
  };

  p.draw = function () {
    const { theta, noise } = p.animLoop;

    texture.background(255);

    for (let x = 0; x < size * 2; x += 30) {
      texture.strokeCap(p.PROJECT);
      texture.strokeWeight(10);
      texture.line(x, 0, 0, x);
    }

    p.texture(texture);

    p.background(255);

    cam.setPosition(
      ...polarToCartesian(0, 0, theta, p.width, true),
      p.height / 2
    );
    cam.lookAt(0, 0, 0);

    const twist = p.PI * noise();

    for (let i = -SLICES / 2; i < SLICES / 2; i++) {
      let y = p.map(i, -SLICES / 2, SLICES / 2, -size / 2, size / 2);
      p.push();
      p.translate(0, y, 0);
      p.rotateY(p.map(i, -SLICES / 2, SLICES / 2, -twist, twist));
      p.box(size, size / SLICES, size);

      p.pop();
    }
  };

  p.windowResized = function () {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };
};

new p5(sketch, "sketch");
