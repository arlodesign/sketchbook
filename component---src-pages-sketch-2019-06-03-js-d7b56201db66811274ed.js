(window.webpackJsonp=window.webpackJsonp||[]).push([[170],{324:function(t,n,o){"use strict";o.r(n);o(346);var i=o(363),r=o.n(i),e=o(12),c=(o(0),o(345)),u=(o(355),o(348)),a=function(t){var n=5,o=[],i=function(){function n(n,o,i){this.x=n,this.y=o,this.velocity=t.createVector(t.random(-1,1),t.random(-1,1)),this.position=t.createVector(this.x,this.y)}return n.prototype.move=function(){this.prev={x:this.position.x,y:this.position.y},this.velocity.add(t.createVector(t.map(t.noise(this.position.x/300,this.position.y/200,t.frameCount/400),0,1,-.1,.1),t.map(t.noise(this.position.x/200,this.position.y/300,t.frameCount/400),0,1,-.1,.1))),this.velocity.mult(.99,.99),this.position.add(this.velocity)},n}();t.setup=function(){t.createCanvas(660,840);for(var n=0;n<t.TWO_PI;n+=t.TWO_PI/50)o.push(r()(i,Object(u.a)(t.width/2,t.height/2,n,100,!0)));t.background(0),t.noStroke()},t.draw=function(){t.fill(t.map(t.cos(t.frameCount/100),-1,1,0,255),n),t.beginShape(),o.forEach(function(n){n.move(),t.vertex(n.position.x,n.position.y)}),t.endShape(t.CLOSE)},0===(n-=5e-4)&&t.noLoop()};n.default=function(t){var n=t.location;return Object(e.c)(c.a,{sketch:a,path:n.pathname,description:"Reload page for a different variation."})}},346:function(t,n,o){var i=o(9);i(i.P,"Array",{fill:o(347)}),o(67)("fill")},347:function(t,n,o){"use strict";var i=o(34),r=o(100),e=o(18);t.exports=function(t){for(var n=i(this),o=e(n.length),c=arguments.length,u=r(c>1?arguments[1]:void 0,o),a=c>2?arguments[2]:void 0,s=void 0===a?o:r(a,o);s>u;)n[u++]=t;return n}},348:function(t,n,o){"use strict";o.d(n,"c",function(){return i}),o.d(n,"d",function(){return r}),o.d(n,"b",function(){return e});var i=function(t,n,o){return t+Math.cos(n)*o},r=function(t,n,o){return t+Math.sin(n)*o},e=function(t,n,o,i,r,e){void 0===e&&(e=!1);var c=t+Math.cos(o)*i,u=n+Math.sin(o)*r;return e?[c,u]:{x:c,y:u}};n.a=function(t,n,o,e,c){void 0===c&&(c=!1);var u=i(t,o,e),a=r(n,o,e);return c?[u,a]:{x:u,y:a}}},363:function(t,n,o){var i=o(364);function r(n,o,e){return!function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}()?t.exports=r=function(t,n,o){var r=[null];r.push.apply(r,n);var e=new(Function.bind.apply(t,r));return o&&i(e,o.prototype),e}:t.exports=r=Reflect.construct,r.apply(null,arguments)}t.exports=r},364:function(t,n){function o(n,i){return t.exports=o=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t},o(n,i)}t.exports=o}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-06-03-js-d7b56201db66811274ed.js.map