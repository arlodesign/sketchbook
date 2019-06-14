import React from "react";
import SketchLayout from "~components/sketch-layout";
import polarToCartesian from "~lib/polarToCartesian";

const sketch = function(p) {
  const STEPS = 5;

  let points = [];

  p.setup = function() {
    p.createCanvas(660, 840);
    p.background(0);
    p.stroke(255);
    p.strokeWeight(5);
    p.noFill();

    const initPoints = Array.from(Array(4), () => ({
      a: p.random(p.TWO_PI),
      d: p.random(p.width / 4, p.width * 0.45),
    }));

    for (let angle = 0; angle < p.TWO_PI; angle += p.TWO_PI / STEPS) {
      points = points.concat(
        initPoints.map(({ a, d }) => ({ a: a + angle, d }))
      );
    }
  };

  p.draw = function() {
    p.curve(
      ...polarToCartesian(
        p.width / 2,
        p.height / 2,
        points[p.frameCount].a,
        points[p.frameCount].d,
        true
      ),
      ...polarToCartesian(
        p.width / 2,
        p.height / 2,
        points[p.frameCount + 1].a,
        points[p.frameCount + 1].d,
        true
      ),
      ...polarToCartesian(
        p.width / 2,
        p.height / 2,
        points[p.frameCount + 2].a,
        points[p.frameCount + 2].d,
        true
      ),
      ...polarToCartesian(
        p.width / 2,
        p.height / 2,
        points[p.frameCount + 3].a,
        points[p.frameCount + 3].d,
        true
      )
    );
    if (p.frameCount === points.length - 4) {
      p.curve(
        ...polarToCartesian(
          p.width / 2,
          p.height / 2,
          points[p.frameCount + 1].a,
          points[p.frameCount + 1].d,
          true
        ),
        ...polarToCartesian(
          p.width / 2,
          p.height / 2,
          points[p.frameCount + 2].a,
          points[p.frameCount + 2].d,
          true
        ),
        ...polarToCartesian(
          p.width / 2,
          p.height / 2,
          points[p.frameCount + 3].a,
          points[p.frameCount + 3].d,
          true
        ),
        ...polarToCartesian(
          p.width / 2,
          p.height / 2,
          points[0].a,
          points[0].d,
          true
        )
      );
      p.curve(
        ...polarToCartesian(
          p.width / 2,
          p.height / 2,
          points[p.frameCount + 2].a,
          points[p.frameCount + 2].d,
          true
        ),
        ...polarToCartesian(
          p.width / 2,
          p.height / 2,
          points[p.frameCount + 3].a,
          points[p.frameCount + 3].d,
          true
        ),
        ...polarToCartesian(
          p.width / 2,
          p.height / 2,
          points[0].a,
          points[0].d,
          true
        ),
        ...polarToCartesian(
          p.width / 2,
          p.height / 2,
          points[1].a,
          points[1].d,
          true
        )
      );
      p.curve(
        ...polarToCartesian(
          p.width / 2,
          p.height / 2,
          points[p.frameCount + 3].a,
          points[p.frameCount + 3].d,
          true
        ),
        ...polarToCartesian(
          p.width / 2,
          p.height / 2,
          points[0].a,
          points[0].d,
          true
        ),
        ...polarToCartesian(
          p.width / 2,
          p.height / 2,
          points[1].a,
          points[1].d,
          true
        ),
        ...polarToCartesian(
          p.width / 2,
          p.height / 2,
          points[2].a,
          points[2].d,
          true
        )
      );
      p.curve(
        ...polarToCartesian(
          p.width / 2,
          p.height / 2,
          points[0].a,
          points[0].d,
          true
        ),
        ...polarToCartesian(
          p.width / 2,
          p.height / 2,
          points[1].a,
          points[1].d,
          true
        ),
        ...polarToCartesian(
          p.width / 2,
          p.height / 2,
          points[2].a,
          points[2].d,
          true
        ),
        ...polarToCartesian(
          p.width / 2,
          p.height / 2,
          points[3].a,
          points[3].d,
          true
        )
      );
      p.noLoop();
    }
  };
};

export default ({ location }) => (
  <SketchLayout
    sketch={sketch}
    path={location.pathname}
    description="Reload page for a different variation."
  />
);
