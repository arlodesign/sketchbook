(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{170:function(n,t,e){"use strict";e.r(t);var i=e(0),a=e.n(i),o=e(262),r=function(n){var t,e,i,a,o;n.setup=function(){n.createCanvas(660,840),n.background("white"),n.noFill(),n.stroke(0),t=n.random(10,20),e=a=n.width/2,i=o=n.height/2},n.draw=function(){var r=n.random([-t,t]),h=n.random([-t,t]);n.strokeWeight(t*n.noise(e,i)),i=o+h,(e=a+r)>0&&i>0&&e<n.width&&i<n.height?(n.line(a,o,e,i),n.line(n.width-a,n.height-o,n.width-e,n.height-i)):n.noLoop(),a=e,o=i}};t.default=function(n){var t=n.location;return a.a.createElement(o.a,{sketch:r,path:t.pathname,description:"Reload page for a different variation."})}}}]);
//# sourceMappingURL=component---src-pages-sketch-2018-12-14-js-d217cbf3940365751c98.js.map