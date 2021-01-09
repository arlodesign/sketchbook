precision mediump float;

varying vec2 vTexCoord;

#define TWO_PI 6.28318530
#define PI 3.14159265358

uniform vec2 u_resolution;
uniform float u_progress;
uniform float u_intensity;

#pragma glslify: hsl2rgb = require(glsl-hsl2rgb);
#pragma glslify: snoise4 = require(glsl-noise/simplex/4d);
#pragma glslify: snoise2 = require(glsl-noise/simplex/2d);
#pragma glslify: ease = require(glsl-easings/cubic-in-out);
#pragma glslify: polarToCartesian = require(./polarToCartesian.glsl);
#pragma glslify: map = require(./map.glsl);

float noise(float x, float loop) {
  // return ease((abs( sin( x / 0.088 / (1.0 - u_progress) ) )) * (fract( x / u_progress ) * 1.278) * (sin( x )));
  float noiseVal = map(snoise4(
    vec4(
      3,
      4,
      sin(u_progress * TWO_PI),
      cos(u_progress * TWO_PI)
    )
  ), -1.0, 1.0, 1.0, 5.0);
  return (sin(x / (PI / u_intensity * noiseVal)));
}

void main() {
  vec2 st = gl_FragCoord.xy / u_resolution.xy;
  float loop = sin(2.0 * PI * u_progress - PI / 2.0) / 2.0 + 0.5;

  st -= 0.5;

  vec2 focusA = vec2(
    snoise4(
      vec4(
        0.5,
        0.7,
        sin(u_progress * TWO_PI),
        cos(u_progress * TWO_PI)
      )
    ),
    snoise4(
      vec4(
        7.0,
        5.0,
        sin(u_progress * TWO_PI),
        cos(u_progress * TWO_PI)
      )
    )
  );
  vec2 focusB = vec2(0.0);
  float distA = ease(distance(focusA, st));
  float distB = ease(distance(focusB, st));

  float valA = noise(distA, loop);
  float valB = noise(distB, loop);

  gl_FragColor = vec4(
    hsl2rgb(st.x + 0.5, 1.0, ease(valA * valB)),
    1.0
  );
}