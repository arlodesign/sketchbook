(window.webpackJsonp=window.webpackJsonp||[]).push([[145],{284:function(n,t,o){"use strict";o.r(t);var r=o(9),i=(o(0),o(293)),a=o(296),c=o(313),e=function(n){var t=n.TWO_PI;n.setup=function(){n.createCanvas(660,840),n.stroke(0),n.strokeWeight(.25),n.background(255)},n.draw=function(){var o=n.map(n.cos(t),-1,1,0,n.height),r=Object(a.a)(n.width/3,o,t,n.map(-n.sin(13*t),-1,1,0,n.width)),i=r.x,e=r.y;Object(c.a)(n,n.width/3,o,i,e,n.noise(n.frameCount/50,t)/10,!1),(t-=n.TWO_PI/1e4)<0&&n.noLoop()}};t.default=function(n){var t=n.location;return Object(r.c)(i.a,{sketch:e,path:t.pathname,description:""})}},296:function(n,t,o){"use strict";o.d(t,"c",function(){return r}),o.d(t,"d",function(){return i}),o.d(t,"b",function(){return a});var r=function(n,t,o){return n+Math.cos(t)*o},i=function(n,t,o){return n+Math.sin(t)*o},a=function(n,t,o,r,i,a){void 0===a&&(a=!1);var c=n+Math.cos(o)*r,e=t+Math.sin(o)*i;return a?[c,e]:{x:c,y:e}};t.a=function(n,t,o,a,c){void 0===c&&(c=!1);var e=r(n,o,a),u=i(t,o,a);return c?[e,u]:{x:e,y:u}}},313:function(n,t,o){"use strict";t.a=function(n,t,o,r,i,a,c){void 0===c&&(c=!0);for(var e=0;e<1;e+=a)(0!==e||c)&&n.random()>e&&n.point(n.lerp(t,r,e),n.lerp(o,i,e))}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-05-02-js-cb91a57d3539c08cfc29.js.map