(window.webpackJsonp=window.webpackJsonp||[]).push([[112],{251:function(t,n,r){"use strict";r.r(n);r(291);var i=r(9),o=r(0),e=r.n(o),a=r(290),c=(r(293),r(306)),u=function(t){var n,r=t.random(0,50),i=function(i,o,e){var a,c,u=(a=t.map(t.sin(t.TWO_PI*(e+function(r,i){return n*t.dist(r,i,t.width/2,t.height/2)*t.noise(n*r,n*i)}(i,o))),-1,1,0,1),c=5,a<.5?.5*t.pow(2*a,c):1-.5*t.pow(2*(1-a),c));return t.color(r*u,80*u/2,100*u)};t.setup=function(){t.createCanvas(66,84),t.pixelDensity(10),t.colorMode(t.HSB,100),t.blendMode(t.HARD_LIGHT),t.rectMode(t.CENTER),t.fill(r+50,80,100,50),n=t.TWO_PI/t.height},t.draw=function(){t.background(0);for(var n=1*(t.frameCount-1)%30/30,r=0;r<t.width;r++)for(var o=0;o<t.height;o++)t.stroke(i(r,o,n)),t.point(r,o);t.noStroke(),t.rect(t.width/2,t.height/2,.75*t.width,.75*t.width)}};n.default=function(t){var n=t.location;return Object(i.c)(a.a,{sketch:u,path:n.pathname,description:Object(i.c)(e.a.Fragment,null,"Time well spent playing with"," ",Object(i.c)(c.a,{href:"https://necessarydisorder.wordpress.com/2017/09/02/animated-stripes-gifs-from-scalar-fields/"},"this tutorial"),".")})}},291:function(t,n,r){var i=r(12);i(i.P,"Array",{fill:r(292)}),r(35)("fill")},292:function(t,n,r){"use strict";var i=r(28),o=r(78),e=r(16);t.exports=function(t){for(var n=i(this),r=e(n.length),a=arguments.length,c=o(a>1?arguments[1]:void 0,r),u=a>2?arguments[2]:void 0,s=void 0===u?r:o(u,r);s>c;)n[c++]=t;return n}},293:function(t,n,r){"use strict";r.d(n,"c",function(){return i}),r.d(n,"d",function(){return o}),r.d(n,"b",function(){return e});var i=function(t,n,r){return t+Math.cos(n)*r},o=function(t,n,r){return t+Math.sin(n)*r},e=function(t,n,r,i,o,e){void 0===e&&(e=!1);var a=t+Math.cos(r)*i,c=n+Math.sin(r)*o;return e?[a,c]:{x:a,y:c}};n.a=function(t,n,r,e,a){void 0===a&&(a=!1);var c=i(t,r,e),u=o(n,r,e);return a?[c,u]:{x:c,y:u}}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-03-30-js-448c640680579c09bfc2.js.map