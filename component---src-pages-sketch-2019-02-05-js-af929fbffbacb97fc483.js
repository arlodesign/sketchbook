(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{231:function(n,t,r){"use strict";r.r(t);r(357),r(350);var o=r(12),i=(r(0),r(349)),e=r(352),u=function(n){var t=10,r=[],o=[function(t){return 240*n.abs(n.sin(t))},function(t){return 240*n.abs(n.cos(t))},function(t){return 240*n.abs(n.tan(t))},function(t){return 240*n.abs(n.sin(t+n.PI))},function(t){return 240*n.abs(n.cos(t+n.PI))},function(t){return 240*n.abs(n.tan(t+n.PI))},function(t){return 240*n.abs(n.sin(-t))},function(t){return 240*n.abs(n.cos(-t))},function(t){return 240*n.abs(n.tan(-t))},function(t){return 240*n.abs(n.sin(-t+n.PI))},function(t){return 240*n.abs(n.cos(-t+n.PI))},function(t){return 240*n.abs(n.tan(-t+n.PI))}];function i(o,i){var e=function(o,i){return r.sort(function(t,r){return n.dist(o,i,t.vector.x,t.vector.y)-n.dist(o,i,r.vector.x,r.vector.y)}),r[t-1]}(o,i),u=e.vector,c=e.color;n.fill(c),n.noStroke();for(var a=0;a<n.PI;a+=.05)n.ellipse(n.lerp(o,u.x,n.sin(a)),n.lerp(i,u.y,n.sin(a)),3)}n.setup=function(){n.createCanvas(660,840),n.background(128),r=Array(t).fill().map(function(t,r){return{vector:n.createVector(Object(e.c)(n.width/2,n.noise(r)*n.TWO_PI,n.height),Object(e.d)(n.height/2,n.noise(r)*n.TWO_PI,n.height)),color:n.color(n.random(o)(r),n.random(o)(r),n.random(o)(r),32)}}),n.blendMode(n.OVERLAY)},n.draw=function(){var t=n.floor(n.frameCount/(n.width/10)),r=n.floor(n.frameCount-n.width/10*t);if(t<n.height/10)for(var o=0;o<10;o++)for(var e=0;e<10;e++)!(n.frameCount%10)&&i(r+n.width/10*o,t+n.height/10*e);else n.noLoop()}};t.default=function(n){var t=n.location;return Object(o.c)(i.a,{sketch:u,path:t.pathname,description:"Be patient. Reload page for a different variation."})}},350:function(n,t,r){var o=r(9);o(o.P,"Array",{fill:r(351)}),r(67)("fill")},351:function(n,t,r){"use strict";var o=r(34),i=r(100),e=r(18);n.exports=function(n){for(var t=o(this),r=e(t.length),u=arguments.length,c=i(u>1?arguments[1]:void 0,r),a=u>2?arguments[2]:void 0,s=void 0===a?r:i(a,r);s>c;)t[c++]=n;return t}},352:function(n,t,r){"use strict";r.d(t,"c",function(){return o}),r.d(t,"d",function(){return i}),r.d(t,"b",function(){return e});var o=function(n,t,r){return n+Math.cos(t)*r},i=function(n,t,r){return n+Math.sin(t)*r},e=function(n,t,r,o,i,e){void 0===e&&(e=!1);var u=n+Math.cos(r)*o,c=t+Math.sin(r)*i;return e?[u,c]:{x:u,y:c}};t.a=function(n,t,r,e,u){void 0===u&&(u=!1);var c=o(n,r,e),a=i(t,r,e);return u?[c,a]:{x:c,y:a}}},357:function(n,t,r){"use strict";var o=r(9),i=r(36),e=r(34),u=r(14),c=[].sort,a=[1,2,3];o(o.P+o.F*(u(function(){a.sort(void 0)})||!u(function(){a.sort(null)})||!r(358)(c)),"Array",{sort:function(n){return void 0===n?c.call(e(this)):c.call(e(this),i(n))}})},358:function(n,t,r){"use strict";var o=r(14);n.exports=function(n,t){return!!n&&o(function(){t?n.call(null,function(){},1):n.call(null)})}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-02-05-js-af929fbffbacb97fc483.js.map