(window.webpackJsonp=window.webpackJsonp||[]).push([[215],{403:function(t,n,o){"use strict";o.r(n);var r=o(10),e=(o(0),o(433)),i=o(434),a=(o(436),function(t){var n=t.random(0,1/3),o=0,r=1;t.setup=function(){t.createCanvas(660,840),t.colorMode(t.HSB,1),t.background(n,.5,.9),t.noFill(),t.strokeWeight(2),t.blendMode(t.OVERLAY),t.ellipseMode(t.CENTER)},t.draw=function(){var e,a=t.noise(t.frameCount/1e4,o);e=a<1/3?n:a>2/3?n+2/3:n+1/3,t.push(),t.stroke(e,r/100,.9,.2),t.translate.apply(t,Object(i.a)(t.width/2,t.height/2,o,t.width/3*(1-a),!0)),t.rotate(o),t.bezier(0,0,t.width*a/2,-t.width/10,t.width*a/2,t.width/10,t.width/2*a,0),t.pop(),console.log(r),(o+=t.TWO_PI/100+t.TWO_PI/100/100)>t.TWO_PI*r&&++r>100&&(t.noLoop(),console.log("done"))}});n.default=function(t){var n=t.location;return Object(r.c)(e.a,{sketch:a,path:n.pathname,description:""})}},434:function(t,n,o){"use strict";o.d(n,"c",function(){return r}),o.d(n,"d",function(){return e}),o.d(n,"b",function(){return i});var r=function(t,n,o){return t+Math.cos(n)*o},e=function(t,n,o){return t+Math.sin(n)*o},i=function(t,n,o,r,e,i){void 0===i&&(i=!1);var a=t+Math.cos(o)*r,c=n+Math.sin(o)*e;return i?[a,c]:{x:a,y:c}};n.a=function(t,n,o,i,a){void 0===a&&(a=!1);var c=r(t,o,i),u=e(n,o,i);return a?[c,u]:{x:c,y:u}}},436:function(t,n,o){"use strict";n.a=function(t,n,o,r,e,i,a){if(void 0===a&&(a=!0),i<=0)throw new Error("rate for lerpLine() must be greater than zero");for(var c=0;c<1;c+=i)(0!==c||a)&&t.random()>c&&t.point(t.lerp(n,r,c),t.lerp(o,e,c))}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-07-20-js-1f723f57d927f77e81f4.js.map