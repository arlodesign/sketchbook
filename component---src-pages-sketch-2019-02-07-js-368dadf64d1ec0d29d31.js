(window.webpackJsonp=window.webpackJsonp||[]).push([[79],{219:function(t,n,i){"use strict";i.r(n);i(323);var o=i(9),r=(i(0),i(322)),a=i(325),e=function(t){var n=[],i=function(){function n(){var n=[function(n){return t.max(15,240*t.abs(t.sin(n)))},function(n){return t.max(15,240*t.abs(t.sin(n+t.PI)))},function(n){return t.max(15,240*t.abs(t.cos(-n)))},function(n){return t.max(15,240*t.abs(t.cos(-n+t.PI)))}];this._cf=[t.random(n),t.random(n),t.random(n)],this.points=new Array(7).fill().map(function(t){return new o})}var i=n.prototype;return i._clr=function(){return t.color(this._cf[0](t.frameCount/1e3),this._cf[1](t.frameCount/1e3),this._cf[2](t.frameCount/1e3))},i.draw=function(){var n=this;t.fill(this._clr()),t.beginShape(),t.vertex(this.points[0].location.x,this.points[0].location.y),this.points.forEach(function(i,o){var r=i.location;0!==o&&(t.quadraticVertex(t.width/2,t.height/2,r.x,r.y),n.points[o].move())}),t.quadraticVertex(t.width/2,t.height/2,this.points[0].location.x,this.points[0].location.y),t.endShape(t.CLOSE)},n}(),o=function(){function n(){this._angle=t.random(t.TWO_PI),this._dist=t.random(t.height/3,t.height/2),this._speed=t.random(-.01,.01),this.location=this._getLocation()}var i=n.prototype;return i._getLocation=function(){return Object(a.a)(t.width/2,t.height/2,this._angle,this._dist)},i.move=function(){this._angle+=this._speed,this.location=this._getLocation()},n}();t.setup=function(){t.createCanvas(660,840),n=new Array(5).fill().map(function(t){return new i}),t.noStroke(),t.blendMode(t.HARD_LIGHT)},t.draw=function(){t.background(0),n.forEach(function(t,n){return t.draw()})}};n.default=function(t){var n=t.location;return Object(o.c)(r.a,{sketch:e,path:n.pathname,description:"Reload page for a different variation."})}},323:function(t,n,i){var o=i(12);o(o.P,"Array",{fill:i(324)}),i(36)("fill")},324:function(t,n,i){"use strict";var o=i(28),r=i(79),a=i(16);t.exports=function(t){for(var n=o(this),i=a(n.length),e=arguments.length,c=r(e>1?arguments[1]:void 0,i),u=e>2?arguments[2]:void 0,s=void 0===u?i:r(u,i);s>c;)n[c++]=t;return n}},325:function(t,n,i){"use strict";i.d(n,"c",function(){return o}),i.d(n,"d",function(){return r}),i.d(n,"b",function(){return a});var o=function(t,n,i){return t+Math.cos(n)*i},r=function(t,n,i){return t+Math.sin(n)*i},a=function(t,n,i,o,r,a){void 0===a&&(a=!1);var e=t+Math.cos(i)*o,c=n+Math.sin(i)*r;return a?[e,c]:{x:e,y:c}};n.a=function(t,n,i,a,e){void 0===e&&(e=!1);var c=o(t,i,a),u=r(n,i,a);return e?[c,u]:{x:c,y:u}}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-02-07-js-368dadf64d1ec0d29d31.js.map