(window.webpackJsonp=window.webpackJsonp||[]).push([[214],{401:function(n,t,o){"use strict";o.r(t);var r=o(10),e=(o(0),o(445)),a=o(446),c=function(n){var t=n.random(80),o=0,r=1,e=0;n.setup=function(){n.createCanvas(660,840),n.colorMode(n.HSL,100),n.background(t,30,80),n.noFill(),n.blendMode(n.OVERLAY),n.ellipseMode(n.CENTER)},n.draw=function(){var c=n.noise(n.frameCount/1500,e);n.push(),n.stroke(n.map(n.cos(n.frameCount/150),-1,1,t,t+20),50,n.map(n.sin(e),-1,1,90,25),20*(1-c)),n.translate.apply(n,Object(a.a)(n.width/2,n.height/2,e,n.width/3*c,!0)),n.rotate(o),n.arc(0,0,n.width*c,50,n.frameCount/15,n.frameCount/15+n.PI),n.pop(),e+=n.TWO_PI/720,console.log(r),o-=n.HALF_PI/10800,e>n.TWO_PI&&(e=0,++r>15&&(n.noLoop(),console.log("done")))}};t.default=function(n){var t=n.location;return Object(r.c)(e.a,{sketch:c,path:t.pathname,description:""})}},446:function(n,t,o){"use strict";o.d(t,"c",function(){return r}),o.d(t,"d",function(){return e}),o.d(t,"b",function(){return a});var r=function(n,t,o){return n+Math.cos(t)*o},e=function(n,t,o){return n+Math.sin(t)*o},a=function(n,t,o,r,e,a){void 0===a&&(a=!1);var c=n+Math.cos(o)*r,i=t+Math.sin(o)*e;return a?[c,i]:{x:c,y:i}};t.a=function(n,t,o,a,c){void 0===c&&(c=!1);var i=r(n,o,a),u=e(t,o,a);return c?[i,u]:{x:i,y:u}}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-07-18-js-606de227a1bf18227b74.js.map