(window.webpackJsonp=window.webpackJsonp||[]).push([[449],{483:function(n,e,t){"use strict";t.r(e);var a=t(0),r=t.n(a);t(3);new r.a((function(n){var e="true"===n.getURLParams().render,t=120;n.setup=function(){n.frameRate(e?5:60),n.createCanvas(t,t)},n.draw=function(){var t=n.sin(2*n.PI*(n.frameCount%1200/1200)-n.PI/2)/2+.5;n.colorMode(n.RGB,1);for(var a=-60;a<60;a++)for(var r=-60;r<60;r++)n.stroke(n.abs(n.cos((a+t/2)*r))*t,n.abs(n.sin(n.sqrt(a*a*r*r)*(t/10))/2),t),n.point(a+60,r+60);e&&n.frameCount<=1200&&(n.frameCount%100==0&&console.info("".concat(n.ceil(100*t),"%")),n.save("".concat(String(n.frameCount).padStart(String(1200).length,"0"),".png")))}}),"sketch"),document.getElementById("description").innerHTML='<a href="https://genuary2021.github.io/">#genuary2021</a>: Code Golf'}},[[483,0,1]]]);