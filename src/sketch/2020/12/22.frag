precision mediump float;

varying vec2 vTexCoord;

#define TWO_PI 6.28318530
#define PI 3.14159265358

uniform vec2 u_resolution;
uniform float u_progress;

#pragma glslify: hsl2rgb = require(glsl-hsl2rgb);
#pragma glslify: snoise4 = require(glsl-noise/simplex/4d);
#pragma glslify: snoise2 = require(glsl-noise/simplex/2d);
#pragma glslify: ease = require(glsl-easings/quintic-in-out);
#pragma glslify: polarToCartesian = require(../../../util/polarToCartesian.glsl);

void main() {
  vec2 st = gl_FragCoord.xy / u_resolution.xy;
  float noiseVal = snoise4(
    vec4(
      (st.x + 1.0) * 0.5,
      (st.y + 1.0) * 0.5,
      sin(u_progress * TWO_PI),
      cos(u_progress * TWO_PI)
    )
  );
  float loopedProgress = sin(2.0 * PI * u_progress - PI / 2.0) / 2.0 + 0.5;
  float dist = distance(
    polarToCartesian(0.5, 0.5, u_progress * TWO_PI, snoise2(vec2(0.6, loopedProgress))),
    vec2(st.x, st.y)
  );
  vec3 clr = hsl2rgb(vec3(
    abs(fract(st.x - u_progress * 10.0)),
    1.0,
    ease(abs(noiseVal) * dist)
  ));
  
  gl_FragColor = vec4(
    clr,
    1.0
  );
}