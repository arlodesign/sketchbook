(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{215:function(n,t,a){"use strict";a.r(t);var e=a(0),r=a.n(e),o=a(246),i=a(248),c=function(n){var t,a,e,r=0,o=0,c=0;n.setup=function(){n.createCanvas(660,840),n.background(255),t=n.random(.1,.2)/n.TWO_PI*n.random([-1,1]),a=n.random(.3,.5)/n.TWO_PI*n.random([-1,1]),e=n.random(.02,.03)/n.TWO_PI,n.noFill(),n.stroke(0,0,0,128)},n.draw=function(){n.translate(n.width/2,n.height*n.sin(c));var u=Object(i.a)(0,0,r,200),d=u.x,s=u.y,f=Object(i.a)(d,s,o,500*n.sin(c));n.height*n.sin(c)<0&&s<0&&f.y<0?n.noLoop():(n.beginShape(),n.vertex(0,0),n.quadraticVertex(f.x,f.y,d,s),n.endShape(),r+=t,o+=a,c+=e)}};t.default=function(n){var t=n.location;return r.a.createElement(o.a,{sketch:c,path:t.pathname,description:"Reload page for a different variation."})}},248:function(n,t,a){"use strict";a.d(t,"b",function(){return e}),a.d(t,"c",function(){return r});var e=function(n,t,a){return n+Math.cos(t)*a},r=function(n,t,a){return n+Math.sin(t)*a};t.a=function(n,t,a,o,i){void 0===i&&(i=!1);var c=e(n,a,o),u=r(t,a,o);return i?[c,u]:{x:c,y:u}}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-01-31-js-ca91549ffeead3461be1.js.map