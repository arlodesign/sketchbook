(window.webpackJsonp=window.webpackJsonp||[]).push([[113],{252:function(t,n,i){"use strict";i.r(n);var r=i(9),o=(i(0),i(289)),e=i(292),a=(i(313),function(t){t.setup=function(){t.createCanvas(660,840),t.colorMode(t.HSB,100)},t.draw=function(){t.background(0);for(var n=0;n<3;n++)for(var i=t.map(n,0,3,0,100),r=0;r<50;r++){var o=Object(e.b)(t.width/2,t.height/2,t.TWO_PI/3*n+t.frameCount/500,1.5*t.width,1.5*t.height,!0),a=Object(e.b)(t.width/2,t.height/2,t.TWO_PI/50*r+t.frameCount/75,t.map(t.sin(t.frameCount/1e3),-1,1,0,1)*(t.width/2)-40,t.height/10,!0),c=t.map(a[1],t.height/2-t.height/10,t.height/2+t.height/10,.2,1);t.dist.apply(t,o.concat(a));t.strokeWeight(3*c),t.stroke(i,75,100*c,100*c),t.line.apply(t,o.concat(a))}}});n.default=function(t){var n=t.location;return Object(r.c)(o.a,{sketch:a,path:n.pathname,description:""})}},290:function(t,n,i){var r=i(12);r(r.P,"Array",{fill:i(291)}),i(35)("fill")},291:function(t,n,i){"use strict";var r=i(28),o=i(78),e=i(16);t.exports=function(t){for(var n=r(this),i=e(n.length),a=arguments.length,c=o(a>1?arguments[1]:void 0,i),h=a>2?arguments[2]:void 0,u=void 0===h?i:o(h,i);u>c;)n[c++]=t;return n}},292:function(t,n,i){"use strict";i.d(n,"c",function(){return r}),i.d(n,"d",function(){return o}),i.d(n,"b",function(){return e});var r=function(t,n,i){return t+Math.cos(n)*i},o=function(t,n,i){return t+Math.sin(n)*i},e=function(t,n,i,r,o,e){void 0===e&&(e=!1);var a=t+Math.cos(i)*r,c=n+Math.sin(i)*o;return e?[a,c]:{x:a,y:c}};n.a=function(t,n,i,e,a){void 0===a&&(a=!1);var c=r(t,i,e),h=o(n,i,e);return a?[c,h]:{x:c,y:h}}},313:function(t,n,i){"use strict";i(290);n.a=function(t,n){void 0===n&&(n=.5);var i=t.width*t.height*.02;console.log(i),t.push();for(var r=0;r<i;r++)t.fill(r%2?"rgba(0, 0, 0, "+n+")":"rgba(255, 255, 255, "+n+")"),t.noStroke(),t.ellipse(t.randomGaussian(t.width/2,t.width/3),t.randomGaussian(t.height/2,t.height/3),1/(t.pixelDensity()/2));t.pop()}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-03-31-js-3a9ef419c17fb7388dfd.js.map