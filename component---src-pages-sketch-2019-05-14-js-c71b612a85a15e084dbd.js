(window.webpackJsonp=window.webpackJsonp||[]).push([[155],{406:function(n,t,o){"use strict";o.r(t);var r=o(0),a=(o(1),o(24),o(255)),i=o(544),e=o(530),c=function(n){var t,o=n.random(50),r=0,a=[];n.setup=function(){n.createCanvas(660,840),a=[n.width/3,n.height/3],t=n.dist.apply(n,a.concat([n.width,n.height])),n.colorMode(n.HSB,100),n.background(o,10,40)},n.draw=function(){n.strokeWeight(2),n.stroke(n.map(n.sin(r),-1,1,o+50,o),30,80),i.a.apply(void 0,[n].concat(a,e.a.apply(void 0,a.concat([r,t/2,!0])),[n.noise(n.frameCount/50,t,r)/20,!1])),n.stroke(n.map(n.sin(r),-1,1,o,o+50),50,80),i.a.apply(void 0,[n].concat(a,e.a.apply(void 0,a.concat([r,t,!0])),[n.noise(n.frameCount/10,t,r)/10,!1])),(r+=n.TWO_PI/2e3)>n.TWO_PI&&n.noLoop()}};t.default=function(n){var t=n.location;return Object(r.c)(a.a,{sketch:c,path:t.pathname,description:""})}},530:function(n,t,o){"use strict";o.d(t,"c",(function(){return r})),o.d(t,"d",(function(){return a})),o.d(t,"b",(function(){return i}));var r=function(n,t,o){return n+Math.cos(t)*o},a=function(n,t,o){return n+Math.sin(t)*o},i=function(n,t,o,r,a,i){void 0===i&&(i=!1);var e=n+Math.cos(o)*r,c=t+Math.sin(o)*a;return i?[e,c]:{x:e,y:c}};t.a=function(n,t,o,i,e){void 0===e&&(e=!1);var c=r(n,o,i),u=a(t,o,i);return e?[c,u]:{x:c,y:u}}},544:function(n,t,o){"use strict";t.a=function(n,t,o,r,a,i,e){if(void 0===e&&(e=!0),i<=0)throw new Error("rate for lerpLine() must be greater than zero");for(var c=0;c<1;c+=i)(0!==c||e)&&n.random()>c&&n.point(n.lerp(t,r,c),n.lerp(o,a,c))}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-05-14-js-c71b612a85a15e084dbd.js.map