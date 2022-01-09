"use strict";(self.webpackChunksketchbook=self.webpackChunksketchbook||[]).push([[6661],{2247:function(t,n,r){var e=r(94035),o=r.n(e),i=r(61025);function a(t,n){if(t){if("string"==typeof t)return u(t,n);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?u(t,n):void 0}}function u(t,n){(null==n||n>t.length)&&(n=t.length);for(var r=0,e=new Array(n);r<n;r++)e[r]=t[r];return e}function c(t,n){for(var r=0;r<n.length;r++){var e=n[r];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(t,e.key,e)}}new(o())((function(t){var n,r,e,o,f,h=20*t.sqrt(3),l=t.random(),s=1-l,d=[],y=[],v=function(){function r(t,n){!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,r),this.x=t,this.y=n}var e,o;return e=r,(o=[{key:"draw",value:function(){t.beginShape();for(var n=0;n<t.TWO_PI;n+=t.TWO_PI/6)t.vertex.apply(t,function(t){if(Array.isArray(t))return u(t)}(r=(0,i.ZP)(this.x,this.y,n+t.TWO_PI/12,20,!0))||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(r)||a(r)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}());var r;t.endShape()}},{key:"points",get:function(){for(var r=[],e=t.dist(this.x,this.y,t.width/2,t.height/2)/n,o=0;o<t.TWO_PI;o+=t.TWO_PI/6){var a=(0,i.ZP)(this.x,this.y,o+t.TWO_PI/12,20);t.noise(a.x,a.y)/4<e&&r.push([a.x,a.y])}return t.noise(this.x,this.y)/2<e&&r.push([this.x,this.y]),r}}])&&c(e.prototype,o),Object.defineProperty(e,"prototype",{writable:!1}),r}();t.setup=function(){t.createCanvas(t.windowWidth,t.windowHeight),t.colorMode(t.HSB,1),t.background(s,.7,.5),n=t.dist(0,0,t.width/2,t.height/2),r=t.floor((t.width-h/2)/h),e=t.floor((t.width-10)/30),o=r*h+h/2,f=30*e+10;for(var i=0;i<r;i++)for(var u=0;u<e;u++){var c=i*h+(u%2?h:h/2)+(t.width-o)/2,p=40*u*.75+20+(t.height-f)/2;t.noise(c,p)<.5&&d.push(new v(c,p))}t.stroke(s,.5,.7),t.fill(s,.5,.7),t.strokeWeight(.25),d.forEach((function(t){t.draw(),t.points.forEach((function(t){var n,r,e=(r=2,function(t){if(Array.isArray(t))return t}(n=t)||function(t,n){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var e,o,i=[],a=!0,u=!1;try{for(r=r.call(t);!(a=(e=r.next()).done)&&(i.push(e.value),!n||i.length!==n);a=!0);}catch(t){u=!0,o=t}finally{try{a||null==r.return||r.return()}finally{if(u)throw o}}return i}}(n,r)||a(n,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=e[0],i=e[1];return y.push({vector:{x:o,y:i},reached:!1})}))})),y[t.floor(t.random(y.length))].reached=!0,t.stroke(l,.8,.2),t.strokeWeight(5)},t.draw=function(){var r,e,o=y.filter((function(t){return t.reached})),i=n;y.forEach((function(n,a){n.reached||o.forEach((function(o){var u=o.vector,c=t.dist(u.x,u.y,n.vector.x,n.vector.y);c<i&&(i=c,e=a,r=u)}))})),t.line(r.x+5,r.y+5,y[e].vector.x+5,y[e].vector.y+5),y[e].reached=!0,y.filter((function(t){return t.reached})).length===y.length?t.noLoop():console.info("".concat(t.floor(y.filter((function(t){return t.reached})).length/y.length*100),"%"))},t.windowResized=function(){t.resizeCanvas(t.windowWidth,t.windowHeight)}}),"sketch"),document.getElementById("description").innerHTML="Be patient. Reload page for a different variation."},61025:function(t,n,r){r.d(n,{Y2:function(){return e},C$:function(){return o},vy:function(){return i}});var e=function(t,n,r){return t+Math.cos(n)*r},o=function(t,n,r){return t+Math.sin(n)*r},i=function(t,n,r,e,o){var i=arguments.length>5&&void 0!==arguments[5]&&arguments[5],a=t+Math.cos(r)*e,u=n+Math.sin(r)*o;return i?[a,u]:{x:a,y:u}};n.ZP=function(t,n,r,i){var a=arguments.length>4&&void 0!==arguments[4]&&arguments[4],u=e(t,r,i),c=o(n,r,i);return a?[u,c]:{x:u,y:c}}}},function(t){t.O(0,[4035],(function(){return 2247,t(t.s=2247)})),t.O()}]);