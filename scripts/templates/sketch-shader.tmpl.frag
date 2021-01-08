precision mediump float;

varying vec2 vTexCoord;

#define TWO_PI 6.28318530
#define PI 3.14159265358

uniform vec2 u_resolution;
uniform float u_progress;
uniform float u_hue;

#pragma glslify: hsl2rgb = require(glsl-hsl2rgb);
#pragma glslify: snoise4 = require(glsl-noise/simplex/4d);
#pragma glslify: snoise2 = require(glsl-noise/simplex/2d);
#pragma glslify: ease = require(glsl-easings/cubic-in-out);
#pragma glslify: polarToCartesian = require(./polarToCartesian.glsl);
#pragma glslify: cartesianToPolar = require(./cartesianToPolar.glsl);
#pragma glslify: map = require(./map.glsl);

void main() {
  vec2 st = gl_FragCoord.xy / u_resolution.xy;

  gl_FragColor = vec4(
    u_progress,
    u_progress,
    u_progress,
    1.0
  );
}