(window.webpackJsonp=window.webpackJsonp||[]).push([[87],{229:function(t,n,r){"use strict";r.r(n);r(252),r(74);var o=r(0),e=r.n(o),i=r(254),a=r(255),c=function(t){function n(n){return t.color(100*t.abs(t.cos(n)),100*t.abs(t.sin(-n+t.PI)),100)}t.setup=function(){t.createCanvas(660,840,t.WEBGL),t.stroke(255),t.noFill(),t.noiseDetail(4,.5),t.rectMode(t.CENTER),t.camera(-t.width/4,-t.height/4,400,-t.width/4,-t.height/4,0,0,1,0)},t.draw=function(){t.background(0);for(var r=20-t.width/2,o=20-t.height/2,e=[];r<0;){for(var i=[];o<0;){var c=t.noise(.02*r,.02*o,t.frameCount/100);i.push([r,o,t.map(c,0,1,-400,400)]),o+=20}e.push(i),r+=20,o=20-t.height/2}e.forEach(function(r){r.forEach(function(r){t.stroke(n(r[2]/100)),t.line.apply(t,r.concat([Object(a.b)(-t.width/4,t.frameCount/100,200),Object(a.c)(-t.height/4,t.frameCount/100,200),-400])),t.push(),t.translate.apply(t,r),t.noStroke(),t.fill(n(r[2]/100)),t.sphere(2),t.pop()})})}};n.default=function(t){var n=t.location;return e.a.createElement(i.a,{sketch:c,path:n.pathname})}},252:function(t,n,r){var o=r(11);o(o.P,"Array",{fill:r(253)}),r(32)("fill")},253:function(t,n,r){"use strict";var o=r(25),e=r(73),i=r(14);t.exports=function(t){for(var n=o(this),r=i(n.length),a=arguments.length,c=e(a>1?arguments[1]:void 0,r),u=a>2?arguments[2]:void 0,f=void 0===u?r:e(u,r);f>c;)n[c++]=t;return n}},255:function(t,n,r){"use strict";r.d(n,"b",function(){return o}),r.d(n,"c",function(){return e});var o=function(t,n,r){return t+Math.cos(n)*r},e=function(t,n,r){return t+Math.sin(n)*r};n.a=function(t,n,r,i,a){void 0===a&&(a=!1);var c=o(t,r,i),u=e(n,r,i);return a?[c,u]:{x:c,y:u}}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-02-16-js-38d6c0a025c63f21a7c3.js.map