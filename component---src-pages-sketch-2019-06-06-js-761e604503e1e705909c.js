(window.webpackJsonp=window.webpackJsonp||[]).push([[173],{327:function(t,n,o){"use strict";o.r(n);var e=o(371),i=o.n(e),r=o(12),c=(o(0),o(348)),u=(o(358),o(351)),a=function(t){var n=t.random(20,80),o=30,e=[],r=function(){function n(n,o,e){this.x=n,this.y=o,this.velocity=t.createVector(t.random(-1,1),t.random(-1,1)),this.position=t.createVector(this.x,this.y)}return n.prototype.move=function(){this.prev={x:this.position.x,y:this.position.y},this.velocity.add(t.createVector(t.map(t.noise(this.position.x/300,this.position.y/200,t.frameCount/400),0,1,-.1,.1),t.map(t.noise(this.position.x/200,this.position.y/300,t.frameCount/400),0,1,-.1,.1))),this.velocity.mult(.98,.98),this.position.add(this.velocity)},n}();t.setup=function(){t.createCanvas(660,840);for(var o=0;o<t.TWO_PI;o+=t.TWO_PI/50)e.push(i()(r,Object(u.a)(t.width,.666*t.height,o,100,!0)));t.colorMode(t.HSB,100),t.background(n,80,20),t.noFill(),t.blendMode(t.HARD_LIGHT)},t.draw=function(){t.stroke(t.map(t.cos(t.frameCount/50),-1,1,n-20,n+20),80,t.map(t.sin(t.frameCount/200),-1,1,20,100),o),t.beginShape(),e.forEach(function(n){n.move(),t.curveVertex(n.position.x,n.position.y)}),t.endShape(t.CLOSE),o-=.01,console.log(o),o<=0&&t.noLoop()}};n.default=function(t){var n=t.location;return Object(r.c)(c.a,{sketch:a,path:n.pathname,description:"Reload page for a different variation."})}},351:function(t,n,o){"use strict";o.d(n,"c",function(){return e}),o.d(n,"d",function(){return i}),o.d(n,"b",function(){return r});var e=function(t,n,o){return t+Math.cos(n)*o},i=function(t,n,o){return t+Math.sin(n)*o},r=function(t,n,o,e,i,r){void 0===r&&(r=!1);var c=t+Math.cos(o)*e,u=n+Math.sin(o)*i;return r?[c,u]:{x:c,y:u}};n.a=function(t,n,o,r,c){void 0===c&&(c=!1);var u=e(t,o,r),a=i(n,o,r);return c?[u,a]:{x:u,y:a}}},371:function(t,n,o){var e=o(372);function i(n,o,r){return!function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}()?t.exports=i=function(t,n,o){var i=[null];i.push.apply(i,n);var r=new(Function.bind.apply(t,i));return o&&e(r,o.prototype),r}:t.exports=i=Reflect.construct,i.apply(null,arguments)}t.exports=i},372:function(t,n){function o(n,e){return t.exports=o=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t},o(n,e)}t.exports=o}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-06-06-js-761e604503e1e705909c.js.map