(window.webpackJsonp=window.webpackJsonp||[]).push([[264],{2:function(n,t,e){"use strict";e.r(t),e.d(t,"linear",(function(){return r})),e.d(t,"easeInQuad",(function(){return u})),e.d(t,"easeOutQuad",(function(){return i})),e.d(t,"easeInOutQuad",(function(){return o})),e.d(t,"easeInCubic",(function(){return a})),e.d(t,"easeOutCubic",(function(){return c})),e.d(t,"easeInOutCubic",(function(){return d})),e.d(t,"easeInQuart",(function(){return f})),e.d(t,"easeOutQuart",(function(){return s})),e.d(t,"easeInOutQuart",(function(){return h})),e.d(t,"easeInQuint",(function(){return w})),e.d(t,"easeOutQuint",(function(){return v})),e.d(t,"easeInOutQuint",(function(){return p}));var r=function(n){return n},u=function(n){return n*n},i=function(n){return n*(2-n)},o=function(n){return n<.5?2*n*n:(4-2*n)*n-1},a=function(n){return n*n*n},c=function(n){return--n*n*n+1},d=function(n){return n<.5?4*n*n*n:(n-1)*(2*n-2)*(2*n-2)+1},f=function(n){return n*n*n*n},s=function(n){return 1- --n*n*n*n},h=function(n){return n<.5?8*n*n*n*n:1-8*--n*n*n*n},w=function(n){return n*n*n*n*n},v=function(n){return 1+--n*n*n*n*n},p=function(n){return n<.5?16*n*n*n*n*n:1+16*--n*n*n*n*n}},312:function(n,t,e){"use strict";e.r(t),function(n){var t=e(0),r=e.n(t),u=e(2),i=(e(3),n.env.DEV&&!0);new r.a((function(n){var t;function e(e){var r=n.animLoop,i=r.noise1D,o=r.noise2D,a=(r.theta,n.height*(e/50)),c=n.sin(2*n.animLoop.theta);n.beginShape(),n.curveVertex(-1,a),n.curveVertex(-1,a);for(var d=0;d<=10;d++){var f=t+(n.width-2*t)/10*d+i(d*a)*(n.width/10/3),s=Object(u.easeInOutQuint)(n.map(o(f/50,n.height*(e/50)/50),-1,1,0,1))*n.map(n.abs(n.width/2-f),0,n.width/2,n.height/50*6,0)*c;n.curveVertex(f,a+s)}n.curveVertex(n.width+1,a),n.curveVertex(n.width+1,a),c<0?(n.vertex(n.width+1,n.height+1),n.vertex(-1,n.height+1)):(n.vertex(n.width+1,-1),n.vertex(-1,-1)),n.endShape(n.CLOSE)}n.setup=function(){i&&n.pixelDensity(1),n.createCanvas(n.windowWidth,n.windowHeight),n.createLoop(20,{gif:!!i&&{render:!1,open:!0},noiseRadius:2}),t=n.width/10},n.draw=function(){var t=n.animLoop.theta;if(n.background(255),n.sin(2*t)<0)for(var r=0;r<=50;r++)e(r);else for(var u=50;u>=0;u--)e(u)},n.windowResized=function(){n.resizeCanvas(n.windowWidth,n.windowHeight)}}),"sketch")}.call(this,e(5))}},[[312,0,1]]]);