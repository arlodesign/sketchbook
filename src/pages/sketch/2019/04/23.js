import React from "react";
import SketchLayout from "~components/sketch-layout";
import polarToCartesian, {
  polarToCartesianEllipse,
} from "~lib/polarToCartesian";
import Link from "~components/link";

const sketch = function(p) {
  const SCALAR = p.floor(p.random(3, 8));
  const LINES = 6;

  let a = 0;

  p.setup = function() {
    p.createCanvas(660, 840);
    p.background(0);
    p.stroke(255, 255 / LINES);
    p.strokeWeight(0.5);
  };

  p.draw = function() {
    for (let i = 0; i < LINES; i++) {
      let { x, y } = polarToCartesianEllipse(
        p.width / 3,
        p.height / 3,
        a + p.TWO_PI * (i / LINES),
        p.width / 5,
        p.height / 5
      );

      p.push();
      p.translate(x, y);

      const lx = x + (x / SCALAR) * p.cos(SCALAR * (SCALAR / 2) * a);
      const ly = y + (x / SCALAR) * p.sin(SCALAR * a);

      for (let l = 0; l < 1; l += p.noise(lx, ly) / 10 || 0.01) {
        l > 0 && p.random() > l && p.point(p.lerp(0, lx, l), p.lerp(0, ly, l));
      }

      p.pop();
    }

    a += p.TWO_PI / 10000;
    a > p.TWO_PI && p.noLoop();
  };
};

export default ({ location }) => (
  <SketchLayout
    sketch={sketch}
    path={location.pathname}
    description={
      <>
        <p>Be patient. This one takes a while.</p>
        <p>
          Props to{" "}
          <Link href="https://www.instagram.com/p/Bwa3dHIBtBb/">
            iso.hedron
          </Link>{" "}
          for posting their code. I started there and tweaked.
        </p>
      </>
    }
  />
);
