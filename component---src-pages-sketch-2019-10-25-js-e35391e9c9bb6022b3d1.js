(window.webpackJsonp=window.webpackJsonp||[]).push([[298],{"9HT4":function(n,t,r){"use strict";r.r(t);r("n0hJ"),r("q1tI");var u=r("Gmm/"),i=r("yVJ3"),e=r.n(i),a=r("av4u"),o=(r("PZSu"),r("qKvR")),s={}.DEV&&!1,c=function(n){var t,r=function(){function t(n,t){this.x=n[0],this.y=n[1],this.diameter=2*t}return t.prototype.draw=function(){var t=n.animLoop,r=t.theta,u=t.noise2D,i=n.height/2*this.x,e=n.height/2*this.y,o=n.sqrt(i*i+e*e)/n.sqrt(n.width/2,n.height/2);n.push(),n.translate(n.width/2,n.height/2),n.translate(i,e),n.push(),n.scale(n.map(Object(a.easeInOutQuint)(n.abs(u(this.x,this.y))),0,1,.5,1)),n.noStroke(),n.fill(n.map(n.cos(o+r),-1,1,0,192)),n.circle(0,0,n.height/2*this.diameter),n.pop(),n.noFill(),n.stroke(200),n.circle(0,0,n.height/2*this.diameter),n.pop()},t}();n.setup=function(){n.createCanvas(660,840);var u=n.width/n.height;t=e()({dimensions:2,maxCount:5e3,minRadius:.01,maxRadius:.1,padding:.0025,outside:function(n,t){return n[0]-t<-u||n[0]+t>u||n[1]-t<-1||n[1]+t>1}}).map((function(n){var t=n.position,u=n.radius;return new r(t,u)})),n.createLoop(10,{gif:!!s&&{render:!1,open:!0},noiseRadius:1})},n.draw=function(){n.background(255),t.forEach((function(n){return n.draw()}))}};t.default=function(n){var t=n.location;return Object(o.c)(u.a,{sketch:c,path:t.pathname,description:""})}},av4u:function(n,t,r){"use strict";r.r(t),r.d(t,"linear",(function(){return u})),r.d(t,"easeInQuad",(function(){return i})),r.d(t,"easeOutQuad",(function(){return e})),r.d(t,"easeInOutQuad",(function(){return a})),r.d(t,"easeInCubic",(function(){return o})),r.d(t,"easeOutCubic",(function(){return s})),r.d(t,"easeInOutCubic",(function(){return c})),r.d(t,"easeInQuart",(function(){return f})),r.d(t,"easeOutQuart",(function(){return d})),r.d(t,"easeInOutQuart",(function(){return h})),r.d(t,"easeInQuint",(function(){return p})),r.d(t,"easeOutQuint",(function(){return m})),r.d(t,"easeInOutQuint",(function(){return v}));var u=function(n){return n},i=function(n){return n*n},e=function(n){return n*(2-n)},a=function(n){return n<.5?2*n*n:(4-2*n)*n-1},o=function(n){return n*n*n},s=function(n){return--n*n*n+1},c=function(n){return n<.5?4*n*n*n:(n-1)*(2*n-2)*(2*n-2)+1},f=function(n){return n*n*n*n},d=function(n){return 1- --n*n*n*n},h=function(n){return n<.5?8*n*n*n*n:1-8*--n*n*n*n},p=function(n){return n*n*n*n*n},m=function(n){return 1+--n*n*n*n*n},v=function(n){return n<.5?16*n*n*n*n*n:1+16*--n*n*n*n*n}},yVJ3:function(n,t,r){r("wZFJ"),n.exports=function(){var n,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=d(t.bounds,1),u=d(t.packAttempts,500),i=d(t.maxCount,1e3),e=t.sample||l,a=d(t.dimensions,3),o=t.random||function(){return Math.random()};n=!1===t.outside?null:t.outside||w;if(2!==a&&3!==a)throw new Error("Dimensions must be 2 or 3");for(var s=[],c=0;c<i;c++){var f=h();f&&s.push(f)}return s;function d(n,t){return null!=n?n:t}function h(){for(var n,t=0;t<u&&!(n=m());t++);if(!n)return!1;var r=n.minRadius;if(n.radiusGrowth>0)for(var i=0;r<n.maxRadius&&i<n.maxGrowthSteps;){var e=r+n.radiusGrowth;if(v(n.position,e,n.padding))break;r=e,i++}return n.radius=Math.min(n.maxRadius,r),n}function p(n,t){var r=d(n,t);return"function"==typeof r?r():r}function m(){var n=p(t.maxRadius,.5),r=p(t.radiusGrowth,.01),u=p(t.maxGrowthSteps,1/0),i=e(),a=p(t.minRadius,.01),o=p(t.padding,0);return!v(i,a,o)&&{maxGrowthSteps:u,minRadius:a,maxRadius:n,radiusGrowth:r,position:i,padding:o}}function v(t,r,u){return!(!n||!n(t,r,u))||s.some((function(n){return b(t,r+u,n.position,n.radius+n.padding)}))}function w(n,t,u){for(var i=Math.abs(r),e=0;e<n.length;e++){var a=n[e];if(Math.abs(a+t)>=i||Math.abs(a-t)>=i)return!0}return!1}function l(){for(var n=[],t=0;t<a;t++)n.push((2*o()-1)*r);return n}function g(n,t){for(var r=0,u=0;u<n.length;u++){var i=n[u]-t[u];r+=i*i}return r}function b(n,t,r,u){var i=t+u,e=i*i;return g(n,r)<e}}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-10-25-js-e35391e9c9bb6022b3d1.js.map