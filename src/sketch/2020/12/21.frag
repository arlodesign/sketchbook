precision mediump float;

varying vec2 vTexCoord;

#define TWO_PI 6.28318530
#define PI 3.14159265358

uniform vec2 u_resolution;
uniform float u_progress;

#pragma glslify: hsl2rgb = require(glsl-hsl2rgb);
#pragma glslify: snoise4 = require(glsl-noise/simplex/4d);
#pragma glslify: snoise2 = require(glsl-noise/simplex/2d);
#pragma glslify: ease = require(glsl-easings/sine-in);

void main() {
  vec2 st = gl_FragCoord.xy / u_resolution.xy;
  float noiseVal = ease(
    abs(
      snoise4(
        vec4(
          st.x * 2.5,
          st.y * 2.5,
          sin(u_progress * TWO_PI),
          cos(u_progress * TWO_PI)
        )
      )
    )
  );
  vec3 clr = hsl2rgb(vec3(
    u_progress,
    0.5,
    noiseVal
  ));
  
  gl_FragColor = vec4(
    clr,
    1.0
  );
}