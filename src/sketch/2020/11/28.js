import p5 from "p5";
import { easeInQuint as easeIn, easeOutQuint as easeOut } from "util/easing";
import WorkerWarp from "./27.worker?80";

const sketch = function (p) {
  const RENDER = p.getURLParams().render;
  const RENDER_SIZE = 1080 / (RENDER ? 1 : 2);
  const DURATION = 50 * (RENDER ? 60 : 1);
  const RATE = RENDER ? 1 : 60;
  const FRAMES = DURATION * RATE;
  const HUE = p.random();
  const HUES = p.shuffle([HUE, (HUE + 0.4) % 1, (HUE + 0.6) % 1]);

  let img = new Uint8ClampedArray(RENDER_SIZE * RENDER_SIZE * 4);
  let frame = new Uint8ClampedArray(RENDER_SIZE * RENDER_SIZE * 4);
  let grfx;
  let progress = 0;
  let colors = [];
  let bg;

  function setImg() {
    const loopedProgress = p.sin(2 * p.PI * progress - p.PI / 2) / 2 + 0.5;

    grfx.pixelDensity(1);
    grfx.background(bg);
    grfx.noFill();

    const start = grfx.width * easeIn(progress);
    const finish = grfx.width * easeOut(progress);

    for (let w = start; w < finish; w += 3) {
      const clr = p.lerpColor(...colors, w / grfx.width);

      grfx.push();
      grfx.stroke(clr);
      grfx.rectMode(p.CENTER);
      grfx.translate(grfx.width / 2, grfx.height / 2);
      grfx.rotate(p.TWO_PI * progress);
      grfx.rotate(p.TWO_PI * (w / grfx.width));
      grfx.square(0, 0, w);
      grfx.pop();
    }

    grfx.loadPixels();
    img.set(grfx.pixels);
  }

  const workerWarp = new WorkerWarp();
  function postMessage() {
    workerWarp.postMessage({
      img,
      progress,
      width: p.width,
      height: p.height,
      scale: [0.001, 0.002],
      radius: [0.3, 0.5],
    });
  }

  p.setup = function () {
    p.pixelDensity(1);
    p.frameRate(RATE);
    p.createCanvas(RENDER_SIZE, RENDER_SIZE);
    p.colorMode(p.HSL, 1);

    grfx = p.createGraphics(RENDER_SIZE, RENDER_SIZE);
    grfx.colorMode(p.HSL, 1);

    bg = p.color(HUES[0], 0.5, 0.4);
    colors = [p.color(HUES[1], 0.3, 0.5), p.color(HUES[2], 0.5, 0.3)];

    workerWarp.addEventListener("message", ({ data }) => {
      frame.set(data);
      p.loop();
    });
    setImg();
    postMessage();
  };

  p.draw = function () {
    p.background(bg);
    progress = (p.frameCount % FRAMES) / FRAMES;

    setImg();

    const thisImg = new p5.Image(RENDER_SIZE, RENDER_SIZE);
    thisImg.loadPixels();
    thisImg.pixels.set(frame);
    thisImg.updatePixels();
    p.image(thisImg, 0, 0, p.width, p.height);

    postMessage();

    if (RENDER && p.frameCount <= FRAMES) {
      p.frameCount % 100 === 0 && console.info(`${p.ceil(progress * 100)}%`);
      p.save(
        `${String(p.frameCount).padStart(
          String(DURATION * RATE).length,
          "0"
        )}.png`
      );
    }

    p.noLoop();
  };
};

new p5(sketch, "sketch");
