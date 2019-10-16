import React from "react";
import SketchLayout from "~components/sketch-layout";

const sketch = function(p) {
  const HUE = p.random(10);

  let patterns = [];
  let w;
  let h;

  p.setup = function() {
    p.createCanvas(660, 840);
    p.colorMode(p.HSL, 10);
    p.noSmooth();

    w = p.width / 12;
    h = p.height / 6;

    patterns.push(() => {
      p.fill(HUE, 2, 9.5);
      p.noStroke();
      p.rect(0, 0, w, h);

      p.noFill();
      p.stroke(HUE, 2, 9);
      for (let x = 0; x < w; x += 2) {
        p.line(x, 0, x, h);
      }
      for (let y = 0; y < h; y += 2) {
        p.line(0, y, w, y);
      }
    });

    patterns.push(() => {
      p.fill(HUE, 4, 8);
      p.noStroke();
      p.rect(0, 0, w, h);

      p.noFill();
      p.stroke(HUE, 4, 7);
      for (let x = 0; x < w; x += 2) {
        p.line(x, 0, x, h);
      }
      for (let y = 0; y < h; y += 2) {
        p.line(0, y, w, y);
      }
    });

    patterns.push(() => {
      const blackFirst = true;
      const s = 6;
      const l = p.random([6, 4]);
      for (let y = blackFirst ? 0 : h / 6; y < h; y += h / 3) {
        p.fill(0);
        p.noStroke();
        p.rect(0, y, w, y + h / 6);
      }
      for (let y = blackFirst ? h / 6 : 0; y < h; y += h / 3) {
        p.fill(0);
        p.noStroke();
        p.rect(0, y, w, y + h / 6);
        for (let yy = y; yy < y + h / 6; yy++) {
          p.noFill();
          p.stroke(HUE, s, l);
          for (let x = yy % 2; x < w; x += 2) {
            p.point(x, yy);
          }
        }
      }
    });

    patterns.push(() => {
      const blackFirst = false;
      const s = 6;
      const l = p.random([6, 4]);
      for (let y = blackFirst ? 0 : h / 6; y < h; y += h / 3) {
        p.fill(0);
        p.noStroke();
        p.rect(0, y, w, y + h / 6);
      }
      for (let y = blackFirst ? h / 6 : 0; y < h; y += h / 3) {
        p.fill(0);
        p.noStroke();
        p.rect(0, y, w, y + h / 6);
        for (let yy = y; yy < y + h / 6; yy++) {
          p.noFill();
          p.stroke(HUE, s, l);
          for (let x = yy % 2; x < w; x += 2) {
            p.point(x, yy);
          }
        }
      }
    });

    patterns.push(() => {
      const blackFirst = p.random([0, 1]);
      const s = 2;
      const l = p.random([6, 4]);
      for (let y = blackFirst ? 0 : h / 6; y < h; y += h / 3) {
        p.fill(0);
        p.noStroke();
        p.rect(0, y, w, y + h / 6);
      }
      for (let y = blackFirst ? h / 6 : 0; y < h; y += h / 3) {
        p.fill(0);
        p.noStroke();
        p.rect(0, y, w, y + h / 6);
        for (let yy = y; yy < y + h / 6; yy++) {
          p.noFill();
          p.stroke(HUE, s, l);
          for (let x = yy % 2; x < w; x += 2) {
            p.point(x, yy);
          }
        }
      }
    });

    patterns.push(() => {
      p.fill(HUE, 4, 4);
      p.noStroke();
      p.rect(0, 0, w, h);

      for (let y = 0; y < h; y++) {
        p.noFill();
        p.stroke(HUE, 9, 9);
        for (let x = y % 2; x < w; x += 2) {
          p.point(x, y);
        }
      }
    });
  };

  p.draw = function() {
    for (let x = 0; x < p.width; x += w) {
      for (let y = 0; y < p.height; y += h) {
        console.log(x, y);
        p.push();
        p.translate(x, y);
        p.random(patterns)();
        p.pop();
      }
    }
    p.noLoop();
  };
};

export default ({ location }) => (
  <SketchLayout sketch={sketch} path={location.pathname} description="" />
);
