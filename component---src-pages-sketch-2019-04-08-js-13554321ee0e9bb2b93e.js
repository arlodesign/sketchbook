(window.webpackJsonp=window.webpackJsonp||[]).push([[123],{310:function(t,n,r){"use strict";r.r(n);r(445);var i=r(10),o=(r(0),r(443)),a=r(444),c=function(t){var n=function(){function n(n,r){this.x=n,this.y=r,this.freq=t.TWO_PI/(2*t.floor(t.random(10,15))),this.drawFunc=t.random([this.pinwheel,this.horizontalLines,this.verticalLines,this.spiralClockwise,this.spiralCounterclockwise])}var r=n.prototype;return r.draw=function(){t.push(),t.translate(this.x,this.y),this.drawFunc(),t.pop()},r.pinwheel=function(){t.strokeWeight(2);for(var n=0;n<t.TWO_PI;n+=this.freq)t.line.apply(t,Object(a.a)(0,0,n,25/3,!0).concat(Object(a.a)(0,0,n,25,!0)))},r.horizontalLines=function(){t.strokeWeight(2);for(var n=0;n<t.TWO_PI;n+=this.freq){var r=Object(a.a)(0,0,n,23,!0),i=[-r[0],r[1]];t.line.apply(t,r.concat(i))}},r.verticalLines=function(){t.strokeWeight(2);for(var n=0;n<t.TWO_PI;n+=this.freq){var r=Object(a.a)(0,0,n,23,!0),i=[r[0],-r[1]];t.line.apply(t,r.concat(i))}},r.spiralClockwise=function(){var n=t.random(t.TWO_PI);t.noStroke(),t.fill(0);for(var r=0;r<2*t.TWO_PI;r+=this.freq)t.circle.apply(t,Object(a.a)(0,0,r+n,t.map(r,0,2*t.TWO_PI,0,25),!0).concat([2]))},r.spiralCounterclockwise=function(){var n=t.random(t.TWO_PI);t.noStroke(),t.fill(0);for(var r=t.TWO_PI;r>-t.TWO_PI;r-=this.freq)t.circle.apply(t,Object(a.a)(0,0,r+n,t.map(r,t.TWO_PI,-t.TWO_PI,0,25),!0).concat([2]))},n}(),r=[];t.setup=function(){t.createCanvas(660,840);for(var i=30;i<t.width;i+=60)for(var o=30;o<t.height;o+=60)r.push(new n(i,o))},t.draw=function(){t.background(255),r.forEach(function(t){return t.draw()}),t.noLoop()}};n.default=function(t){var n=t.location;return Object(i.c)(o.a,{sketch:c,path:n.pathname,description:""})}},444:function(t,n,r){"use strict";r.d(n,"c",function(){return i}),r.d(n,"d",function(){return o}),r.d(n,"b",function(){return a});var i=function(t,n,r){return t+Math.cos(n)*r},o=function(t,n,r){return t+Math.sin(n)*r},a=function(t,n,r,i,o,a){void 0===a&&(a=!1);var c=t+Math.cos(r)*i,e=n+Math.sin(r)*o;return a?[c,e]:{x:c,y:e}};n.a=function(t,n,r,a,c){void 0===c&&(c=!1);var e=i(t,r,a),s=o(n,r,a);return c?[e,s]:{x:e,y:s}}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-04-08-js-13554321ee0e9bb2b93e.js.map