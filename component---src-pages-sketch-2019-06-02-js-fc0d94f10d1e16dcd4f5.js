(window.webpackJsonp=window.webpackJsonp||[]).push([[167],{Bhai:function(t,n,i){"use strict";i.r(n);i("nWfQ"),i("YbXK"),i("cFtU"),i("q8oJ"),i("8npG"),i("m210"),i("4DPX"),i("rzGZ");var r=i("q1tI"),o=i.n(r),e=i("Gmm/"),c=i("Aw06"),a=i("ViKx"),u=i("qKvR");function s(t,n,i){return(s=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}()?Reflect.construct:function(t,n,i){var r=[null];r.push.apply(r,n);var o=new(Function.bind.apply(t,r));return i&&f(o,i.prototype),o}).apply(null,arguments)}function f(t,n){return(f=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,n)}function p(t){return function(t){if(Array.isArray(t)){for(var n=0,i=new Array(t.length);n<t.length;n++)i[n]=t[n];return i}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var h=function(t){var n=[],i=function(){function n(n,i,r){this.x=n,this.y=i,this.velocity=t.createVector(t.random(-1,1),t.random(-1,1)),this.position=t.createVector(this.x,this.y)}var i=n.prototype;return i.move=function(){this.prev={x:this.position.x,y:this.position.y},this.velocity.add(t.createVector(t.map(t.noise(this.position.x/300,this.position.y/200,t.frameCount/400),0,1,-.1,.1),t.map(t.noise(this.position.x/200,this.position.y/300,t.frameCount/400),0,1,-.1,.1))),this.velocity.mult(.97,.97),this.position.add(this.velocity)},i.display=function(){var n=this.position,i=n.x,r=n.y;t.stroke(t.map(t.cos(t.frameCount/500),-1,1,0,255)),t.strokeWeight(t.map(t.dist(i,r,t.width/2,t.height/2),0,t.dist(0,0,t.width/2,t.height/2),5,10)),t.line(this.prev.x,this.prev.y,i,r)},n}();t.setup=function(){t.createCanvas(660,840);for(var r=0;r<t.TWO_PI;r+=t.TWO_PI/50)n.push(s(i,p(Object(a.a)(t.width/2,t.height/2,r,10,!0))));t.background(0)},t.draw=function(){n.forEach((function(t){t.move(),t.display()}))}};n.default=function(t){var n=t.location;return Object(u.c)(e.a,{sketch:h,path:n.pathname,description:Object(u.c)(o.a.Fragment,null,"Reload page for a different variation.",Object(u.c)("br",null),"Inspired by"," ",Object(u.c)(c.a,{href:"https://github.com/wangyasai"},"Yasai’s work"),".")})}},ViKx:function(t,n,i){"use strict";i.d(n,"c",(function(){return r})),i.d(n,"d",(function(){return o})),i.d(n,"b",(function(){return e}));var r=function(t,n,i){return t+Math.cos(n)*i},o=function(t,n,i){return t+Math.sin(n)*i},e=function(t,n,i,r,o,e){void 0===e&&(e=!1);var c=t+Math.cos(i)*r,a=n+Math.sin(i)*o;return e?[c,a]:{x:c,y:a}};n.a=function(t,n,i,e,c){void 0===c&&(c=!1);var a=r(t,i,e),u=o(n,i,e);return c?[a,u]:{x:a,y:u}}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-06-02-js-fc0d94f10d1e16dcd4f5.js.map