(window.webpackJsonp=window.webpackJsonp||[]).push([[150],{321:function(t,n,e){"use strict";e.r(n);var o=e(7),r=(e(0),e(388)),a=e(392),i=function(t){var n,e,o,r,i;t.setup=function(){t.createCanvas(660,840),t.background("white"),t.noFill(),t.stroke(0),n=t.random(10,20),e=r=t.width/2,o=i=t.height/2},t.draw=function(){var c=t.random([-n,n]),h=t.random([-n,n]);t.strokeWeight(n*t.noise(e,o)),o=i+h,(e=r+c)>0&&o>0&&e<t.width&&o<t.height?(Object(a.a)(t,r,i,e,o,t.random()),Object(a.a)(t,t.width-r,t.height-i,t.width-e,t.height-o,t.random())):t.noLoop(),r=e,i=o}};n.default=function(t){var n=t.location;return Object(o.c)(r.a,{sketch:i,path:n.pathname,description:"Reload page for a different variation."})}},392:function(t,n,e){"use strict";n.a=function(t,n,e,o,r,a,i){if(void 0===i&&(i=!0),a<=0)throw new Error("rate for lerpLine() must be greater than zero");for(var c=0;c<1;c+=a)(0!==c||i)&&t.random()>c&&t.point(t.lerp(n,o,c),t.lerp(e,r,c))}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-05-06-js-3930fb1c83f401678263.js.map