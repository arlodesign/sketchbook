import p5 from "p5";
import attachCreateLoop from "p5.createloop/src/p5.createLoop";
window.p5 = p5;
attachCreateLoop();

const sketch = function (p) {
  const RENDER = p.getURLParams().render;
  const DURATION = 60;
  const RATE = 60;
  const COLORS = ["cyan", "magenta", "yellow", "white"];

  p.setup = function () {
    p.pixelDensity(2);
    p.frameRate(RATE);
    p.createCanvas(p.windowWidth, p.windowHeight);
    p.background(128);
    p.noStroke();
    p.noSmooth();
    p.createLoop(DURATION, {
      gif: RENDER ? { render: false, open: true } : false,
      noiseRadius: 0.7,
    });
  };

  p.draw = function () {
    const { progress, theta, noise, noise1D } = p.animLoop;

    const x = p.floor(p.width * progress);
    const clr = COLORS[p.frameCount % COLORS.length];
    const noiseA = noise1D((p.frameCount % COLORS.length) + clr.length + 1);
    const noiseB = noise1D(clr.length - (p.frameCount % COLORS.length) + 1);
    const y = p.height * ((noiseA + 1) / 2);
    const clrObj = p.color(clr);
    clrObj.setAlpha(128);

    p.fill(clrObj);
    p.push();
    p.blendMode(clr === "white" ? p.BLEND : p.MULTIPLY);
    p.translate(x, y);
    p.rotate(-theta * 2);
    p.rect(0, 0, 1, (p.height - y) * ((noiseB + 1) / 2));
    p.pop();

    p.frameCount % 100 === 0 && console.info(`${p.floor(progress * 100)}%`);
    if (!RENDER && p.frameCount === DURATION * RATE) {
      console.info("100%");
      p.noLoop();
    }
  };

  p.windowResized = function () {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };
};

new p5(sketch, "sketch");
