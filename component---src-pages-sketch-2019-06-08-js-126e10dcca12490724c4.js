(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{ViKx:function(t,n,e){"use strict";e.d(n,"b",(function(){return r}));var r=function(t,n,e,r,a,o){void 0===o&&(o=!1);var i=t+Math.cos(e)*r,c=n+Math.sin(e)*a;return o?[i,c]:{x:i,y:c}};n.a=function(t,n,e,r,a){void 0===a&&(a=!1);var o=function(t,n,e){return t+Math.cos(n)*e}(t,e,r),i=function(t,n,e){return t+Math.sin(n)*e}(n,e,r);return a?[o,i]:{x:o,y:i}}},eVMw:function(t,n,e){"use strict";e.r(n);e("a1Th"),e("Btvt"),e("rE2o"),e("ioFf"),e("rGqo"),e("Vd3H"),e("bHtr"),e("XfO3"),e("HEwt");var r=e("q1tI"),a=e.n(r),o=e("Bl7J"),i=e("9VVL"),c=e("ViKx");function u(t){return function(t){if(Array.isArray(t)){for(var n=0,e=new Array(t.length);n<t.length;n++)e[n]=t[n];return e}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var s=function(t){var n=t.random(80),e=[],r=function(){function n(){this.angle=t.random(t.TWO_PI),this.distance=t.random(t.height*(2/3)),this.speed=t.random([-1,1])*t.random(1e-4,.001)}var e=n.prototype;return e.get=function(){return Object(c.a)(t.width/2,t.height/2,this.angle,this.distance,!0)},e.update=function(){this.angle+=this.speed,this.angle<0&&(this.angle=t.TWO_PI+this.angle),this.angle>t.TWO_PI&&(this.angle=this.angle-t.TWO_PI),this.distance=this.distance>0?this.distance-.03:0},n}();t.setup=function(){t.createCanvas(660,840),t.noStroke(),t.colorMode(t.HSL,100),t.background(n,100,0),e=Array.from(Array(10),(function(){return new r}))},t.draw=function(){var r=e.filter((function(t){return t.distance>0})),a=t.color(t.map(t.cos(t.frameCount/1e3),-1,1,n,n+20),t.map(t.sin(t.frameCount/50),-1,1,80,100),t.map(t.cos(t.frameCount/500),-1,1,0,100),80);1!==r.length?2===r.length?(t.noFill(),t.stroke(a),t.line.apply(t,u(r[0].get()).concat(u(r[1].get()))),r[0].update(),r[1].update()):(t.noStroke(),t.fill(a),t.beginShape(),r.sort((function(t,n){return t.angle-n.angle})).forEach((function(n){t.vertex.apply(t,u(n.get())),n.update()})),t.endShape(t.CLOSE)):t.noLoop()}};n.default=function(){return a.a.createElement(o.a,null,a.a.createElement(i.a,{sketch:s}))}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-06-08-js-126e10dcca12490724c4.js.map