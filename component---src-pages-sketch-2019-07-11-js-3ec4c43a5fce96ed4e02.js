(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{ViKx:function(n,t,e){"use strict";e.d(t,"b",(function(){return i}));var i=function(n,t,e,i,a,o){void 0===o&&(o=!1);var r=n+Math.cos(e)*i,c=t+Math.sin(e)*a;return o?[r,c]:{x:r,y:c}};t.a=function(n,t,e,i,a){void 0===a&&(a=!1);var o=function(n,t,e){return n+Math.cos(t)*e}(n,e,i),r=function(n,t,e){return n+Math.sin(t)*e}(t,e,i);return a?[o,r]:{x:o,y:r}}},sNgg:function(n,t,e){"use strict";e.r(t);var i=e("q1tI"),a=e.n(i),o=e("Bl7J"),r=e("9VVL"),c=(e("PZSu"),e("ViKx")),u={}.DEV&&!1,s=function(n){var t=n.shuffle(["cyan","magenta","yellow"]);n.setup=function(){u&&(n.pixelDensity(1),n.frameRate(30)),n.createCanvas(660,840),n.noFill(),n.strokeWeight(20),n.strokeJoin(n.ROUND),n.createLoop(5,{gif:!!u&&{render:!1,open:!0},noiseRadius:.8})},n.draw=function(){n.blendMode(n.BLEND),n.background(255),n.blendMode(n.MULTIPLY),n.translate(n.width/2,n.height/2),t.forEach((function(t,e){n.stroke(t);for(var i=0;i<n.TWO_PI;i+=n.TWO_PI/50){var a=n.map(n.animLoop.noise2D(e,n.sin(i)),-1,1,0,1),o=Object(c.a)(0,0,i,n.width/2*a),r=o.x,u=o.y;n.point(n.constrain(r,-n.width/3,n.width/3),n.constrain(u,-n.width/3,n.width/3))}}))}};t.default=function(){return a.a.createElement(o.a,null,a.a.createElement(r.a,{sketch:s}))}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-07-11-js-3ec4c43a5fce96ed4e02.js.map