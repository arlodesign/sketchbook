(window.webpackJsonp=window.webpackJsonp||[]).push([[138],{173:function(n,t,e){"use strict";e.r(t);var i=e(0),o=e.n(i),r=e(9);new o.a((function(n){var t=0,e=[],i=0,o=n.random(33),h=Object(r.a)([1,2,3,5,8,13,21,34].map((function(n){return 100*n})));n.setup=function(){n.createCanvas(n.windowWidth,n.windowHeight),n.background(192),n.colorMode(n.HSB,100),n.blendMode(n.SOFT_LIGHT),n.curveTightness(5),n.strokeWeight(10)},n.draw=function(){var r=[];n.stroke(o+33*t,100,50),console.log(o);for(var a=1/3;a<1;a+=n.noise(n.frameCount/200,i/200)/(i/200)){var d=n.curvePoint(n.map(n.cos(n.frameCount/h[0]),-1,1,0,n.width),i,i,n.map(n.cos(n.frameCount/h[1]),-1,1,0,n.width),a),w=n.curvePoint(0,0,n.height,n.height,a);r.push({x:d,y:w})}for(var c=0;c<n.min(e.length,r.length);c++)n.line(e[c].x,e[c].y,r[c].x,r[c].y),n.line(e[c].x,n.height-e[c].y,r[c].x,n.height-r[c].y),n.line(n.width-e[c].x,e[c].y,n.width-r[c].x,r[c].y),n.line(n.width-e[c].x,n.height-e[c].y,n.width-r[c].x,n.height-r[c].y);e=r,++i>n.width&&(i=0,e=[],++t>2&&n.noLoop())},n.windowResized=function(){n.resizeCanvas(n.windowWidth,n.windowHeight)}}),"sketch")},9:function(n,t,e){"use strict";function i(n){for(var t=n.length-1;t>0;t--){var e=Math.floor(Math.random()*(t+1)),i=[n[e],n[t]];n[t]=i[0],n[e]=i[1]}return n}e.d(t,"a",(function(){return i}))}},[[173,0,1]]]);