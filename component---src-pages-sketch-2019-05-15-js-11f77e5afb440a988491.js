(window.webpackJsonp=window.webpackJsonp||[]).push([[159],{313:function(t,n,i){"use strict";i.r(n);i(347),i(104),i(350);var e=i(12),r=(i(0),i(346)),a=i(349),o=function(t){var n=Array.from(Array(4),function(){return t.TWO_PI*t.random()/750}),i=[0,t.HALF_PI,t.PI,t.PI+t.HALF_PI];t.setup=function(){t.createCanvas(660,840),t.noStroke()},t.draw=function(){var e=t.height/2;t.blendMode(t.BLEND),t.background(255),t.blendMode(t.MULTIPLY),t.fill("yellow"),t.quad.apply(t,Object(a.a)(t.width/2,t.height/2,i[0],e,!0).concat(Object(a.a)(t.width/2,t.height/2,i[1],e,!0),Object(a.a)(t.width/2,t.height/2,i[2],e,!0),Object(a.a)(t.width/2,t.height/2,i[3],e,!0))),t.fill("magenta"),t.quad.apply(t,Object(a.a)(t.width/2,t.height/2,t.TWO_PI/3+i[0],e,!0).concat(Object(a.a)(t.width/2,t.height/2,t.TWO_PI/3+i[1],e,!0),Object(a.a)(t.width/2,t.height/2,t.TWO_PI/3+i[2],e,!0),Object(a.a)(t.width/2,t.height/2,t.TWO_PI/3+i[3],e,!0))),t.fill("cyan"),t.quad.apply(t,Object(a.a)(t.width/2,t.height/2,t.TWO_PI/3*2+i[0],e,!0).concat(Object(a.a)(t.width/2,t.height/2,t.TWO_PI/3*2+i[1],e,!0),Object(a.a)(t.width/2,t.height/2,t.TWO_PI/3*2+i[2],e,!0),Object(a.a)(t.width/2,t.height/2,t.TWO_PI/3*2+i[3],e,!0)));for(var r=0;r<i.length;r++)i[r]+=n[r]}};n.default=function(t){var n=t.location;return Object(e.c)(r.a,{sketch:o,path:n.pathname,description:""})}},347:function(t,n,i){var e=i(9);e(e.P,"Array",{fill:i(348)}),i(67)("fill")},348:function(t,n,i){"use strict";var e=i(34),r=i(100),a=i(18);t.exports=function(t){for(var n=e(this),i=a(n.length),o=arguments.length,c=r(o>1?arguments[1]:void 0,i),h=o>2?arguments[2]:void 0,u=void 0===h?i:r(h,i);u>c;)n[c++]=t;return n}},349:function(t,n,i){"use strict";i.d(n,"c",function(){return e}),i.d(n,"d",function(){return r}),i.d(n,"b",function(){return a});var e=function(t,n,i){return t+Math.cos(n)*i},r=function(t,n,i){return t+Math.sin(n)*i},a=function(t,n,i,e,r,a){void 0===a&&(a=!1);var o=t+Math.cos(i)*e,c=n+Math.sin(i)*r;return a?[o,c]:{x:o,y:c}};n.a=function(t,n,i,a,o){void 0===o&&(o=!1);var c=e(t,i,a),h=r(n,i,a);return o?[c,h]:{x:c,y:h}}},350:function(t,n,i){"use strict";var e=i(21),r=i(9),a=i(34),o=i(101),c=i(102),h=i(18),u=i(351),d=i(103);r(r.S+r.F*!i(68)(function(t){Array.from(t)}),"Array",{from:function(t){var n,i,r,f,l=a(t),s="function"==typeof this?this:Array,v=arguments.length,w=v>1?arguments[1]:void 0,O=void 0!==w,g=0,b=d(l);if(O&&(w=e(w,v>2?arguments[2]:void 0,2)),null==b||s==Array&&c(b))for(i=new s(n=h(l.length));n>g;g++)u(i,g,O?w(l[g],g):l[g]);else for(f=b.call(l),i=new s;!(r=f.next()).done;g++)u(i,g,O?o(f,w,[r.value,g],!0):r.value);return i.length=g,i}})},351:function(t,n,i){"use strict";var e=i(13),r=i(35);t.exports=function(t,n,i){n in t?e.f(t,n,r(0,i)):t[n]=i}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-05-15-js-11f77e5afb440a988491.js.map