(window.webpackJsonp=window.webpackJsonp||[]).push([[101],{241:function(t,n,e){"use strict";e.r(n);e(74),e(82),e(257);var o=e(304),r=e.n(o),i=e(0),a=e.n(i),c=e(284),u=e.n(c),h=e(255),s=e(256),f=function(t){var n=[],e=0,o=function(){function n(n){this.i=n||this.i,this.stroke=this.i%2?255:0,this.location=t.createVector.apply(t,Object(s.a)(t.width/2,t.height/2,t.random(t.TWO_PI),t.random(t.width/4),!0)),this.velocity=t.createVector(t.random(-1,1),t.random(-1,1)),this.acceleration=u.a.Vector.random2D()}return n.prototype.draw=function(){this.acceleration=t.createVector(t.random(-1,1),t.random(-1,1)),this.velocity.add(this.acceleration),t.strokeWeight(t.map(t.dist(t.width/2,t.height/2,this.location.x,this.location.y),0,t.dist(t.width/2,t.height/2,t.width/2,0),100,10,!0)),t.stroke(this.stroke),t.beginShape(),t.vertex(this.location.x,this.location.y),this.location.add(this.velocity),t.vertex(this.location.x,this.location.y),t.endShape()},r()(n,[{key:"onScreen",get:function(){var n=this.location,e=n.x,o=n.y;return e>0&&e<t.width&&o>0&&o<t.height}}]),n}();t.setup=function(){t.createCanvas(660,840),t.background(255),n=Array.from({length:1e3},function(t,n){return new o(n)})},t.draw=function(){n.forEach(function(t){return t.draw()}),n.filter(function(t){return!t.onScreen}).forEach(function(t){t.constructor(),e++}),e>1e4&&t.noLoop()}};n.default=function(t){var n=t.location;return a.a.createElement(h.a,{sketch:f,path:n.pathname,description:""})}},256:function(t,n,e){"use strict";e.d(n,"b",function(){return o}),e.d(n,"c",function(){return r});var o=function(t,n,e){return t+Math.cos(n)*e},r=function(t,n,e){return t+Math.sin(n)*e};n.a=function(t,n,e,i,a){void 0===a&&(a=!1);var c=o(t,e,i),u=r(n,e,i);return a?[c,u]:{x:c,y:u}}},257:function(t,n,e){"use strict";var o=e(17),r=e(11),i=e(25),a=e(79),c=e(80),u=e(14),h=e(258),s=e(81);r(r.S+r.F*!e(75)(function(t){Array.from(t)}),"Array",{from:function(t){var n,e,r,f,l=i(t),d="function"==typeof this?this:Array,v=arguments.length,p=v>1?arguments[1]:void 0,y=void 0!==p,w=0,m=s(l);if(y&&(p=o(p,v>2?arguments[2]:void 0,2)),null==m||d==Array&&c(m))for(e=new d(n=u(l.length));n>w;w++)h(e,w,y?p(l[w],w):l[w]);else for(f=m.call(l),e=new d;!(r=f.next()).done;w++)h(e,w,y?a(f,p,[r.value,w],!0):r.value);return e.length=w,e}})},258:function(t,n,e){"use strict";var o=e(26),r=e(54);t.exports=function(t,n,e){n in t?o.f(t,n,r(0,e)):t[n]=e}},304:function(t,n){function e(t,n){for(var e=0;e<n.length;e++){var o=n[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}t.exports=function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-03-18-js-b7d037772aaa3240ad6e.js.map