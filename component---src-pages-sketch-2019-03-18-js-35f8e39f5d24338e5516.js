(window.webpackJsonp=window.webpackJsonp||[]).push([[99],{DCzN:function(t,n,i){"use strict";i.r(n);i("XfO3"),i("HEwt");var o=i("W8MJ"),e=i.n(o),r=i("qKvR"),c=(i("q1tI"),i("I335")),a=i.n(c),h=i("Gmm/"),u=i("ViKx"),s=function(t){var n=[],i=0,o=function(){function n(n){this.i=n||this.i,this.stroke=this.i%2?255:0,this.location=t.createVector.apply(t,Object(u.a)(t.width/2,t.height/2,t.random(t.TWO_PI),t.random(t.width/4),!0)),this.velocity=t.createVector(t.random(-1,1),t.random(-1,1)),this.acceleration=a.a.Vector.random2D()}return n.prototype.draw=function(){this.acceleration=t.createVector(t.random(-1,1),t.random(-1,1)),this.velocity.add(this.acceleration),t.strokeWeight(t.map(t.dist(t.width/2,t.height/2,this.location.x,this.location.y),0,t.dist(t.width/2,t.height/2,t.width/2,0),100,10,!0)),t.stroke(this.stroke),t.beginShape(),t.vertex(this.location.x,this.location.y),this.location.add(this.velocity),t.vertex(this.location.x,this.location.y),t.endShape()},e()(n,[{key:"onScreen",get:function(){var n=this.location,i=n.x,o=n.y;return i>0&&i<t.width&&o>0&&o<t.height}}]),n}();t.setup=function(){t.createCanvas(660,840),t.background(255),n=Array.from({length:1e3},(function(t,n){return new o(n)}))},t.draw=function(){n.forEach((function(t){return t.draw()})),n.filter((function(t){return!t.onScreen})).forEach((function(t){t.constructor(),i++})),i>1e4&&t.noLoop()}};n.default=function(t){var n=t.location;return Object(r.c)(h.a,{sketch:s,path:n.pathname,description:""})}},ViKx:function(t,n,i){"use strict";i.d(n,"c",(function(){return o})),i.d(n,"d",(function(){return e})),i.d(n,"b",(function(){return r}));var o=function(t,n,i){return t+Math.cos(n)*i},e=function(t,n,i){return t+Math.sin(n)*i},r=function(t,n,i,o,e,r){void 0===r&&(r=!1);var c=t+Math.cos(i)*o,a=n+Math.sin(i)*e;return r?[c,a]:{x:c,y:a}};n.a=function(t,n,i,r,c){void 0===c&&(c=!1);var a=o(t,i,r),h=e(n,i,r);return c?[a,h]:{x:a,y:h}}},W8MJ:function(t,n){function i(t,n){for(var i=0;i<n.length;i++){var o=n[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}t.exports=function(t,n,o){return n&&i(t.prototype,n),o&&i(t,o),t}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-03-18-js-35f8e39f5d24338e5516.js.map