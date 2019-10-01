import React from "react";
import SketchLayout from "~components/sketch-layout";
import { Coordinate, CoordinateType } from "coordinate-systems";
import "p5.createloop";

const RENDER = process.env.DEV && false;

const sketch = function(p) {
  const HUE = p.random(0.9);
  let radius;

  p.setup = function() {
    !RENDER && p.pixelDensity(1);
    !RENDER && p.frameRate(30);
    p.createCanvas(660, 840, p.WEBGL);
    p.createLoop(60, {
      gif: RENDER ? { render: false, open: true } : false,
      noiseRadius: 0.1,
    });
    p.colorMode(p.HSB, 1);

    radius = p.width / 5;
  };

  p.draw = function() {
    const { theta } = p.animLoop;
    p.background(HUE, 0.5, 0.5);
    p.stroke(HUE, 0.8, 0.2);
    p.strokeWeight(2);
    p.noFill();

    const cameraPosition = Coordinate.spherical([
      p.width / 2,
      p.animLoop.theta,
      p.sin(p.animLoop.theta) * (p.PI / 3),
    ]);
    p.camera(...cameraPosition.cartesian(), 0, 0, 0, 0, 1, 0);

    const segments = 60;
    const startingPoint = Coordinate.spherical([radius, 0, 0]);
    let th = 0;
    p.beginShape();
    p.curveVertex(...startingPoint.cartesian());
    for (let phi = 0; phi <= p.PI; phi += p.PI / segments) {
      const rThetaPhi = Coordinate.spherical([radius, th, phi]);
      p.curveVertex(...rThetaPhi.cartesian());
      th += p.map(p.cos(theta), -1, 1, 0, p.PI / 3);
    }
    p.endShape(p.CLOSE);

    p.noStroke();
    p.fill(HUE, 0.5, 0.8);
    p.pointLight(0, 0, 1, 0, 0, -p.width * 3);
    p.pointLight(0, 0, 0.5, 0, 0, p.width * 3);

    p.specularMaterial(HUE, 0.5, 0.8);
    p.sphere(p.width / 6, !RENDER ? 24 : 48, !RENDER ? 16 : 32);
  };
};

export default ({ location }) => (
  <SketchLayout sketch={sketch} path={location.pathname} description="" />
);
