(window.webpackJsonp=window.webpackJsonp||[]).push([[146],{300:function(n,t,r){"use strict";r.r(t);var o=r(12),e=(r(0),r(345)),i=r(348),a=r(351),c=function(n){var t=n.TWO_PI;n.setup=function(){n.createCanvas(660,840),n.stroke(0),n.strokeWeight(.25),n.background(255)},n.draw=function(){var r=n.map(n.cos(t),-1,1,0,n.height),o=Object(i.a)(n.width/3,r,t,n.map(-n.sin(13*t),-1,1,0,n.width)),e=o.x,c=o.y;Object(a.a)(n,n.width/3,r,e,c,n.noise(n.frameCount/50,t)/10,!1),(t-=n.TWO_PI/1e4)<0&&n.noLoop()}};t.default=function(n){var t=n.location;return Object(o.c)(e.a,{sketch:c,path:t.pathname,description:""})}},348:function(n,t,r){"use strict";r.d(t,"c",function(){return o}),r.d(t,"d",function(){return e}),r.d(t,"b",function(){return i});var o=function(n,t,r){return n+Math.cos(t)*r},e=function(n,t,r){return n+Math.sin(t)*r},i=function(n,t,r,o,e,i){void 0===i&&(i=!1);var a=n+Math.cos(r)*o,c=t+Math.sin(r)*e;return i?[a,c]:{x:a,y:c}};t.a=function(n,t,r,i,a){void 0===a&&(a=!1);var c=o(n,r,i),u=e(t,r,i);return a?[c,u]:{x:c,y:u}}},351:function(n,t,r){"use strict";t.a=function(n,t,r,o,e,i,a){if(void 0===a&&(a=!0),i<=0)throw new Error("rate for lerpLine() must be greater than zero");for(var c=0;c<1;c+=i)(0!==c||a)&&n.random()>c&&n.point(n.lerp(t,o,c),n.lerp(r,e,c))}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-05-02-js-264bda3dd613affa1655.js.map