(window.webpackJsonp=window.webpackJsonp||[]).push([[178],{332:function(t,a,e){"use strict";e.r(a);e(104),e(348);var n=e(12),r=(e(0),e(344)),i=e(347),o=function(t){var a=[];t.setup=function(){t.createCanvas(660,840),t.background(0),t.stroke(255),t.strokeWeight(5),t.noFill();for(var e=Array.from(Array(4),function(){return{a:t.random(t.TWO_PI),d:t.random(t.width/4,.45*t.width)}}),n=function(t){a=a.concat(e.map(function(a){var e=a.a,n=a.d;return{a:e+t,d:n}}))},r=0;r<t.TWO_PI;r+=t.TWO_PI/5)n(r)},t.draw=function(){t.curve.apply(t,Object(i.a)(t.width/2,t.height/2,a[t.frameCount].a,a[t.frameCount].d,!0).concat(Object(i.a)(t.width/2,t.height/2,a[t.frameCount+1].a,a[t.frameCount+1].d,!0),Object(i.a)(t.width/2,t.height/2,a[t.frameCount+2].a,a[t.frameCount+2].d,!0),Object(i.a)(t.width/2,t.height/2,a[t.frameCount+3].a,a[t.frameCount+3].d,!0))),t.frameCount===a.length-4&&(t.curve.apply(t,Object(i.a)(t.width/2,t.height/2,a[t.frameCount+1].a,a[t.frameCount+1].d,!0).concat(Object(i.a)(t.width/2,t.height/2,a[t.frameCount+2].a,a[t.frameCount+2].d,!0),Object(i.a)(t.width/2,t.height/2,a[t.frameCount+3].a,a[t.frameCount+3].d,!0),Object(i.a)(t.width/2,t.height/2,a[0].a,a[0].d,!0))),t.curve.apply(t,Object(i.a)(t.width/2,t.height/2,a[t.frameCount+2].a,a[t.frameCount+2].d,!0).concat(Object(i.a)(t.width/2,t.height/2,a[t.frameCount+3].a,a[t.frameCount+3].d,!0),Object(i.a)(t.width/2,t.height/2,a[0].a,a[0].d,!0),Object(i.a)(t.width/2,t.height/2,a[1].a,a[1].d,!0))),t.curve.apply(t,Object(i.a)(t.width/2,t.height/2,a[t.frameCount+3].a,a[t.frameCount+3].d,!0).concat(Object(i.a)(t.width/2,t.height/2,a[0].a,a[0].d,!0),Object(i.a)(t.width/2,t.height/2,a[1].a,a[1].d,!0),Object(i.a)(t.width/2,t.height/2,a[2].a,a[2].d,!0))),t.curve.apply(t,Object(i.a)(t.width/2,t.height/2,a[0].a,a[0].d,!0).concat(Object(i.a)(t.width/2,t.height/2,a[1].a,a[1].d,!0),Object(i.a)(t.width/2,t.height/2,a[2].a,a[2].d,!0),Object(i.a)(t.width/2,t.height/2,a[3].a,a[3].d,!0))),t.noLoop())}};a.default=function(t){var a=t.location;return Object(n.c)(r.a,{sketch:o,path:a.pathname,description:"Reload page for a different variation."})}},347:function(t,a,e){"use strict";e.d(a,"c",function(){return n}),e.d(a,"d",function(){return r}),e.d(a,"b",function(){return i});var n=function(t,a,e){return t+Math.cos(a)*e},r=function(t,a,e){return t+Math.sin(a)*e},i=function(t,a,e,n,r,i){void 0===i&&(i=!1);var o=t+Math.cos(e)*n,h=a+Math.sin(e)*r;return i?[o,h]:{x:o,y:h}};a.a=function(t,a,e,i,o){void 0===o&&(o=!1);var h=n(t,e,i),c=r(a,e,i);return o?[h,c]:{x:h,y:c}}},348:function(t,a,e){"use strict";var n=e(21),r=e(9),i=e(34),o=e(101),h=e(102),c=e(18),u=e(349),d=e(103);r(r.S+r.F*!e(68)(function(t){Array.from(t)}),"Array",{from:function(t){var a,e,r,f,w=i(t),m="function"==typeof this?this:Array,g=arguments.length,b=g>1?arguments[1]:void 0,s=void 0!==b,v=0,p=d(w);if(s&&(b=n(b,g>2?arguments[2]:void 0,2)),null==p||m==Array&&h(p))for(e=new m(a=c(w.length));a>v;v++)u(e,v,s?b(w[v],v):w[v]);else for(f=p.call(w),e=new m;!(r=f.next()).done;v++)u(e,v,s?o(f,b,[r.value,v],!0):r.value);return e.length=v,e}})},349:function(t,a,e){"use strict";var n=e(13),r=e(35);t.exports=function(t,a,e){a in t?n.f(t,a,r(0,e)):t[a]=e}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-06-11-js-40e671e6ad0abe1110fa.js.map