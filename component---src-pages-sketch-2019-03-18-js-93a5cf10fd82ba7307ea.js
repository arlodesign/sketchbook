(window.webpackJsonp=window.webpackJsonp||[]).push([[101],{240:function(t,n,o){"use strict";o.r(n);o(79),o(87),o(281);var r=o(329),e=o.n(r),i=o(9),c=(o(0),o(310)),a=o.n(c),u=o(277),h=o(280),s=function(t){var n=[],o=0,r=function(){function n(n){this.i=n||this.i,this.stroke=this.i%2?255:0,this.location=t.createVector.apply(t,Object(h.a)(t.width/2,t.height/2,t.random(t.TWO_PI),t.random(t.width/4),!0)),this.velocity=t.createVector(t.random(-1,1),t.random(-1,1)),this.acceleration=a.a.Vector.random2D()}return n.prototype.draw=function(){this.acceleration=t.createVector(t.random(-1,1),t.random(-1,1)),this.velocity.add(this.acceleration),t.strokeWeight(t.map(t.dist(t.width/2,t.height/2,this.location.x,this.location.y),0,t.dist(t.width/2,t.height/2,t.width/2,0),100,10,!0)),t.stroke(this.stroke),t.beginShape(),t.vertex(this.location.x,this.location.y),this.location.add(this.velocity),t.vertex(this.location.x,this.location.y),t.endShape()},e()(n,[{key:"onScreen",get:function(){var n=this.location,o=n.x,r=n.y;return o>0&&o<t.width&&r>0&&r<t.height}}]),n}();t.setup=function(){t.createCanvas(660,840),t.background(255),n=Array.from({length:1e3},function(t,n){return new r(n)})},t.draw=function(){n.forEach(function(t){return t.draw()}),n.filter(function(t){return!t.onScreen}).forEach(function(t){t.constructor(),o++}),o>1e4&&t.noLoop()}};n.default=function(t){var n=t.location;return Object(i.c)(u.a,{sketch:s,path:n.pathname,description:""})}},280:function(t,n,o){"use strict";o.d(n,"c",function(){return r}),o.d(n,"d",function(){return e}),o.d(n,"b",function(){return i});var r=function(t,n,o){return t+Math.cos(n)*o},e=function(t,n,o){return t+Math.sin(n)*o},i=function(t,n,o,r,e,i){void 0===i&&(i=!1);var c=t+Math.cos(o)*r,a=n+Math.sin(o)*e;return i?[c,a]:{x:c,y:a}};n.a=function(t,n,o,i,c){void 0===c&&(c=!1);var a=r(t,o,i),u=e(n,o,i);return c?[a,u]:{x:a,y:u}}},281:function(t,n,o){"use strict";var r=o(20),e=o(12),i=o(28),c=o(84),a=o(85),u=o(16),h=o(282),s=o(86);e(e.S+e.F*!o(80)(function(t){Array.from(t)}),"Array",{from:function(t){var n,o,e,f,d=i(t),l="function"==typeof this?this:Array,v=arguments.length,p=v>1?arguments[1]:void 0,y=void 0!==p,w=0,g=s(d);if(y&&(p=r(p,v>2?arguments[2]:void 0,2)),null==g||l==Array&&a(g))for(o=new l(n=u(d.length));n>w;w++)h(o,w,y?p(d[w],w):d[w]);else for(f=g.call(d),o=new l;!(e=f.next()).done;w++)h(o,w,y?c(f,p,[e.value,w],!0):e.value);return o.length=w,o}})},282:function(t,n,o){"use strict";var r=o(29),e=o(57);t.exports=function(t,n,o){n in t?r.f(t,n,e(0,o)):t[n]=o}},329:function(t,n){function o(t,n){for(var o=0;o<n.length;o++){var r=n[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}t.exports=function(t,n,r){return n&&o(t.prototype,n),r&&o(t,r),t}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-03-18-js-93a5cf10fd82ba7307ea.js.map