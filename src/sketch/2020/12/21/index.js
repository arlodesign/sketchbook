import p5 from "p5";
import frag from "./21.frag";

const vert = `
attribute vec3 aPosition;
attribute vec2 aTexCoord;

varying vec2 vTexCoord;

void main() {
  vTexCoord = aTexCoord;
  vec4 positionVec4 = vec4(aPosition, 1.0);
  positionVec4.xy = positionVec4.xy * 2.0 - 1.0;
  gl_Position = positionVec4;
}`;

const sketch = function (p) {
  const RENDER = p.getURLParams().render;
  const RENDER_SIZE = 1080 / 2;
  const TIME = 30;
  const FRAME_RATE = 60;

  const DURATION = TIME * (RENDER ? FRAME_RATE : 1);
  const RATE = RENDER ? 1 : FRAME_RATE;
  const FRAMES = DURATION * RATE;

  let theShader;
  let progress = 0;
  let link;

  p.setup = function () {
    p.frameRate(RATE);
    p.createCanvas(
      RENDER ? RENDER_SIZE : p.windowWidth,
      RENDER ? RENDER_SIZE : p.windowHeight,
      p.WEBGL
    );
    p.background(255);
    p.noSmooth();
    theShader = p.createShader(vert, frag);

    link = p.createA("?", "Render");
  };

  p.draw = function () {
    progress = (p.frameCount % FRAMES) / FRAMES;

    theShader.setUniform("u_resolution", [p.width, p.height]);
    theShader.setUniform("u_progress", progress);
    theShader.setUniform("u_framecount", p.frameCount);

    p.shader(theShader);
    p.rect(0, 0, p.width, p.height);

    link.attribute(
      "href",
      "?" +
        new URLSearchParams({
          render: true,
        }).toString()
    );

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
