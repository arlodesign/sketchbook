(window.webpackJsonp=window.webpackJsonp||[]).push([[150],{"5CsT":function(t,r,e){"use strict";e.r(r);e("XfO3"),e("HEwt"),e("a1Th"),e("Btvt"),e("rE2o"),e("ioFf"),e("rGqo"),e("bHtr");var n=e("q1tI"),a=e.n(n),o=e("Bl7J"),i=e("9VVL"),c=(e("PZSu"),e("ViKx"));function u(t){return function(t){if(Array.isArray(t)){for(var r=0,e=new Array(t.length);r<t.length;r++)e[r]=t[r];return e}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var p={}.DEV&&!0,l=function(t){var r=t.random(33),e=[r,r+33,r+66],n=Array(5).fill().map((function(r,e){return t.floor(t.random(e,e+3))}));t.setup=function(){t.createCanvas(660,840),t.colorMode(t.HSL,100),t.background(t.random(e),100,10),t.createLoop(180,{noiseRadius:.5})},t.draw=function(){var r=t.animLoop,a=r.theta,o=r.noise1D,i=Object(c.a)(0,0,2*a,t.height/3,!0),l=Object(c.a)(0,0,-a*n[0],t.width/2*o(n[0]/100),!0),f=Object(c.a)(0,0,a*n[1],t.width/2*o(n[1]/100),!0),s=Object(c.a)(0,0,2*-a,t.width/3,!0);t.translate(t.width/2,t.height/2),t.rotate(a),t.stroke(e[t.floor(t.map(t.sin(a*n[2]),-1,1,0,3))],100,t.map(t.sin(a*n[3]),-1,1,50,100),t.map(t.cos(a*n[4]),-1,1,10,0)),t.noFill(),t.beginShape(),t.curveVertex.apply(t,u(i)),t.curveVertex.apply(t,u(l)),t.curveVertex.apply(t,u(f)),t.curveVertex.apply(t,u(s)),t.curveVertex.apply(t,u(i)),t.curveVertex.apply(t,u(l)),t.curveVertex.apply(t,u(f)),t.endShape(),10800===t.frameCount&&(t.noLoop(),p&&alert("done"))}};r.default=function(){return a.a.createElement(o.a,null,a.a.createElement(i.a,{sketch:l}))}},ViKx:function(t,r,e){"use strict";e.d(r,"b",(function(){return n}));var n=function(t,r,e,n,a,o){void 0===o&&(o=!1);var i=t+Math.cos(e)*n,c=r+Math.sin(e)*a;return o?[i,c]:{x:i,y:c}};r.a=function(t,r,e,n,a){void 0===a&&(a=!1);var o=function(t,r,e){return t+Math.cos(r)*e}(t,e,n),i=function(t,r,e){return t+Math.sin(r)*e}(r,e,n);return a?[o,i]:{x:o,y:i}}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-10-06-js-d9b035d074947b2a363e.js.map