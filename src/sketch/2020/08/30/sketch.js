import p5 from "p5";
import "p5.createloop";
import font from "assets/NewsCycle-Bold.ttf";
import polarToCartesian from "util/polarToCartesian";

const sketch = function (p) {
  const draftScale = (x) => (RENDER ? x : p.floor(x / 3));

  const RENDER = p.getURLParams().render;
  const RENDER_SIZE = draftScale(540);
  const DURATION = 30;
  const RATE = RENDER ? 60 : 30;
  const FONT_SIZE = draftScale(90);

  let myFont;
  let cnvs;

  p.preload = function () {
    myFont = p.loadFont(font);
  };

  p.setup = function () {
    p.pixelDensity(1);
    p.frameRate(RATE);
    p.createCanvas(RENDER_SIZE, RENDER_SIZE);
    p.background(255);
    p.noSmooth();
    p.createLoop(DURATION, {
      noiseRadius: 1,
    });

    cnvs = p.createGraphics(RENDER_SIZE, RENDER_SIZE);
    cnvs.colorMode(p.HSB, 1);
  };

  function drawCnvs() {
    const { progress, theta, noise2D } = p.animLoop;

    cnvs.background(0);
    cnvs.noStroke();

    cnvs.fill(progress, 1, 0.7, 1);
    cnvs.textFont(myFont, FONT_SIZE);
    cnvs.textAlign(cnvs.CENTER);
    cnvs.textLeading(FONT_SIZE);
    cnvs.text(
      "THINGS CAN ALWAYS GET WORSE",
      p.width / 5,
      0,
      p.width - (p.width / 5) * 2,
      p.height
    );

    const points = [].concat(
      ...myFont.textToPoints(
        "THINGS",
        draftScale(119),
        FONT_SIZE + draftScale(23),
        FONT_SIZE,
        { sampleFactor: 5, simplifyThreshold: 10 }
      ),
      ...myFont.textToPoints(
        "CAN",
        draftScale(180),
        FONT_SIZE * 2 + draftScale(23),
        FONT_SIZE,
        { sampleFactor: 5, simplifyThreshold: 10 }
      ),
      ...myFont.textToPoints(
        "ALWAYS",
        draftScale(111),
        FONT_SIZE * 3 + draftScale(23),
        FONT_SIZE,
        { sampleFactor: 5, simplifyThreshold: 10 }
      ),
      ...myFont.textToPoints(
        "GET",
        draftScale(183),
        FONT_SIZE * 4 + draftScale(23),
        FONT_SIZE,
        { sampleFactor: 5, simplifyThreshold: 10 }
      ),
      ...myFont.textToPoints(
        "WORSE",
        draftScale(125),
        FONT_SIZE * 5 + draftScale(23),
        FONT_SIZE,
        { sampleFactor: 5, simplifyThreshold: 10 }
      )
    );
    cnvs.push();
    cnvs.blendMode(p.HARD_LIGHT);
    points.forEach(({ x, y, alpha }, i) => {
      cnvs.strokeWeight(1);
      cnvs.stroke(
        (i / points.length + progress) % 1,
        p.abs(noise2D(x / 50, y / 50)),
        0.8,
        0.5
      );
      cnvs.line(
        x,
        y,
        ...polarToCartesian(
          x,
          y,
          (p.TWO_PI / points.length) * i + theta + alpha,
          cnvs.width * noise2D(x / 100, y / 100),
          true
        )
      );
    });
    cnvs.pop();
  }

  p.draw = function () {
    const { progress, noise2D } = p.animLoop;

    p.background(1);
    p.loadPixels();
    drawCnvs();
    cnvs.loadPixels();

    for (let y = 0; y < p.height; y++) {
      for (let x = 0; x < p.width; x++) {
        const index = (x + y * p.width) * 4;
        const colors = [1, 2, 3].map((i) => {
          let a = noise2D(y / 4000 / i, x / 4000 / i) * p.PI;
          let d =
            noise2D(((x / 100) * i) / 2, ((y / 100) * i) / 2) * (p.width / 5);
          let imgCoord = polarToCartesian(x, y, a, d);
          imgCoord.x = p.floor(p.constrain(imgCoord.x, 0, cnvs.width - 1));
          imgCoord.y = p.floor(p.constrain(imgCoord.y, 0, cnvs.height - 1));
          return (imgCoord.x + imgCoord.y * cnvs.width) * 4;
        });

        p.pixels[index] = cnvs.pixels[colors[0]];
        p.pixels[index + 1] = cnvs.pixels[colors[1] + 1];
        p.pixels[index + 2] = cnvs.pixels[colors[2] + 2];
        p.pixels[index + 3] = 255;
      }
    }
    p.updatePixels();

    if (RENDER && p.frameCount <= DURATION * RATE) {
      p.frameCount % 100 === 0 && console.info(`${p.floor(progress * 100)}%`);
      p.save(
        `${String(p.frameCount).padStart(
          String(DURATION * RATE).length,
          "0"
        )}.png`
      );
    }
  };
};

new p5(sketch, "sketch");
