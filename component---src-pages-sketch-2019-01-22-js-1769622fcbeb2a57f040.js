(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{204:function(n,t,e){"use strict";e.r(t);var i=e(0),r=e.n(i),a=e(253),o=e(254),c=function(n){var t,e,i,r,a=0,c=0;n.setup=function(){n.createCanvas(660,840),n.background(255),n.stroke(0,0,0,64),t=n.random(.02,.05)/n.TWO_PI,e=n.random(.2,.3)/n.TWO_PI,i=n.floor(n.random(2,6))},n.draw=function(){var u=Object(o.b)(n.width/2,a*i,100),h=Object(o.c)(n.height/2,n.sin(a),200),d=Object(o.b)(u,c,100),f=Object(o.c)(h,c*i,100);r&&(n.line(d,f,r.X,r.Y),n.line(n.width-d,n.height-f,n.width-r.X,n.height-r.Y),n.line(d,n.height-f,r.X,n.height-r.Y),n.line(n.width-d,f,n.width-r.X,r.Y)),a+=t,c+=e,r={X:d,Y:f}}};t.default=function(n){var t=n.location;return r.a.createElement(a.a,{sketch:c,path:t.pathname,description:"Reload page for a different variation."})}},254:function(n,t,e){"use strict";e.d(t,"b",function(){return i}),e.d(t,"c",function(){return r});var i=function(n,t,e){return n+Math.cos(t)*e},r=function(n,t,e){return n+Math.sin(t)*e};t.a=function(n,t,e,a,o){void 0===o&&(o=!1);var c=i(n,e,a),u=r(t,e,a);return o?[c,u]:{x:c,y:u}}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-01-22-js-1769622fcbeb2a57f040.js.map