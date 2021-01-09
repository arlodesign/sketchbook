import p5 from "p5";
import frag from "./sketch.frag";

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
  const RENDER = p.getURLParams().render === "true";
  const RENDER_SIZE = 1080;
  const TIME = 40;
  const FRAME_RATE = 60;

  // Lower if frames skip
  const RENDER_SPEED = 5;
  const DURATION = TIME * (RENDER ? ~~(FRAME_RATE / RENDER_SPEED) : 1);
  const RATE = ~~(RENDER ? RENDER_SPEED : FRAME_RATE);
  const FRAMES = DURATION * RATE;

  let urlParams;
  let intensity;
  let link;

  let theShader;
  let progress = 0;

  function changeURL() {
    const searchParams = {
      intensity: intensity.value(),
    };

    link.attribute(
      "href",
      "?" +
        new URLSearchParams({
          ...searchParams,
          render: !RENDER,
        }).toString()
    );
    window.history.replaceState(
      null,
      document.title,
      "?" +
        new URLSearchParams({
          ...searchParams,
          render: RENDER,
        }).toString()
    );
  }

  p.setup = function () {
    p.pixelDensity(1);
    p.frameRate(RATE);
    p.createCanvas(
      RENDER ? RENDER_SIZE : p.windowWidth,
      RENDER ? RENDER_SIZE : p.windowHeight,
      p.WEBGL
    );
    p.background(255);

    urlParams = Object.assign(
      {
        intensity: ~~p.random(10, 1000),
      },
      p.getURLParams()
    );

    if (!RENDER) {
      p.noSmooth();
    }

    intensity = p.createSlider(
      100,
      10000,
      parseFloat(urlParams.intensity, 10),
      1
    );
    intensity.changed(changeURL);
    link = p.createA("?", RENDER ? "Draft" : "Render");

    changeURL();
    theShader = p.createShader(vert, frag);
  };

  p.draw = function () {
    progress = (p.frameCount % FRAMES) / FRAMES;

    theShader.setUniform("u_resolution", [p.width, p.height]);
    theShader.setUniform("u_progress", progress);
    theShader.setUniform("u_intensity", intensity.value());

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
    !RENDER && p.resizeCanvas(p.windowWidth, p.windowHeight);
  };
};

new p5(sketch, "sketch");
document.getElementById(
  "description"
).innerHTML = `<a href="https://genuary2021.github.io/">#genuary2021</a>: Interference patterns`;
