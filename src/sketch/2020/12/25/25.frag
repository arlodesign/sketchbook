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
  st -= 1.0;

  float loopedProgress = sin(2.0 * PI * u_progress - PI / 2.0) / 2.0 + 0.5;
  vec2 polar = cartesianToPolar(st);
  polar.x += u_progress * TWO_PI * 10.0;

  vec2 newSt = polarToCartesian(
    st.x,
    st.y,
    polar.x - (TWO_PI * u_progress),
    polar.y
  );
  float noiseVal = snoise4(vec4(
    st.y * 3.0,
    sin(polar.x),
    sin(u_progress * TWO_PI),
    cos(u_progress * TWO_PI)
  ));
  float grainVal = snoise4(vec4(
    newSt * 100.0,
    sin(u_progress * TWO_PI),
    cos(u_progress * TWO_PI)
  ));
  vec3 clr = hsl2rgb(vec3(
    u_hue,
    0.5,
    map(ease(abs(noiseVal)), 0.0, 1.0, st.x, st.y)
  ));

  gl_FragColor = vec4(
    grainVal < 0.0 ? clr : hsl2rgb(vec3(0.7, 0.1, 0.1)),
    1.0
  );
}