(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{197:function(e,i,o){"use strict";o.r(i);var t=o(9),a=(o(0),o(317)),r=function(e){var i;e.setup=function(){e.createCanvas(660,840),i=e.floor(e.random(4)),e.stroke("rgba(0, 0, 0, 0.5)"),e.noFill()},e.draw=function(){e.background(255);for(var o=0,t=e.map(e.mouseX,0,e.width,e.width/5,e.width/3,!0),a=e.map(e.mouseY,0,e.height,1,13,!0);o<e.PI;){o+=e.TWO_PI/(300*e.map(a,1,7,1,e.floor(13/3)));var r=e.width/2+e.cos(o)*t,h=e.height/2+e.cos(o)*t,n=r+e.cos(o)*(e.height/6),s=h+e.sin(o*a)*(e.height/6),c=r+e.cos(o+e.PI/6)*(e.height/6),u=h+e.sin(o*a+e.PI/6)*(e.height/6),d=r+e.cos(o+e.PI)*(e.height/6),f=h+e.sin(o*a+e.PI)*(e.height/6),g=r+e.cos(o+5*e.PI/6)*(e.height/6),p=h+e.sin(o+5*e.PI/6)*(e.height/6);switch(i){case 0:e.bezier(n,s,c,u,d,f,g,p);break;case 1:e.bezier(c,u,d,f,g,p,n,s);break;case 2:e.bezier(d,f,g,p,n,s,c,u);break;default:e.bezier(g,p,n,s,c,u,d,f)}}},e.touchMoved=function(){if(e.mouseX>=0&&e.mouseY>=0&&e.mouseX<=e.width&&e.mouseY<=e.height)return!1}};i.default=function(e){var i=e.location;return Object(t.c)(a.a,{sketch:r,path:i.pathname,description:" Move pointer or finger over sketch. Reload page for a different variation. "})}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-01-15-js-3438ae8314ddda3ed265.js.map