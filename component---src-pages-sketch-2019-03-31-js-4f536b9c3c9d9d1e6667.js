(window.webpackJsonp=window.webpackJsonp||[]).push([[111],{"4kDE":function(t,n,i){"use strict";i.r(n);var r=i("qKvR"),e=(i("q1tI"),i("Gmm/")),o=i("ViKx"),a=(i("JRrc"),function(t){t.setup=function(){t.createCanvas(660,840),t.colorMode(t.HSB,100)},t.draw=function(){t.background(0);for(var n=0;n<3;n++)for(var i=t.map(n,0,3,0,100),r=0;r<50;r++){var e=Object(o.b)(t.width/2,t.height/2,t.TWO_PI/3*n+t.frameCount/500,1.5*t.width,1.5*t.height,!0),a=Object(o.b)(t.width/2,t.height/2,t.TWO_PI/50*r+t.frameCount/75,t.map(t.sin(t.frameCount/1e3),-1,1,0,1)*(t.width/2)-40,t.height/10,!0),c=t.map(a[1],t.height/2-t.height/10,t.height/2+t.height/10,.2,1);t.dist.apply(t,e.concat(a));t.strokeWeight(3*c),t.stroke(i,75,100*c,100*c),t.line.apply(t,e.concat(a))}}});n.default=function(t){var n=t.location;return Object(r.c)(e.a,{sketch:a,path:n.pathname,description:""})}},JRrc:function(t,n,i){"use strict";i("bHtr");n.a=function(t,n){void 0===n&&(n=.5);var i=t.width*t.height*.02;console.log(i),t.push();for(var r=0;r<i;r++)t.fill(r%2?"rgba(0, 0, 0, "+n+")":"rgba(255, 255, 255, "+n+")"),t.noStroke(),t.ellipse(t.randomGaussian(t.width/2,t.width/3),t.randomGaussian(t.height/2,t.height/3),1/(t.pixelDensity()/2));t.pop()}},ViKx:function(t,n,i){"use strict";i.d(n,"c",(function(){return r})),i.d(n,"d",(function(){return e})),i.d(n,"b",(function(){return o}));var r=function(t,n,i){return t+Math.cos(n)*i},e=function(t,n,i){return t+Math.sin(n)*i},o=function(t,n,i,r,e,o){void 0===o&&(o=!1);var a=t+Math.cos(i)*r,c=n+Math.sin(i)*e;return o?[a,c]:{x:a,y:c}};n.a=function(t,n,i,o,a){void 0===a&&(a=!1);var c=r(t,i,o),h=e(n,i,o);return a?[c,h]:{x:c,y:h}}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-03-31-js-4f536b9c3c9d9d1e6667.js.map