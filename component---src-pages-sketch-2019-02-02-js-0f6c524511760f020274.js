(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{228:function(n,t,r){"use strict";r.r(t);r(358),r(105),r(69),r(44),r(106),r(104),r(354),r(351);var e=r(12),i=(r(0),r(350)),o=r(353),a=function(n){var t,r,e,i,a,u,c,s=[],f=!1,l=!1,d=[function(t){return 240*n.abs(n.sin(t))},function(t){return 240*n.abs(n.cos(t))},function(t){return 240*n.abs(n.tan(t))},function(t){return 240*n.abs(n.sin(t+n.PI))},function(t){return 240*n.abs(n.cos(t+n.PI))},function(t){return 240*n.abs(n.tan(t+n.PI))},function(t){return 240*n.abs(n.sin(-t))},function(t){return 240*n.abs(n.cos(-t))},function(t){return 240*n.abs(n.tan(-t))},function(t){return 240*n.abs(n.sin(-t+n.PI))},function(t){return 240*n.abs(n.cos(-t+n.PI))},function(t){return 240*n.abs(n.tan(-t+n.PI))}];n.setup=function(){for(n.createCanvas(660,840),r=n.random([0,1]),(t=n.createGraphics(n.width,n.height)).background(r?0:255),t.stroke(r?255:0),t.strokeWeight(100),t.line(.25*n.width,150,.25*n.width,n.height-150),t.line(.5*n.width,150,.5*n.width,n.height-150),t.line(.75*n.width,150,.75*n.width,n.height-150),t.blendMode(r?n.DARKEST:n.LIGHTEST),t.noStroke();Array.from(new Set([i,a,u,c])).length<4;)i=n.random(d),a=n.random(d),u=n.random(d),c=n.random(d);for(var e=0;e<4;e++)s.push({r:n.HALF_PI*e,speed:n.random(.01,.1*(2-e/2))/n.TWO_PI,direction:n.random([-1,1])});s.sort(function(n,t){return n.r-t.r})},n.draw=function(){n.background(255),n.image(t,0,0);var r,d=Object(o.c)(n.width/2,s[0].r,n.width/2),h=n.width,v=n.height/2+n.sin(s[1].r)*(n.height/2),g=Object(o.c)(n.width/2,s[2].r,n.width/2),p=n.height,b=n.height/2+n.sin(s[3].r)*(n.height/2),w=n.lerp(0,d,.2),m=n.lerp(b,0,.2),k=n.lerp(h,g,.2),P=n.lerp(v,p,.2);f&&(n.stroke("red"),n.strokeWeight(1),n.line(h,v,g,p),n.line(0,b,d,0),n.strokeWeight(6),n.line(h,v,0,b),n.line(h,v,k,P),n.line(0,b,w,m),n.ellipse(k,P,12),n.ellipse(w,m,12));for(var I=0;I<s.length;I++)s[I].r+=s[I].speed*s[I].direction;n.frameCount>1&&(r=s[0].r,t.fill(i(r),a(r),u(r),c(3*r)),t.beginShape(),t.vertex(h,v),t.bezierVertex(k,P,w,m,0,b),t.vertex(e.X3,e.Y3),t.bezierVertex(e.leftHandleX,e.leftHandleY,e.rightHandleX,e.rightHandleY,e.X1,e.Y1),t.endShape()),e={X0:d,Y0:0,X1:h,Y1:v,X2:g,Y2:p,X3:0,Y3:b,rightHandleX:k,rightHandleY:P,leftHandleX:w,leftHandleY:m},n.abs(s[1].r)>3*n.TWO_PI&&n.abs(s[3].r)>3*n.TWO_PI&&(n.noLoop(),l=!0)},n.mousePressed=function(){f=!f,l&&n.redraw()}};t.default=function(n){var t=n.location;return Object(e.c)(i.a,{sketch:a,path:t.pathname,description:"Reload page for a different variation. Click or tap sketch to toggle guides."})}},351:function(n,t,r){var e=r(9);e(e.P,"Array",{fill:r(352)}),r(67)("fill")},352:function(n,t,r){"use strict";var e=r(34),i=r(100),o=r(18);n.exports=function(n){for(var t=e(this),r=o(t.length),a=arguments.length,u=i(a>1?arguments[1]:void 0,r),c=a>2?arguments[2]:void 0,s=void 0===c?r:i(c,r);s>u;)t[u++]=n;return t}},353:function(n,t,r){"use strict";r.d(t,"c",function(){return e}),r.d(t,"d",function(){return i}),r.d(t,"b",function(){return o});var e=function(n,t,r){return n+Math.cos(t)*r},i=function(n,t,r){return n+Math.sin(t)*r},o=function(n,t,r,e,i,o){void 0===o&&(o=!1);var a=n+Math.cos(r)*e,u=t+Math.sin(r)*i;return o?[a,u]:{x:a,y:u}};t.a=function(n,t,r,o,a){void 0===a&&(a=!1);var u=e(n,r,o),c=i(t,r,o);return a?[u,c]:{x:u,y:c}}},354:function(n,t,r){"use strict";var e=r(21),i=r(9),o=r(34),a=r(101),u=r(102),c=r(18),s=r(355),f=r(103);i(i.S+i.F*!r(68)(function(n){Array.from(n)}),"Array",{from:function(n){var t,r,i,l,d=o(n),h="function"==typeof this?this:Array,v=arguments.length,g=v>1?arguments[1]:void 0,p=void 0!==g,b=0,w=f(d);if(p&&(g=e(g,v>2?arguments[2]:void 0,2)),null==w||h==Array&&u(w))for(r=new h(t=c(d.length));t>b;b++)s(r,b,p?g(d[b],b):d[b]);else for(l=w.call(d),r=new h;!(i=l.next()).done;b++)s(r,b,p?a(l,g,[i.value,b],!0):i.value);return r.length=b,r}})},355:function(n,t,r){"use strict";var e=r(13),i=r(35);n.exports=function(n,t,r){t in n?e.f(n,t,i(0,r)):n[t]=r}},358:function(n,t,r){"use strict";var e=r(9),i=r(36),o=r(34),a=r(14),u=[].sort,c=[1,2,3];e(e.P+e.F*(a(function(){c.sort(void 0)})||!a(function(){c.sort(null)})||!r(359)(u)),"Array",{sort:function(n){return void 0===n?u.call(o(this)):u.call(o(this),i(n))}})},359:function(n,t,r){"use strict";var e=r(14);n.exports=function(n,t){return!!n&&e(function(){t?n.call(null,function(){},1):n.call(null)})}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-02-02-js-0f6c524511760f020274.js.map