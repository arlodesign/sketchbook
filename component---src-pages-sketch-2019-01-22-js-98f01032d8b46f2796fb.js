(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{203:function(n,t,i){"use strict";i.r(t);var e=i(9),r=(i(0),i(322)),o=i(325),a=function(n){var t,i,e,r,a=0,c=0;n.setup=function(){n.createCanvas(660,840),n.background(255),n.stroke(0,0,0,64),t=n.random(.02,.05)/n.TWO_PI,i=n.random(.2,.3)/n.TWO_PI,e=n.floor(n.random(2,6))},n.draw=function(){var u=Object(o.c)(n.width/2,a*e,100),d=Object(o.d)(n.height/2,n.sin(a),200),h=Object(o.c)(u,c,100),f=Object(o.d)(d,c*e,100);r&&(n.line(h,f,r.X,r.Y),n.line(n.width-h,n.height-f,n.width-r.X,n.height-r.Y),n.line(h,n.height-f,r.X,n.height-r.Y),n.line(n.width-h,f,n.width-r.X,r.Y)),a+=t,c+=i,r={X:h,Y:f}}};t.default=function(n){var t=n.location;return Object(e.c)(r.a,{sketch:a,path:t.pathname,description:"Reload page for a different variation."})}},325:function(n,t,i){"use strict";i.d(t,"c",function(){return e}),i.d(t,"d",function(){return r}),i.d(t,"b",function(){return o});var e=function(n,t,i){return n+Math.cos(t)*i},r=function(n,t,i){return n+Math.sin(t)*i},o=function(n,t,i,e,r,o){void 0===o&&(o=!1);var a=n+Math.cos(i)*e,c=t+Math.sin(i)*r;return o?[a,c]:{x:a,y:c}};t.a=function(n,t,i,o,a){void 0===a&&(a=!1);var c=e(n,i,o),u=r(t,i,o);return a?[c,u]:{x:c,y:u}}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-01-22-js-98f01032d8b46f2796fb.js.map