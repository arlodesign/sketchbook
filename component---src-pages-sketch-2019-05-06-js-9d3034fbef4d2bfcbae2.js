(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"WK/p":function(e,t,n){"use strict";t.a=function(e,t,n,r,a,o,i){if(void 0===i&&(i=!0),o<=0)throw new Error("rate for lerpLine() must be greater than zero");for(var c=0;c<1;c+=o)(0!==c||i)&&e.random()>c&&e.point(e.lerp(t,r,c),e.lerp(n,a,c))}},vq1J:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),a=n.n(r),o=n("Bl7J"),i=n("9VVL"),c=n("WK/p"),d=function(e){var t,n,r,a,o;e.setup=function(){e.createCanvas(660,840),e.background("white"),e.noFill(),e.stroke(0),t=e.random(10,20),n=a=e.width/2,r=o=e.height/2},e.draw=function(){var i=e.random([-t,t]),d=e.random([-t,t]);e.strokeWeight(t*e.noise(n,r)),r=o+d,(n=a+i)>0&&r>0&&n<e.width&&r<e.height?(Object(c.a)(e,a,o,n,r,e.random()),Object(c.a)(e,e.width-a,e.height-o,e.width-n,e.height-r,e.random())):e.noLoop(),a=n,o=r}};t.default=function(){return a.a.createElement(o.a,null,a.a.createElement(i.a,{sketch:d}),a.a.createElement("p",null,"Reload page for a different variation."))}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-05-06-js-9d3034fbef4d2bfcbae2.js.map