(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{244:function(n,t,r){"use strict";r.r(t);r(455),r(26),r(20),r(8),r(91),r(48),r(388);var a=r(7),o=(r(0),r(385)),e=r(386),u=function(n){var t,r,a,o,u,c,i,s=0,f=[function(t){return 240*n.abs(n.sin(t))},function(t){return 240*n.abs(n.cos(t))},function(t){return 240*n.abs(n.tan(t))},function(t){return 240*n.abs(n.sin(t+n.PI))},function(t){return 240*n.abs(n.cos(t+n.PI))},function(t){return 240*n.abs(n.tan(t+n.PI))},function(t){return 240*n.abs(n.sin(-t))},function(t){return 240*n.abs(n.cos(-t))},function(t){return 240*n.abs(n.tan(-t))},function(t){return 240*n.abs(n.sin(-t+n.PI))},function(t){return 240*n.abs(n.cos(-t+n.PI))},function(t){return 240*n.abs(n.tan(-t+n.PI))},function(){return 240},function(){return 15},function(){return 128}];n.setup=function(){for(n.createCanvas(660,840),n.background(128),t=n.floor(n.random(3,7)),r=n.random(.01,.05),a=n.random([-1,1]),o=n.random(1,2);Array.from(new Set([u,c,i])).length<3;)u=n.random(f),c=n.random(f),i=n.random(f);n.strokeWeight(.25),n.noFill(),n.blendMode(n.HARD_LIGHT)},n.draw=function(){n.translate.apply(n,Object.values(Object(e.a)(n.width/2,n.height/2,s,300))),n.rotate(a*s/t);var f=Object(e.a)(0,0,s,300*n.cos(s*t)),b=f.x,d=f.y;n.stroke(u(s/t),c(s/t),i(s/t)),n.beginShape(),n.vertex.apply(n,Object.values(Object(e.a)(0,0,0,300*o)));for(var p=1;p<=t;p++)n.quadraticVertex.apply(n,[b,d].concat(Object.values(Object(e.a)(0,0,n.TWO_PI/t*p,300*o))));n.endShape(),(s+=r/n.TWO_PI)>n.TWO_PI*t&&n.noLoop()}};t.default=function(n){var t=n.location;return Object(a.c)(o.a,{sketch:u,path:t.pathname,description:"Reload page for a different variation."})}},386:function(n,t,r){"use strict";r.d(t,"c",function(){return a}),r.d(t,"d",function(){return o}),r.d(t,"b",function(){return e});var a=function(n,t,r){return n+Math.cos(t)*r},o=function(n,t,r){return n+Math.sin(t)*r},e=function(n,t,r,a,o,e){void 0===e&&(e=!1);var u=n+Math.cos(r)*a,c=t+Math.sin(r)*o;return e?[u,c]:{x:u,y:c}};t.a=function(n,t,r,e,u){void 0===u&&(u=!1);var c=a(n,r,e),i=o(t,r,e);return u?[c,i]:{x:c,y:i}}},455:function(n,t,r){var a=r(9),o=r(456)(!1);a(a.S,"Object",{values:function(n){return o(n)}})},456:function(n,t,r){var a=r(11),o=r(37),e=r(36),u=r(57).f;n.exports=function(n){return function(t){for(var r,c=e(t),i=o(c),s=i.length,f=0,b=[];s>f;)r=i[f++],a&&!u.call(c,r)||b.push(n?[r,c[r]]:c[r]);return b}}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-02-01-js-b2d0d3c0373cdd7fd233.js.map