(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{60:function(n,e,o){"use strict";o.r(e);var i=o(0);new(o.n(i).a)((function(n){var e,o,i;n.setup=function(){n.createCanvas(n.windowWidth,n.windowHeight),n.background(255),n.strokeWeight(.75),e=n.random(250,350),o=n.width/2,i=n.height/2},n.draw=function(){var t,a,r,s;t=o+n.cos(n.frameCount%2160*(n.TWO_PI/2160))*e/2,a=i+n.sin(n.frameCount%2160*(n.TWO_PI/2160))*e/2,r=o+n.cos(n.frameCount%2160*(n.TWO_PI/2160))*e,s=i+n.sin(n.frameCount%2160*(n.TWO_PI/2160))*e;var u=o+n.cos(n.frameCount%2160)*(e/7),c=i+n.sin(n.frameCount%2160)*(e/7),d=n.noise(n.frameCount)*e,f=o+n.cos(n.frameCount%2160+e)*(e+d),w=i+n.sin(n.frameCount%2160+e)*(e+d),m="rgba(0, 0, 0, ".concat(n.noise(u,c)/2,")");n.stroke(m),n.noFill(),n.bezier(u,c,f,w,r,s,t,a),n.fill(m),n.ellipse(f,w,2),2160===n.frameCount&&n.noLoop()},n.windowResized=function(){n.resizeCanvas(n.windowWidth,n.windowHeight)}}),"sketch"),document.getElementById("description").innerHTML="Reload page for a different variation."}},[[60,0,1]]]);