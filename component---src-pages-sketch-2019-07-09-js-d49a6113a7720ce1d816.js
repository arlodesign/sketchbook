(window.webpackJsonp=window.webpackJsonp||[]).push([[204],{392:function(t,n,o){"use strict";o.r(n);var r=o(451),e=o.n(r),c=(o(436),o(10)),a=(o(0),o(434)),i=o(435),u=(o(440),function(t){var n=t.shuffle(["cyan","yellow","magenta"]),o=[],r=function(){function o(n,o){this.x=n,this.y=o,this.startA=t.random(t.TWO_PI)}return o.prototype.draw=function(){var o=this;n.forEach(function(r,e){t.fill(r),t.circle.apply(t,Object(i.a)(o.x,o.y,o.startA+t.animLoop.theta+t.TWO_PI/n.length*e,30*t.map(t.cos(t.animLoop.theta),-1,1,0,2),!0).concat([t.map(t.cos(t.animLoop.theta),-1,1,10,30*t.map(t.animLoop.noise2D(o.x,o.y),-1,1,1,3))]))})},o}();t.setup=function(){t.createCanvas(660,840),t.noStroke(),t.createLoop(5,{gif:!1,noiseRadius:.2}),o.push(new r(t.width/2,t.height/2));for(var n=30,c=0;n<t.width/2;){for(var a=0;t.dist.apply(t,Object(i.a)(t.width/2,t.height/2,0,n,!0).concat(Object(i.a)(t.width/2,t.height/2,a,n,!0)))<30;)a+=.001;for(var u=Math.floor(t.TWO_PI/a),f=c;f<t.TWO_PI+c;f+=t.TWO_PI/u)o.push(e()(r,Object(i.a)(t.width/2,t.height/2,f,n,!0)));n+=30,c+=a}},t.draw=function(){t.blendMode(t.BLEND),t.background(255),t.blendMode(t.MULTIPLY),o.forEach(function(t){return t.draw()})}});n.default=function(t){var n=t.location;return Object(c.c)(a.a,{sketch:u,path:n.pathname,description:""})}},435:function(t,n,o){"use strict";o.d(n,"c",function(){return r}),o.d(n,"d",function(){return e}),o.d(n,"b",function(){return c});var r=function(t,n,o){return t+Math.cos(n)*o},e=function(t,n,o){return t+Math.sin(n)*o},c=function(t,n,o,r,e,c){void 0===c&&(c=!1);var a=t+Math.cos(o)*r,i=n+Math.sin(o)*e;return c?[a,i]:{x:a,y:i}};n.a=function(t,n,o,c,a){void 0===a&&(a=!1);var i=r(t,o,c),u=e(n,o,c);return a?[i,u]:{x:i,y:u}}},451:function(t,n,o){var r=o(452);function e(n,o,c){return!function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}()?t.exports=e=function(t,n,o){var e=[null];e.push.apply(e,n);var c=new(Function.bind.apply(t,e));return o&&r(c,o.prototype),c}:t.exports=e=Reflect.construct,e.apply(null,arguments)}t.exports=e},452:function(t,n){function o(n,r){return t.exports=o=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t},o(n,r)}t.exports=o}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-07-09-js-d49a6113a7720ce1d816.js.map