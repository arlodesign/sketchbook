(window.webpackJsonp=window.webpackJsonp||[]).push([[114],{301:function(t,n,r){"use strict";r.r(n);r(446);var e=r(10),i=r(0),o=r.n(i),a=r(444),c=(r(445),r(456)),u=function(t){var n,r=t.random(0,50),e=function(e,i,o){var a,c,u=(a=t.map(t.sin(t.TWO_PI*(o+function(r,e){return n*t.dist(r,e,t.width/2,t.height/2)*t.noise(n*r,n*e)}(e,i))),-1,1,0,1),c=5,a<.5?.5*t.pow(2*a,c):1-.5*t.pow(2*(1-a),c));return t.color(r*u,80*u/2,100*u)};t.setup=function(){t.createCanvas(66,84),t.pixelDensity(10),t.colorMode(t.HSB,100),t.blendMode(t.HARD_LIGHT),t.rectMode(t.CENTER),t.fill(r+50,80,100,50),n=t.TWO_PI/t.height},t.draw=function(){t.background(0);for(var n=1*(t.frameCount-1)%30/30,r=0;r<t.width;r++)for(var i=0;i<t.height;i++)t.stroke(e(r,i,n)),t.point(r,i);t.noStroke(),t.rect(t.width/2,t.height/2,.75*t.width,.75*t.width)}};n.default=function(t){var n=t.location;return Object(e.c)(a.a,{sketch:u,path:n.pathname,description:Object(e.c)(o.a.Fragment,null,"Time well spent playing with"," ",Object(e.c)(c.a,{href:"https://necessarydisorder.wordpress.com/2017/09/02/animated-stripes-gifs-from-scalar-fields/"},"this tutorial"),".")})}},445:function(t,n,r){"use strict";r.d(n,"c",function(){return e}),r.d(n,"d",function(){return i}),r.d(n,"b",function(){return o});var e=function(t,n,r){return t+Math.cos(n)*r},i=function(t,n,r){return t+Math.sin(n)*r},o=function(t,n,r,e,i,o){void 0===o&&(o=!1);var a=t+Math.cos(r)*e,c=n+Math.sin(r)*i;return o?[a,c]:{x:a,y:c}};n.a=function(t,n,r,o,a){void 0===a&&(a=!1);var c=e(t,r,o),u=i(n,r,o);return a?[c,u]:{x:c,y:u}}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-03-30-js-7d8e3480347c742a6c9d.js.map