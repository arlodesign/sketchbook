(window.webpackJsonp=window.webpackJsonp||[]).push([[149],{336:function(t,n,o){"use strict";o.r(n);var e=o(10),i=(o(0),o(440)),r=o(443),a=function(t){var n,o,e=0,i=10,a={};t.setup=function(){t.createCanvas(660,840),t.background(0),t.noFill(),a={width:t.width/1.6180339887,height:t.height/1.6180339887},n=t.random(1,3)*t.random(),o=n*t.noise(n)*10},t.draw=function(){e+=n,i+=o;var c=t.noise(e,i),h=t.cos(e*c)*i,s=t.sin(e*c)*i,d=t.sin(e*c)*i,u=t.cos(e*c)*i;t.stroke("rgba(255, 255, 255, "+c+")"),Object(r.a)(t,a.width,a.height,h,s,c/100),Object(r.a)(t,a.width,a.height,d,u,c/100),h>1.6180339887*t.width&&s>1.6180339887*t.height&&t.noLoop()}};n.default=function(t){var n=t.location;return Object(e.c)(i.a,{sketch:a,path:n.pathname,description:""})}},443:function(t,n,o){"use strict";n.a=function(t,n,o,e,i,r,a){if(void 0===a&&(a=!0),r<=0)throw new Error("rate for lerpLine() must be greater than zero");for(var c=0;c<1;c+=r)(0!==c||a)&&t.random()>c&&t.point(t.lerp(n,e,c),t.lerp(o,i,c))}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-05-04-js-b5e833694e735ebb6517.js.map