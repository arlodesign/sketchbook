import p5 from "p5";
import polarToCartesian from "util/polarToCartesian";

const sketch = function (p) {
  const MARGIN = 20;
  const HUE = p.random(100);

  const SPEED_TOP = p.random(0.03, 0.07) / p.TWO_PI;
  const SPEED_RIGHT = p.random(0.03, 0.07) / p.TWO_PI;
  const SPEED_BOTTOM = p.random(0.03, 0.07) / p.TWO_PI;
  const SPEED_LEFT = p.random(0.03, 0.07) / p.TWO_PI;
  const SPEED_HANDLE = p.random(0.01, 0.03) / p.TWO_PI;

  let aTop = 0;
  let aRight = p.PI;
  let aBottom = 0;
  let aLeft = p.PI;
  let aHandle = 0;

  p.setup = function () {
    p.createCanvas(p.windowWidth, p.windowHeight);
    p.background(64);
    p.noFill();
    p.strokeWeight(5);
    p.colorMode(p.HSB, 100);
    p.blendMode(p.SOFT_LIGHT);
  };

  p.draw = function () {
    p.beginShape();

    p.stroke(
      HUE,
      p.map(p.cos(aHandle), -1, 1, 0, 100, true),
      p.map(p.cos(aHandle), -1, 1, 100, 0, true),
      10
    );

    p.vertex(p.map(p.cos(aTop), -1, 1, MARGIN, p.width - MARGIN), MARGIN, true);
    p.quadraticVertex(
      ...polarToCartesian(
        p.width / 2,
        p.height / 2,
        aHandle - p.HALF_PI,
        p.height *
          p.noise(SPEED_TOP / 10, SPEED_BOTTOM / 10, p.frameCount / 1000),
        true
      ),
      p.width - MARGIN,
      p.map(p.sin(aRight), -1, 1, MARGIN, p.height - MARGIN, true)
    );
    p.quadraticVertex(
      ...polarToCartesian(
        p.width / 2,
        p.height / 2,
        aHandle,
        p.height *
          p.noise(SPEED_TOP / 10, SPEED_BOTTOM / 10, p.frameCount / 1000),
        true
      ),
      p.map(p.cos(aBottom), -1, 1, MARGIN, p.width - MARGIN, true),
      p.height - MARGIN
    );
    p.quadraticVertex(
      ...polarToCartesian(
        p.width / 2,
        p.height / 2,
        aHandle + p.HALF_PI,
        p.height *
          p.noise(SPEED_TOP / 10, SPEED_BOTTOM / 10, p.frameCount / 1000),
        true
      ),
      MARGIN,
      p.map(p.sin(aLeft), -1, 1, MARGIN, p.height - MARGIN, true)
    );
    p.quadraticVertex(
      ...polarToCartesian(
        p.width / 2,
        p.height / 2,
        aHandle + p.PI,
        p.height *
          p.noise(SPEED_TOP / 10, SPEED_BOTTOM / 10, p.frameCount / 1000),
        true
      ),
      p.map(p.cos(aTop), -1, 1, MARGIN, p.width - MARGIN, true),
      MARGIN
    );

    p.endShape(p.CLOSE);

    aTop += SPEED_TOP;
    aRight += SPEED_RIGHT;
    aBottom += SPEED_BOTTOM;
    aLeft += SPEED_LEFT;
    aHandle += SPEED_HANDLE;

    if (aHandle > p.TWO_PI * 2) {
      p.noLoop();
      p.fill(HUE, 10, 10);
      p.noStroke();
      p.blendMode(p.BLEND);
      p.rect(0, 0, p.width, MARGIN * 2);
      p.rect(0, p.height - MARGIN * 2, p.width, MARGIN * 2);
      p.rect(0, 0, MARGIN * 2, p.height);
      p.rect(p.width - MARGIN * 2, 0, MARGIN * 2, p.height);
    }
  };

  p.windowResized = function () {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };
};

new p5(sketch, "sketch");
document.getElementById("description").innerHTML =
  "Refresh page for a different variatio n";
