(window.webpackJsonp=window.webpackJsonp||[]).push([[195],{ViKx:function(t,n,i){"use strict";i.d(n,"c",(function(){return e})),i.d(n,"d",(function(){return r})),i.d(n,"b",(function(){return c}));var e=function(t,n,i){return t+Math.cos(n)*i},r=function(t,n,i){return t+Math.sin(n)*i},c=function(t,n,i,e,r,c){void 0===c&&(c=!1);var o=t+Math.cos(i)*e,a=n+Math.sin(i)*r;return c?[o,a]:{x:o,y:a}};n.a=function(t,n,i,c,o){void 0===o&&(o=!1);var a=e(t,i,c),u=r(n,i,c);return o?[a,u]:{x:a,y:u}}},zCwg:function(t,n,i){"use strict";i.r(n);i("bHtr"),i("q1tI");var e=i("Gmm/"),r=i("ViKx"),c=i("qKvR"),o=function(t){var n,i,e=["red","green","blue"];t.setup=function(){t.createCanvas(660,840),n=t.width/20,i=t.width*(1/6),t.strokeWeight(2)},t.draw=function(){t.blendMode(t.BLEND),t.background(0),t.fill(255),t.noStroke(),t.circle(t.width/2,t.height/2,t.width-i/2),t.noFill(),t.blendMode(t.MULTIPLY);for(var c=t.map(t.frameCount%1200,0,1200,0,t.TWO_PI),o=t.map(t.sin(3*c),-1,1,0,t.width/2-i),a=[Object(r.a)(t.width/2,t.height/2,c,o),Object(r.a)(t.width/2,t.height/2,c+t.TWO_PI*(1/3),o),Object(r.a)(t.width/2,t.height/2,c+t.TWO_PI*(2/3),o)],u=function(n){var r=t.lerp(6,t.width-i,n);a.forEach((function(i,c){t.stroke(e[c]);var o=t.lerp(i.x,t.width/2,n),a=t.lerp(i.y,t.height/2,n);t.circle(o,a,r)}))},h=0;h<1;h+=1/n)u(h)}};n.default=function(t){var n=t.location;return Object(c.c)(e.a,{sketch:o,path:n.pathname,description:""})}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-07-03-js-4f78b5731aa4a1608748.js.map