(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{171:function(t,e,i){"use strict";i.r(e);i(304);var a=i(9),o=(i(0),i(303)),r=function(t){var e=Math.sqrt(5)/2;function i(i,a,o){t.triangle(i,a-o,i-e*o,a+o/2,i+e*o,a+o/2)}t.setup=function(){t.createCanvas(660,840),t.angleMode(t.DEGREES),t.noStroke()},t.draw=function(){t.background("white");for(var a=t.map(t.mouseX,0,t.width,30,120,!0),o=t.map(t.mouseY,0,t.height,a/2,2*a,!0),r=t.height/2;r<=t.height+3*a;r+=3*a)for(var n=t.width/2;n<=t.width+3*a;n+=e*a*2)t.push(),t.fill("rgba(0, 0, 0, "+t.noise(1)+")"),t.translate(n,r-a/2),i(0,0,o),t.pop(),t.push(),t.fill("rgba(0, 0, 0, "+t.noise(2)+")"),t.translate(n,r+a/2),t.rotate(180),i(0,0,o),t.pop(),t.push(),t.fill("rgba(0, 0, 0, "+t.noise(3)+")"),t.translate(n+e*a,r+a),i(0,0,o),t.pop(),t.push(),t.fill("rgba(0, 0, 0, "+t.noise(4)+")"),t.translate(n+e*a,r+2*a),t.rotate(180),i(0,0,o),t.pop(),r>t.height/2&&(t.push(),t.fill("rgba(0, 0, 0, "+t.noise(5)+")"),t.translate(n,t.height-r-a/2),i(0,0,o),t.pop(),t.push(),t.fill("rgba(0, 0, 0, "+t.noise(6)+")"),t.translate(n,t.height-r+a/2),t.rotate(180),i(0,0,o),t.pop(),t.push(),t.fill("rgba(0, 0, 0, "+t.noise(7)+")"),t.translate(n+e*a,t.height-r+a),i(0,0,o),t.pop(),t.push(),t.fill("rgba(0, 0, 0, "+t.noise(8)+")"),t.translate(n+e*a,t.height-r+2*a),t.rotate(180),i(0,0,o),t.pop()),n>t.width/2&&(t.push(),t.fill("rgba(0, 0, 0, "+t.noise(9)+")"),t.translate(t.width-n,r-a/2),i(0,0,o),t.pop(),t.push(),t.fill("rgba(0, 0, 0, "+t.noise(10)+")"),t.translate(t.width-n,r+a/2),t.rotate(180),i(0,0,o),t.pop(),t.push(),t.fill("rgba(0, 0, 0, "+t.noise(11)+")"),t.translate(t.width-n+e*a,r+a),i(0,0,o),t.pop(),t.push(),t.fill("rgba(0, 0, 0, "+t.noise(12)+")"),t.translate(t.width-n+e*a,r+2*a),t.rotate(180),i(0,0,o),t.pop()),r>t.height/2&&n>t.width/2&&(t.push(),t.fill("rgba(0, 0, 0, "+t.noise(13)+")"),t.translate(t.width-n,t.height-r-a/2),i(0,0,o),t.pop(),t.push(),t.fill("rgba(0, 0, 0, "+t.noise(14)+")"),t.translate(t.width-n,t.height-r+a/2),t.rotate(180),i(0,0,o),t.pop(),t.push(),t.fill("rgba(0, 0, 0, "+t.noise(15)+")"),t.translate(t.width-n+e*a,t.height-r+a),i(0,0,o),t.pop(),t.push(),t.fill("rgba(0, 0, 0, "+t.noise(16)+")"),t.translate(t.width-n+e*a,t.height-r+2*a),t.rotate(180),i(0,0,o),t.pop())},t.touchMoved=function(){if(t.mouseX>=0&&t.mouseY>=0&&t.mouseX<=t.width&&t.mouseY<=t.height)return!1}};e.default=function(t){var e=t.location;return Object(a.c)(o.a,{sketch:r,path:e.pathname,description:"Move pointer or finger over sketch."})}},304:function(t,e,i){var a=i(12);a(a.P,"Array",{fill:i(305)}),i(36)("fill")},305:function(t,e,i){"use strict";var a=i(28),o=i(79),r=i(16);t.exports=function(t){for(var e=a(this),i=r(e.length),n=arguments.length,h=o(n>1?arguments[1]:void 0,i),s=n>2?arguments[2]:void 0,p=void 0===s?i:o(s,i);p>h;)e[h++]=t;return e}}}]);
//# sourceMappingURL=component---src-pages-sketch-2018-12-17-js-3bd898ded0ab28052982.js.map