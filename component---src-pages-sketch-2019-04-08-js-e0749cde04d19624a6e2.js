(window.webpackJsonp=window.webpackJsonp||[]).push([[119],{ViKx:function(t,n,r){"use strict";r.d(n,"c",(function(){return i})),r.d(n,"d",(function(){return o})),r.d(n,"b",(function(){return a}));var i=function(t,n,r){return t+Math.cos(n)*r},o=function(t,n,r){return t+Math.sin(n)*r},a=function(t,n,r,i,o,a){void 0===a&&(a=!1);var e=t+Math.cos(r)*i,c=n+Math.sin(r)*o;return a?[e,c]:{x:e,y:c}};n.a=function(t,n,r,a,e){void 0===e&&(e=!1);var c=i(t,r,a),s=o(n,r,a);return e?[c,s]:{x:c,y:s}}},ZQTl:function(t,n,r){"use strict";r.r(n);r("YbXK"),r("cFtU"),r("q8oJ"),r("8npG"),r("m210"),r("4DPX"),r("rzGZ"),r("n0hJ"),r("q1tI");var i=r("Gmm/"),o=r("ViKx"),a=r("qKvR");function e(t){return function(t){if(Array.isArray(t)){for(var n=0,r=new Array(t.length);n<t.length;n++)r[n]=t[n];return r}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var c=function(t){var n=function(){function n(n,r){this.x=n,this.y=r,this.freq=t.TWO_PI/(2*t.floor(t.random(10,15))),this.drawFunc=t.random([this.pinwheel,this.horizontalLines,this.verticalLines,this.spiralClockwise,this.spiralCounterclockwise])}var r=n.prototype;return r.draw=function(){t.push(),t.translate(this.x,this.y),this.drawFunc(),t.pop()},r.pinwheel=function(){t.strokeWeight(2);for(var n=0;n<t.TWO_PI;n+=this.freq)t.line.apply(t,e(Object(o.a)(0,0,n,25/3,!0)).concat(e(Object(o.a)(0,0,n,25,!0))))},r.horizontalLines=function(){t.strokeWeight(2);for(var n=0;n<t.TWO_PI;n+=this.freq){var r=Object(o.a)(0,0,n,23,!0),i=[-r[0],r[1]];t.line.apply(t,e(r).concat(i))}},r.verticalLines=function(){t.strokeWeight(2);for(var n=0;n<t.TWO_PI;n+=this.freq){var r=Object(o.a)(0,0,n,23,!0),i=[r[0],-r[1]];t.line.apply(t,e(r).concat(i))}},r.spiralClockwise=function(){var n=t.random(t.TWO_PI);t.noStroke(),t.fill(0);for(var r=0;r<2*t.TWO_PI;r+=this.freq)t.circle.apply(t,e(Object(o.a)(0,0,r+n,t.map(r,0,2*t.TWO_PI,0,25),!0)).concat([2]))},r.spiralCounterclockwise=function(){var n=t.random(t.TWO_PI);t.noStroke(),t.fill(0);for(var r=t.TWO_PI;r>-t.TWO_PI;r-=this.freq)t.circle.apply(t,e(Object(o.a)(0,0,r+n,t.map(r,t.TWO_PI,-t.TWO_PI,0,25),!0)).concat([2]))},n}(),r=[];t.setup=function(){t.createCanvas(660,840);for(var i=30;i<t.width;i+=60)for(var o=30;o<t.height;o+=60)r.push(new n(i,o))},t.draw=function(){t.background(255),r.forEach((function(t){return t.draw()})),t.noLoop()}};n.default=function(t){var n=t.location;return Object(a.c)(i.a,{sketch:c,path:n.pathname,description:""})}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-04-08-js-e0749cde04d19624a6e2.js.map