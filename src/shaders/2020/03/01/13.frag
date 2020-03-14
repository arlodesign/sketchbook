#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform float u_theta;
uniform float u_noise;
uniform float u_progress;

float color(in vec2 _st, in float size) {
  _st *= size;
  float totalIds = size * size;
  float id = floor(_st.x + floor(_st.y) * size) - totalIds / 2.0;
  float o = (sin((id) * u_noise) + 1.0) / 2.0;
  float l = 0.0;
  return l + o;
}

void main() {
  vec2 st = gl_FragCoord.xy / u_resolution.xy;
  
  float r = color(st, 11.0 * u_progress);
  float g = color(st, 10.0 * u_progress);
  float b = color(st, (10.0 + u_noise) * u_progress);
  
  gl_FragColor = vec4(r, g, b, 1.0);
  
}