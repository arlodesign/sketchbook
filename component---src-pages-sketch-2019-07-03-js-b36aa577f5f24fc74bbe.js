(window.webpackJsonp=window.webpackJsonp||[]).push([[81],{ViKx:function(t,n,e){"use strict";e.d(n,"b",(function(){return i}));var i=function(t,n,e,i,r,a){void 0===a&&(a=!1);var c=t+Math.cos(e)*i,o=n+Math.sin(e)*r;return a?[c,o]:{x:c,y:o}};n.a=function(t,n,e,i,r){void 0===r&&(r=!1);var a=function(t,n,e){return t+Math.cos(n)*e}(t,e,i),c=function(t,n,e){return t+Math.sin(n)*e}(n,e,i);return r?[a,c]:{x:a,y:c}}},zCwg:function(t,n,e){"use strict";e.r(n);e("bHtr");var i=e("q1tI"),r=e.n(i),a=e("Bl7J"),c=e("9VVL"),o=e("ViKx"),h=function(t){var n,e,i=["red","green","blue"];t.setup=function(){t.createCanvas(660,840),n=t.width/20,e=t.width*(1/6),t.strokeWeight(2)},t.draw=function(){t.blendMode(t.BLEND),t.background(0),t.fill(255),t.noStroke(),t.circle(t.width/2,t.height/2,t.width-e/2),t.noFill(),t.blendMode(t.MULTIPLY);for(var r=t.map(t.frameCount%1200,0,1200,0,t.TWO_PI),a=t.map(t.sin(3*r),-1,1,0,t.width/2-e),c=[Object(o.a)(t.width/2,t.height/2,r,a),Object(o.a)(t.width/2,t.height/2,r+t.TWO_PI*(1/3),a),Object(o.a)(t.width/2,t.height/2,r+t.TWO_PI*(2/3),a)],h=function(n){var r=t.lerp(6,t.width-e,n);c.forEach((function(e,a){t.stroke(i[a]);var c=t.lerp(e.x,t.width/2,n),o=t.lerp(e.y,t.height/2,n);t.circle(c,o,r)}))},u=0;u<1;u+=1/n)h(u)}};n.default=function(){return r.a.createElement(a.a,null,r.a.createElement(c.a,{sketch:h}))}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-07-03-js-b36aa577f5f24fc74bbe.js.map