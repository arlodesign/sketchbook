(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{av4u:function(e,t,n){"use strict";n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){return i})),n.d(t,"d",(function(){return u})),n.d(t,"b",(function(){return a}));var r=function(e){return e*e},i=function(e){return e<.5?2*e*e:(4-2*e)*e-1},u=function(e){return 1+--e*e*e*e*e},a=function(e){return e<.5?16*e*e*e*e*e:1+16*--e*e*e*e*e}},squd:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),i=n.n(r),u=n("Bl7J"),a=n("9VVL"),o=n("av4u"),c=(n("PZSu"),{}.DEV&&!0),h=50,d=10,f=function(e){var t;function n(n){var r=e.animLoop,i=r.noise1D,u=r.noise2D,a=e.height*(n/h),c=e.sin(2*e.animLoop.theta);e.beginShape(),e.curveVertex(-1,a),e.curveVertex(-1,a);for(var f=0;f<=d;f++){var v=t+(e.width-2*t)/d*f+i(f*a)*(e.width/d/3),s=Object(o.b)(e.map(u(v/50,e.height*(n/h)/50),-1,1,0,1))*e.map(e.abs(e.width/2-v),0,e.width/2,e.height/h*6,0)*c;e.curveVertex(v,a+s)}e.curveVertex(e.width+1,a),e.curveVertex(e.width+1,a),c<0?(e.vertex(e.width+1,e.height+1),e.vertex(-1,e.height+1)):(e.vertex(e.width+1,-1),e.vertex(-1,-1)),e.endShape(e.CLOSE)}e.setup=function(){c&&e.pixelDensity(1),e.createCanvas(660,840),e.createLoop(20,{gif:!!c&&{render:!1,open:!0},noiseRadius:2}),t=e.width/d},e.draw=function(){var t=e.animLoop.theta;if(e.background(255),e.sin(2*t)<0)for(var r=0;r<=h;r++)n(r);else for(var i=h;i>=0;i--)n(i)}};t.default=function(){return i.a.createElement(u.a,null,i.a.createElement(a.a,{sketch:f}))}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-09-18-js-f2dd0968a3e877ba8213.js.map