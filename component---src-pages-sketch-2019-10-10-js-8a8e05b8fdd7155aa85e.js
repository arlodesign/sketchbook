(window.webpackJsonp=window.webpackJsonp||[]).push([[167],{QCNd:function(t,e,r){"use strict";r.r(e);r("bHtr");var a=r("q1tI"),o=r.n(a),i=r("Bl7J"),n=r("9VVL"),h=(r("PZSu"),{}.DEV&&!1),d=function(t){var e=t.random();t.setup=function(){t.pixelDensity(1),t.frameRate(h?30:60),t.createCanvas(660,840),t.createLoop(49,{gif:!!h&&{render:!1,open:!0},noiseRadius:.5}),t.colorMode(t.HSB,3),t.strokeWeight(2)},t.draw=function(){var r=t.animLoop.noise1D;t.blendMode(t.BLEND),t.background(255),t.blendMode(t.HARD_LIGHT);for(var a=t.floor(t.map(r(.5),-1,1,t.height/10,t.height/3)),o=0;o<t.height/a;o++)for(var i=t.width/(o+1),n=0,h=0;h<t.width;h+=i)t.fill(e+n%3,1,2),t.rect(h,o*a,h+i,o*a+a),n++;t.push(),t.translate(t.width,t.height),t.rotate(t.PI);for(var d=0;d<t.height/a;d++)for(var c=t.width/(d+1),f=0,l=0;l<t.width;l+=c)t.fill(e+f%3,1,2),t.rect(l,d*a,l+c,d*a+a),f++;t.pop(),t.noFill();for(var w=0;w<t.height/a;w++)for(var s=t.width/(w+1),u=0;u<t.width;u+=s)t.rect(u,w*a,u+s,w*a+a),1;t.translate(t.width,t.height),t.rotate(t.PI);for(var p=0;p<t.height/a;p++)for(var v=t.width/(p+1),g=0;g<t.width;g+=v)t.rect(g,p*a,g+v,p*a+a),1}};e.default=function(){return o.a.createElement(i.a,null,o.a.createElement(n.a,{sketch:d}))}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-10-10-js-8a8e05b8fdd7155aa85e.js.map