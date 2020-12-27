precision mediump float;

varying vec2 vTexCoord;

#define TWO_PI 6.28318530
#define PI 3.14159265358979323846

uniform vec2 u_resolution;
uniform float u_progress;
uniform float u_lines;

//	Simplex 4D Noise
//	by Ian McEwan, Ashima Arts
//
vec4 permute(vec4 x) {
  return mod(((x * 34.0) + 1.0) * x, 289.0);
}
float permute(float x) {
  return floor(mod(((x * 34.0) + 1.0) * x, 289.0));
}
vec4 taylorInvSqrt(vec4 r) {
  return 1.79284291400159 - 0.85373472095314 * r;
}
float taylorInvSqrt(float r) {
  return 1.79284291400159 - 0.85373472095314 * r;
}

vec4 grad4(float j, vec4 ip) {
  const vec4 ones = vec4(1.0, 1.0, 1.0, - 1.0);
  vec4 p, s;
  
  p.xyz = floor(fract(vec3(j) * ip.xyz) * 7.0) * ip.z - 1.0;
  p.w = 1.5 - dot(abs(p.xyz), ones.xyz);
  s = vec4(lessThan(p, vec4(0.0)));
  p.xyz = p.xyz + (s.xyz * 2.0 - 1.0) * s.www;
  
  return p;
}

float snoise(vec4 v) {
  const vec2 C = vec2(0.138196601125010504, 0.309016994374947451);
  
  vec4 i = floor(v + dot(v, C.yyyy));
  vec4 x0 = v - i + dot(i, C.xxxx);
  
  vec4 i0;
  
  vec3 isX = step(x0.yzw, x0.xxx);
  vec3 isYZ = step(x0.zww, x0.yyz);
  
  i0.x = isX.x + isX.y + isX.z;
  i0.yzw = 1.0 - isX;
  
  i0.y += isYZ.x + isYZ.y;
  i0.zw += 1.0 - isYZ.xy;
  
  i0.z += isYZ.z;
  i0.w += 1.0 - isYZ.z;
  
  vec4 i3 = clamp(i0, 0.0, 1.0);
  vec4 i2 = clamp(i0 - 1.0, 0.0, 1.0);
  vec4 i1 = clamp(i0 - 2.0, 0.0, 1.0);
  
  vec4 x1 = x0 - i1 + 1.0 * C.xxxx;
  vec4 x2 = x0 - i2 + 2.0 * C.xxxx;
  vec4 x3 = x0 - i3 + 3.0 * C.xxxx;
  vec4 x4 = x0 - 1.0 + 4.0 * C.xxxx;
  
  i = mod(i, 289.0);
  float j0 = permute(permute(permute(permute(i.w) + i.z) + i.y) + i.x);
  vec4 j1 = permute(permute(permute(permute(i.w + vec4(i1.w, i2.w, i3.w, 1.0)) + i.z + vec4(i1.z, i2.z, i3.z, 1.0)) + i.y + vec4(i1.y, i2.y, i3.y, 1.0)) + i.x + vec4(i1.x, i2.x, i3.x, 1.0));
  
  vec4 ip = vec4(1.0 / 294.0, 1.0 / 49.0, 1.0 / 7.0, 0.0);
  
  vec4 p0 = grad4(j0, ip);
  vec4 p1 = grad4(j1.x, ip);
  vec4 p2 = grad4(j1.y, ip);
  vec4 p3 = grad4(j1.z, ip);
  vec4 p4 = grad4(j1.w, ip);
  
  vec4 norm = taylorInvSqrt(vec4(dot(p0, p0), dot(p1, p1), dot(p2, p2), dot(p3, p3)));
  p0 *= norm.x;
  p1 *= norm.y;
  p2 *= norm.z;
  p3 *= norm.w;
  p4 *= taylorInvSqrt(dot(p4, p4));
  
  vec3 m0 = max(0.6 - vec3(dot(x0, x0), dot(x1, x1), dot(x2, x2)), 0.0);
  vec2 m1 = max(0.6 - vec2(dot(x3, x3), dot(x4, x4)), 0.0);
  m0 = m0 * m0;
  m1 = m1 * m1;
  
  return 49.0 * (dot(m0 * m0, vec3(dot(p0, x0), dot(p1, x1), dot(p2, x2))) + dot(m1 * m1, vec2(dot(p3, x3), dot(p4, x4))));
}

float noise(vec2 c) {
  return snoise(vec4(c, sin(u_progress * TWO_PI), cos(u_progress * TWO_PI)));
}

float ease(float t) {
  return t < 0.5 ? 2.0 * t * t : -1.0 + (4.0 - 2.0 * t) * t;
}

float distort(float x) {
  return ease(abs(x / 0.065 * 0.067 * sin(x / 0.61)));
}

vec2 polarToCartesian(float x, float y, float a, float d) {
  return vec2(x + cos(a) * d, y + sin(y) * d);
}

vec2 rotate2D(vec2 _st, float _angle) {
  _st -= 0.5;
  _st = mat2(cos(_angle), - sin(_angle),
  sin(_angle), cos(_angle)) * _st;
  _st += 0.5;
  return _st;
}

vec2 tile(vec2 _st, float _zoom) {
  _st *= _zoom;
  return fract(_st);
}

vec2 rotateTilePattern(vec2 _st) {
  
  //  Scale the coordinate system by 2x2
  _st *= 1.0;
  
  //  Give each cell an index number
  //  according to its position
  float index = 0.0;
  index += step(1.0, mod(_st.x, 2.0));
  index += step(1.0, mod(_st.y, 2.0)) * 2.0;
  
  //      |
  //  2   |   3
  //      |
  //--------------
  //      |
  //  0   |   1
  //      |
  
  // Make each cell between 0.0 - 1.0
  _st = fract(_st);
  
  // Rotate each cell according to the index
  if (index == 1.0) {
    //  Rotate cell 1 by 90 degrees
    _st = rotate2D(_st, PI * 0.5);
  } else if (index == 2.0) {
    //  Rotate cell 2 by -90 degrees
    _st = rotate2D(_st, PI *- 0.5);
  } else if (index == 3.0) {
    //  Rotate cell 3 by 180 degrees
    _st = rotate2D(_st, PI);
  }
  
  return _st;
}

void main() {
  vec2 st = gl_FragCoord.xy / u_resolution.xy;
  vec2 coord = vTexCoord;
  
  vec2 focusA = polarToCartesian(0.5, 0.5, TWO_PI * u_progress, noise(vec2(0.5, 0.5)));
  vec2 focusB = polarToCartesian(0.5, 0.5, TWO_PI * u_progress * -2.0, noise(vec2(0.3, 0.7)));
  float b = distance(vec2(0.5, 0.5), vTexCoord) < 0.4 ? 1.0 : 0.0;
  
  st = rotate2D(st, u_progress * TWO_PI);
  coord = rotate2D(coord, u_progress * TWO_PI * 2.0);
  
  // float v = noise(vec2(coord));
  
  vec3 clr = vec3(
    b * ease(abs(noise(vec2(st)))) < 0.2 ? 0.0 : 1.0,
    b * ease(abs(noise(vec2(vTexCoord)))) < 0.5 ? 0.0 : 1.0,
    b * ease(abs(noise(vec2(coord)))) < 0.8 ? 0.0 : 1.0
  );
  
  gl_FragColor = vec4(
    clr,
    1.0
  );
}