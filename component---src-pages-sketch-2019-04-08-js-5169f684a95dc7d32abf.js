(window.webpackJsonp=window.webpackJsonp||[]).push([[122],{276:function(t,n,r){"use strict";r.r(n);r(351);var i=r(12),o=(r(0),r(350)),a=r(353),e=function(t){var n=function(){function n(n,r){this.x=n,this.y=r,this.freq=t.TWO_PI/(2*t.floor(t.random(10,15))),this.drawFunc=t.random([this.pinwheel,this.horizontalLines,this.verticalLines,this.spiralClockwise,this.spiralCounterclockwise])}var r=n.prototype;return r.draw=function(){t.push(),t.translate(this.x,this.y),this.drawFunc(),t.pop()},r.pinwheel=function(){t.strokeWeight(2);for(var n=0;n<t.TWO_PI;n+=this.freq)t.line.apply(t,Object(a.a)(0,0,n,25/3,!0).concat(Object(a.a)(0,0,n,25,!0)))},r.horizontalLines=function(){t.strokeWeight(2);for(var n=0;n<t.TWO_PI;n+=this.freq){var r=Object(a.a)(0,0,n,23,!0),i=[-r[0],r[1]];t.line.apply(t,r.concat(i))}},r.verticalLines=function(){t.strokeWeight(2);for(var n=0;n<t.TWO_PI;n+=this.freq){var r=Object(a.a)(0,0,n,23,!0),i=[r[0],-r[1]];t.line.apply(t,r.concat(i))}},r.spiralClockwise=function(){var n=t.random(t.TWO_PI);t.noStroke(),t.fill(0);for(var r=0;r<2*t.TWO_PI;r+=this.freq)t.circle.apply(t,Object(a.a)(0,0,r+n,t.map(r,0,2*t.TWO_PI,0,25),!0).concat([2]))},r.spiralCounterclockwise=function(){var n=t.random(t.TWO_PI);t.noStroke(),t.fill(0);for(var r=t.TWO_PI;r>-t.TWO_PI;r-=this.freq)t.circle.apply(t,Object(a.a)(0,0,r+n,t.map(r,t.TWO_PI,-t.TWO_PI,0,25),!0).concat([2]))},n}(),r=[];t.setup=function(){t.createCanvas(660,840);for(var i=30;i<t.width;i+=60)for(var o=30;o<t.height;o+=60)r.push(new n(i,o))},t.draw=function(){t.background(255),r.forEach(function(t){return t.draw()}),t.noLoop()}};n.default=function(t){var n=t.location;return Object(i.c)(o.a,{sketch:e,path:n.pathname,description:""})}},351:function(t,n,r){var i=r(9);i(i.P,"Array",{fill:r(352)}),r(67)("fill")},352:function(t,n,r){"use strict";var i=r(34),o=r(100),a=r(18);t.exports=function(t){for(var n=i(this),r=a(n.length),e=arguments.length,c=o(e>1?arguments[1]:void 0,r),s=e>2?arguments[2]:void 0,u=void 0===s?r:o(s,r);u>c;)n[c++]=t;return n}},353:function(t,n,r){"use strict";r.d(n,"c",function(){return i}),r.d(n,"d",function(){return o}),r.d(n,"b",function(){return a});var i=function(t,n,r){return t+Math.cos(n)*r},o=function(t,n,r){return t+Math.sin(n)*r},a=function(t,n,r,i,o,a){void 0===a&&(a=!1);var e=t+Math.cos(r)*i,c=n+Math.sin(r)*o;return a?[e,c]:{x:e,y:c}};n.a=function(t,n,r,a,e){void 0===e&&(e=!1);var c=i(t,r,a),s=o(n,r,a);return e?[c,s]:{x:c,y:s}}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-04-08-js-5169f684a95dc7d32abf.js.map