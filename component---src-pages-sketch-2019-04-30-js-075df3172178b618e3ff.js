(window.webpackJsonp=window.webpackJsonp||[]).push([[144],{284:function(t,n,e){"use strict";e.r(n);var o=e(9),i=(e(0),e(318)),r=e(335),a=function(t){var n=0,e=[],o=0,i=t.random(33),a=Object(r.a)([1,2,3,5,8,13,21,34].map(function(t){return 100*t}));t.setup=function(){t.createCanvas(660,840),t.background(192),t.colorMode(t.HSB,100),t.blendMode(t.SOFT_LIGHT),t.curveTightness(5),t.strokeWeight(10)},t.draw=function(){var r=[];t.stroke(i+33*n,100,50),console.log(i);for(var h=1/3;h<1;h+=t.noise(t.frameCount/200,o/200)/(o/200)){var c=t.curvePoint(t.map(t.cos(t.frameCount/a[0]),-1,1,0,t.width),o,o,t.map(t.cos(t.frameCount/a[1]),-1,1,0,t.width),h),u=t.curvePoint(0,0,t.height,t.height,h);r.push({x:c,y:u})}for(var s=0;s<t.min(e.length,r.length);s++)t.line(e[s].x,e[s].y,r[s].x,r[s].y),t.line(e[s].x,t.height-e[s].y,r[s].x,t.height-r[s].y),t.line(t.width-e[s].x,e[s].y,t.width-r[s].x,r[s].y),t.line(t.width-e[s].x,t.height-e[s].y,t.width-r[s].x,t.height-r[s].y);e=r,++o>t.width&&(o=0,e=[],++n>2&&t.noLoop())}};n.default=function(t){var n=t.location;return Object(o.c)(i.a,{sketch:a,path:n.pathname,description:""})}},335:function(t,n,e){"use strict";function o(t){for(var n=t.length-1;n>0;n--){var e=Math.floor(Math.random()*(n+1)),o=[t[e],t[n]];t[n]=o[0],t[e]=o[1]}return t}e.d(n,"a",function(){return o})}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-04-30-js-075df3172178b618e3ff.js.map