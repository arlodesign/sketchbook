(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{192:function(t,e,r){"use strict";r.r(e);r(74),r(82),r(275),r(272);var n=r(0),o=r.n(n),i=r(271),a=r(279),c=function(t){var e,r,n,o=[];t.preload=function(){e=t.loadFont(Object(a.c)("/assets/NewsCycle-Bold.ttf"))},t.setup=function(){t.pixelDensity(1),t.createCanvas(660,840),t.background(255),t.noStroke(),t.fill(0),t.textFont(e,130),t.text("YOUR FUTURE SELF IS A STRANGER",35,20,t.width-10,t.height-10),t.loadPixels();for(var i=[],a=0;a<t.height+0;a++)for(var c=0;c<t.width+0;c++){var f=4*(c+a*t.width);255!==t.pixels[f]&&i.push({x:c,y:a})}i=t.shuffle(i),r=t.floor(i.length/60),(o=Array.from(Array(r-2),function(e,r){return{vector:t.createVector(i[r].x,i[r].y),reached:!1,reachedBy:0}}))[0].reached=!0,o[0].reachedBy=-1,n=t.dist(0,0,t.width,t.height)},t.draw=function(){t.background(0),t.noStroke(),t.fill(255),t.textFont(e,130),t.text("YOUR FUTURE SELF IS A STRANGER",25,20,t.width-10,t.height-10),t.stroke(0),t.noFill(),o.forEach(function(e,r){var n=e.vector,i=e.reached,a=e.reachedBy;if(i&&a>-1){var c=o[a].vector,f=c.x,h=c.y;t.strokeWeight(t.dist(n.x,n.y,f,h)/4),t.quad(n.x,n.y,n.x,h,f,h,f,n.y)}});var r,i,a=n;o.forEach(function(e,n){e.reached||o.forEach(function(o,c){if(o.reached){var f=t.dist(e.vector.x,e.vector.y,o.vector.x,o.vector.y);f<a&&(a=f,i=n,r=c)}})}),o[i].reached=!0,o[i].reachedBy=r,o.filter(function(t){return t.reached}).length===o.length&&t.noLoop()}};e.default=function(t){var e=t.location;return o.a.createElement(i.a,{sketch:c,path:e.pathname})}},272:function(t,e,r){var n=r(11);n(n.P,"Array",{fill:r(273)}),r(32)("fill")},273:function(t,e,r){"use strict";var n=r(25),o=r(73),i=r(14);t.exports=function(t){for(var e=n(this),r=i(e.length),a=arguments.length,c=o(a>1?arguments[1]:void 0,r),f=a>2?arguments[2]:void 0,h=void 0===f?r:o(f,r);h>c;)e[c++]=t;return e}},275:function(t,e,r){"use strict";var n=r(17),o=r(11),i=r(25),a=r(79),c=r(80),f=r(14),h=r(276),u=r(81);o(o.S+o.F*!r(75)(function(t){Array.from(t)}),"Array",{from:function(t){var e,r,o,l,d=i(t),s="function"==typeof this?this:Array,v=arguments.length,y=v>1?arguments[1]:void 0,x=void 0!==y,p=0,g=u(d);if(x&&(y=n(y,v>2?arguments[2]:void 0,2)),null==g||s==Array&&c(g))for(r=new s(e=f(d.length));e>p;p++)h(r,p,x?y(d[p],p):d[p]);else for(l=g.call(d),r=new s;!(o=l.next()).done;p++)h(r,p,x?a(l,y,[o.value,p],!0):o.value);return r.length=p,r}})},276:function(t,e,r){"use strict";var n=r(26),o=r(54);t.exports=function(t,e,r){e in t?n.f(t,e,o(0,r)):t[e]=r}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-01-10-js-7c17019167282611df42.js.map