(window.webpackJsonp=window.webpackJsonp||[]).push([[152],{339:function(t,i,n){"use strict";n.r(i);var r=n(10),a=(n(0),n(443)),o=(n(444),n(462),n(446)),e=function(t){var i,n,r=[1,2,3,5,8],a=60,e=3,s=[],h=function(){function i(i,n,r){this.x=i*a,this.y=n*a,this.size=r*a,this.drawFunc=t.random()<.1?this.drawBackslash:this.drawSlash,t.stroke(t.random()<.3?255:0),this.drawFunc()}var n=i.prototype;return n.drawSlash=function(){Object(o.a)(t,this.x,this.y+this.size,this.x+this.size,this.y,t.random())},n.drawBackslash=function(){Object(o.a)(t,this.x,this.y,this.x+this.size,this.y+this.size,t.random())},i}();t.setup=function(){t.createCanvas(660,840),t.background(128),t.noFill()},t.draw=function(){var o,u;if(0==s.length){t.strokeWeight(a/3),i=t.floor(t.width/a),n=t.floor(t.height/a);for(var c=0;c<i;c++){s.push([]);for(var f=0;f<n;f++)s[c].push({x:c,y:f,visited:!1})}}var d=t.random((o=[]).concat.apply(o,s).filter(function(t){return!t.visited})),p=d.x,l=d.y;s[p][l].visited||function(){var t,a=Math.max.apply(Math,r);do{t=!1;for(var o=p;o<a+p;o++)for(var e=l;e<a+l;e++)(p+a>i||l+a>n||s[o][e].visited)&&(t=!0);t&&(a=Math.max.apply(Math,r.filter(function(t){return t<a})))}while(t);new h(p,l,a);for(var u=p;u<a+p;u++)for(var c=l;c<a+l;c++)s[u][c].visited=!0}(),(u=[]).concat.apply(u,s).filter(function(t){return!t.visited}).length||(--e>0?(a/=3,s=[]):t.noLoop())}};i.default=function(t){var i=t.location;return Object(r.c)(a.a,{sketch:e,path:i.pathname,description:""})}},444:function(t,i,n){"use strict";n.d(i,"c",function(){return r}),n.d(i,"d",function(){return a}),n.d(i,"b",function(){return o});var r=function(t,i,n){return t+Math.cos(i)*n},a=function(t,i,n){return t+Math.sin(i)*n},o=function(t,i,n,r,a,o){void 0===o&&(o=!1);var e=t+Math.cos(n)*r,s=i+Math.sin(n)*a;return o?[e,s]:{x:e,y:s}};i.a=function(t,i,n,o,e){void 0===e&&(e=!1);var s=r(t,n,o),h=a(i,n,o);return e?[s,h]:{x:s,y:h}}},446:function(t,i,n){"use strict";i.a=function(t,i,n,r,a,o,e){if(void 0===e&&(e=!0),o<=0)throw new Error("rate for lerpLine() must be greater than zero");for(var s=0;s<1;s+=o)(0!==s||e)&&t.random()>s&&t.point(t.lerp(i,r,s),t.lerp(n,a,s))}},462:function(t,i,n){"use strict";n(445);i.a=function(t,i){void 0===i&&(i=.5);var n=t.width*t.height*.02;console.log(n),t.push();for(var r=0;r<n;r++)t.fill(r%2?"rgba(0, 0, 0, "+i+")":"rgba(255, 255, 255, "+i+")"),t.noStroke(),t.ellipse(t.randomGaussian(t.width/2,t.width/3),t.randomGaussian(t.height/2,t.height/3),1/(t.pixelDensity()/2));t.pop()}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-05-07-js-6bcc5fff3bc9ebfaed17.js.map