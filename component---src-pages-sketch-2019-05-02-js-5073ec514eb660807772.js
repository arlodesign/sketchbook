(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{Tflr:function(t,n,r){"use strict";r.r(n);var e=r("q1tI"),o=r.n(e),a=r("Bl7J"),i=r("9VVL"),u=r("ViKx"),c=r("WK/p"),s=function(t){var n=t.TWO_PI;t.setup=function(){t.createCanvas(660,840),t.stroke(0),t.strokeWeight(.25),t.background(255)},t.draw=function(){var r=t.map(t.cos(n),-1,1,0,t.height),e=Object(u.a)(t.width/3,r,n,t.map(-t.sin(13*n),-1,1,0,t.width)),o=e.x,a=e.y;Object(c.a)(t,t.width/3,r,o,a,t.noise(t.frameCount/50,n)/10,!1),(n-=t.TWO_PI/1e4)<0&&t.noLoop()}};n.default=function(){return o.a.createElement(a.a,null,o.a.createElement(i.a,{sketch:s}))}},ViKx:function(t,n,r){"use strict";r.d(n,"b",(function(){return e}));var e=function(t,n,r,e,o,a){void 0===a&&(a=!1);var i=t+Math.cos(r)*e,u=n+Math.sin(r)*o;return a?[i,u]:{x:i,y:u}};n.a=function(t,n,r,e,o){void 0===o&&(o=!1);var a=function(t,n,r){return t+Math.cos(n)*r}(t,r,e),i=function(t,n,r){return t+Math.sin(n)*r}(n,r,e);return o?[a,i]:{x:a,y:i}}},"WK/p":function(t,n,r){"use strict";n.a=function(t,n,r,e,o,a,i){if(void 0===i&&(i=!0),a<=0)throw new Error("rate for lerpLine() must be greater than zero");for(var u=0;u<1;u+=a)(0!==u||i)&&t.random()>u&&t.point(t.lerp(n,e,u),t.lerp(r,o,u))}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-05-02-js-5073ec514eb660807772.js.map