import p5 from "p5";
import vert from "./06.vert";
import frag from "./06.frag";

const sketch = function (p) {
  const RENDER = p.getURLParams().render;
  const RENDER_SIZE = 1080;
  const TIME = 50;
  const FRAME_RATE = 60;

  const DURATION = TIME * (RENDER ? FRAME_RATE : 1);
  const RATE = RENDER ? 1 : FRAME_RATE;
  const FRAMES = DURATION * RATE;

  let theShader;
  let progress = 0;

  p.setup = function () {
    if (RENDER) p.pixelDensity(1);
    p.frameRate(RATE);
    p.createCanvas(
      RENDER ? RENDER_SIZE : p.windowWidth,
      RENDER ? RENDER_SIZE : p.windowHeight,
      p.WEBGL
    );
    p.background(255);
    p.noSmooth();
    theShader = p.createShader(vert, frag);
  };

  p.draw = function () {
    progress = (p.frameCount % FRAMES) / FRAMES;

    theShader.setUniform("uProgress", progress);
    theShader.setUniform("uScale", 1.5);

    p.shader(theShader);
    p.rect(0, 0, p.width, p.height);

    // sometimes the very first frame isn't right, so we skip it
    // TODO: WHY!?!?!
    if (RENDER && p.frameCount <= FRAMES + 1 && p.frameCount > 1) {
      p.frameCount % 100 === 0 && console.info(`${p.ceil(progress * 100)}%`);
      p.save(
        `${String(p.frameCount - 1).padStart(
          String(DURATION * RATE).length,
          "0"
        )}.png`
      );
    }
  };

  p.windowResized = function () {
    if (!RENDER) p.resizeCanvas(p.windowWidth, p.windowHeight);
  };
};

new p5(sketch, "sketch");
