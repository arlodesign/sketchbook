(window.webpackJsonp=window.webpackJsonp||[]).push([[295],{"0Tit":function(t,r,n){n("5irr");var e="function"==typeof Float32Array;function o(t,r){return 1-3*r+3*t}function i(t,r){return 3*r-6*t}function a(t){return 3*t}function c(t,r,n){return((o(r,n)*t+i(r,n))*t+a(r))*t}function u(t,r,n){return 3*o(r,n)*t*t+2*i(r,n)*t+a(r)}function f(t){return t}t.exports=function(t,r,n,o){if(!(0<=t&&t<=1&&0<=n&&n<=1))throw new Error("bezier x values must be in [0, 1] range");if(t===r&&n===o)return f;for(var i=e?new Float32Array(11):new Array(11),a=0;a<11;++a)i[a]=c(.1*a,t,n);function s(r){for(var e=0,o=1;10!==o&&i[o]<=r;++o)e+=.1;--o;var a=e+.1*((r-i[o])/(i[o+1]-i[o])),f=u(a,t,n);return f>=.001?function(t,r,n,e){for(var o=0;o<4;++o){var i=u(r,n,e);if(0===i)return r;r-=(c(r,n,e)-t)/i}return r}(r,a,t,n):0===f?a:function(t,r,n,e,o){var i,a,u=0;do{(i=c(a=r+(n-r)/2,e,o)-t)>0?n=a:r=a}while(Math.abs(i)>1e-7&&++u<10);return a}(r,e,e+.1,t,n)}return function(t){return 0===t?0:1===t?1:c(s(t),r,o)}}},OVRM:function(t,r,n){"use strict";n.r(r);n("q8oJ"),n("8npG"),n("nWfQ"),n("q1tI");var e=n("Gmm/"),o=(n("PZSu"),n("0Tit")),i=n.n(o),a=(n("Aw06"),n("qKvR"));function c(t){return function(){var r,n=s(t);if(f()){var e=s(this).constructor;r=Reflect.construct(n,arguments,e)}else r=n.apply(this,arguments);return u(this,r)}}function u(t,r){return!r||"object"!=typeof r&&"function"!=typeof r?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):r}function f(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function s(t){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function h(t,r){t.prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r}var p=i()(0,1,1,0),l={}.DEV&&!0,y=function(t){var r=t.random(),n=t.HALF_PI,e=[],o=[],i=0,a=(t.sqrt(4050),function(r,n){this.x=r,this.y=n,this.rotate=t.random([t.QUARTER_PI,t.HALF_PI+t.QUARTER_PI,t.PI+t.QUARTER_PI,t.HALF_PI+t.PI+t.QUARTER_PI]),this.scale=t.random([1,-1]),this.rotateDirection=t.random([-1,1]),this.turning=!1,this.offset=t.noise(r,n)*t.TWO_PI}),u=function(r){h(e,r);c(e);function e(t,n){return r.call(this,t,n)||this}return e.prototype.draw=function(r){var e=t.animLoop.theta;r&&(this.rotate+=n*this.rotateDirection);var o=t.map(e%n,0,n,0,1);t.push(),t.translate(this.x+22.5,this.y+22.5),t.rotate(t.map(p(o),0,1,this.rotate,this.rotate+n*this.rotateDirection)),t.scale(this.scale,1),t.strokeWeight(22.5),t.bezier(-22.5,-22.5,22.5,-22.5,-22.5,22.5,22.5,22.5),t.pop()},e}(a),f=function(r){h(e,r);c(e);function e(t,n){return r.call(this,t,n)||this}return e.prototype.draw=function(r){var e=t.animLoop.theta;r&&(this.rotate+=n*this.rotateDirection);var o=t.map(e%n,0,n,0,1);t.push(),t.translate(this.x+22.5,this.y+22.5),t.rotate(t.map(p(o),0,1,this.rotate,this.rotate+n*this.rotateDirection)),t.strokeWeight(16),t.line(-22.5,-22.5,22.5,22.5),t.pop()},e}(a);t.setup=function(){t.pixelDensity(l?1:2),t.createCanvas(660,840),t.colorMode(t.HSB,1),t.createLoop(15,{gif:!!l&&{render:!1,open:!0}});for(var r=0;r<t.width;r+=45)for(var n=0;n<t.height;n+=45)e.push(new u(r,n)),o.push(new f(r,n))},t.draw=function(){t.background(1-r,1,1),t.stroke(r,.8,.7),e.forEach((function(r){return r.draw(t.animLoop.theta%n<=i)})),t.stroke(1-r,1,1),o.forEach((function(r){return r.draw(t.animLoop.theta%n<=i)})),i=t.animLoop.theta%n}};r.default=function(t){var r=t.location;return Object(a.c)(e.a,{sketch:y,path:r.pathname,description:""})}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-10-18-js-5b7670d4d1f8b13705b1.js.map