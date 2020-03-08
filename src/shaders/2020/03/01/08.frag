#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform float u_progress;
uniform float u_noise_r;
uniform float u_noise_g;
uniform float u_noise_b;
uniform float u_theta;

float circle(in vec2 _st, in float _radius) {
  vec2 l = _st - vec2(0.5);
  return 1.0 - smoothstep(_radius - (_radius * 0.01),
  _radius + (_radius * 0.01),
  dot(l, l) * 4.0);
}

vec2 focus(float scalar) {
  return vec2(0.5 + cos(u_theta * scalar) * u_progress, 0.5 + sin(u_theta * scalar) * u_progress);
}

void main() {
  vec2 st = gl_FragCoord.xy / u_resolution.xy;
  
  float r_scalar = 35.0;
  vec2 r_st = st * r_scalar;
  float r_col = floor(r_st.x) / r_scalar;
  float r_row = floor(r_st.y) / r_scalar;
  float r_size = distance(vec2(r_col, r_row), focus(floor(r_scalar / 10.0)));
  r_st = fract(r_st);
  
  float g_scalar = 20.0;
  vec2 g_st = st * g_scalar;
  float g_col = floor(g_st.x) / g_scalar;
  float g_row = floor(g_st.y) / g_scalar;
  float g_size = distance(vec2(r_col, r_row), focus(floor(g_scalar / 10.0)));
  g_st = fract(g_st);
  
  float b_scalar = 7.0;
  vec2 b_st = st * b_scalar;
  float b_col = floor(b_st.x) / b_scalar;
  float b_row = floor(b_st.y) / b_scalar;
  float b_size = distance(vec2(r_col, r_row), focus(floor(b_scalar / 10.0)));
  b_st = fract(b_st);
  
  vec3 r = vec3(circle(r_st, r_size)) * mix(0.7, 0.1, u_noise_r);
  vec3 g = vec3(circle(g_st, g_size)) * mix(0.7, 0.1, u_noise_g);
  vec3 b = vec3(circle(b_st, b_size)) * mix(0.7, 0.1, u_noise_b);
  
  vec3 color = vec3(r.r, g.g, b.b);
  
  gl_FragColor = vec4(color, 1.0);
}
