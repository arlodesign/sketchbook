(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{177:function(t,e,i){"use strict";i.r(e);var o=i(9),n=(i(0),i(281)),r=function(t){var e,i,o,n;t.setup=function(){for(t.createCanvas(660,840);e===i||e%i==0||i%e==0;)e=t.floor(t.random(5,10)),i=t.floor(t.random(5,10));t.frameCountDiv=-t.random(20,30),o=t.height/3,n=-t.frameCountDiv/100,t.background("white"),t.noFill()},t.draw=function(){t.stroke(t.frameCount%e?"rgba(0, 0, 0, 0.3)":255),t.strokeWeight(t.frameCount%i?2*e:2*i);var r=t.width/2+t.sin(t.frameCount/t.frameCountDiv)*o,a=t.height/2+t.cos(t.frameCount/t.frameCountDiv)*o;t.bezier(t.width/2,t.height/2,t.lerp(t.width/2,r,n),t.height/2+t.cos(t.frameCount/t.frameCountDiv+t.HALF_PI)*o,t.width/2+t.sin(t.frameCount/t.frameCountDiv+t.HALF_PI)*o,t.lerp(t.height/2,a,n),r,a),t.bezier(t.width/2,t.height/2,t.lerp(t.width/2,t.width-r,n),t.height/2+t.cos(t.frameCount/t.frameCountDiv-t.HALF_PI)*o,t.width/2+t.sin(t.frameCount/t.frameCountDiv-t.HALF_PI)*o,t.lerp(t.height/2,t.height-a,n),t.width-r,t.height-a),(o-=n)<=0&&t.noLoop()}};e.default=function(t){var e=t.location;return Object(o.c)(n.a,{sketch:r,path:e.pathname,description:"Reload page for a different variation."})}}}]);
//# sourceMappingURL=component---src-pages-sketch-2018-12-24-js-08934275839a827a13b6.js.map