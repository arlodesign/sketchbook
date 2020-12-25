#pragma glslify: export(cartesianToPolar)

vec2 cartesianToPolar(vec2 st) {
  float r = sqrt(st.x * st.x + st.y * st.y);
  float d = atan(st.y, st.x);
  return vec2(r, d);
}