/*! For license information please see 2021-01-06.e684a657.js.LICENSE.txt */
(self.webpackChunksketchbook=self.webpackChunksketchbook||[]).push([[9010],{10644:function(r,n,t){"use strict";var e=t(94035),u=t.n(e),i=(t(96995),t(42479)),o=t(61025),a=t(58891);function c(r,n){var t=Object.keys(r);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(r);n&&(e=e.filter((function(n){return Object.getOwnPropertyDescriptor(r,n).enumerable}))),t.push.apply(t,e)}return t}function f(r){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){s(r,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(r,n,Object.getOwnPropertyDescriptor(t,n))}))}return r}function s(r,n,t){return n in r?Object.defineProperty(r,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[n]=t,r}new(u())((function(r){var n,t,e,u="true"===r.getURLParams().render,c=30*(u?12:1),s=u?5:60,h=c*s;function y(){var r={hue:t.value()};e.attribute("href","?"+new URLSearchParams(f(f({},r),{},{render:!u})).toString()),window.history.replaceState(null,document.title,"?"+new URLSearchParams(f(f({},r),{},{render:u})).toString())}r.setup=function(){r.pixelDensity(1),r.frameRate(s),r.createCanvas(u?1080:r.windowWidth,u?1080:r.windowHeight),r.createLoop(c,{noiseRadius:.3}),r.colorMode(r.HSB,1),r.ellipseMode(r.CENTER),!u&&r.noSmooth(),n=Object.assign({hue:r.random()},r.getURLParams()),(t=r.createSlider(0,1,parseFloat(n.hue,10),.01)).changed(y),e=r.createA("?",u?"Draft":"Render"),y()},r.draw=function(){var n=r.animLoop,e=n.progress,c=n.theta,f=n.noise1D,s=n.noise2D,y=r.sin(2*r.PI*e-r.PI/2)/2+.5;r.blendMode(r.BLEND),r.background(t.value(),1,.5),r.blendMode(r.DIFFERENCE),r.translate(r.width/2,r.height/2),r.rotate(c),r.fill(255);var p=[],d=[],l=[];r.beginShape();for(var v=0;v<3;v++){var x=f(v+1)*(0,a.easeInOutQuad)(y),b=f(v+10)*(0,a.easeInOutQuad)(y),O=x*r.QUARTER_PI+r.TWO_PI/3*v,g=r.map(b,-1,1,r.width/3,r.width/2),w=(0,o.ZP)(0,0,O,g),m=w.x,M=w.y;r.vertex(m,M),p.push({x:m,y:M})}r.endShape(r.CLOSE);for(var P=0;P<3;P++){var S=(0,a.easeInOutQuart)(r.map(s(p[P].x/(100*(P+1)),p[P].y/(100*(P+1))),-1,1,0,1))*y;d.push({x:r.lerp(p[P].x,p[P+1===3?0:P+1].x,S),y:r.lerp(p[P].y,p[P+1===3?0:P+1].y,S)})}r.beginShape(),d.forEach((function(n){var t=n.x,e=n.y;return r.vertex(t,e)})),r.endShape(r.CLOSE);for(var I=0;I<3;I++)l.push({x:r.lerp(d[I].x,d[I+1===3?0:I+1].x,e),y:r.lerp(d[I].y,d[I+1===3?0:I+1].y,e)});r.beginShape(),l.forEach((function(n){var t=n.x,e=n.y;return r.vertex(t,e)})),r.endShape(r.CLOSE);var C=i.fromThreePoints.apply(void 0,p),E=i.fromThreePoints.apply(void 0,d),j=i.fromThreePoints.apply(void 0,l);r.circle(C.x,C.y,2*C.r),r.circle(E.x,E.y,2*E.r),r.circle(j.x,j.y,2*j.r),u&&r.frameCount<=h&&(r.frameCount%100==0&&console.info("".concat(r.ceil(100*e),"%")),r.save("".concat(String(r.frameCount).padStart(String(h).length,"0"),".png")))},r.windowResized=function(){!u&&r.resizeCanvas(r.windowWidth,r.windowHeight)}}),"sketch"),document.getElementById("description").innerHTML='<a href="https://genuary2021.github.io/">#genuary2021</a>: Triangle Subdivision'},58891:function(r,n,t){"use strict";t.r(n),t.d(n,{linear:function(){return e},easeInQuad:function(){return u},easeOutQuad:function(){return i},easeInOutQuad:function(){return o},easeInCubic:function(){return a},easeOutCubic:function(){return c},easeInOutCubic:function(){return f},easeInQuart:function(){return s},easeOutQuart:function(){return h},easeInOutQuart:function(){return y},easeInQuint:function(){return p},easeOutQuint:function(){return d},easeInOutQuint:function(){return l}});var e=function(r){return r},u=function(r){return r*r},i=function(r){return r*(2-r)},o=function(r){return r<.5?2*r*r:(4-2*r)*r-1},a=function(r){return r*r*r},c=function(r){return--r*r*r+1},f=function(r){return r<.5?4*r*r*r:(r-1)*(2*r-2)*(2*r-2)+1},s=function(r){return r*r*r*r},h=function(r){return 1- --r*r*r*r},y=function(r){return r<.5?8*r*r*r*r:1-8*--r*r*r*r},p=function(r){return r*r*r*r*r},d=function(r){return 1+--r*r*r*r*r},l=function(r){return r<.5?16*r*r*r*r*r:1+16*--r*r*r*r*r}},61025:function(r,n,t){"use strict";t.d(n,{Y2:function(){return e},C$:function(){return u},vy:function(){return i}});var e=function(r,n,t){return r+Math.cos(n)*t},u=function(r,n,t){return r+Math.sin(n)*t},i=function(r,n,t,e,u){var i=arguments.length>5&&void 0!==arguments[5]&&arguments[5],o=r+Math.cos(t)*e,a=n+Math.sin(t)*u;return i?[o,a]:{x:o,y:a}};n.ZP=function(r,n,t,i){var o=arguments.length>4&&void 0!==arguments[4]&&arguments[4],a=e(r,t,i),c=u(n,t,i);return o?[a,c]:{x:a,y:c}}},42479:function(r,n){var t;!function(e){"use strict";Math.hypot=Math.hypot||function(r,n){return Math.sqrt(r*r+n*n)};var u={intersect:function(r,n){var t=r.x-n.x,e=r.y-n.y,u=r.r+n.r;return t*t+e*e<=u*u},intersectPoint:function(r,n){if(0===r.r)return!1;var t=r.x-n.x,e=r.y-n.y;return t*t+e*e<=r.r*r.r},intersection:function(r,n){var t=Math.hypot(n.x-r.x,n.y-r.y);if(t<=r.r+n.r&&t>=Math.abs(n.r-r.r)){var e=(r.r*r.r-n.r*n.r+t*t)/(2*t),u=Math.sqrt(r.r*r.r-e*e),i=(n.x-r.x)/t,o=(n.y-r.y)/t;return[{x:r.x+e*i-u*o,y:r.y+e*o+u*i},{x:r.x+e*i+u*o,y:r.y+e*o-u*i}]}return null},intersectionArea:function(r,n){var t=Math.hypot(n.x-r.x,n.y-r.y);if(t<=r.r+n.r){var e=r.r*r.r,u=n.r*n.r,i=(e-u+t*t)/(2*t),o=i*i,a=Math.sqrt(e-o);return t<Math.abs(n.r-r.r)?Math.PI*Math.min(e,u):e*Math.asin(a/r.r)+u*Math.asin(a/n.r)-a*(i+Math.sqrt(o+u-e))}return 0},area:function(r){return Math.PI*r.r*r.r},height:function(r){return 2*r.r},width:function(r){return 2*r.r},perimeter:function(r){return 2*Math.PI*r.r},center:function(r){return{x:r.x,y:r.y}},insetBy:function(r,n){return{x:r.x,y:r.y,r:Math.max(0,r.r-n)}},fromThreePoints:function(r,n,t){var e=r.x,u=r.y,i=n.x,o=n.y,a=t.x,c=t.y,f=e*(o-c)-u*(i-a)+i*c-a*o,s=-((e*e+u*u)*(c-o)+(i*i+o*o)*(u-c)+(a*a+c*c)*(o-u))/(2*f),h=-((e*e+u*u)*(i-a)+(i*i+o*o)*(a-e)+(a*a+c*c)*(e-i))/(2*f);return{x:s,y:h,r:Math.hypot(s-e,h-u)}}};void 0===(t=function(){return u}.apply(n,[]))||(r.exports=t)}()}},function(r){r.O(0,[4035,6995],(function(){return 10644,r(r.s=10644)})),r.O()}]);