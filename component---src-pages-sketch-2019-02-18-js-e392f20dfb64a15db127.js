(window.webpackJsonp=window.webpackJsonp||[]).push([[90],{244:function(t,n,e){"use strict";e.r(n);e(352),e(105),e(69),e(44),e(106),e(104),e(355);var r=e(12),o=(e(0),e(351)),i=e(358),a=function(t){var n,e,r,o,a=[{letter:"T",x:337,y:225},{letter:"H",x:416,y:225},{letter:"I",x:493,y:225},{letter:"S",x:571,y:225},{letter:"I",x:78,y:375},{letter:"S",x:156,y:375},{letter:"J",x:312,y:375},{letter:"U",x:390,y:375},{letter:"S",x:468,y:375},{letter:"T",x:546,y:375},{letter:"I",x:49,y:525},{letter:"N",x:127,y:525},{letter:"Y",x:283,y:525},{letter:"O",x:361,y:525},{letter:"U",x:439,y:525},{letter:"R",x:517,y:525},{letter:"H",x:22,y:675},{letter:"E",x:100,y:675},{letter:"A",x:178,y:675},{letter:"D",x:256,y:675}].reverse(),c=[function(n){return 240*t.abs(t.sin(n))},function(n){return 240*t.abs(t.cos(n))},function(n){return 240*t.abs(t.tan(n))},function(n){return 240*t.abs(t.sin(n+t.PI))},function(n){return 240*t.abs(t.cos(n+t.PI))},function(n){return 240*t.abs(t.tan(n+t.PI))},function(n){return 240*t.abs(t.sin(-n))},function(n){return 240*t.abs(t.cos(-n))},function(n){return 240*t.abs(t.tan(-n))},function(n){return 240*t.abs(t.sin(-n+t.PI))},function(n){return 240*t.abs(t.cos(-n+t.PI))},function(n){return 240*t.abs(t.tan(-n+t.PI))}],u=0,s=[],f=0;t.preload=function(){n=t.loadFont(Object(i.c)("/assets/Cousine-BoldItalic.otf"))},t.setup=function(){for(t.createCanvas(660,840),t.background(255),t.textAlign(t.LEFT),t.textFont(n),t.textSize(130),t.textLeading(150);Array.from(new Set([e,r,o])).length<3;)e=t.random(c),r=t.random(c),o=t.random(c)},t.draw=function(){t.fill(255,f<2?255:0),t.noStroke();var i,c=a[u],l=c.letter,d=c.x,x=c.y;if(t.text(l,d,x),t.frameCount%60==1){var y=n.textToPoints(l,d,x,130,{sampleFactor:.05});s=s.concat(y.map(function(n){var e=n.x,r=n.y;return{position:t.createVector(e,r),velocity:t.createVector(t.random(-2,2),t.random(-2,2)),acceleration:t.createVector(t.random(-.05,.05),t.random(-.05,.05))}}))}i=t.frameCount/(60*a.length*2),t.stroke(e(i),r(i),o(i),64),s.forEach(function(n,e){var r=n.position,o=n.velocity,i=n.acceleration;s[e].position=r.add(o.add(i)),(r.x<20||r.x>t.width-20||r.y<20||r.y>t.height-20)&&s.splice(e,1)}),s.length>0&&function(){var n=s.map(function(t){return{position:t.position,reached:!1}});n[0].reached=!0;for(var e=function(){var e=2*t.dist(0,0,t.width,t.height),r=void 0,o=void 0;n.forEach(function(i,a){i.reached||n.forEach(function(n,c){if(!n.reached){var u=t.dist(i.position.x,i.position.y,n.position.x,n.position.y);u<e&&(e=u,r=a,o=c)}})}),t.line(n[r].position.x,n[r].position.y,n[o].position.x,n[o].position.y),n[o].reached=!0};n.filter(function(t){return t.reached}).length<n.length;)e()}(),t.frameCount%60==0&&u++,u===a.length&&(u=0,f++),f>2&&t.noLoop()}};n.default=function(t){var n=t.location;return Object(r.c)(o.a,{sketch:a,path:n.pathname})}},352:function(t,n,e){var r=e(9);r(r.P,"Array",{fill:e(353)}),e(67)("fill")},353:function(t,n,e){"use strict";var r=e(34),o=e(100),i=e(18);t.exports=function(t){for(var n=r(this),e=i(n.length),a=arguments.length,c=o(a>1?arguments[1]:void 0,e),u=a>2?arguments[2]:void 0,s=void 0===u?e:o(u,e);s>c;)n[c++]=t;return n}},355:function(t,n,e){"use strict";var r=e(21),o=e(9),i=e(34),a=e(101),c=e(102),u=e(18),s=e(356),f=e(103);o(o.S+o.F*!e(68)(function(t){Array.from(t)}),"Array",{from:function(t){var n,e,o,l,d=i(t),x="function"==typeof this?this:Array,y=arguments.length,h=y>1?arguments[1]:void 0,v=void 0!==h,p=0,b=f(d);if(v&&(h=r(h,y>2?arguments[2]:void 0,2)),null==b||x==Array&&c(b))for(e=new x(n=u(d.length));n>p;p++)s(e,p,v?h(d[p],p):d[p]);else for(l=b.call(d),e=new x;!(o=l.next()).done;p++)s(e,p,v?a(l,h,[o.value,p],!0):o.value);return e.length=p,e}})},356:function(t,n,e){"use strict";var r=e(13),o=e(35);t.exports=function(t,n,e){n in t?r.f(t,n,o(0,e)):t[n]=e}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-02-18-js-e392f20dfb64a15db127.js.map