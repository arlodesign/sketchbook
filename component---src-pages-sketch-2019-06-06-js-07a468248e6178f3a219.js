(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{ViKx:function(t,n,o){"use strict";o.d(n,"b",(function(){return e}));var e=function(t,n,o,e,r,i){void 0===i&&(i=!1);var c=t+Math.cos(o)*e,a=n+Math.sin(o)*r;return i?[c,a]:{x:c,y:a}};n.a=function(t,n,o,e,r){void 0===r&&(r=!1);var i=function(t,n,o){return t+Math.cos(n)*o}(t,o,e),c=function(t,n,o){return t+Math.sin(n)*o}(n,o,e);return r?[i,c]:{x:i,y:c}}},uWcJ:function(t,n,o){"use strict";o.r(n);o("I5cv"),o("/SS/"),o("XfO3"),o("HEwt"),o("a1Th"),o("Btvt"),o("rE2o"),o("ioFf"),o("rGqo");var e=o("q1tI"),r=o.n(e),i=o("Bl7J"),c=o("9VVL"),a=o("ViKx");function u(t,n,o){return(u=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}()?Reflect.construct:function(t,n,o){var e=[null];e.push.apply(e,n);var r=new(Function.bind.apply(t,e));return o&&s(r,o.prototype),r}).apply(null,arguments)}function s(t,n){return(s=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,n)}function f(t){return function(t){if(Array.isArray(t)){for(var n=0,o=new Array(t.length);n<t.length;n++)o[n]=t[n];return o}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var p=function(t){var n=t.random(20,80),o=30,e=[],r=function(){function n(n,o){this.x=n,this.y=o,this.velocity=t.createVector(t.random(-1,1),t.random(-1,1)),this.position=t.createVector(this.x,this.y)}return n.prototype.move=function(){this.prev={x:this.position.x,y:this.position.y},this.velocity.add(t.createVector(t.map(t.noise(this.position.x/300,this.position.y/200,t.frameCount/400),0,1,-.1,.1),t.map(t.noise(this.position.x/200,this.position.y/300,t.frameCount/400),0,1,-.1,.1))),this.velocity.mult(.98,.98),this.position.add(this.velocity)},n}();t.setup=function(){t.createCanvas(660,840);for(var o=0;o<t.TWO_PI;o+=t.TWO_PI/50)e.push(u(r,f(Object(a.a)(t.width,.666*t.height,o,100,!0))));t.colorMode(t.HSB,100),t.background(n,80,20),t.noFill(),t.blendMode(t.HARD_LIGHT)},t.draw=function(){t.stroke(t.map(t.cos(t.frameCount/50),-1,1,n-20,n+20),80,t.map(t.sin(t.frameCount/200),-1,1,20,100),o),t.beginShape(),e.forEach((function(n){n.move(),t.curveVertex(n.position.x,n.position.y)})),t.endShape(t.CLOSE),(o-=.01)<=0&&t.noLoop()}};n.default=function(){return r.a.createElement(i.a,null,r.a.createElement(c.a,{sketch:p}),r.a.createElement("p",null,"Reload page for a different variation."))}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-06-06-js-07a468248e6178f3a219.js.map