import p5 from "p5";
import attachCreateLoop from "p5.createloop/src/p5.createLoop";
window.p5 = p5;
attachCreateLoop();

const sketch = function (p) {
  const RENDER = p.getURLParams().render === "true";
  const FRAMES = 1200;
  const S = 120;

  p.setup = function () {
    p.frameRate(RENDER ? 5 : 60);
    p.createCanvas(S, S);
  };

  /*
function setup(){createCanvas(120,120)}function draw(){o=sin(6*PI*(frameCount%1200/1200)-PI/2)/2+.5;colorMode(RGB,1);for(s=-60;s<60;s++)for(t=-60;t<60;t++)stroke(abs(cos((s+o/2)*t))*o,abs(sin(sqrt(s*s*t*t)*(o/10))/2),o),point(s+60,t+60)}
*/

  p.draw = function () {
    const progress =
      p.sin(2 * p.PI * ((p.frameCount % FRAMES) / FRAMES) - p.PI / 2) / 2 + 0.5;
    p.colorMode(p.RGB, 1);
    for (let x = -S / 2; x < S / 2; x++) {
      for (let y = -S / 2; y < S / 2; y++) {
        p.stroke(
          p.abs(p.cos((x + progress / 2) * y)) * progress,
          p.abs(p.sin(p.sqrt(x * x * y * y) * (progress / 10)) / 2),
          progress
        );
        p.point(x + S / 2, y + S / 2);
      }
    }

    if (RENDER && p.frameCount <= FRAMES) {
      p.frameCount % 100 === 0 && console.info(`${p.ceil(progress * 100)}%`);
      p.save(
        `${String(p.frameCount).padStart(String(FRAMES).length, "0")}.png`
      );
    }
  };
};

new p5(sketch, "sketch");
document.getElementById(
  "description"
).innerHTML = `<a href="https://genuary2021.github.io/">#genuary2021</a>: Code Golf`;
