(window.webpackJsonp=window.webpackJsonp||[]).push([[112],{253:function(t,n,r){"use strict";r.r(n);r(263);var e=r(0),i=r.n(e),o=r(265),a=(r(266),r(280)),c=function(t){var n,r=t.random(0,50),e=function(e,i,o){var a,c,u=(a=t.map(t.sin(t.TWO_PI*(o+function(r,e){return n*t.dist(r,e,t.width/2,t.height/2)*t.noise(n*r,n*e)}(e,i))),-1,1,0,1),c=5,a<.5?.5*t.pow(2*a,c):1-.5*t.pow(2*(1-a),c));return t.color(r*u,80*u/2,100*u)};t.setup=function(){t.createCanvas(66,84),t.pixelDensity(10),t.colorMode(t.HSB,100),t.blendMode(t.HARD_LIGHT),t.rectMode(t.CENTER),t.fill(r+50,80,100,50),n=t.TWO_PI/t.height},t.draw=function(){t.background(0);for(var n=1*(t.frameCount-1)%30/30,r=0;r<t.width;r++)for(var i=0;i<t.height;i++)t.stroke(e(r,i,n)),t.point(r,i);t.noStroke(),t.rect(t.width/2,t.height/2,.75*t.width,.75*t.width)}};n.default=function(t){var n=t.location;return i.a.createElement(o.a,{sketch:c,path:n.pathname,description:i.a.createElement(i.a.Fragment,null,"Time well spent playing with"," ",i.a.createElement(a.a,{href:"https://necessarydisorder.wordpress.com/2017/09/02/animated-stripes-gifs-from-scalar-fields/"},"this tutorial"),".")})}},263:function(t,n,r){var e=r(11);e(e.P,"Array",{fill:r(264)}),r(32)("fill")},264:function(t,n,r){"use strict";var e=r(25),i=r(73),o=r(14);t.exports=function(t){for(var n=e(this),r=o(n.length),a=arguments.length,c=i(a>1?arguments[1]:void 0,r),u=a>2?arguments[2]:void 0,s=void 0===u?r:i(u,r);s>c;)n[c++]=t;return n}},266:function(t,n,r){"use strict";r.d(n,"c",function(){return e}),r.d(n,"d",function(){return i}),r.d(n,"b",function(){return o});var e=function(t,n,r){return t+Math.cos(n)*r},i=function(t,n,r){return t+Math.sin(n)*r},o=function(t,n,r,e,i,o){void 0===o&&(o=!1);var a=t+Math.cos(r)*e,c=n+Math.sin(r)*i;return o?[a,c]:{x:a,y:c}};n.a=function(t,n,r,o,a){void 0===a&&(a=!1);var c=e(t,r,o),u=i(n,r,o);return a?[c,u]:{x:c,y:u}}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-03-30-js-f7be05ece220a9354b1c.js.map