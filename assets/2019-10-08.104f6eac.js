"use strict";(self.webpackChunksketchbook=self.webpackChunksketchbook||[]).push([[8588],{41536:function(n,t,o){var r=o(94035),e=o.n(r),i=o(45456),a=o.n(i),u=o(61025),c=o(63608);function s(n){return function(n){if(Array.isArray(n))return d(n)}(n)||function(n){if("undefined"!=typeof Symbol&&null!=n[Symbol.iterator]||null!=n["@@iterator"])return Array.from(n)}(n)||function(n,t){if(n){if("string"==typeof n)return d(n,t);var o=Object.prototype.toString.call(n).slice(8,-1);return"Object"===o&&n.constructor&&(o=n.constructor.name),"Map"===o||"Set"===o?Array.from(n):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?d(n,t):void 0}}(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(n,t){(null==t||t>n.length)&&(t=n.length);for(var o=0,r=new Array(t);o<t;o++)r[o]=n[o];return r}window.p5=e(),a()();var f=process.env.DEV&&!0;new(e())((function(n){var t,o=n.random(33),r=[o,o+33,o+33],e=Array(8).fill().map((function(t,o){return n.floor(n.random(o,o+3))}));n.setup=function(){n.createCanvas(n.windowWidth,n.windowHeight),n.colorMode(n.HSL,100),n.blendMode(n.HARD_LIGHT),n.background(n.random(r),100,10),n.strokeWeight(2),n.createLoop(360,{noiseRadius:1}),t=n.dist(0,0,n.width/2,n.height/2)},n.draw=function(){var o=n.animLoop,i=o.theta,a=o.noise1D,d=(0,u.ZP)(0,0,2*i,t,!0),l=(0,u.ZP)(0,0,-i*e[0],n.height*a(e[0]/100),!0),h=(0,u.ZP)(0,0,i*e[1],n.width*a(e[1]/100),!0),p=(0,u.ZP)(0,0,2*-i,n.height/2,!0);n.translate(n.width/2,n.height/2),n.rotate(i),n.stroke(r[n.floor(n.map(n.sin(i*e[2]),-1,1,0,3))],100,n.map(n.sin(i*e[3]),-1,1,50,100),n.map(n.cos(i*e[4]),-1,1,50,0)),n.noFill(),c.Z.apply(void 0,[n].concat(s(d),s(l),[n.abs(a(e[5]/100))+1e-7])),c.Z.apply(void 0,[n].concat(s(l),s(h),[n.abs(a(e[6]/100))+1e-7])),c.Z.apply(void 0,[n].concat(s(h),s(p),[n.abs(a(e[7]/100))+1e-7])),21600===n.frameCount&&(n.noLoop(),f&&alert("done"))},n.windowResized=function(){n.resizeCanvas(n.windowWidth,n.windowHeight)}}),"sketch")},63608:function(n,t){t.Z=function(n,t,o,r,e,i){for(var a=!(arguments.length>6&&void 0!==arguments[6])||arguments[6],u=!(arguments.length>7&&void 0!==arguments[7])||arguments[7],c=Math.max(i,.01/n.dist(t,o,r,e)),s=0;s<1;s+=c)(0!==s||a)&&(u&&n.random()>s||!u)&&n.point(n.lerp(t,r,s),n.lerp(o,e,s))}},61025:function(n,t,o){o.d(t,{Y2:function(){return r},C$:function(){return e},vy:function(){return i}});var r=function(n,t,o){return n+Math.cos(t)*o},e=function(n,t,o){return n+Math.sin(t)*o},i=function(n,t,o,r,e){var i=arguments.length>5&&void 0!==arguments[5]&&arguments[5],a=n+Math.cos(o)*r,u=t+Math.sin(o)*e;return i?[a,u]:{x:a,y:u}};t.ZP=function(n,t,o,i){var a=arguments.length>4&&void 0!==arguments[4]&&arguments[4],u=r(n,o,i),c=e(t,o,i);return a?[u,c]:{x:u,y:c}}}},function(n){n.O(0,[4035,5456],(function(){return 41536,n(n.s=41536)})),n.O()}]);