(window.webpackJsonp=window.webpackJsonp||[]).push([[282],{330:function(o,r,n){"use strict";n.r(r);var t=n(0);new(n.n(t).a)((function(o){var r,n,t=o.random(10),i=[];o.setup=function(){o.createCanvas(o.windowWidth,o.windowHeight),o.colorMode(o.HSL,10),o.noSmooth(),r=o.width/12,n=o.height/6,i.push((function(){o.fill(t,2,9.5),o.noStroke(),o.rect(0,0,r,n),o.noFill(),o.stroke(t,2,9);for(var i=0;i<r;i+=2)o.line(i,0,i,n);for(var e=0;e<n;e+=2)o.line(0,e,r,e)})),i.push((function(){o.fill(t,4,8),o.noStroke(),o.rect(0,0,r,n),o.noFill(),o.stroke(t,4,7);for(var i=0;i<r;i+=2)o.line(i,0,i,n);for(var e=0;e<n;e+=2)o.line(0,e,r,e)})),i.push((function(){for(var i=o.random([6,4]),e=0;e<n;e+=n/3)o.fill(0),o.noStroke(),o.rect(0,e,r,e+n/6);for(var f=n/6;f<n;f+=n/3){o.fill(0),o.noStroke(),o.rect(0,f,r,f+n/6);for(var a=f;a<f+n/6;a++){o.noFill(),o.stroke(t,6,i);for(var l=a%2;l<r;l+=2)o.point(l,a)}}})),i.push((function(){for(var i=o.random([6,4]),e=n/6;e<n;e+=n/3)o.fill(0),o.noStroke(),o.rect(0,e,r,e+n/6);for(var f=0;f<n;f+=n/3){o.fill(0),o.noStroke(),o.rect(0,f,r,f+n/6);for(var a=f;a<f+n/6;a++){o.noFill(),o.stroke(t,6,i);for(var l=a%2;l<r;l+=2)o.point(l,a)}}})),i.push((function(){for(var i=o.random([0,1]),e=o.random([6,4]),f=i?0:n/6;f<n;f+=n/3)o.fill(0),o.noStroke(),o.rect(0,f,r,f+n/6);for(var a=i?n/6:0;a<n;a+=n/3){o.fill(0),o.noStroke(),o.rect(0,a,r,a+n/6);for(var l=a;l<a+n/6;l++){o.noFill(),o.stroke(t,2,e);for(var c=l%2;c<r;c+=2)o.point(c,l)}}})),i.push((function(){o.fill(t,4,4),o.noStroke(),o.rect(0,0,r,n);for(var i=0;i<n;i++){o.noFill(),o.stroke(t,9,9);for(var e=i%2;e<r;e+=2)o.point(e,i)}}))},o.draw=function(){for(var t=0;t<o.width;t+=r)for(var e=0;e<o.height;e+=n)console.log(t,e),o.push(),o.translate(t,e),o.random(i)(),o.pop();o.noLoop()},o.windowResized=function(){o.resizeCanvas(o.windowWidth,o.windowHeight)}}),"sketch")}},[[330,0,1]]]);