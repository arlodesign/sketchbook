(window.webpackJsonp=window.webpackJsonp||[]).push([[205],{393:function(e,t,r){"use strict";r.r(t);var n=r(10),o=(r(0),r(436)),i=(r(439),r(442),{}.DEV&&!1),a=function(e){e.setup=function(){i&&(e.pixelDensity(1),e.frameRate(30)),e.createCanvas(660,840),e.noStroke(),e.rectMode(e.CENTER),e.createLoop(20,{gif:!!i&&{render:!1,open:!0},noiseRadius:.1})},e.draw=function(){e.background(0);for(var t=[],r=0;r<=e.width/2;r+=10){for(var n=[],o=e.map(e.animLoop.noise1D(r/10),-1,1,0,.5),i=0;i<1;i+=o)i>0&&n.push(e.lerp(0,e.height,i));t.push(n)}t.forEach(function(t,r){t.forEach(function(t){var n=e.map(t,0,e.height,10,1);e.rect(10*r,t,n,n),e.rect(10*r,e.height-t,n,n),e.rect(e.width-10*r,t,n,n),e.rect(e.width-10*r,e.height-t,n,n)})})}};t.default=function(e){var t=e.location;return Object(n.c)(o.a,{sketch:a,path:t.pathname,description:""})}},439:function(e,t,r){"use strict";t.a=function(e,t,r,n,o,i,a){if(void 0===a&&(a=!0),i<=0)throw new Error("rate for lerpLine() must be greater than zero");for(var c=0;c<1;c+=i)(0!==c||a)&&e.random()>c&&e.point(e.lerp(t,n,c),e.lerp(r,o,c))}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-07-10-js-41150cea08d77a3c1fd5.js.map