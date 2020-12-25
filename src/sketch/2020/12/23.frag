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
#pragma glslify: cartesianToPolar = require(../../../util/cartesianToPolar.glsl);

void main() {
  vec2 st = gl_FragCoord.xy / u_resolution.xy;
  st -= 1.0;

  float loopedProgress = sin(2.0 * PI * u_progress - PI / 2.0) / 2.0 + 0.5;
  vec2 polar = cartesianToPolar(st);
  vec2 newSt = polarToCartesian(
    st.x,
    st.y,
    polar.x + snoise4(vec4(
        st * loopedProgress * 2.0,
        sin(u_progress * TWO_PI),
        cos(u_progress * TWO_PI)
      )) + u_progress * TWO_PI,
    polar.y
  );

  vec3 clr = hsl2rgb(vec3(
    u_progress,
    newSt + 1.0
  ));

  gl_FragColor = vec4(
    clr,
    1.0
  );
}