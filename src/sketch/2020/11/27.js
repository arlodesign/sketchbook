import p5 from "p5";
import Worker from "./27.worker?80";

const sketch = function (p) {
  const RENDER = p.getURLParams().render;
  const RENDER_SIZE = 1080 / (RENDER ? 1 : 2);
  const DURATION = 50 * (RENDER ? 60 : 1);
  const RATE = RENDER ? 1 : 60;
  const FRAMES = DURATION * RATE;
  const HUE = p.random();
  const HUES = p.shuffle([HUE, (HUE + 0.45) % 1, (HUE + 0.55) % 1]);

  let img = new Uint8ClampedArray(RENDER_SIZE * RENDER_SIZE * 4);
  let frame = new Uint8ClampedArray(RENDER_SIZE * RENDER_SIZE * 4);
  let grfx;
  let progress = 0;

  function setImg() {
    grfx = p.createGraphics(RENDER_SIZE, RENDER_SIZE);
    grfx.pixelDensity(1);
    grfx.background(255);
    grfx.strokeCap(p.SQUARE);
    grfx.colorMode(p.HSL, 1);
    grfx.strokeWeight(RENDER_SIZE / 10);
    grfx.noFill();
    grfx.translate(RENDER_SIZE / 2, RENDER_SIZE / 2);
    grfx.rotate(p.TWO_PI * progress * 4);
    let i = 0;
    for (let r = 0; r < 1; r += 0.015) {
      for (let a = 0; a < 1; a += 0.1) {
        grfx.stroke(HUES[i % 3], 1, p.map(a * r, 0, 1, 0.3, 0.8));
        grfx.arc(
          0,
          0,
          RENDER_SIZE * 2 * r,
          RENDER_SIZE * 2 * r,
          (a + r) * p.TWO_PI,
          (a + 0.1 + r) * p.TWO_PI
        );
        i++;
      }
    }
    grfx.loadPixels();
    img.set(grfx.pixels);
  }

  const worker = new Worker();
  function postMessage() {
    worker.postMessage({
      img,
      progress,
      width: p.width,
      height: p.height,
      scale: [0.001, 0.002],
      radius: [5, 1],
    });
  }

  p.setup = function () {
    p.pixelDensity(1);
    p.frameRate(RATE);
    p.createCanvas(RENDER_SIZE, RENDER_SIZE);
    p.colorMode(p.HSL, 1);

    worker.addEventListener("message", ({ data }) => {
      frame.set(data);
      p.loop();
    });
    setImg();
    postMessage();
  };

  p.draw = function () {
    p.background(255);
    progress = (p.frameCount % FRAMES) / FRAMES;

    setImg();

    const thisImg = new p5.Image(RENDER_SIZE, RENDER_SIZE);
    thisImg.loadPixels();
    thisImg.pixels.set(frame);
    thisImg.updatePixels();
    p.image(thisImg, 0, 0, p.width, p.height);

    p.noStroke();
    p.fill(HUE, 1, 0.3);
    p.rect(0, 0, p.width, RENDER_SIZE / 20);
    p.rect(0, p.height, p.width, -RENDER_SIZE / 20);
    p.rect(0, 0, RENDER_SIZE / 20, p.height);
    p.rect(p.width, 0, -RENDER_SIZE / 20, p.height);

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
