(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{245:function(n,t,a){"use strict";a.r(t);var r=a(13),e=(a(0),a(381)),o=a(382),i=function(n){var t,a,r,e=0,i=0,c=0;n.setup=function(){n.createCanvas(660,840),n.background(255),t=n.random(.1,.2)/n.TWO_PI*n.random([-1,1]),a=n.random(.3,.5)/n.TWO_PI*n.random([-1,1]),r=n.random(.02,.03)/n.TWO_PI,n.noFill(),n.stroke(0,0,0,128)},n.draw=function(){n.translate(n.width/2,n.height*n.sin(c));var u=Object(o.a)(0,0,e,200),d=u.x,s=u.y,f=Object(o.a)(d,s,i,500*n.sin(c));n.height*n.sin(c)<0&&s<0&&f.y<0?n.noLoop():(n.beginShape(),n.vertex(0,0),n.quadraticVertex(f.x,f.y,d,s),n.endShape(),e+=t,i+=a,c+=r)}};t.default=function(n){var t=n.location;return Object(r.c)(e.a,{sketch:i,path:t.pathname,description:"Reload page for a different variation."})}},382:function(n,t,a){"use strict";a.d(t,"c",function(){return r}),a.d(t,"d",function(){return e}),a.d(t,"b",function(){return o});var r=function(n,t,a){return n+Math.cos(t)*a},e=function(n,t,a){return n+Math.sin(t)*a},o=function(n,t,a,r,e,o){void 0===o&&(o=!1);var i=n+Math.cos(a)*r,c=t+Math.sin(a)*e;return o?[i,c]:{x:i,y:c}};t.a=function(n,t,a,o,i){void 0===i&&(i=!1);var c=r(n,a,o),u=e(t,a,o);return i?[c,u]:{x:c,y:u}}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-01-31-js-c5ed766aca36916ef742.js.map