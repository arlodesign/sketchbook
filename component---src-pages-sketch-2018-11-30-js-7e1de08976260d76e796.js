(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{157:function(t,e,o){"use strict";o.r(e);var n=o(0),r=o.n(n),a=o(262),i=function(t){var e,o,n;function r(t,e){return Math.sqrt(t*t+e*e)}function a(e,o){return r(Math.abs(t.mouseX-e),Math.abs(t.mouseY-o))}t.setup=function(){t.createCanvas(660,840),t.rectMode(t.CENTER),t.noFill(),e=r(t.width,t.height),o=t.width/9,n=t.height/9},t.draw=function(){t.background("white");for(var r=-Math.floor(n/2);r<Math.ceil(n/2);r++)for(var i=-Math.floor(o/2);i<Math.ceil(o/2);i++){var h=t.width/2+27*i,u=t.height/2+27*r,c=a(h,u),s=t.map(c,0,e,90,27);t.strokeWeight(t.map(c,0,e,2,0)),t.rect(h,u,s,s)}},t.touchMoved=function(){if(t.mouseX>=0&&t.mouseY>=0&&t.mouseX<=t.width&&t.mouseY<=t.height)return!1}};e.default=function(t){var e=t.location;return r.a.createElement(a.a,{sketch:i,path:e.pathname,description:"Move pointer or finger over sketch."})}}}]);
//# sourceMappingURL=component---src-pages-sketch-2018-11-30-js-7e1de08976260d76e796.js.map