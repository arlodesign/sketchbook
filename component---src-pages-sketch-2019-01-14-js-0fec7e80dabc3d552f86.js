(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{197:function(e,o,a){"use strict";a.r(o);var n=a(0),t=a.n(n),i=a(265),r=function(e){var o,a,n,t,i=0;e.setup=function(){e.createCanvas(660,840),n=e.floor(e.random(2,10)),t=e.floor(e.random(3)),o=.03/e.TWO_PI,a=e.height/6,e.background(255),e.stroke("rgba(0, 0, 0, 0.5)"),e.strokeWeight(.5),e.noFill()},e.draw=function(){i+=o;var r=e.width/2+e.cos(i)*(e.width/4),c=e.height/2+e.cos(i)*(e.width/4),s=r+e.cos(i)*a,d=c+e.sin(i*n)*a,h=r+e.cos(i+e.HALF_PI)*a,f=c+e.sin(i*n+e.HALF_PI)*a,u=r+e.cos(i+e.PI)*a,p=c+e.sin(i*n+e.PI)*a;switch(t){case 0:e.bezier(s,d,u,p,h,f,s,d);break;case 1:e.bezier(u,p,s,d,h,f,u,p);break;default:e.bezier(h,f,s,d,u,p,h,f)}i>e.TWO_PI&&e.noLoop()}};o.default=function(e){var o=e.location;return t.a.createElement(i.a,{sketch:r,path:o.pathname,description:"Reload page for a different variation."})}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-01-14-js-0fec7e80dabc3d552f86.js.map