(window.webpackJsonp=window.webpackJsonp||[]).push([[107],{1:function(n,t,i){"use strict";i.d(t,"c",(function(){return o})),i.d(t,"d",(function(){return e})),i.d(t,"b",(function(){return r}));var o=function(n,t,i){return n+Math.cos(t)*i},e=function(n,t,i){return n+Math.sin(t)*i},r=function(n,t,i,o,e){var r=arguments.length>5&&void 0!==arguments[5]&&arguments[5],d=n+Math.cos(i)*o,s=t+Math.sin(i)*e;return r?[d,s]:{x:d,y:s}};t.a=function(n,t,i,r){var d=arguments.length>4&&void 0!==arguments[4]&&arguments[4],s=o(n,i,r),a=e(t,i,r);return d?[s,a]:{x:s,y:a}}},141:function(n,t,i){"use strict";i.r(t);var o=i(0),e=i.n(o);i(1);new e.a((function(n){var t,i=n.random(0,50),o=function(o,e,r){var d,s,a=(d=n.map(n.sin(n.TWO_PI*(r+function(i,o){return t*n.dist(i,o,n.width/2,n.height/2)*n.noise(t*i,t*o)}(o,e))),-1,1,0,1),s=5,d<.5?.5*n.pow(2*d,s):1-.5*n.pow(2*(1-d),s));return n.color(i*a,80*a/2,100*a)};n.setup=function(){n.createCanvas(n.floor(n.windowWidth/10),n.floor(n.windowHeight/10)),n.pixelDensity(10),n.colorMode(n.HSB,100),n.blendMode(n.HARD_LIGHT),n.rectMode(n.CENTER),n.fill(i+50,80,100,50),t=n.TWO_PI/n.height},n.draw=function(){n.background(0);for(var t=1*(n.frameCount-1)%30/30,i=0;i<n.width;i++)for(var e=0;e<n.height;e++)n.stroke(o(i,e,t)),n.point(i,e);n.noStroke(),n.rect(n.width/2,n.height/2,.75*n.width,.75*n.width)},n.windowResized=function(){n.resizeCanvas(n.floor(n.windowWidth/PIXEL_DENSITY),n.floor(n.windowHeight/PIXEL_DENSITY))}}),"sketch"),document.getElementById("description").innerHTML='\nTime well spent playing with\n<a href="https://necessarydisorder.wordpress.com/2017/09/02/animated-stripes-gifs-from-scalar-fields/">\n  this tutorial\n</a>'}},[[141,0,1]]]);