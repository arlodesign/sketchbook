(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{227:function(n,t,r){"use strict";r.r(t);r(404),r(105),r(69),r(44),r(106),r(104),r(354);var o=r(12),e=(r(0),r(350)),a=r(353),u=function(n){var t,r,o,e,u,c,i,f=0,s=[function(t){return 240*n.abs(n.sin(t))},function(t){return 240*n.abs(n.cos(t))},function(t){return 240*n.abs(n.tan(t))},function(t){return 240*n.abs(n.sin(t+n.PI))},function(t){return 240*n.abs(n.cos(t+n.PI))},function(t){return 240*n.abs(n.tan(t+n.PI))},function(t){return 240*n.abs(n.sin(-t))},function(t){return 240*n.abs(n.cos(-t))},function(t){return 240*n.abs(n.tan(-t))},function(t){return 240*n.abs(n.sin(-t+n.PI))},function(t){return 240*n.abs(n.cos(-t+n.PI))},function(t){return 240*n.abs(n.tan(-t+n.PI))},function(){return 240},function(){return 15},function(){return 128}];n.setup=function(){for(n.createCanvas(660,840),n.background(128),t=n.floor(n.random(3,7)),r=n.random(.01,.05),o=n.random([-1,1]),e=n.random(1,2);Array.from(new Set([u,c,i])).length<3;)u=n.random(s),c=n.random(s),i=n.random(s);n.strokeWeight(.25),n.noFill(),n.blendMode(n.HARD_LIGHT)},n.draw=function(){n.translate.apply(n,Object.values(Object(a.a)(n.width/2,n.height/2,f,300))),n.rotate(o*f/t);var s=Object(a.a)(0,0,f,300*n.cos(f*t)),d=s.x,l=s.y;n.stroke(u(f/t),c(f/t),i(f/t)),n.beginShape(),n.vertex.apply(n,Object.values(Object(a.a)(0,0,0,300*e)));for(var v=1;v<=t;v++)n.quadraticVertex.apply(n,[d,l].concat(Object.values(Object(a.a)(0,0,n.TWO_PI/t*v,300*e))));n.endShape(),(f+=r/n.TWO_PI)>n.TWO_PI*t&&n.noLoop()}};t.default=function(n){var t=n.location;return Object(o.c)(e.a,{sketch:u,path:t.pathname,description:"Reload page for a different variation."})}},353:function(n,t,r){"use strict";r.d(t,"c",function(){return o}),r.d(t,"d",function(){return e}),r.d(t,"b",function(){return a});var o=function(n,t,r){return n+Math.cos(t)*r},e=function(n,t,r){return n+Math.sin(t)*r},a=function(n,t,r,o,e,a){void 0===a&&(a=!1);var u=n+Math.cos(r)*o,c=t+Math.sin(r)*e;return a?[u,c]:{x:u,y:c}};t.a=function(n,t,r,a,u){void 0===u&&(u=!1);var c=o(n,r,a),i=e(t,r,a);return u?[c,i]:{x:c,y:i}}},354:function(n,t,r){"use strict";var o=r(21),e=r(9),a=r(34),u=r(101),c=r(102),i=r(18),f=r(355),s=r(103);e(e.S+e.F*!r(68)(function(n){Array.from(n)}),"Array",{from:function(n){var t,r,e,d,l=a(n),v="function"==typeof this?this:Array,b=arguments.length,p=b>1?arguments[1]:void 0,h=void 0!==p,y=0,O=s(l);if(h&&(p=o(p,b>2?arguments[2]:void 0,2)),null==O||v==Array&&c(O))for(r=new v(t=i(l.length));t>y;y++)f(r,y,h?p(l[y],y):l[y]);else for(d=O.call(l),r=new v;!(e=d.next()).done;y++)f(r,y,h?u(d,p,[e.value,y],!0):e.value);return r.length=y,r}})},355:function(n,t,r){"use strict";var o=r(13),e=r(35);n.exports=function(n,t,r){t in n?o.f(n,t,e(0,r)):n[t]=r}},404:function(n,t,r){var o=r(9),e=r(405)(!1);o(o.S,"Object",{values:function(n){return e(n)}})},405:function(n,t,r){var o=r(10),e=r(29),a=r(23),u=r(37).f;n.exports=function(n){return function(t){for(var r,c=a(t),i=e(c),f=i.length,s=0,d=[];f>s;)r=i[s++],o&&!u.call(c,r)||d.push(n?[r,c[r]]:c[r]);return d}}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-02-01-js-16cc98534acdb91977fc.js.map