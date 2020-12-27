#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform float u_theta;
uniform float u_noise;
uniform float u_noise_x;
uniform float u_noise_y;
uniform float u_progress;

float random(in vec2 st, float val) {
  return fract(sin(dot(st.xy * u_noise, vec2(u_noise_x, u_noise_y))) * val);
}

float getId(in vec2 _st, in float size) {
  _st *= size;
  float totalIds = size * size;
  return floor(_st.x + floor(_st.y) * size) - totalIds / 2.0;
}

float colorSin(in float id) {
  return (sin((id) * u_noise) + 1.0) / 2.0;
}

float colorCos(in float id) {
  return (cos((id) * u_noise) + 1.0) / 2.0;
}

void main() {
  vec2 st = gl_FragCoord.xy / u_resolution.xy;
  
  st += 0.5;
  
  float gId = getId(st, u_progress);
  float bId = getId(st, u_noise * u_progress);
  
  float r = st.y - 0.5;
  float g = colorCos(gId) / 2.0;
  float b = colorSin(bId);
  
  vec2 pos = vec2(st * 2.0);
  vec3 color = vec3(r, g, b);
  
  color.rgb *= length(abs(st)) * (smoothstep(0.4, 0.6, random(pos, 2.0)) + 0.5);
  
  gl_FragColor = vec4(color, 1.0);
  
}