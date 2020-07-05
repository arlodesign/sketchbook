(window.webpackJsonp=window.webpackJsonp||[]).push([[376],{11:function(n,t,e){"use strict";t.a="#ifdef GL_ES\nprecision mediump float;\n#endif\n\nattribute vec3 aPosition;\n\nvoid main() {\n  vec4 positionVec4 = vec4(aPosition, 1.0);\n  positionVec4.xy = positionVec4.xy * 2.0 - 1.0;\n  gl_Position = positionVec4;\n}"},2:function(n,t,e){"use strict";e.r(t),e.d(t,"linear",(function(){return o})),e.d(t,"easeInQuad",(function(){return i})),e.d(t,"easeOutQuad",(function(){return r})),e.d(t,"easeInOutQuad",(function(){return u})),e.d(t,"easeInCubic",(function(){return s})),e.d(t,"easeOutCubic",(function(){return a})),e.d(t,"easeInOutCubic",(function(){return c})),e.d(t,"easeInQuart",(function(){return f})),e.d(t,"easeOutQuart",(function(){return d})),e.d(t,"easeInOutQuart",(function(){return l})),e.d(t,"easeInQuint",(function(){return _})),e.d(t,"easeOutQuint",(function(){return m})),e.d(t,"easeInOutQuint",(function(){return g}));var o=function(n){return n},i=function(n){return n*n},r=function(n){return n*(2-n)},u=function(n){return n<.5?2*n*n:(4-2*n)*n-1},s=function(n){return n*n*n},a=function(n){return--n*n*n+1},c=function(n){return n<.5?4*n*n*n:(n-1)*(2*n-2)*(2*n-2)+1},f=function(n){return n*n*n*n},d=function(n){return 1- --n*n*n*n},l=function(n){return n<.5?8*n*n*n*n:1-8*--n*n*n*n},_=function(n){return n*n*n*n*n},m=function(n){return 1+--n*n*n*n*n},g=function(n){return n<.5?16*n*n*n*n*n:1+16*--n*n*n*n*n}},33:function(n,t,e){"use strict";t.a="#ifdef GL_ES\nprecision mediump float;\n#endif\n\nuniform vec2 u_resolution;\nuniform float u_theta;\nuniform float u_noise;\nuniform float u_noise_x;\nuniform float u_noise_y;\nuniform float u_progress;\n\nfloat random(in vec2 st, float val) {\n  return fract(sin(dot(st.xy * u_noise, vec2(u_noise_x, u_noise_y))) * val);\n}\n\nfloat getId(in vec2 _st, in float size) {\n  _st *= size;\n  float totalIds = size * size;\n  return floor(_st.x + floor(_st.y) * size) - totalIds / 2.0;\n}\n\nfloat colorSin(in float id) {\n  return (sin((id) * u_noise) + 1.0) / 2.0;\n}\n\nfloat colorCos(in float id) {\n  return (cos((id) * u_noise) + 1.0) / 2.0;\n}\n\nvoid main() {\n  vec2 st = gl_FragCoord.xy / u_resolution.xy;\n  \n  st += 0.5;\n  \n  float gId = getId(st, u_progress);\n  float bId = getId(st, u_noise * u_progress);\n  \n  float r = st.y - 0.5;\n  float g = colorCos(gId) / 2.0;\n  float b = colorSin(bId);\n  \n  vec2 pos = vec2(st * 2.0);\n  vec3 color = vec3(r, g, b);\n  \n  color.rgb *= length(abs(st)) * (smoothstep(0.4, 0.6, random(pos, 2.0)) + 0.5);\n  \n  gl_FragColor = vec4(color, 1.0);\n  \n}"},417:function(n,t,e){"use strict";e.r(t),function(n){var t=e(0),o=e.n(t),i=(e(3),e(11)),r=e(33),u=e(2);new o.a((function(t){var e,o=t.getURLParams().render;t.setup=function(){t.pixelDensity(1),t.frameRate(60),t.createCanvas(Math.min(t.windowWidth,t.windowHeight),Math.min(t.windowWidth,t.windowHeight),t.WEBGL),t.noStroke(),t.createLoop(60,{noiseRadius:.5}),e=t.createShader(i.a,r.a)},t.draw=function(){var i=t.animLoop,r=i.theta,s=i.noise,a=i.noise1D,c=i.progress;t.background(255),t.shader(e),e.setUniform("u_resolution",[t.width,t.height]),e.setUniform("u_noise",s()),e.setUniform("u_noise_x",10*a(1)),e.setUniform("u_noise_y",20*a(10)),e.setUniform("u_theta",r),e.setUniform("u_time",t.millis()/1e3),e.setUniform("u_progress",Object(u.easeOutCubic)(4*c*c-4*c)),t.rect(0,0,t.width,t.height),n.env.DEV&&o&&t.frameCount<=3600&&t.save("".concat(String(t.frameCount).padStart(String(3600).length,"0"),".png"))},t.windowResized=function(){t.resizeCanvas(Math.min(t.windowWidth,t.windowHeight),Math.min(t.windowWidth,t.windowHeight))}}),"sketch")}.call(this,e(5))}},[[417,0,1]]]);