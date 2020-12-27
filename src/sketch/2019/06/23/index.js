import p5 from "p5";
import { Coordinate } from "coordinate-systems";
const { spherical } = Coordinate;

const sketch = function (p) {
  const SIZE = 10;
  const SPEED = 0.25;

  let colors = [];

  const colorFunctions = [
    (angle) => p.abs(p.sin(angle)) * 240,
    (angle) => p.abs(p.cos(angle)) * 240,
    (angle) => p.abs(p.tan(angle)) * 240,
    (angle) => p.abs(p.sin(-angle)) * 240,
    (angle) => p.abs(p.cos(-angle)) * 240,
    (angle) => p.abs(p.tan(-angle)) * 240,
    () => 240,
    () => 15,
    () => 128,
  ];

  p.setup = function () {
    p.createCanvas(p.windowWidth, p.windowHeight, p.WEBGL);
    p.noStroke();
    while (Array.from(new Set(colors)).length < 3) {
      colors = [
        p.random(colorFunctions),
        p.random(colorFunctions),
        p.random(colorFunctions),
      ];
    }
  };

  p.draw = function () {
    const C = colors.map((c) => c((p.frameCount / 200) * SPEED));

    p.background(...C);

    p.pointLight(
      ...C.reverse(),
      p.cos((p.frameCount / 200) * SPEED),
      p.sin((p.frameCount / 100) * SPEED),
      p.sin((p.frameCount / 100) * SPEED)
    );
    p.camera(
      ...spherical([
        SIZE * SIZE * 2,
        0,
        (p.frameCount / 200) * SPEED,
      ]).cartesian(),
      0,
      0,
      0,
      0,
      1,
      0
    );

    p.noStroke();

    p.specularMaterial(...C);
    p.shininess(5);

    for (let i = 0; i < SIZE * 2; i++) {
      p.push();

      p.rotateX((p.TWO_PI / SIZE) * i * p.sin((p.frameCount / 100) * SPEED));
      p.rotateY((p.TWO_PI / SIZE) * i * p.cos((p.frameCount / 200) * SPEED));

      p.torus(SIZE * i, SIZE / 3, 30 * i + 1);
      p.pop();
    }
  };

  p.windowResized = function () {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };
};

new p5(sketch, "sketch");
