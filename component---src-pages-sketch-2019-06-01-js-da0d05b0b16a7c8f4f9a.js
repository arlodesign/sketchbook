(window.webpackJsonp=window.webpackJsonp||[]).push([[168],{322:function(t,o,r){"use strict";r.r(o);r(350);var n=r(12),a=(r(0),r(349)),e=r(360),i=r(355),c=function(t){var o,r,n=t.random(100),a=Object(e.a)([2,3,5,8,13,21,34].map(function(t){return 25*t})),c=20;t.setup=function(){t.createCanvas(660,840),t.colorMode(t.HSB,100),o=t.color(100-n,10,15),t.background(o),t.noFill(),r=t.floor(.15*t.width)},t.draw=function(){var e=t.map(t.sin(t.frameCount/a[0]),-1,1,r,.05*r),f=t.map(t.sin(t.frameCount/a[1]),-1,1,.3,.7),u=t.map(t.cos(t.frameCount/a[2]),-1,1,t.height-r,r),p=t.map(t.cos(t.frameCount/a[3]),-1,1,r,t.height-r),s=t.lerp(e,t.width-e,f),l=t.lerp(u,p,f),d=t.map(t.cos(t.frameCount/a[4]),-1,1,1.5,2)/t.dist(s,l,e,u),m=t.map(t.cos(t.frameCount/a[4]),-1,1,1.5,2)/t.dist(s,l,t.width-e,p);t.stroke(n,t.map(t.cos(t.frameCount/a[5]),-1,1,40,80),t.map(t.cos(t.frameCount/a[6]),-1,1,0,100),c),Object(i.a)(t,s,l,e,u,d),Object(i.a)(t,s,l,t.width-e,p,m,!1),t.push(),t.noStroke(),t.fill(o),t.rect(0,0,t.width,r),t.frameCount>1e4?(c-=.01)<0&&t.noLoop():(t.fill(0,0,100),t.text(1e4-t.frameCount,10,20)),t.pop()}};o.default=function(t){var o=t.location;return Object(n.c)(a.a,{sketch:c,path:o.pathname,description:"Reload page for a different variation."})}},350:function(t,o,r){var n=r(9);n(n.P,"Array",{fill:r(351)}),r(67)("fill")},351:function(t,o,r){"use strict";var n=r(34),a=r(100),e=r(18);t.exports=function(t){for(var o=n(this),r=e(o.length),i=arguments.length,c=a(i>1?arguments[1]:void 0,r),f=i>2?arguments[2]:void 0,u=void 0===f?r:a(f,r);u>c;)o[c++]=t;return o}},355:function(t,o,r){"use strict";o.a=function(t,o,r,n,a,e,i){if(void 0===i&&(i=!0),e<=0)throw new Error("rate for lerpLine() must be greater than zero");for(var c=0;c<1;c+=e)(0!==c||i)&&t.random()>c&&t.point(t.lerp(o,n,c),t.lerp(r,a,c))}},360:function(t,o,r){"use strict";function n(t){for(var o=t.length-1;o>0;o--){var r=Math.floor(Math.random()*(o+1)),n=[t[r],t[o]];t[o]=n[0],t[r]=n[1]}return t}r.d(o,"a",function(){return n})}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-06-01-js-da0d05b0b16a7c8f4f9a.js.map