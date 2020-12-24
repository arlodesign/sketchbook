#pragma glslify: export(polarToCartesian)

vec2 polarToCartesian(float x, float y, float a, float d) {
  return vec2(x + cos(a) * d, y + sin(y) * d);
}