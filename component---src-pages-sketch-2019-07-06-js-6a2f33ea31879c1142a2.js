(window.webpackJsonp=window.webpackJsonp||[]).push([[81],{Vp78:function(e,n,t){"use strict";t.r(n);t("bHtr");var a=t("q1tI"),o=t.n(a),r=t("Bl7J"),c=t("9VVL"),i=(t("PZSu"),function(e){var n=e.shuffle(["magenta","yellow","cyan"]);e.setup=function(){e.createCanvas(660,840),e.createLoop(3,{gif:!1,noiseRadius:.1}),e.rectMode(e.CENTER),e.noStroke()},e.draw=function(){e.blendMode(e.BLEND),e.background(255),e.blendMode(e.MULTIPLY),[e.width/30,e.width/10,e.width/5].forEach((function(t,a){for(var o=0;o<e.width;o+=t)for(var r=0;r<e.height;r+=t)e.push(),e.fill(n[a]),e.translate(o+t/2,r+t/2),e.scale(e.animLoop.noise2D(o+t/2,r+t/2)),e.circle(0,0,t),e.pop()}))}});n.default=function(){return o.a.createElement(r.a,null,o.a.createElement(c.a,{sketch:i}))}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-07-06-js-6a2f33ea31879c1142a2.js.map