(window.webpackJsonp=window.webpackJsonp||[]).push([[302],{ViKx:function(n,t,r){"use strict";r.d(t,"c",(function(){return o})),r.d(t,"d",(function(){return i})),r.d(t,"b",(function(){return e}));var o=function(n,t,r){return n+Math.cos(t)*r},i=function(n,t,r){return n+Math.sin(t)*r},e=function(n,t,r,o,i,e){void 0===e&&(e=!1);var a=n+Math.cos(r)*o,c=t+Math.sin(r)*i;return e?[a,c]:{x:a,y:c}};t.a=function(n,t,r,e,a){void 0===a&&(a=!1);var c=o(n,r,e),u=i(t,r,e);return a?[c,u]:{x:c,y:u}}},tSLR:function(n,t,r){"use strict";r.r(t);r("v9g0"),r("n0hJ"),r("q1tI");var o=r("Gmm/"),i=(r("PZSu"),r("ViKx")),e=r("qKvR"),a=function(n){var t,r,o=n.getURLParams().render,e=n.random(.5),a=[];var c=function(){function o(n,t){this.x=n,this.y=t}return o.prototype.draw=function(){for(var o=n.animLoop,i=o.noise1D,e=o.noise2D,a=this.x,c=this.y,u=n.map(e(a,c),-1,1,n.height/10,n.height/3)+(c-n.height*(2/3)),h=n.map(i(a),-1,1,.001,1),f=0;f<1;f+=h){var s=c-u*f;n.fill(n.lerpColor(t,r,f)),n.noStroke(),n.rect(a,s,1,-u*h)}n.stroke(255),n.point(a,c-u*(h+1)+u*(i(-c)/3))},o}();n.setup=function(){n.createCanvas(660,840),n.colorMode(n.HSL,1),t=n.color(e,1,.5,1),r=n.color(e,0,1,0);for(var u=function(t){var r=function(t){var r=Object(i.a)(n.width/2,n.height*(2/3),t,n.width/5),o=r.x,e=r.y;return{x:n.floor(o),y:n.floor(e)}}(t),o=r.x,e=r.y;a.find((function(n){return n.x===o}))||a.push(new c(o,e))},h=0;h<n.PI;h+=.001)u(h);n.createLoop(20,{gif:!!o&&{render:!1,open:!0},noiseRadius:.5})},n.draw=function(){n.background(e,1,.1),a.forEach((function(n){return n.draw()})),n.noFill(),n.stroke(t),n.strokeWeight(2),n.arc(n.width/2,n.height*(2/3),n.width/5*2-1,n.width/5*2-1,0,n.PI)}};t.default=function(n){var t=n.location;return Object(e.c)(o.a,{sketch:a,path:t.pathname,description:""})}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-11-16-js-1dadbc82aaa70905d9df.js.map