(window.webpackJsonp=window.webpackJsonp||[]).push([[175],{426:function(t,a,e){"use strict";e.r(a);e(75),e(184);var n=e(0),i=(e(1),e(255)),r=e(530),h=function(t){var a=[];t.setup=function(){t.createCanvas(660,840),t.background(0),t.stroke(255),t.strokeWeight(5),t.noFill();for(var e=Array.from(Array(4),(function(){return{a:t.random(t.TWO_PI),d:t.random(t.width/4,.45*t.width)}})),n=function(t){a=a.concat(e.map((function(a){var e=a.a,n=a.d;return{a:e+t,d:n}})))},i=0;i<t.TWO_PI;i+=t.TWO_PI/5)n(i)},t.draw=function(){t.curve.apply(t,Object(r.a)(t.width/2,t.height/2,a[t.frameCount].a,a[t.frameCount].d,!0).concat(Object(r.a)(t.width/2,t.height/2,a[t.frameCount+1].a,a[t.frameCount+1].d,!0),Object(r.a)(t.width/2,t.height/2,a[t.frameCount+2].a,a[t.frameCount+2].d,!0),Object(r.a)(t.width/2,t.height/2,a[t.frameCount+3].a,a[t.frameCount+3].d,!0))),t.frameCount===a.length-4&&(t.curve.apply(t,Object(r.a)(t.width/2,t.height/2,a[t.frameCount+1].a,a[t.frameCount+1].d,!0).concat(Object(r.a)(t.width/2,t.height/2,a[t.frameCount+2].a,a[t.frameCount+2].d,!0),Object(r.a)(t.width/2,t.height/2,a[t.frameCount+3].a,a[t.frameCount+3].d,!0),Object(r.a)(t.width/2,t.height/2,a[0].a,a[0].d,!0))),t.curve.apply(t,Object(r.a)(t.width/2,t.height/2,a[t.frameCount+2].a,a[t.frameCount+2].d,!0).concat(Object(r.a)(t.width/2,t.height/2,a[t.frameCount+3].a,a[t.frameCount+3].d,!0),Object(r.a)(t.width/2,t.height/2,a[0].a,a[0].d,!0),Object(r.a)(t.width/2,t.height/2,a[1].a,a[1].d,!0))),t.curve.apply(t,Object(r.a)(t.width/2,t.height/2,a[t.frameCount+3].a,a[t.frameCount+3].d,!0).concat(Object(r.a)(t.width/2,t.height/2,a[0].a,a[0].d,!0),Object(r.a)(t.width/2,t.height/2,a[1].a,a[1].d,!0),Object(r.a)(t.width/2,t.height/2,a[2].a,a[2].d,!0))),t.curve.apply(t,Object(r.a)(t.width/2,t.height/2,a[0].a,a[0].d,!0).concat(Object(r.a)(t.width/2,t.height/2,a[1].a,a[1].d,!0),Object(r.a)(t.width/2,t.height/2,a[2].a,a[2].d,!0),Object(r.a)(t.width/2,t.height/2,a[3].a,a[3].d,!0))),t.noLoop())}};a.default=function(t){var a=t.location;return Object(n.c)(i.a,{sketch:h,path:a.pathname,description:"Reload page for a different variation."})}},530:function(t,a,e){"use strict";e.d(a,"c",(function(){return n})),e.d(a,"d",(function(){return i})),e.d(a,"b",(function(){return r}));var n=function(t,a,e){return t+Math.cos(a)*e},i=function(t,a,e){return t+Math.sin(a)*e},r=function(t,a,e,n,i,r){void 0===r&&(r=!1);var h=t+Math.cos(e)*n,o=a+Math.sin(e)*i;return r?[h,o]:{x:h,y:o}};a.a=function(t,a,e,r,h){void 0===h&&(h=!1);var o=n(t,e,r),c=i(a,e,r);return h?[o,c]:{x:o,y:c}}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-06-11-js-3dace8f22ac8c7a70e66.js.map