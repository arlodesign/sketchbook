(window.webpackJsonp=window.webpackJsonp||[]).push([[389],{VhMv:function(t,n,e){"use strict";e.r(n);e("n0hJ"),e("Ml7+"),e("q1tI");var r=e("Gmm/"),i=(e("PZSu"),e("av4u")),o=e("WK/p"),u=e("qKvR");function a(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var s=function(t){var n=t.getURLParams().render,e=t.random(.2,.8),r=[],u=[],s=0,c=function(){function n(n){this.x=t.randomGaussian(t.width/2,t.width/10),this.y=t.constrain(t.random(t.height/2,t.height/3),.333*t.height,.666*t.height),this.dir=n,this.start=t.random(t.TWO_PI)}var e,r,i;return e=n,(r=[{key:"pos",get:function(){return t.createVector(this.x,this.y)}}])&&a(e.prototype,r),i&&a(e,i),n}(),f=function(){function n(n){this.pos=t.createVector(t.randomGaussian(t.width/2,t.width/3),t.randomGaussian(t.height/2,t.width/3)),this.vel=p5.Vector.random2D(),this.acc=t.createVector(),this.prev=null,this.sat=n}var i=n.prototype;return i.update=function(){this.pos.add(this.vel),this.vel.add(this.acc)},i.show=function(){var n=this;if(this.prev){var i=1e6,u=null;r.forEach((function(e){var r=t.dist(e.pos.x,e.pos.y,n.pos.x,n.pos.y);r<i&&(i=r,u=e)})),t.stroke(e+.2*t.animLoop.noise1D(this.sat),this.sat,t.map(i,0,t.width/2,1,0,!0),s),Object(o.a)(t,this.pos.x,this.pos.y,u.pos.x,u.pos.y,(t.animLoop.noise()+1)/4,!1,!1),t.line(this.pos.x,this.pos.y,this.prev.x,this.prev.y)}this.prev={x:this.pos.x,y:this.pos.y}},i.attracted=function(n){var e=p5.Vector.sub(n.pos,this.pos);e.mult(n.dir);var r=e.magSq(),i=100/(r=t.min(r,2e3));e.setMag(i),this.acc=e},n}();t.setup=function(){t.pixelDensity(n?1:2),t.frameRate(60),t.createCanvas(660,840),t.colorMode(t.HSB,1),t.background(1-e,.2,.8),t.blendMode(t.OVERLAY),t.createLoop(60,{gif:!!n&&{render:!1,open:!0},noiseRadius:.1}),t.strokeWeight(2),r=Array(10).fill().map((function(t,n){return new c(n%4?1:-1)})),u=Array(3).fill().map((function(t,n){return new f((n+1)/3)}))},t.draw=function(){var e=t.animLoop.progress,o=Object(i.easeOutQuint)(e);s=-4*o*o+4*o,u.forEach((function(t){r.forEach((function(n){t.attracted(n)})),t.update(),t.show()})),t.frameCount%100==0&&console.info(t.floor(100*e)+"%"),n||3600!==t.frameCount||(console.info("100%"),t.noLoop())}};n.default=function(t){var n=t.location;return Object(u.c)(r.a,{sketch:s,path:n.pathname,description:""})}},"WK/p":function(t,n,e){"use strict";n.a=function(t,n,e,r,i,o,u,a){void 0===u&&(u=!0),void 0===a&&(a=!0);for(var s=Math.max(o,.01/t.dist(n,e,r,i)),c=0;c<1;c+=s)(0!==c||u)&&(a&&t.random()>c||!a)&&t.point(t.lerp(n,r,c),t.lerp(e,i,c))}},av4u:function(t,n,e){"use strict";e.r(n),e.d(n,"linear",(function(){return r})),e.d(n,"easeInQuad",(function(){return i})),e.d(n,"easeOutQuad",(function(){return o})),e.d(n,"easeInOutQuad",(function(){return u})),e.d(n,"easeInCubic",(function(){return a})),e.d(n,"easeOutCubic",(function(){return s})),e.d(n,"easeInOutCubic",(function(){return c})),e.d(n,"easeInQuart",(function(){return f})),e.d(n,"easeOutQuart",(function(){return h})),e.d(n,"easeInOutQuart",(function(){return d})),e.d(n,"easeInQuint",(function(){return p})),e.d(n,"easeOutQuint",(function(){return v})),e.d(n,"easeInOutQuint",(function(){return l}));var r=function(t){return t},i=function(t){return t*t},o=function(t){return t*(2-t)},u=function(t){return t<.5?2*t*t:(4-2*t)*t-1},a=function(t){return t*t*t},s=function(t){return--t*t*t+1},c=function(t){return t<.5?4*t*t*t:(t-1)*(2*t-2)*(2*t-2)+1},f=function(t){return t*t*t*t},h=function(t){return 1- --t*t*t*t},d=function(t){return t<.5?8*t*t*t*t:1-8*--t*t*t*t},p=function(t){return t*t*t*t*t},v=function(t){return 1+--t*t*t*t*t},l=function(t){return t<.5?16*t*t*t*t*t:1+16*--t*t*t*t*t}}}]);
//# sourceMappingURL=component---src-pages-sketch-2020-03-24-js-d347ad2ee354c02bfbeb.js.map