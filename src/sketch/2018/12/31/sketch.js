import p5 from "p5";

const sketch = function (p) {
  let speed;
  let alpha;

  p.setup = function () {
    p.createCanvas(p.windowWidth, p.windowHeight);
    speed = p.random([2, 3, 4, 5, 6, 8, 10]);
    alpha = p.random(0.3, 0.8);
    p.background(255);
    p.noFill();
    p.stroke(`rgba(0, 0, 0, ${alpha})`);
    p.strokeWeight(2);
  };

  p.draw = function () {
    const x = (p.frameCount % (p.width / speed)) * speed;
    const y = (p.frameCount % (p.height / speed)) * speed;
    for (let i = 0; i < 1; i += alpha * 0.1) {
      const pointX = p.lerp(p.width / 2, x, i);
      const pointY = p.lerp(p.height / 2, y, i);
      const dist =
        speed * p.map(p.noise(pointX, pointY), 0, 1, 1 - alpha, 1 + alpha);
      p.line(pointX + dist, pointY - dist, pointX - dist, pointY + dist);
    }
    if (x === 0 && y === 0 && p.frameCount > 0) {
      for (let i = 0; i < speed * 1000; i++) {
        p.stroke(
          i % speed
            ? `rgba(0, 0, 0, ${alpha})`
            : `rgba(255, 255, 255, ${alpha})`
        );
        p.point(
          p.randomGaussian(p.width / 2, p.width / 4),
          p.randomGaussian(p.height / 2, p.height / 4)
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
document.getElementById("description").innerHTML =
  "Reload page for a different variation.";
