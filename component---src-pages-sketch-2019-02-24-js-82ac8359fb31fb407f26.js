(window.webpackJsonp=window.webpackJsonp||[]).push([[95],{235:function(t,n,o){"use strict";o.r(n);o(256),o(82),o(260);var r=o(0),i=o.n(r),e=o(258),a=function(t){var n,o=[],r={},i=0;t.setup=function(){t.createCanvas(660,840);var r=t.floor(t.height/20),i=t.floor(t.width/20);o=Array.from({length:r},function(){return Array.from({length:i},function(){return{}})}),n=t.random(20,80),t.background(255),t.colorMode(t.HSB,100),t.noStroke();for(var e=0;e<t.width/20;e++)for(var a=0;a<t.height/20;a++){var l=t.map(t.dist(20*e,20*a,t.width,t.height),20,t.dist(0,0,t.width,t.height),n-20,n+20),c=t.map(t.dist(20*e,20*a,t.width,t.height),20,t.dist(0,0,t.width,t.height),0,100);t.fill(l,c,100),t.rect(20*e,20*a,20,20),o[a][e]={clr:t.color(100-l,50-c,80,10),visitCount:0}}t.blendMode(t.DODGE)},t.draw=function(){r={row:t.constrain(t.floor(t.randomGaussian(o.length/2,o.length/5)),0,o.length-1),col:t.constrain(t.floor(t.randomGaussian(o[0].length/2,o[0].length/5)),0,o[0].length-1)},o[r.row][r.col].visitCount++;var n=o[r.row][r.col],e=n.clr,a=n.visitCount;t.fill(e),t.ellipse(20*r.col+10,20*r.row+10,12,12),10===a&&i++,25===i&&t.noLoop()}};n.default=function(t){var n=t.location;return i.a.createElement(e.a,{sketch:a,path:n.pathname,description:"Be patient. This is going to look like it's doing nothing for a bit."})}},256:function(t,n,o){var r=o(11);r(r.P,"Array",{fill:o(257)}),o(32)("fill")},257:function(t,n,o){"use strict";var r=o(25),i=o(73),e=o(14);t.exports=function(t){for(var n=r(this),o=e(n.length),a=arguments.length,l=i(a>1?arguments[1]:void 0,o),c=a>2?arguments[2]:void 0,h=void 0===c?o:i(c,o);h>l;)n[l++]=t;return n}},260:function(t,n,o){"use strict";var r=o(17),i=o(11),e=o(25),a=o(79),l=o(80),c=o(14),h=o(261),f=o(81);i(i.S+i.F*!o(75)(function(t){Array.from(t)}),"Array",{from:function(t){var n,o,i,s,u=e(t),d="function"==typeof this?this:Array,v=arguments.length,g=v>1?arguments[1]:void 0,w=void 0!==g,p=0,m=f(u);if(w&&(g=r(g,v>2?arguments[2]:void 0,2)),null==m||d==Array&&l(m))for(o=new d(n=c(u.length));n>p;p++)h(o,p,w?g(u[p],p):u[p]);else for(s=m.call(u),o=new d;!(i=s.next()).done;p++)h(o,p,w?a(s,g,[i.value,p],!0):i.value);return o.length=p,o}})},261:function(t,n,o){"use strict";var r=o(26),i=o(54);t.exports=function(t,n,o){n in t?r.f(t,n,i(0,o)):t[n]=o}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-02-24-js-82ac8359fb31fb407f26.js.map