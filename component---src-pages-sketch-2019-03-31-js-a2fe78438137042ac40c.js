(window.webpackJsonp=window.webpackJsonp||[]).push([[114],{302:function(t,n,i){"use strict";i.r(n);var e=i(10),o=(i(0),i(433)),r=i(434),a=(i(447),function(t){t.setup=function(){t.createCanvas(660,840),t.colorMode(t.HSB,100)},t.draw=function(){t.background(0);for(var n=0;n<3;n++)for(var i=t.map(n,0,3,0,100),e=0;e<50;e++){var o=Object(r.b)(t.width/2,t.height/2,t.TWO_PI/3*n+t.frameCount/500,1.5*t.width,1.5*t.height,!0),a=Object(r.b)(t.width/2,t.height/2,t.TWO_PI/50*e+t.frameCount/75,t.map(t.sin(t.frameCount/1e3),-1,1,0,1)*(t.width/2)-40,t.height/10,!0),h=t.map(a[1],t.height/2-t.height/10,t.height/2+t.height/10,.2,1);t.dist.apply(t,o.concat(a));t.strokeWeight(3*h),t.stroke(i,75,100*h,100*h),t.line.apply(t,o.concat(a))}}});n.default=function(t){var n=t.location;return Object(e.c)(o.a,{sketch:a,path:n.pathname,description:""})}},434:function(t,n,i){"use strict";i.d(n,"c",function(){return e}),i.d(n,"d",function(){return o}),i.d(n,"b",function(){return r});var e=function(t,n,i){return t+Math.cos(n)*i},o=function(t,n,i){return t+Math.sin(n)*i},r=function(t,n,i,e,o,r){void 0===r&&(r=!1);var a=t+Math.cos(i)*e,h=n+Math.sin(i)*o;return r?[a,h]:{x:a,y:h}};n.a=function(t,n,i,r,a){void 0===a&&(a=!1);var h=e(t,i,r),c=o(n,i,r);return a?[h,c]:{x:h,y:c}}},447:function(t,n,i){"use strict";i(435);n.a=function(t,n){void 0===n&&(n=.5);var i=t.width*t.height*.02;console.log(i),t.push();for(var e=0;e<i;e++)t.fill(e%2?"rgba(0, 0, 0, "+n+")":"rgba(255, 255, 255, "+n+")"),t.noStroke(),t.ellipse(t.randomGaussian(t.width/2,t.width/3),t.randomGaussian(t.height/2,t.height/3),1/(t.pixelDensity()/2));t.pop()}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-03-31-js-a2fe78438137042ac40c.js.map