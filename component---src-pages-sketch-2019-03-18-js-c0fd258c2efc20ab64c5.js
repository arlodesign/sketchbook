(window.webpackJsonp=window.webpackJsonp||[]).push([[101],{242:function(t,n,e){"use strict";e.r(n);e(74),e(82),e(268);var r=e(316),o=e.n(r),i=e(0),a=e.n(i),c=e(295),u=e.n(c),h=e(266),s=e(267),f=function(t){var n=[],e=0,r=function(){function n(n){this.i=n||this.i,this.stroke=this.i%2?255:0,this.location=t.createVector.apply(t,Object(s.a)(t.width/2,t.height/2,t.random(t.TWO_PI),t.random(t.width/4),!0)),this.velocity=t.createVector(t.random(-1,1),t.random(-1,1)),this.acceleration=u.a.Vector.random2D()}return n.prototype.draw=function(){this.acceleration=t.createVector(t.random(-1,1),t.random(-1,1)),this.velocity.add(this.acceleration),t.strokeWeight(t.map(t.dist(t.width/2,t.height/2,this.location.x,this.location.y),0,t.dist(t.width/2,t.height/2,t.width/2,0),100,10,!0)),t.stroke(this.stroke),t.beginShape(),t.vertex(this.location.x,this.location.y),this.location.add(this.velocity),t.vertex(this.location.x,this.location.y),t.endShape()},o()(n,[{key:"onScreen",get:function(){var n=this.location,e=n.x,r=n.y;return e>0&&e<t.width&&r>0&&r<t.height}}]),n}();t.setup=function(){t.createCanvas(660,840),t.background(255),n=Array.from({length:1e3},function(t,n){return new r(n)})},t.draw=function(){n.forEach(function(t){return t.draw()}),n.filter(function(t){return!t.onScreen}).forEach(function(t){t.constructor(),e++}),e>1e4&&t.noLoop()}};n.default=function(t){var n=t.location;return a.a.createElement(h.a,{sketch:f,path:n.pathname,description:""})}},267:function(t,n,e){"use strict";e.d(n,"c",function(){return r}),e.d(n,"d",function(){return o}),e.d(n,"b",function(){return i});var r=function(t,n,e){return t+Math.cos(n)*e},o=function(t,n,e){return t+Math.sin(n)*e},i=function(t,n,e,r,o,i){void 0===i&&(i=!1);var a=t+Math.cos(e)*r,c=n+Math.sin(e)*o;return i?[a,c]:{x:a,y:c}};n.a=function(t,n,e,i,a){void 0===a&&(a=!1);var c=r(t,e,i),u=o(n,e,i);return a?[c,u]:{x:c,y:u}}},268:function(t,n,e){"use strict";var r=e(17),o=e(11),i=e(25),a=e(79),c=e(80),u=e(14),h=e(269),s=e(81);o(o.S+o.F*!e(75)(function(t){Array.from(t)}),"Array",{from:function(t){var n,e,o,f,d=i(t),l="function"==typeof this?this:Array,v=arguments.length,p=v>1?arguments[1]:void 0,y=void 0!==p,w=0,m=s(d);if(y&&(p=r(p,v>2?arguments[2]:void 0,2)),null==m||l==Array&&c(m))for(e=new l(n=u(d.length));n>w;w++)h(e,w,y?p(d[w],w):d[w]);else for(f=m.call(d),e=new l;!(o=f.next()).done;w++)h(e,w,y?a(f,p,[o.value,w],!0):o.value);return e.length=w,e}})},269:function(t,n,e){"use strict";var r=e(26),o=e(54);t.exports=function(t,n,e){n in t?r.f(t,n,o(0,e)):t[n]=e}},316:function(t,n){function e(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}t.exports=function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-03-18-js-c0fd258c2efc20ab64c5.js.map