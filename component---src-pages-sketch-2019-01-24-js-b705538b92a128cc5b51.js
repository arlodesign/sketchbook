(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{206:function(n,t,r){"use strict";r.r(t);r(260);var a=r(0),o=r.n(a),e=r(262),i=r(263),c=function(n){var t,r,a,o,e,c=0,u=0,d=0;n.setup=function(){n.createCanvas(660,840),n.background(0),t=n.random(.02,.05)/n.TWO_PI,r=n.random(4,6)/n.TWO_PI,a=n.random(.1)/n.TWO_PI,n.random(2e3,5e3)/n.TWO_PI,o=n.floor(n.random(10,20))},n.draw=function(){n.translate(n.width/2,n.height/2),n.rotate(d);var f=Object(i.c)(0,c,n.width/3),s=Object(i.d)(0,c*o,n.height/3),h=Object(i.c)(f,u*o,o),v=Object(i.d)(s,u,o);e&&(n.noStroke(),n.fill(n.frameCount%2?"rgba(0,0,0,0.5)":"rgba(255,255,255,0.5)"),n.triangle(0,0,h,v,e.x,e.y),n.stroke(255),n.line(h,v,e.x,e.y)),e={x:h,y:v},c+=t,u+=r,d+=a}};t.default=function(n){var t=n.location;return o.a.createElement(e.a,{sketch:c,path:t.pathname,description:"Reload page for a different variation."})}},260:function(n,t,r){var a=r(11);a(a.P,"Array",{fill:r(261)}),r(32)("fill")},261:function(n,t,r){"use strict";var a=r(25),o=r(73),e=r(14);n.exports=function(n){for(var t=a(this),r=e(t.length),i=arguments.length,c=o(i>1?arguments[1]:void 0,r),u=i>2?arguments[2]:void 0,d=void 0===u?r:o(u,r);d>c;)t[c++]=n;return t}},263:function(n,t,r){"use strict";r.d(t,"c",function(){return a}),r.d(t,"d",function(){return o}),r.d(t,"b",function(){return e});var a=function(n,t,r){return n+Math.cos(t)*r},o=function(n,t,r){return n+Math.sin(t)*r},e=function(n,t,r,a,o,e){void 0===e&&(e=!1);var i=n+Math.cos(r)*a,c=t+Math.sin(r)*o;return e?[i,c]:{x:i,y:c}};t.a=function(n,t,r,e,i){void 0===i&&(i=!1);var c=a(n,r,e),u=o(t,r,e);return i?[c,u]:{x:c,y:u}}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-01-24-js-b705538b92a128cc5b51.js.map