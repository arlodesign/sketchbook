#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform float u_noise_x;
uniform float u_noise_y;

float random(in vec2 st, float val) {
  return fract(sin(dot(st.xy, vec2(u_noise_x, u_noise_y))) * val);
}

float noise(in vec2 st, float val) {
  vec2 i = floor(st);
  vec2 f = fract(st);

  float a = random(i, val);
  float b = random(i + vec2(1.0, 0.0), val);
  float c = random(i + vec2(0.0, 1.0), val);
  float d = random(i + vec2(1.0, 1.0), val);

  vec2 u = f * f * (3.0 - 2.0 * f);

  return mix(a, b, u.x) + (c - a) * u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
}

void main() {
  vec2 st = gl_FragCoord.xy / u_resolution.xy;

  vec2 pos = vec2(st * 2.0);

  float r = length(abs(st) - 0.2) * noise(pos, 2.0);
  float g = length(abs(st) - 0.4) * noise(pos, 4.0);
  float b = length(abs(st) - 0.6) * noise(pos, 6.0);

  gl_FragColor = vec4(fract(r * 10.0), fract(g * 20.0), fract(b * 30.0), 1.0);
}
