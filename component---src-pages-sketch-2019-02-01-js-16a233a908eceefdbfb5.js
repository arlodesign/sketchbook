(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{261:function(n,t,r){"use strict";r.r(t);r(493),r(30),r(29),r(12),r(101),r(73),r(425);var a=r(10),o=(r(0),r(421)),e=r(422),u=function(n){var t,r,a,o,u,c,i,s=0,f=[function(t){return 240*n.abs(n.sin(t))},function(t){return 240*n.abs(n.cos(t))},function(t){return 240*n.abs(n.tan(t))},function(t){return 240*n.abs(n.sin(t+n.PI))},function(t){return 240*n.abs(n.cos(t+n.PI))},function(t){return 240*n.abs(n.tan(t+n.PI))},function(t){return 240*n.abs(n.sin(-t))},function(t){return 240*n.abs(n.cos(-t))},function(t){return 240*n.abs(n.tan(-t))},function(t){return 240*n.abs(n.sin(-t+n.PI))},function(t){return 240*n.abs(n.cos(-t+n.PI))},function(t){return 240*n.abs(n.tan(-t+n.PI))},function(){return 240},function(){return 15},function(){return 128}];n.setup=function(){for(n.createCanvas(660,840),n.background(128),t=n.floor(n.random(3,7)),r=n.random(.01,.05),a=n.random([-1,1]),o=n.random(1,2);Array.from(new Set([u,c,i])).length<3;)u=n.random(f),c=n.random(f),i=n.random(f);n.strokeWeight(.25),n.noFill(),n.blendMode(n.HARD_LIGHT)},n.draw=function(){n.translate.apply(n,Object.values(Object(e.a)(n.width/2,n.height/2,s,300))),n.rotate(a*s/t);var f=Object(e.a)(0,0,s,300*n.cos(s*t)),b=f.x,d=f.y;n.stroke(u(s/t),c(s/t),i(s/t)),n.beginShape(),n.vertex.apply(n,Object.values(Object(e.a)(0,0,0,300*o)));for(var p=1;p<=t;p++)n.quadraticVertex.apply(n,[b,d].concat(Object.values(Object(e.a)(0,0,n.TWO_PI/t*p,300*o))));n.endShape(),(s+=r/n.TWO_PI)>n.TWO_PI*t&&n.noLoop()}};t.default=function(n){var t=n.location;return Object(a.c)(o.a,{sketch:u,path:t.pathname,description:"Reload page for a different variation."})}},422:function(n,t,r){"use strict";r.d(t,"c",function(){return a}),r.d(t,"d",function(){return o}),r.d(t,"b",function(){return e});var a=function(n,t,r){return n+Math.cos(t)*r},o=function(n,t,r){return n+Math.sin(t)*r},e=function(n,t,r,a,o,e){void 0===e&&(e=!1);var u=n+Math.cos(r)*a,c=t+Math.sin(r)*o;return e?[u,c]:{x:u,y:c}};t.a=function(n,t,r,e,u){void 0===u&&(u=!1);var c=a(n,r,e),i=o(t,r,e);return u?[c,i]:{x:c,y:i}}},493:function(n,t,r){var a=r(1),o=r(494)(!1);a(a.S,"Object",{values:function(n){return o(n)}})},494:function(n,t,r){var a=r(9),o=r(44),e=r(42),u=r(65).f;n.exports=function(n){return function(t){for(var r,c=e(t),i=o(c),s=i.length,f=0,b=[];s>f;)r=i[f++],a&&!u.call(c,r)||b.push(n?[r,c[r]]:c[r]);return b}}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-02-01-js-16a233a908eceefdbfb5.js.map