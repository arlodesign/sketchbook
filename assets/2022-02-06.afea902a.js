"use strict";(self.webpackChunksketchbook=self.webpackChunksketchbook||[]).push([[8586],{72292:function(e,r,n){var t=n(94035),u=n.n(t),i=n(45456),o=n.n(i),a=n(8372),c=n(58891);function f(e){return function(e){if(Array.isArray(e))return l(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,r){if(e){if("string"==typeof e)return l(e,r);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?l(e,r):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(e,r){(null==r||r>e.length)&&(r=e.length);for(var n=0,t=new Array(r);n<r;n++)t[n]=e[n];return t}function s(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function y(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?s(Object(n),!0).forEach((function(r){h(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function h(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}window.p5=u(),o()(),new(u())((function(e){var r,n,t,u=(0,a.getLineBy3Points)([{x:0,y:.2},{x:.5,y:.4},{x:1,y:1}]),i="true"===e.getURLParams().render,o=(e.windowHeight,e.windowHeight,120*(i?12:1)),l=~~(i?5:60),s=o*l;function h(){var e={hue:n.value()};t.attribute("href","?"+new URLSearchParams(y(y({},e),{},{render:!i})).toString()),window.history.replaceState(null,document.title,"?"+new URLSearchParams(y(y({},e),{},{render:i})).toString())}e.setup=function(){e.pixelDensity(2),e.frameRate(l),e.createCanvas(e.windowWidth,e.windowWidth),e.createLoop(o,{noiseRadius:.8}),r=Object.assign({hue:e.random()},e.getURLParams()),i||e.noSmooth(),(n=e.createSlider(.1,.9,parseFloat(r.hue,10),.01)).changed(h),t=e.createA("?",i?"Draft":"Render"),h(),e.colorMode(e.HSB,1),e.background(n.value(),.2,.3);for(var u=Math.sqrt(e.width/2*e.width/2+e.height/2*e.height/2),a=0;a<e.width;a++)for(var c=0;c<e.height;c++)e.stroke(n.value(),.2,(u-e.dist(a,c,e.width/2,e.height/2))/u/2),e.point(a,c)},e.draw=function(){var r=e.animLoop,t=r.progress,o=(r.theta,r.noise,r.noise1D),a=r.noise2D,l=e.sin(2*e.PI*t-e.PI/2)/2+.5;e.stroke(n.value()+.1*o(1),1,u(l),.05),e.strokeWeight(2),e.noFill(),e.blendMode(e.OVERLAY),e.translate(e.width/2,e.height/2);var y=[[e.lerp(-e.width/10,-e.width/2,(0,c.easeInOutQuad)(l*Math.abs(a(0,.01)))),e.lerp(-e.height/10,-e.height/2,(0,c.easeInOutQuad)(l*Math.abs(a(.02,.03))))],[e.lerp(e.width/10,e.width/2,(0,c.easeInOutQuad)(l*Math.abs(a(.04,.05)))),e.lerp(-e.height/10,-e.height/2,(0,c.easeInOutQuad)(l*Math.abs(a(.06,.07))))],[e.lerp(e.width/10,e.width/2,(0,c.easeInOutQuad)(l*Math.abs(a(.08,.09)))),e.lerp(e.height/10,e.height/2,(0,c.easeInOutQuad)(l*Math.abs(a(.01,.011))))],[e.lerp(-e.width/10,-e.width/2,l*Math.abs(a(.012,.013))),e.lerp(e.height/10,e.height/2,l*Math.abs(a(.014,.015)))]];e.beginShape(),e.curveVertex.apply(e,f(y[0])),e.curveVertex.apply(e,f(y[1])),e.curveVertex.apply(e,f(y[2])),e.curveVertex.apply(e,f(y[3])),e.curveVertex.apply(e,f(y[0])),e.curveVertex.apply(e,f(y[1])),e.curveVertex.apply(e,f(y[2])),e.endShape(),e.frameCount%100==0&&console.info("".concat(e.ceil(100*t),"% | ").concat(e.frameCount,"/").concat(s)),i&&e.save("".concat(String(e.frameCount).padStart(String(s).length,"0"),".png")),e.frameCount===s&&e.noLoop()}}),"sketch")},58891:function(e,r,n){n.r(r),n.d(r,{linear:function(){return t},easeInQuad:function(){return u},easeOutQuad:function(){return i},easeInOutQuad:function(){return o},easeInCubic:function(){return a},easeOutCubic:function(){return c},easeInOutCubic:function(){return f},easeInQuart:function(){return l},easeOutQuart:function(){return s},easeInOutQuart:function(){return y},easeInQuint:function(){return h},easeOutQuint:function(){return d},easeInOutQuint:function(){return p}});var t=function(e){return e},u=function(e){return e*e},i=function(e){return e*(2-e)},o=function(e){return e<.5?2*e*e:(4-2*e)*e-1},a=function(e){return e*e*e},c=function(e){return--e*e*e+1},f=function(e){return e<.5?4*e*e*e:(e-1)*(2*e-2)*(2*e-2)+1},l=function(e){return e*e*e*e},s=function(e){return 1- --e*e*e*e},y=function(e){return e<.5?8*e*e*e*e:1-8*--e*e*e*e},h=function(e){return e*e*e*e*e},d=function(e){return 1+--e*e*e*e*e},p=function(e){return e<.5?16*e*e*e*e*e:1+16*--e*e*e*e*e}},8372:function(e,r,n){Object.defineProperty(r,"__esModule",{value:!0});var t=function(){function e(e,r){for(var n,t=0;t<r.length;t++)(n=r[t]).enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}return function(r,n,t){return n&&e(r.prototype,n),t&&e(r,t),r}}(),u=n(11833),i=function(){function e(){!function(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}(this,e)}var r=Math.pow;return t(e,null,[{key:"by2Points",value:function(e){return(0,u.getKB)(function(e){var r=function(e,r){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,r){var n=[],t=!0,u=!1,i=void 0;try{for(var o,a=e[Symbol.iterator]();!(t=(o=a.next()).done)&&(n.push(o.value),!r||n.length!==r);t=!0);}catch(e){u=!0,i=e}finally{try{!t&&a.return&&a.return()}finally{if(u)throw i}}return n}(e,r);throw new TypeError("Invalid attempt to destructure non-iterable instance")}(e,2),n=r[0],t=r[1];return{x1:n.x,y1:n.y,x2:t.x,y2:t.y}}(e))}},{key:"getLineBy2Points",value:function(r){var n=e.by2Points(r),t=n.k,u=n.b;return function(e){return t*e+u}}},{key:"by3Points",value:function(e){var n,t=void 0,u=void 0,i=void 0,o=void 0,a=void 0,c=void 0,f=null,l=null,s=null,y=null,h=["x","y"],d=["x1","x2","x3","y1","y2","y3"];if(Array.isArray(e)){if(n=[],e.map((function(e){for(var r=Object.keys(e),t=0;t<h.length;t++)r.includes(h[t])?n.push(!0):n.push(!1);return!1})),n.includes(!1))return{error:"FUCKUP! Каких-то полей не хватает =)"};e.map((function(e,r){switch(r){case 0:t=e.x,o=e.y;break;case 1:u=e.x,a=e.y;break;case 2:i=e.x,c=e.y}return!1}))}else{if(!function(e){for(var r=[],n=Object.keys(e),t=0;t<d.length;t++)n.includes(d[t])?r.push(!0):r.push(!1);return!r.includes(!1)}(e))return{error:"FUCKUP! Каких-то полей не хватает =)"};t=e.x1,o=e.y1,u=e.x2,a=e.y2,i=e.x3,c=e.y3}return t===u||u===i||i===t?y="Impossible / Указанные точки не для квадратичной функции!":(l=(o-a-(f=(o*(u-i)+a*(i-t)+c*(t-u))/((t-u)*(u-i)*(t-i)))*(r(t,2)-r(u,2)))/(t-u),s=o-f*r(t,2)-l*t),{a:f,b:l,c:s,error:y}}},{key:"getLineBy3Points",value:function(r){var n=e.by3Points(r),t=n.error,u=n.a,i=n.b,o=n.c;return t?null:function(e){return u*e*e+i*e+o}}},{key:"byLeastSquaresApproximation",value:function(e){for(var n=[[0,0,0,0],[0,0,0,0],[0,0,0,0]],t=0;t<e.length;t++)n[0][0]+=r(e[t].x,4),n[0][1]+=r(e[t].x,3),n[0][2]+=r(e[t].x,2),n[0][3]+=r(e[t].x,2)*e[t].y,n[1][0]+=r(e[t].x,3),n[1][1]+=r(e[t].x,2),n[1][2]+=e[t].x,n[1][3]+=e[t].x*e[t].y,n[2][0]+=r(e[t].x,2),n[2][1]+=e[t].x,++n[2][2],n[2][3]+=e[t].y;var u=n[0][1]*n[1][2]-n[1][1]*n[0][2],i=n[1][1]*n[2][2]-n[2][1]*n[1][2],o=i*(n[0][3]*n[1][2]-n[1][3]*n[0][2])-u*(n[1][3]*n[2][2]-n[2][3]*n[1][2]);o/=i*(n[0][0]*n[1][2]-n[1][0]*n[0][2])-u*(n[1][0]*n[2][2]-n[2][0]*n[1][2]);var a=(n[1][3]*n[2][2]-n[2][3]*n[1][2]-o*(n[1][0]*n[2][2]-n[2][0]*n[1][2]))/i;return{a:o,b:a,c:(n[0][3]-o*n[0][0]-a*n[0][1])/n[0][2]}}},{key:"getLineByLeastSquaresApproximation",value:function(r){var n=e.byLeastSquaresApproximation(r),t=n.a,u=n.b,i=n.c;return function(e){return t*e*e+u*e+i}}},{key:"getBrokenLineByPoints",value:function(e){var r=[].concat(function(e){if(Array.isArray(e)){for(var r=0,n=Array(e.length);r<e.length;r++)n[r]=e[r];return n}return Array.from(e)}(e)).sort((function(e,r){return e.x-r.x}));return function(e){var n=void 0,t=void 0,i=void 0,o=void 0;if(e<=r[0].x)n=r[0].x,t=r[1].x,i=r[0].y,o=r[1].y;else if(e>=r[r.length-1].x)n=r[r.length-2].x,t=r[r.length-1].x,i=r[r.length-2].y,o=r[r.length-1].y;else for(var a=0;a<r.length-1;a++)if(e>=r[a].x&&e<=r[a+1].x){n=r[a].x,t=r[a+1].x,i=r[a].y,o=r[a+1].y;break}return(0,u.linear)({x:e,x1:n,y1:i,x2:t,y2:o})}}}]),e}();r.default=i,e.exports=r.default},11833:function(e,r){var n=function(){function e(e,r){for(var n,t=0;t<r.length;t++)(n=r[t]).enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}return function(r,n,t){return n&&e(r.prototype,n),t&&e(r,t),r}}();Object.defineProperty(r,"__esModule",{value:!0});var t=function(){function e(){!function(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}(this,e)}return n(e,null,[{key:"linear",value:function(e){var r=e.x,n=e.x1,t=e.y1,u=e.x2,i=e.y2;return n===u?(t+i)/2:(r-n)*(i-t)/(u-n)+t}},{key:"getKB",value:function(e){var r=e.x1,n=e.y1,t=e.x2,u=(e.y2-n)/(t-r);return{k:u,b:n-u*r}}},{key:"bilinear",value:function(r){var n=r.x,t=r.y,u=r.x1,i=r.y1,o=r.x2,a=r.y2,c=r.q11,f=r.q12,l=r.q21,s=r.q22,y=e.linear({x:n,x1:u,y1:c,x2:o,y2:f}),h=e.linear({x:n,x1:u,y1:l,x2:o,y2:s});return e.linear({x:t,x1:i,y1:y,x2:a,y2:h})}},{key:"byInternalTable",value:function(r){var n=r.x,t=r.y,u=r.tableAsDoubleArray;try{var i,o,a=void 0,c=void 0;for(a=1;u[a][0]<t;a++);for(i=a-1,c=1;u[0][c]<n;c++);return o=c-1,e.bilinear({x:n,y:t,x1:u[0][o],y1:u[i][0],x2:u[0][c],y2:u[a][0],q11:u[i][o],q12:u[i][c],q21:u[a][o],q22:u[a][c]})}catch(e){return 0}}},{key:"getCommonPointByBisectionMethod",value:function(e){var r=Math.sign,n=e.fn1,t=e.fn2,u=e.xMin,i=void 0===u?-1e3:u,o=e.xMax,a=void 0===o?1e3:o,c=e.eps,f=void 0===c?.001:c,l=e.iMax,s=void 0===l?1e3:l,y=i,h=a,d=function(e){return n(e)-t(e)},p=0,v=0;if(0<r(d(y))*r(d(h)))return{error:!0,descriptrion:"diffFn(x) имеет одинаковый знак на границах отрезка"};for(;Math.abs(h-y)>f;)if(v=(y+h)/2,0>=r(d(y))*r(d(v))?h=v:y=v,++p===s)return{error:!0,descriptrion:"Превышено максимально допустимое количество итераций"};return{error:!1,x:(y+h)/2,y:n((y+h)/2)}}}]),e}();r.default=t,e.exports=r.default}},function(e){e.O(0,[4035,5456],(function(){return 72292,e(e.s=72292)})),e.O()}]);