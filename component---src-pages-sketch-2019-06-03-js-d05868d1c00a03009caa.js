(window.webpackJsonp=window.webpackJsonp||[]).push([[167],{418:function(t,n,o){"use strict";o.r(n);o(180);var i=o(560),e=o.n(i),r=o(0),c=(o(1),o(255)),u=(o(85),o(528)),a=function(t){var n=5,o=[],i=function(){function n(n,o,i){this.x=n,this.y=o,this.velocity=t.createVector(t.random(-1,1),t.random(-1,1)),this.position=t.createVector(this.x,this.y)}return n.prototype.move=function(){this.prev={x:this.position.x,y:this.position.y},this.velocity.add(t.createVector(t.map(t.noise(this.position.x/300,this.position.y/200,t.frameCount/400),0,1,-.1,.1),t.map(t.noise(this.position.x/200,this.position.y/300,t.frameCount/400),0,1,-.1,.1))),this.velocity.mult(.99,.99),this.position.add(this.velocity)},n}();t.setup=function(){t.createCanvas(660,840);for(var n=0;n<t.TWO_PI;n+=t.TWO_PI/50)o.push(e()(i,Object(u.a)(t.width/2,t.height/2,n,100,!0)));t.background(0),t.noStroke()},t.draw=function(){t.fill(t.map(t.cos(t.frameCount/100),-1,1,0,255),n),t.beginShape(),o.forEach((function(n){n.move(),t.vertex(n.position.x,n.position.y)})),t.endShape(t.CLOSE)},0===(n-=5e-4)&&t.noLoop()};n.default=function(t){var n=t.location;return Object(r.c)(c.a,{sketch:a,path:n.pathname,description:"Reload page for a different variation."})}},528:function(t,n,o){"use strict";o.d(n,"c",(function(){return i})),o.d(n,"d",(function(){return e})),o.d(n,"b",(function(){return r}));var i=function(t,n,o){return t+Math.cos(n)*o},e=function(t,n,o){return t+Math.sin(n)*o},r=function(t,n,o,i,e,r){void 0===r&&(r=!1);var c=t+Math.cos(o)*i,u=n+Math.sin(o)*e;return r?[c,u]:{x:c,y:u}};n.a=function(t,n,o,r,c){void 0===c&&(c=!1);var u=i(t,o,r),a=e(n,o,r);return c?[u,a]:{x:u,y:a}}},560:function(t,n,o){var i=o(561);function e(n,o,r){return!function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}()?t.exports=e=function(t,n,o){var e=[null];e.push.apply(e,n);var r=new(Function.bind.apply(t,e));return o&&i(r,o.prototype),r}:t.exports=e=Reflect.construct,e.apply(null,arguments)}t.exports=e},561:function(t,n){function o(n,i){return t.exports=o=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t},o(n,i)}t.exports=o}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-06-03-js-d05868d1c00a03009caa.js.map