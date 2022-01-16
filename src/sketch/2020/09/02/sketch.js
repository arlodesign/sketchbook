import p5 from "p5";
import attachCreateLoop from "p5.createloop/src/p5.createLoop";
window.p5 = p5;
attachCreateLoop();
import polarToCartesian from "util/polarToCartesian";
import trump from "assets/trump.png";
import font from "assets/Cousine-BoldItalic.otf";

const sketch = function (p) {
  const draftScale = (x) => (RENDER ? x : p.floor(x / 3));

  const RENDER = p.getURLParams().render;
  const RENDER_SIZE = draftScale(540);
  const DURATION = 20;
  const RATE = RENDER ? 60 : 30;

  const AWFUL_SHIT = p.shuffle([
    "IT IS WHAT\nIT IS",
    "I DON’T TAKE RESPONSIBILITY AT ALL",
    "I LIKE PEOPLE WHO WEREN’T CAPTURED",
    "THERE WAS BLOOD COMING OUT OF HER WHEREVER",
    "GRAB ’EM\nBY THE PUSSY",
    "VERY FINE PEOPLE ON BOTH SIDES",
    "A VERY\nSTABLE\nGENIUS",
    "NOBODY KNEW HEALTH CARE COULD BE SO COMPLICATED",
    "COVFEFE",
    "EVERYBODY KNOWS THERE WAS NO COLLUSION",
    "I HAVE TREMENDOUS RESPECT FOR WOMEN",
    "I NEED LOYALTY.\nI EXPECT LOYALTY.",
    "GET THAT SON OF A BITCH OFF THE FIELD RIGHT NOW",
    "ALL THESE PEOPLE FROM SHITHOLE COUNTRIES",
    "I THOUGHT\nIT WOULD\nBE EASIER",
    "I’M THE LEAST RACIST PERSON",
    "MAKE AMERICA GREAT AGAIN",
    "NO\nSMOCKING\nGUN",
  ]);

  let img;
  let cnvs;
  let myFont;

  p.preload = function () {
    img = p.loadImage(trump);
    myFont = p.loadFont(font);
  };

  p.setup = function () {
    p.pixelDensity(1);
    p.frameRate(RATE);
    p.createCanvas(RENDER_SIZE, RENDER_SIZE);
    p.background(255);
    p.noSmooth();
    p.createLoop(DURATION, {
      noiseRadius: 1.3,
    });

    cnvs = p.createGraphics(RENDER_SIZE, RENDER_SIZE);
    cnvs.image(img, 0, 0, RENDER_SIZE, RENDER_SIZE);
    cnvs.loadPixels();
  };

  p.draw = function () {
    const { progress, theta, noise, noise2D } = p.animLoop;

    p.background(255);
    p.loadPixels();

    for (let y = 0; y < p.height; y++) {
      for (let x = 0; x < p.width; x++) {
        const index = (x + y * p.width) * 4;
        const a = p.map(
          noise2D(y / draftScale(4000), x / draftScale(100)),
          -1,
          1,
          0,
          p.PI
        );
        const d = p.abs(noise2D(x / 80, y / 80) * draftScale(200));
        let cnvsCoord = polarToCartesian(x, y, a, d);
        cnvsCoord.x = p.floor(p.constrain(cnvsCoord.x, 0, cnvs.width - 1));
        cnvsCoord.y = p.floor(p.constrain(cnvsCoord.y, 0, cnvs.height - 1));
        const cnvsIndex = (cnvsCoord.x + cnvsCoord.y * cnvs.width) * 4;

        let c = p.color(0);

        p.pixels[index] = cnvs.pixels[cnvsIndex];
        p.pixels[index + 1] = cnvs.pixels[cnvsIndex + 1];
        p.pixels[index + 2] = cnvs.pixels[cnvsIndex + 2];
        p.pixels[index + 3] = cnvs.pixels[cnvsIndex + 3];
      }
    }
    p.updatePixels();

    p.push();
    p.blendMode(p.BURN);
    p.image(img, 0, 0, RENDER_SIZE, RENDER_SIZE);
    p.pop();

    p.push();
    p.blendMode(p.HARD_LIGHT);
    p.fill("orange");
    p.textFont(myFont, draftScale(60));
    p.textLeading(draftScale(60));
    p.textAlign(p.LEFT, p.TOP);
    p.text(
      AWFUL_SHIT[
        p.floor(
          p.constrain(
            p.map(noise(), -1, 1, 0, AWFUL_SHIT.length),
            0,
            AWFUL_SHIT.length - 1
          )
        )
      ],
      draftScale(15),
      draftScale(150),
      p.width,
      p.height
    );
    p.pop();

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
