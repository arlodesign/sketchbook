(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{259:function(e,t,o){"use strict";o.r(t);o(450);var r=o(10),n=(o(0),o(448)),i=function(e){e.setup=function(){e.createCanvas(660,840),e.noStroke()},e.draw=function(){e.background("white");for(var t=[],o=0;o<=e.height+0;o+=10)t.push({y:o,distFromMouse:e.abs(o-e.mouseY)});var r=e.max.apply(e,t.map(function(e){return e.distFromMouse}));t.forEach(function(o,n){o.y;var i=o.distFromMouse,u=e.map(i,0,r,e.map(e.mouseY,0,e.height,7,2),0);t[n].ex=e.pow(u,u)});var n=t.reduce(function(e,t){return e+t.ex},0),i=[0],u=0;t.forEach(function(t){var o=t.ex/n;i.push(u+e.height*o),u+=e.height*o});t.forEach(function(t,o){var r=t.y,u=t.ex/n,a=(e.height,i[o]),c=i[o+1];e.fill(o%2?255:0),e.beginShape(),e.vertex(0,r),e.quadraticVertex(e.mouseX,a,e.width,r),e.vertex(e.width,r+10),e.quadraticVertex(e.mouseX,c,0,r+10),e.endShape()})},e.touchMoved=function(){if(e.mouseX>=0&&e.mouseY>=0&&e.mouseX<=e.width&&e.mouseY<=e.height)return!1}};t.default=function(e){var t=e.location;return Object(r.c)(n.a,{sketch:i,path:t.pathname,description:"Move pointer or finger over sketch."})}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-01-30-js-b2b2b48a1183737170d9.js.map