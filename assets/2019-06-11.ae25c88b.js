"use strict";(self.webpackChunksketchbook=self.webpackChunksketchbook||[]).push([[1496],{27232:function(t,n,e){var r=e(94035),a=e.n(r),i=e(61025);function o(t){return function(t){if(Array.isArray(t))return h(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,n){if(t){if("string"==typeof t)return h(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?h(t,n):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function h(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,r=new Array(n);e<n;e++)r[e]=t[e];return r}new(a())((function(t){var n=[];t.setup=function(){t.createCanvas(t.windowWidth,t.windowHeight),t.background(0),t.stroke(255),t.strokeWeight(5),t.noFill();for(var e=Array.from(Array(4),(function(){return{a:t.random(t.TWO_PI),d:t.random(t.width/4,.45*t.width)}})),r=function(t){n=n.concat(e.map((function(n){var e=n.a,r=n.d;return{a:e+t,d:r}})))},a=0;a<t.TWO_PI;a+=t.TWO_PI/5)r(a)},t.draw=function(){t.curve.apply(t,o((0,i.ZP)(t.width/2,t.height/2,n[t.frameCount].a,n[t.frameCount].d,!0)).concat(o((0,i.ZP)(t.width/2,t.height/2,n[t.frameCount+1].a,n[t.frameCount+1].d,!0)),o((0,i.ZP)(t.width/2,t.height/2,n[t.frameCount+2].a,n[t.frameCount+2].d,!0)),o((0,i.ZP)(t.width/2,t.height/2,n[t.frameCount+3].a,n[t.frameCount+3].d,!0)))),t.frameCount===n.length-4&&(t.curve.apply(t,o((0,i.ZP)(t.width/2,t.height/2,n[t.frameCount+1].a,n[t.frameCount+1].d,!0)).concat(o((0,i.ZP)(t.width/2,t.height/2,n[t.frameCount+2].a,n[t.frameCount+2].d,!0)),o((0,i.ZP)(t.width/2,t.height/2,n[t.frameCount+3].a,n[t.frameCount+3].d,!0)),o((0,i.ZP)(t.width/2,t.height/2,n[0].a,n[0].d,!0)))),t.curve.apply(t,o((0,i.ZP)(t.width/2,t.height/2,n[t.frameCount+2].a,n[t.frameCount+2].d,!0)).concat(o((0,i.ZP)(t.width/2,t.height/2,n[t.frameCount+3].a,n[t.frameCount+3].d,!0)),o((0,i.ZP)(t.width/2,t.height/2,n[0].a,n[0].d,!0)),o((0,i.ZP)(t.width/2,t.height/2,n[1].a,n[1].d,!0)))),t.curve.apply(t,o((0,i.ZP)(t.width/2,t.height/2,n[t.frameCount+3].a,n[t.frameCount+3].d,!0)).concat(o((0,i.ZP)(t.width/2,t.height/2,n[0].a,n[0].d,!0)),o((0,i.ZP)(t.width/2,t.height/2,n[1].a,n[1].d,!0)),o((0,i.ZP)(t.width/2,t.height/2,n[2].a,n[2].d,!0)))),t.curve.apply(t,o((0,i.ZP)(t.width/2,t.height/2,n[0].a,n[0].d,!0)).concat(o((0,i.ZP)(t.width/2,t.height/2,n[1].a,n[1].d,!0)),o((0,i.ZP)(t.width/2,t.height/2,n[2].a,n[2].d,!0)),o((0,i.ZP)(t.width/2,t.height/2,n[3].a,n[3].d,!0)))),t.noLoop())},t.windowResized=function(){t.resizeCanvas(t.windowWidth,t.windowHeight)}}),"sketch"),document.getElementById("description").innerHTML="Reload page for a different variation."},61025:function(t,n,e){e.d(n,{Y2:function(){return r},C$:function(){return a},vy:function(){return i}});var r=function(t,n,e){return t+Math.cos(n)*e},a=function(t,n,e){return t+Math.sin(n)*e},i=function(t,n,e,r,a){var i=arguments.length>5&&void 0!==arguments[5]&&arguments[5],o=t+Math.cos(e)*r,h=n+Math.sin(e)*a;return i?[o,h]:{x:o,y:h}};n.ZP=function(t,n,e,i){var o=arguments.length>4&&void 0!==arguments[4]&&arguments[4],h=r(t,e,i),u=a(n,e,i);return o?[h,u]:{x:h,y:u}}}},function(t){t.O(0,[4035],(function(){return 27232,t(t.s=27232)})),t.O()}]);