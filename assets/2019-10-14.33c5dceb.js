"use strict";(self.webpackChunksketchbook=self.webpackChunksketchbook||[]).push([[3663],{16105:function(n,r,o){var i=o(94035);new(o.n(i)())((function(n){var r,o,i=n.random(10),e=[];n.setup=function(){n.createCanvas(n.windowWidth,n.windowHeight),n.noFill(),n.colorMode(n.HSL,10),r=(n.width-60)/3,o=(n.height-60)/12,e.push((function(){for(var i=!1,e=0;e<o;e++)if(e%2){for(var t=!0,f=i?2:0;f<r;f+=3)t&&n.line(f,e,f+3,e),t=!t;i=!i}})),e.push((function(){for(var i=!1,e=0;e<o;e++){for(var t=!0,f=i?3:0;f<r;f+=3)t&&n.line(f,e,f+3,e),t=!t;i=!i}})),e.push((function(){for(var i=!1,e=0;e<o;e++)if(e%2){for(var t=!0,f=i?4:2;f<r;f+=5)t&&n.line(f,e,f+5,e),t=!t;i=!i}})),e.push((function(){for(var i=!1,e=0;e<o;e++){for(var t=!0,f=i?4:3;f<r;f+=e%2?3:4)t&&n.line(f,e,f+(e%2?3:4),e),t=!t;i=!i}})),e.push((function(){for(var i=!1,e=0;e<o;e++)if(e%2){for(var t=!0,f=0;f<r;f+=3)t&&n.line(f,e,f+3,e),t=!t;i=!i}})),e.push((function(){for(var i=!1,e=0;e<o;e++)if(e%2){for(var t=!0,f=i?2:0;f<r;f+=3)t&&n.line(f,e,f+3,e),t=!t;i=!i}for(var a=0;a<o;a++)if(a%2){for(var s=!0,h=0;h<r;h+=3)s&&n.line(h,a,h+3,a),s=!s;i=!i}})),e.push((function(){for(var i=0;i<o;i+=5)for(var e=0;e<r;e+=6)n.bezier(e,i,e+6,i,e,i+3,e+6,i+3),n.bezier(e+2,i+3,e+4,i+3,e+2,i,e+4,i)})),e.push((function(){for(var i=0;i<o;i+=4)for(var e=0;e<r;e+=6)n.line(e,i,e+3,i)}))},n.draw=function(){n.background(i,2,9),n.stroke(i,2,8);for(var t=0;t<n.height;t+=3)n.line(0,t,n.width,t);n.stroke(i,3,9.5,8);for(var f=0;f<n.width;f+=2)n.line(f,0,f,n.height);for(var a=30;a<n.width-30;a+=r)for(var s=30;s<n.height-30;s+=o)n.stroke(i,n.random([2,4,6]),n.random([3,5,7]),9),n.push(),n.translate(a,s),n.random(e)(),n.pop();n.noLoop()},n.windowResized=function(){n.resizeCanvas(n.windowWidth,n.windowHeight)}}),"sketch"),document.getElementById("description").innerHTML='\n        Inspired by \n        <Link href="https://albersfoundation.org/art/anni-albers/weavings/#slide13">\n          Anni Albers\n        </Link>\n        .\n      '}},function(n){n.O(0,[4035],(function(){return 16105,n(n.s=16105)})),n.O()}]);