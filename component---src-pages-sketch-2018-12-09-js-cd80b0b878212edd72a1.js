(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{jAsy:function(t,i,n){"use strict";n.r(i);n("q1tI");var e=n("Gmm/"),o=n("qKvR"),a=function(t){var i,n,e=0,o=10,a={};t.setup=function(){t.createCanvas(660,840),t.background("black"),t.noFill(),a={width:t.width/1.6180339887,height:t.height/1.6180339887},i=t.random(1,3)*t.random(),n=i*t.noise(i)*10},t.draw=function(){e+=i,o+=n;var h=t.noise(e,o),r=t.cos(e*h)*o,c=t.sin(e*h)*o,s=t.sin(e*h)*o,d=t.cos(e*h)*o;t.stroke("rgba(255, 255, 255, "+h+")"),t.strokeWeight(i*h+1),t.line(a.width,a.height,r,c),t.line(a.width,a.height,s,d),r>1.6180339887*t.width&&c>1.6180339887*t.height&&t.noLoop()}};i.default=function(t){var i=t.location;return Object(o.c)(e.a,{sketch:a,path:i.pathname,description:"Reload page for a different variation."})}}}]);
//# sourceMappingURL=component---src-pages-sketch-2018-12-09-js-cd80b0b878212edd72a1.js.map