(window.webpackJsonp=window.webpackJsonp||[]).push([[88],{276:function(t,n,o){"use strict";o.r(n);o(438);var r=o(10),e=(o(0),o(436)),a=o(437),i=function(t){function n(n){return t.color(100*t.abs(t.cos(n)),100*t.abs(t.sin(-n+t.PI)),100)}t.setup=function(){t.createCanvas(660,840,t.WEBGL),t.stroke(255),t.noFill(),t.noiseDetail(4,.5),t.rectMode(t.CENTER),t.camera(-t.width/4,-t.height/4,400,-t.width/4,-t.height/4,0,0,1,0)},t.draw=function(){t.background(0);for(var o=20-t.width/2,r=20-t.height/2,e=[];o<0;){for(var i=[];r<0;){var c=t.noise(.02*o,.02*r,t.frameCount/100);i.push([o,r,t.map(c,0,1,-400,400)]),r+=20}e.push(i),o+=20,r=20-t.height/2}e.forEach(function(o){o.forEach(function(o){t.stroke(n(o[2]/100)),t.line.apply(t,o.concat([Object(a.c)(-t.width/4,t.frameCount/100,200),Object(a.d)(-t.height/4,t.frameCount/100,200),-400])),t.push(),t.translate.apply(t,o),t.noStroke(),t.fill(n(o[2]/100)),t.sphere(2),t.pop()})})}};n.default=function(t){var n=t.location;return Object(r.c)(e.a,{sketch:i,path:n.pathname})}},437:function(t,n,o){"use strict";o.d(n,"c",function(){return r}),o.d(n,"d",function(){return e}),o.d(n,"b",function(){return a});var r=function(t,n,o){return t+Math.cos(n)*o},e=function(t,n,o){return t+Math.sin(n)*o},a=function(t,n,o,r,e,a){void 0===a&&(a=!1);var i=t+Math.cos(o)*r,c=n+Math.sin(o)*e;return a?[i,c]:{x:i,y:c}};n.a=function(t,n,o,a,i){void 0===i&&(i=!1);var c=r(t,o,a),u=e(n,o,a);return i?[c,u]:{x:c,y:u}}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-02-16-js-2787138e49af22d77e17.js.map