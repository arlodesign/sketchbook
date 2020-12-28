import p5 from "p5";

const sketch = function (p) {
  const MARGIN = 100;
  const GAP = 30;
  const ITERATIONS = 15;
  let y = MARGIN;
  let length;
  let colors = [];
  let iteration = 0;
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
    p.createCanvas(p.windowWidth, p.windowHeight);
    p.background(127);
    length = p.width - MARGIN * 2;
    while (Array.from(new Set(colors)).length < 3) {
      colors = [
        p.random(colorFunctions),
        p.random(colorFunctions),
        p.random(colorFunctions),
      ];
    }
    p.blendMode(p.OVERLAY);
    p.rectMode(p.CENTER);
    p.strokeWeight(2);
  };

  p.draw = function () {
    p.translate(MARGIN, y);
    const P = p.floor(p.random(GAP));
    const S = length / P;
    const C = p.color(...colors.map((c) => c(y * iteration)), 127);
    if (iteration % 2) {
      p.noFill();
      p.stroke(C);
    } else {
      p.noStroke();
      p.fill(C);
    }
    p.beginShape();
    p.vertex(0, 0);
    for (let i = 0; i < P; i++) {
      const X = p.lerp(S * i, S * (i + 1), p.noise(i, y));
      const Y = GAP * p.noise(y, i) * p.random([-1, 1]);
      p.quadraticVertex(X, Y, S * (i + 1), 0);
    }
    p.vertex(length, 0);
    p.endShape();
    y += GAP;
    if (y > p.height - MARGIN) {
      iteration++;
      y = MARGIN;
    }
    if (iteration === ITERATIONS) {
      p.noLoop();
    }
  };

  p.windowResized = function () {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };
};

new p5(sketch, "sketch");
