(window.webpackJsonp=window.webpackJsonp||[]).push([[87],{227:function(t,n,r){"use strict";r.r(n);r(285),r(79);var o=r(9),i=(r(0),r(284)),e=r(287),a=function(t){function n(n){return t.color(100*t.abs(t.cos(n)),100*t.abs(t.sin(-n+t.PI)),100)}t.setup=function(){t.createCanvas(660,840,t.WEBGL),t.stroke(255),t.noFill(),t.noiseDetail(4,.5),t.rectMode(t.CENTER),t.camera(-t.width/4,-t.height/4,400,-t.width/4,-t.height/4,0,0,1,0)},t.draw=function(){t.background(0);for(var r=20-t.width/2,o=20-t.height/2,i=[];r<0;){for(var a=[];o<0;){var c=t.noise(.02*r,.02*o,t.frameCount/100);a.push([r,o,t.map(c,0,1,-400,400)]),o+=20}i.push(a),r+=20,o=20-t.height/2}i.forEach(function(r){r.forEach(function(r){t.stroke(n(r[2]/100)),t.line.apply(t,r.concat([Object(e.c)(-t.width/4,t.frameCount/100,200),Object(e.d)(-t.height/4,t.frameCount/100,200),-400])),t.push(),t.translate.apply(t,r),t.noStroke(),t.fill(n(r[2]/100)),t.sphere(2),t.pop()})})}};n.default=function(t){var n=t.location;return Object(o.c)(i.a,{sketch:a,path:n.pathname})}},285:function(t,n,r){var o=r(12);o(o.P,"Array",{fill:r(286)}),r(35)("fill")},286:function(t,n,r){"use strict";var o=r(28),i=r(78),e=r(16);t.exports=function(t){for(var n=o(this),r=e(n.length),a=arguments.length,c=i(a>1?arguments[1]:void 0,r),u=a>2?arguments[2]:void 0,f=void 0===u?r:i(u,r);f>c;)n[c++]=t;return n}},287:function(t,n,r){"use strict";r.d(n,"c",function(){return o}),r.d(n,"d",function(){return i}),r.d(n,"b",function(){return e});var o=function(t,n,r){return t+Math.cos(n)*r},i=function(t,n,r){return t+Math.sin(n)*r},e=function(t,n,r,o,i,e){void 0===e&&(e=!1);var a=t+Math.cos(r)*o,c=n+Math.sin(r)*i;return e?[a,c]:{x:a,y:c}};n.a=function(t,n,r,e,a){void 0===a&&(a=!1);var c=o(t,r,e),u=i(n,r,e);return a?[c,u]:{x:c,y:u}}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-02-16-js-20174b7efae206d7ab80.js.map