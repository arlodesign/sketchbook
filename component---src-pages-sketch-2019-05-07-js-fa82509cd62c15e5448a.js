(window.webpackJsonp=window.webpackJsonp||[]).push([[151],{305:function(t,i,n){"use strict";n.r(i);var r=n(12),o=(n(0),n(353)),a=(n(356),n(366),n(359)),e=function(t){var i,n,r=[1,2,3,5,8],o=60,e=3,s=[],h=function(){function i(i,n,r){this.x=i*o,this.y=n*o,this.size=r*o,this.drawFunc=t.random()<.1?this.drawBackslash:this.drawSlash,t.stroke(t.random()<.3?255:0),this.drawFunc()}var n=i.prototype;return n.drawSlash=function(){Object(a.a)(t,this.x,this.y+this.size,this.x+this.size,this.y,t.random())},n.drawBackslash=function(){Object(a.a)(t,this.x,this.y,this.x+this.size,this.y+this.size,t.random())},i}();t.setup=function(){t.createCanvas(660,840),t.background(128),t.noFill()},t.draw=function(){var a,u;if(0==s.length){t.strokeWeight(o/3),i=t.floor(t.width/o),n=t.floor(t.height/o);for(var c=0;c<i;c++){s.push([]);for(var f=0;f<n;f++)s[c].push({x:c,y:f,visited:!1})}}var d=t.random((a=[]).concat.apply(a,s).filter(function(t){return!t.visited})),l=d.x,v=d.y;s[l][v].visited||function(){var t,o=Math.max.apply(Math,r);do{t=!1;for(var a=l;a<o+l;a++)for(var e=v;e<o+v;e++)(l+o>i||v+o>n||s[a][e].visited)&&(t=!0);t&&(o=Math.max.apply(Math,r.filter(function(t){return t<o})))}while(t);new h(l,v,o);for(var u=l;u<o+l;u++)for(var c=v;c<o+v;c++)s[u][c].visited=!0}(),(u=[]).concat.apply(u,s).filter(function(t){return!t.visited}).length||(--e>0?(o/=3,s=[]):t.noLoop())}};i.default=function(t){var i=t.location;return Object(r.c)(o.a,{sketch:e,path:i.pathname,description:""})}},354:function(t,i,n){var r=n(9);r(r.P,"Array",{fill:n(355)}),n(67)("fill")},355:function(t,i,n){"use strict";var r=n(34),o=n(100),a=n(18);t.exports=function(t){for(var i=r(this),n=a(i.length),e=arguments.length,s=o(e>1?arguments[1]:void 0,n),h=e>2?arguments[2]:void 0,u=void 0===h?n:o(h,n);u>s;)i[s++]=t;return i}},356:function(t,i,n){"use strict";n.d(i,"c",function(){return r}),n.d(i,"d",function(){return o}),n.d(i,"b",function(){return a});var r=function(t,i,n){return t+Math.cos(i)*n},o=function(t,i,n){return t+Math.sin(i)*n},a=function(t,i,n,r,o,a){void 0===a&&(a=!1);var e=t+Math.cos(n)*r,s=i+Math.sin(n)*o;return a?[e,s]:{x:e,y:s}};i.a=function(t,i,n,a,e){void 0===e&&(e=!1);var s=r(t,n,a),h=o(i,n,a);return e?[s,h]:{x:s,y:h}}},359:function(t,i,n){"use strict";i.a=function(t,i,n,r,o,a,e){if(void 0===e&&(e=!0),a<=0)throw new Error("rate for lerpLine() must be greater than zero");for(var s=0;s<1;s+=a)(0!==s||e)&&t.random()>s&&t.point(t.lerp(i,r,s),t.lerp(n,o,s))}},366:function(t,i,n){"use strict";n(354);i.a=function(t,i){void 0===i&&(i=.5);var n=t.width*t.height*.02;console.log(n),t.push();for(var r=0;r<n;r++)t.fill(r%2?"rgba(0, 0, 0, "+i+")":"rgba(255, 255, 255, "+i+")"),t.noStroke(),t.ellipse(t.randomGaussian(t.width/2,t.width/3),t.randomGaussian(t.height/2,t.height/3),1/(t.pixelDensity()/2));t.pop()}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-05-07-js-fa82509cd62c15e5448a.js.map