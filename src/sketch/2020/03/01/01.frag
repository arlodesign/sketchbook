#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform float u_theta;
uniform float u_noise;

void main() {
  vec2 st = gl_FragCoord.xy/u_resolution;

  st *= 15.0 * u_noise;

  float r = abs(sin(u_theta + st.x));
  float g = abs(sin(u_theta * 2.0));
  float b = abs(sin(u_theta + st.y));

  vec4 color = vec4(r, g, b, 1.0) * abs(cos(((u_theta * 2.0) + (st.x + st.y)) ));
  gl_FragColor = color;
}