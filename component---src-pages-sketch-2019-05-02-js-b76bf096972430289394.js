(window.webpackJsonp=window.webpackJsonp||[]).push([[144],{Tflr:function(t,n,i){"use strict";i.r(n);i("q1tI");var o=i("Gmm/"),r=i("ViKx"),a=i("WK/p"),c=i("qKvR"),e=function(t){var n=t.TWO_PI;t.setup=function(){t.createCanvas(660,840),t.stroke(0),t.strokeWeight(.25),t.background(255)},t.draw=function(){var i=t.map(t.cos(n),-1,1,0,t.height),o=Object(r.a)(t.width/3,i,n,t.map(-t.sin(13*n),-1,1,0,t.width)),c=o.x,e=o.y;Object(a.a)(t,t.width/3,i,c,e,t.noise(t.frameCount/50,n)/10,!1),(n-=t.TWO_PI/1e4)<0&&t.noLoop()}};n.default=function(t){var n=t.location;return Object(c.c)(o.a,{sketch:e,path:n.pathname,description:""})}},ViKx:function(t,n,i){"use strict";i.d(n,"c",(function(){return o})),i.d(n,"d",(function(){return r})),i.d(n,"b",(function(){return a}));var o=function(t,n,i){return t+Math.cos(n)*i},r=function(t,n,i){return t+Math.sin(n)*i},a=function(t,n,i,o,r,a){void 0===a&&(a=!1);var c=t+Math.cos(i)*o,e=n+Math.sin(i)*r;return a?[c,e]:{x:c,y:e}};n.a=function(t,n,i,a,c){void 0===c&&(c=!1);var e=o(t,i,a),u=r(n,i,a);return c?[e,u]:{x:e,y:u}}},"WK/p":function(t,n,i){"use strict";n.a=function(t,n,i,o,r,a,c,e){void 0===c&&(c=!0),void 0===e&&(e=!0);for(var u=Math.max(a,.01/t.dist(n,i,o,r)),s=0;s<1;s+=u)(0!==s||c)&&(e&&t.random()>s||!e)&&t.point(t.lerp(n,o,s),t.lerp(i,r,s))}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-05-02-js-b76bf096972430289394.js.map