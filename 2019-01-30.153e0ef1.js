(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{99:function(e,t,r){"use strict";r.r(t);var n=r(0);function o(e){return function(e){if(Array.isArray(e))return i(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return i(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return i(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}new(r.n(n).a)((function(e){e.setup=function(){e.createCanvas(e.windowWidth,e.windowHeight),e.noStroke()},e.draw=function(){e.background("white");for(var t=[],r=0;r<=e.height+0;r+=10)t.push({y:r,distFromMouse:e.abs(r-e.mouseY)});var n=e.max.apply(e,o(t.map((function(e){return e.distFromMouse}))));t.forEach((function(r,o){r.y;var i=r.distFromMouse,a=e.map(i,0,n,e.map(e.mouseY,0,e.height,7,2),0);t[o].ex=e.pow(a,a)}));var i=t.reduce((function(e,t){return e+t.ex}),0),a=[0],u=0;t.forEach((function(t){var r=t.ex/i;a.push(u+e.height*r),u+=e.height*r}));t.forEach((function(t,r){var n=t.y,o=t.ex/i,u=(e.height,a[r]),c=a[r+1];e.fill(r%2?255:0),e.beginShape(),e.vertex(0,n),e.quadraticVertex(e.mouseX,u,e.width,n),e.vertex(e.width,n+10),e.quadraticVertex(e.mouseX,c,0,n+10),e.endShape()}))},e.touchMoved=function(){if(e.mouseX>=0&&e.mouseY>=0&&e.mouseX<=e.width&&e.mouseY<=e.height)return!1},e.windowResized=function(){e.resizeCanvas(e.windowWidth,e.windowHeight)}}),"sketch"),document.getElementById("description").innerHTML="Move pointer or finger over sketch."}},[[99,0,1]]]);