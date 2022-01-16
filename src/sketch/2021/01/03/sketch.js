import p5 from "p5";
import attachCreateLoop from "p5.createloop/src/p5.createLoop";
window.p5 = p5;
attachCreateLoop();
import { getLineBy3Points } from "get-parabola";
import polarToCartesian from "util/polarToCartesian";
import { Coordinate } from "coordinate-systems";

const sketch = function (p) {
  const RENDER = p.getURLParams().render === "true";
  const RENDER_SIZE = 1080;
  const TIME = 57;
  const FRAME_RATE = 60;
  const INC = 0.1;

  const DURATION = TIME * (RENDER ? FRAME_RATE : 1);
  const RATE = RENDER ? 1 : FRAME_RATE;
  const FRAMES = DURATION * RATE;

  let urlParams;
  let hue;
  let scale;
  let particleCount;
  let link;

  let cols;
  let rows;
  let yOff;
  let xOff;
  let zOff = 0;
  let minDist = 1000000;
  let hueFn;
  let mostDistantParticleIndex;
  let flowField = [];
  let particles = [];

  const loopedProgress = () =>
    p.sin(2 * p.PI * p.animLoop.progress - p.PI / 2) / 2 + 0.5;

  function changeURL() {
    const searchParams = {
      hue: hue.value(),
      particleCount: particleCount.value(),
      scale: scale.value(),
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

    return (
      "?" +
      new URLSearchParams({
        ...searchParams,
        render: RENDER,
      }).toString()
    );
  }

  // Borrowed heavily from https://gist.github.com/naixy28/a16fe9ab629db0123015467205ed11f2
  class Particle {
    constructor(x, y, i) {
      this._x = x;
      this._y = y;
      this.index = i;
      this.edgeCount = 0;
      this.alpha = 0;
      this.hue = hueFn(i);
      this.pos = p.createVector(x, y);
      this.vel = p.createVector(0, 0);
      this.acc = p.createVector(0, 0);
      this.prevPos = this.pos.copy();
    }
    get noiseVal() {
      return p.animLoop.noise2D(this._x, this._y) * loopedProgress();
    }
    update() {
      this.vel.add(this.acc);
      this.vel.limit(2);
      this.pos.add(this.vel);
      this.acc.mult(0);
    }
    follow(v) {
      let x = ~~(this.pos.x / scale.value());
      let y = ~~(this.pos.y / scale.value());
      let index = x + y * cols;
      let force = v[index];
      this.applyForce(force);
    }
    applyForce(f) {
      this.acc.add(f);
    }
    get distances() {
      return particles
        .map(({ pos }, i) => p.dist(this.pos.x, this.pos.y, pos.x, pos.y))
        .sort();
    }
    get lightness() {
      return mostDistantParticleIndex === this.index
        ? 1
        : 1 - Math.min(this.distances[1], minDist) / minDist;
    }
    show() {
      this.alpha += 0.1;
      p.stroke(
        p.abs(this.hue + (hue.value() % 1)),
        1,
        this.lightness,
        Math.min(loopedProgress() / 3, this.alpha)
      );
      p.strokeWeight(p.map(this.lightness, 0, 1, 0.5, 4));
      p.line(this.pos.x, this.pos.y, this.prevPos.x, this.prevPos.y);
      this.updatePrev();
    }
    updatePrev() {
      this.prevPos.x = this.pos.x;
      this.prevPos.y = this.pos.y;
    }
    edges() {
      const [radius] = Coordinate.cartesian([
        this.pos.x - p.width / 2,
        this.pos.y - p.height / 2,
      ]).polar();
      if (radius > Math.min(p.width * 0.4, p.height * 0.4)) {
        this.edgeCount++;
        if (this.edgeCount > 20) {
          this.pos.x = this._x;
          this.pos.y = this._y;
          this.edgeCount = 0;
          this.alpha = 0;
        } else {
          this.vel.rotate(p.HALF_PI);
        }
        this.updatePrev();
      }
    }
  }

  p.setup = function () {
    p.pixelDensity(1);
    p.frameRate(RATE);
    p.createCanvas(
      RENDER ? RENDER_SIZE : p.windowWidth,
      RENDER ? RENDER_SIZE : p.windowHeight
    );
    p.createLoop(DURATION, {
      noiseRadius: 0.1,
    });

    p.colorMode(p.HSL, 1);

    urlParams = Object.assign(
      {
        hue: p.random(0, 1),
        particleCount: ~~p.random(2, 5000),
        scale: ~~p.random(10, 200),
      },
      p.getURLParams()
    );

    if (!RENDER) {
      p.noSmooth();
    }

    hue = p.createSlider(0, 1, parseFloat(urlParams.hue, 10), 0.01);
    hue.attribute("title", "hue");
    hue.changed(changeURL);
    scale = p.createSlider(10, 200, parseFloat(urlParams.scale, 10), 1);
    scale.attribute("title", "scale");
    scale.changed(() => {
      changeURL();
      cols = ~~(p.width / scale.value());
      rows = ~~(p.height / scale.value());
    });
    particleCount = p.createSlider(
      10,
      200,
      parseFloat(urlParams.particleCount, 10),
      1
    );
    particleCount.attribute("title", "particleCount");
    let particleCountChangeTimeout;
    particleCount.changed(() => {
      changeURL();
      clearTimeout(particleCountChangeTimeout);
      particleCountChangeTimeout = setTimeout(
        () => window.location.reload(),
        2000
      );
    });

    link = p.createA("?", RENDER ? "Draft" : "Render");

    hueFn = getLineBy3Points([
      {
        x: 0,
        y: -0.1,
      },
      {
        x: (particleCount.value() - 1) / 2,
        y: 0,
      },
      {
        x: particleCount.value() - 1,
        y: 0.1,
      },
    ]);

    changeURL();
    cols = ~~(p.width / scale.value());
    rows = ~~(p.height / scale.value());

    for (let i = 0; i < particleCount.value(); i++) {
      particles[i] = new Particle(
        ...polarToCartesian(
          p.width / 2,
          p.height / 2,
          p.random([0, p.PI]),
          p.random(p.width / 5),
          true
        ),
        i
      );

      if (i > 0) {
        const currDist = p.dist(
          particles[i].pos.x,
          particles[i].pos.y,
          particles[i - 1].pos.x,
          particles[i - 1].pos.y
        );
        minDist = currDist < minDist ? currDist : minDist;
      }
    }
    p.background(hue.value(), 0.8, 0.3);
  };

  p.draw = function () {
    const { progress } = p.animLoop;
    p.blendMode(p.OVERLAY);

    mostDistantParticleIndex = particles
      .map((keyParticle, i) => {
        const distances = particles
          .map((compareParticle) =>
            p.dist(
              keyParticle.pos.x,
              keyParticle.pos.y,
              compareParticle.pos.x,
              compareParticle.pos.y
            )
          )
          .sort();

        const midIndex = ~~distances.length / 2;

        return {
          index: i,
          median:
            distances.length % 2
              ? distances[midIndex]
              : (distances[midIndex - 1] + distances[midIndex + 1]) / 2,
        };
      })
      .sort((a, b) => b.median - a.median)
      .shift().index;

    yOff = 0;
    for (let y = 0; y < rows; y++) {
      xOff = 0;
      for (let x = 0; x < cols; x++) {
        let index = x + y * cols;
        let angle = p.noise(xOff, yOff, zOff) * p.TWO_PI * 4;
        let v = p5.Vector.fromAngle(angle);
        v.setMag(0.05);
        flowField[index] = v;
        xOff += INC;
      }
      yOff += INC;
    }
    for (let i = 0; i < particles.length; i++) {
      particles[i].follow(flowField);
      particles[i].update();
      particles[i].edges();
      particles[i].show();
    }

    p.noStroke();
    p.fill(hue.value(), 0.8, 0.9, 1 / FRAMES);
    p.blendMode(p.SOFT_LIGHT);
    p.rect(0, 0, p.width, p.height);

    p.frameCount % 100 === 0 && console.info(`${p.ceil(progress * 100)}%`);
    if (RENDER && p.frameCount <= FRAMES) {
      p.save(
        `${String(p.frameCount).padStart(String(FRAMES).length, "0")}.png`
      );
    }

    if (p.frameCount === FRAMES) {
      p.noLoop();
    }
  };

  p.windowResized = function () {
    !RENDER && p.resizeCanvas(p.windowWidth, p.windowHeight);
  };
};

new p5(sketch, "sketch");
document.getElementById(
  "description"
).innerHTML = `<a href="https://genuary2021.github.io/">#genuary2021</a>: Make something human`;
