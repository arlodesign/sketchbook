(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{204:function(n,t,r){"use strict";r.r(t);r(290);var o=r(9),a=(r(0),r(289)),e=r(292),i=function(n){var t,r,o,a,i,c=0,u=0,d=0;n.setup=function(){n.createCanvas(660,840),n.background(0),t=n.random(.02,.05)/n.TWO_PI,r=n.random(4,6)/n.TWO_PI,o=n.random(.1)/n.TWO_PI,n.random(2e3,5e3)/n.TWO_PI,a=n.floor(n.random(10,20))},n.draw=function(){n.translate(n.width/2,n.height/2),n.rotate(d);var f=Object(e.c)(0,c,n.width/3),s=Object(e.d)(0,c*a,n.height/3),h=Object(e.c)(f,u*a,a),v=Object(e.d)(s,u,a);i&&(n.noStroke(),n.fill(n.frameCount%2?"rgba(0,0,0,0.5)":"rgba(255,255,255,0.5)"),n.triangle(0,0,h,v,i.x,i.y),n.stroke(255),n.line(h,v,i.x,i.y)),i={x:h,y:v},c+=t,u+=r,d+=o}};t.default=function(n){var t=n.location;return Object(o.c)(a.a,{sketch:i,path:t.pathname,description:"Reload page for a different variation."})}},290:function(n,t,r){var o=r(12);o(o.P,"Array",{fill:r(291)}),r(35)("fill")},291:function(n,t,r){"use strict";var o=r(28),a=r(78),e=r(16);n.exports=function(n){for(var t=o(this),r=e(t.length),i=arguments.length,c=a(i>1?arguments[1]:void 0,r),u=i>2?arguments[2]:void 0,d=void 0===u?r:a(u,r);d>c;)t[c++]=n;return t}},292:function(n,t,r){"use strict";r.d(t,"c",function(){return o}),r.d(t,"d",function(){return a}),r.d(t,"b",function(){return e});var o=function(n,t,r){return n+Math.cos(t)*r},a=function(n,t,r){return n+Math.sin(t)*r},e=function(n,t,r,o,a,e){void 0===e&&(e=!1);var i=n+Math.cos(r)*o,c=t+Math.sin(r)*a;return e?[i,c]:{x:i,y:c}};t.a=function(n,t,r,e,i){void 0===i&&(i=!1);var c=o(n,r,e),u=a(t,r,e);return i?[c,u]:{x:c,y:u}}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-01-24-js-e80a8b536305224c2ded.js.map