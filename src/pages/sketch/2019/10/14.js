import React from "react";
import SketchLayout from "~components/sketch-layout";
import Link from "~components/link";

const sketch = function(p) {
  const HUE = p.random(10);
  let weaves = [];
  let w;
  let h;

  p.setup = function() {
    p.createCanvas(660, 840);
    p.noFill();
    p.colorMode(p.HSL, 10);

    w = (p.width - 60) / 3;
    h = (p.height - 60) / 12;

    weaves.push(() => {
      let inset = false;
      for (let y = 0; y < h; y++) {
        if (y % 2) {
          let draw = true;
          for (let x = inset ? 2 : 0; x < w; x += 3) {
            if (draw) {
              p.line(x, y, x + 3, y);
            }
            draw = !draw;
          }
          inset = !inset;
        }
      }
    });

    weaves.push(() => {
      let inset = false;
      for (let y = 0; y < h; y++) {
        let draw = true;
        for (let x = inset ? 3 : 0; x < w; x += 3) {
          if (draw) {
            p.line(x, y, x + 3, y);
          }
          draw = !draw;
        }
        inset = !inset;
      }
    });

    weaves.push(() => {
      let inset = false;
      for (let y = 0; y < h; y++) {
        if (y % 2) {
          let draw = true;
          for (let x = inset ? 4 : 2; x < w; x += 5) {
            if (draw) {
              p.line(x, y, x + 5, y);
            }
            draw = !draw;
          }
          inset = !inset;
        }
      }
    });

    weaves.push(() => {
      let inset = false;
      for (let y = 0; y < h; y++) {
        let draw = true;
        for (let x = inset ? 4 : 3; x < w; x += y % 2 ? 3 : 4) {
          if (draw) {
            p.line(x, y, x + (y % 2 ? 3 : 4), y);
          }
          draw = !draw;
        }
        inset = !inset;
      }
    });

    weaves.push(() => {
      let inset = false;
      for (let y = 0; y < h; y++) {
        if (y % 2) {
          let draw = true;
          for (let x = 0; x < w; x += 3) {
            if (draw) {
              p.line(x, y, x + 3, y);
            }
            draw = !draw;
          }
          inset = !inset;
        }
      }
    });

    weaves.push(() => {
      let inset = false;
      for (let y = 0; y < h; y++) {
        if (y % 2) {
          let draw = true;
          for (let x = inset ? 2 : 0; x < w; x += 3) {
            if (draw) {
              p.line(x, y, x + 3, y);
            }
            draw = !draw;
          }
          inset = !inset;
        }
      }
      for (let y = 0; y < h; y++) {
        if (y % 2) {
          let draw = true;
          for (let x = 0; x < w; x += 3) {
            if (draw) {
              p.line(x, y, x + 3, y);
            }
            draw = !draw;
          }
          inset = !inset;
        }
      }
    });

    weaves.push(() => {
      for (let y = 0; y < h; y += 5) {
        for (let x = 0; x < w; x += 6) {
          p.bezier(x, y, x + 6, y, x, y + 3, x + 6, y + 3);
          p.bezier(x + 2, y + 3, x + 4, y + 3, x + 2, y, x + 4, y);
        }
      }
    });

    weaves.push(() => {
      for (let y = 0; y < h; y += 4) {
        for (let x = 0; x < w; x += 6) {
          p.line(x, y, x + 3, y);
        }
      }
    });
  };

  p.draw = function() {
    p.background(HUE, 2, 9);

    p.stroke(HUE, 2, 8);
    for (let y = 0; y < p.height; y += 3) {
      p.line(0, y, p.width, y);
    }
    p.stroke(HUE, 3, 9.5, 8);
    for (let x = 0; x < p.width; x += 2) {
      p.line(x, 0, x, p.height);
    }

    for (let x = 30; x < p.width - 30; x += w) {
      for (let y = 30; y < p.height - 30; y += h) {
        p.stroke(HUE, p.random([2, 4, 6]), p.random([3, 5, 7]), 9);
        p.push();
        p.translate(x, y);
        p.random(weaves)();
        p.pop();
      }
    }

    p.noLoop();
  };
};

export default ({ location }) => (
  <SketchLayout
    sketch={sketch}
    path={location.pathname}
    description={
      <>
        Inspired by{" "}
        <Link href="https://albersfoundation.org/art/anni-albers/weavings/#slide13">
          Anni Albers
        </Link>
        .
      </>
    }
  />
);
