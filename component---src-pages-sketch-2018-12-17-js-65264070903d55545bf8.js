(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{219:function(t,e,a){"use strict";a.r(e);a(452);var i=a(10),o=(a(0),a(450)),h=function(t){var e=Math.sqrt(5)/2;function a(a,i,o){t.triangle(a,i-o,a-e*o,i+o/2,a+e*o,i+o/2)}t.setup=function(){t.createCanvas(660,840),t.angleMode(t.DEGREES),t.noStroke()},t.draw=function(){t.background("white");for(var i=t.map(t.mouseX,0,t.width,30,120,!0),o=t.map(t.mouseY,0,t.height,i/2,2*i,!0),h=t.height/2;h<=t.height+3*i;h+=3*i)for(var s=t.width/2;s<=t.width+3*i;s+=e*i*2)t.push(),t.fill("rgba(0, 0, 0, "+t.noise(1)+")"),t.translate(s,h-i/2),a(0,0,o),t.pop(),t.push(),t.fill("rgba(0, 0, 0, "+t.noise(2)+")"),t.translate(s,h+i/2),t.rotate(180),a(0,0,o),t.pop(),t.push(),t.fill("rgba(0, 0, 0, "+t.noise(3)+")"),t.translate(s+e*i,h+i),a(0,0,o),t.pop(),t.push(),t.fill("rgba(0, 0, 0, "+t.noise(4)+")"),t.translate(s+e*i,h+2*i),t.rotate(180),a(0,0,o),t.pop(),h>t.height/2&&(t.push(),t.fill("rgba(0, 0, 0, "+t.noise(5)+")"),t.translate(s,t.height-h-i/2),a(0,0,o),t.pop(),t.push(),t.fill("rgba(0, 0, 0, "+t.noise(6)+")"),t.translate(s,t.height-h+i/2),t.rotate(180),a(0,0,o),t.pop(),t.push(),t.fill("rgba(0, 0, 0, "+t.noise(7)+")"),t.translate(s+e*i,t.height-h+i),a(0,0,o),t.pop(),t.push(),t.fill("rgba(0, 0, 0, "+t.noise(8)+")"),t.translate(s+e*i,t.height-h+2*i),t.rotate(180),a(0,0,o),t.pop()),s>t.width/2&&(t.push(),t.fill("rgba(0, 0, 0, "+t.noise(9)+")"),t.translate(t.width-s,h-i/2),a(0,0,o),t.pop(),t.push(),t.fill("rgba(0, 0, 0, "+t.noise(10)+")"),t.translate(t.width-s,h+i/2),t.rotate(180),a(0,0,o),t.pop(),t.push(),t.fill("rgba(0, 0, 0, "+t.noise(11)+")"),t.translate(t.width-s+e*i,h+i),a(0,0,o),t.pop(),t.push(),t.fill("rgba(0, 0, 0, "+t.noise(12)+")"),t.translate(t.width-s+e*i,h+2*i),t.rotate(180),a(0,0,o),t.pop()),h>t.height/2&&s>t.width/2&&(t.push(),t.fill("rgba(0, 0, 0, "+t.noise(13)+")"),t.translate(t.width-s,t.height-h-i/2),a(0,0,o),t.pop(),t.push(),t.fill("rgba(0, 0, 0, "+t.noise(14)+")"),t.translate(t.width-s,t.height-h+i/2),t.rotate(180),a(0,0,o),t.pop(),t.push(),t.fill("rgba(0, 0, 0, "+t.noise(15)+")"),t.translate(t.width-s+e*i,t.height-h+i),a(0,0,o),t.pop(),t.push(),t.fill("rgba(0, 0, 0, "+t.noise(16)+")"),t.translate(t.width-s+e*i,t.height-h+2*i),t.rotate(180),a(0,0,o),t.pop())},t.touchMoved=function(){if(t.mouseX>=0&&t.mouseY>=0&&t.mouseX<=t.width&&t.mouseY<=t.height)return!1}};e.default=function(t){var e=t.location;return Object(i.c)(o.a,{sketch:h,path:e.pathname,description:"Move pointer or finger over sketch."})}}}]);
//# sourceMappingURL=component---src-pages-sketch-2018-12-17-js-65264070903d55545bf8.js.map