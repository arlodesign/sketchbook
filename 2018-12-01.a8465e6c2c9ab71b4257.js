(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{44:function(e,o,s){"use strict";s.r(o);var u=s(0);new(s.n(u).a)((function(e){e.setup=function(){e.createCanvas(e.windowWidth,e.windowHeight),e.strokeWeight(3),e.fill(0)},e.draw=function(){e.background("white");var o=e.map(Math.abs(e.width/2-e.mouseX),0,e.width/2,20,120),s=e.map(Math.abs(e.height/2-e.mouseY),0,e.height/2,120,20);e.stroke(0),e.line(e.mouseX,0,e.mouseX,e.mouseY),e.line(e.width,e.mouseY,e.mouseX,e.mouseY),e.line(e.mouseX,e.height,e.mouseX,e.mouseY),e.line(0,e.mouseY,e.mouseX,e.mouseY),e.stroke(255),e.quad(e.mouseX,e.mouseY,e.mouseX-o,e.mouseY,0,0,e.mouseX,e.mouseY-s),e.quad(e.mouseX,e.mouseY,e.mouseX+o,e.mouseY,e.width,0,e.mouseX,e.mouseY-s),e.quad(e.mouseX,e.mouseY,e.mouseX+o,e.mouseY,e.width,e.height,e.mouseX,e.mouseY+s),e.quad(e.mouseX,e.mouseY,e.mouseX-o,e.mouseY,0,e.height,e.mouseX,e.mouseY+s)},e.touchMoved=function(){if(e.mouseX>=0&&e.mouseY>=0&&e.mouseX<=e.width&&e.mouseY<=e.height)return!1},e.windowResized=function(){e.resizeCanvas(e.windowWidth,e.windowHeight)}}),"sketch"),document.getElementById("description").innerHTML="Move pointer or finger over sketch."}},[[44,0,1]]]);