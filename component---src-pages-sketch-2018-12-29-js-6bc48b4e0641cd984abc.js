(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{231:function(t,o,i){"use strict";i.r(o);var e=i(10),n=(i(0),i(439)),r=function(t){var o,i,e,n,r=[],h=0,a=1,u=!1,s=function(){function r(t,o){this.x=t,this.y=o}return r.prototype.draw=function(){t.noFill();for(var r=0;r<i;r++)t.stroke("rgba(0, 0, 0, "+r/i+")"),t.ellipse(t.lerp(this.x,e,r/i/2),t.lerp(this.y,n,r/i/2),o-r*i+t.map(t.dist(this.x,this.y,e,n),0,t.dist(0,0,t.width,t.height),2*o,-o,!0))},r}();t.setup=function(){t.createCanvas(660,840),o=t.random(100,250),i=o/10,e=t.width/2,n=t.height/2;for(var h=t.floor((t.width-i)/(o+i)),a=t.floor((t.height-i)/(o+i)),u=(t.width-h*o)/(h+1),c=(t.height-a*o)/(a+1),f=-u-o/2;f<=t.width+o;f+=o+u)for(var d=-c-o/2;d<=t.height+o;d+=o+c)r.push(new s(f,d))},t.draw=function(){t.background(255),e=u?t.mouseX:t.width/2+t.cos(t.frameCount/(2*i))*h,n=u?t.mouseY:t.height/2+t.sin(t.frameCount/(2*i))*h,r.forEach(function(t){return t.draw()}),(h+=a)===t.width/2&&(a=-1),h<o&&(a=1)},t.mouseClicked=function(){u=!u},t.touchMoved=function(){if(t.mouseX>=0&&t.mouseY>=0&&t.mouseX<=t.width&&t.mouseY<=t.height)return!1}};o.default=function(t){var o=t.location;return Object(e.c)(n.a,{sketch:r,path:o.pathname,description:" Click or tap to toggle user control of the sketch. Reload page for a different variation. "})}}}]);
//# sourceMappingURL=component---src-pages-sketch-2018-12-29-js-6bc48b4e0641cd984abc.js.map