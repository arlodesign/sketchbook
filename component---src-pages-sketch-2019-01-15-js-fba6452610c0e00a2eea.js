(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{198:function(e,i,t){"use strict";t.r(i);var o=t(0),a=t.n(o),r=t(262),n=function(e){var i;e.setup=function(){e.createCanvas(660,840),i=e.floor(e.random(4)),e.stroke("rgba(0, 0, 0, 0.5)"),e.noFill()},e.draw=function(){e.background(255);for(var t=0,o=e.map(e.mouseX,0,e.width,e.width/5,e.width/3,!0),a=e.map(e.mouseY,0,e.height,1,13,!0);t<e.PI;){t+=e.TWO_PI/(300*e.map(a,1,7,1,e.floor(13/3)));var r=e.width/2+e.cos(t)*o,n=e.height/2+e.cos(t)*o,h=r+e.cos(t)*(e.height/6),s=n+e.sin(t*a)*(e.height/6),c=r+e.cos(t+e.PI/6)*(e.height/6),u=n+e.sin(t*a+e.PI/6)*(e.height/6),d=r+e.cos(t+e.PI)*(e.height/6),f=n+e.sin(t*a+e.PI)*(e.height/6),g=r+e.cos(t+5*e.PI/6)*(e.height/6),p=n+e.sin(t+5*e.PI/6)*(e.height/6);switch(i){case 0:e.bezier(h,s,c,u,d,f,g,p);break;case 1:e.bezier(c,u,d,f,g,p,h,s);break;case 2:e.bezier(d,f,g,p,h,s,c,u);break;default:e.bezier(g,p,h,s,c,u,d,f)}}},e.touchMoved=function(){if(e.mouseX>=0&&e.mouseY>=0&&e.mouseX<=e.width&&e.mouseY<=e.height)return!1}};i.default=function(e){var i=e.location;return a.a.createElement(r.a,{sketch:n,path:i.pathname,description:" Move pointer or finger over sketch. Reload page for a different variation. "})}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-01-15-js-fba6452610c0e00a2eea.js.map