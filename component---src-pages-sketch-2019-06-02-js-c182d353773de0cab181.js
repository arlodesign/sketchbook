(window.webpackJsonp=window.webpackJsonp||[]).push([[169],{357:function(t,n,i){"use strict";i.r(n);var o=i(436),e=i.n(o),r=i(10),c=i(0),s=i.n(c),a=i(419),u=i(431),p=i(420),f=function(t){var n=[],i=function(){function n(n,i,o){this.x=n,this.y=i,this.velocity=t.createVector(t.random(-1,1),t.random(-1,1)),this.position=t.createVector(this.x,this.y)}var i=n.prototype;return i.move=function(){this.prev={x:this.position.x,y:this.position.y},this.velocity.add(t.createVector(t.map(t.noise(this.position.x/300,this.position.y/200,t.frameCount/400),0,1,-.1,.1),t.map(t.noise(this.position.x/200,this.position.y/300,t.frameCount/400),0,1,-.1,.1))),this.velocity.mult(.97,.97),this.position.add(this.velocity)},i.display=function(){var n=this.position,i=n.x,o=n.y;t.stroke(t.map(t.cos(t.frameCount/500),-1,1,0,255)),t.strokeWeight(t.map(t.dist(i,o,t.width/2,t.height/2),0,t.dist(0,0,t.width/2,t.height/2),5,10)),t.line(this.prev.x,this.prev.y,i,o)},n}();t.setup=function(){t.createCanvas(660,840);for(var o=0;o<t.TWO_PI;o+=t.TWO_PI/50)n.push(e()(i,Object(p.a)(t.width/2,t.height/2,o,10,!0)));t.background(0)},t.draw=function(){n.forEach(function(t){t.move(),t.display()})}};n.default=function(t){var n=t.location;return Object(r.c)(a.a,{sketch:f,path:n.pathname,description:Object(r.c)(s.a.Fragment,null,"Reload page for a different variation.",Object(r.c)("br",null),"Inspired by"," ",Object(r.c)(u.a,{href:"https://github.com/wangyasai"},"Yasai’s work"),".")})}},420:function(t,n,i){"use strict";i.d(n,"c",function(){return o}),i.d(n,"d",function(){return e}),i.d(n,"b",function(){return r});var o=function(t,n,i){return t+Math.cos(n)*i},e=function(t,n,i){return t+Math.sin(n)*i},r=function(t,n,i,o,e,r){void 0===r&&(r=!1);var c=t+Math.cos(i)*o,s=n+Math.sin(i)*e;return r?[c,s]:{x:c,y:s}};n.a=function(t,n,i,r,c){void 0===c&&(c=!1);var s=o(t,i,r),a=e(n,i,r);return c?[s,a]:{x:s,y:a}}},436:function(t,n,i){var o=i(437);function e(n,i,r){return!function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}()?t.exports=e=function(t,n,i){var e=[null];e.push.apply(e,n);var r=new(Function.bind.apply(t,e));return i&&o(r,i.prototype),r}:t.exports=e=Reflect.construct,e.apply(null,arguments)}t.exports=e},437:function(t,n){function i(n,o){return t.exports=i=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t},i(n,o)}t.exports=i}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-06-02-js-c182d353773de0cab181.js.map