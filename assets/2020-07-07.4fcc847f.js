"use strict";(self.webpackChunksketchbook=self.webpackChunksketchbook||[]).push([[422],{3470:function(n,t,r){var e=r(94035),o=r.n(e),a=r(45456),i=r.n(a),u=r(61025);function c(n){return function(n){if(Array.isArray(n))return f(n)}(n)||function(n){if("undefined"!=typeof Symbol&&null!=n[Symbol.iterator]||null!=n["@@iterator"])return Array.from(n)}(n)||function(n,t){if(n){if("string"==typeof n)return f(n,t);var r=Object.prototype.toString.call(n).slice(8,-1);return"Object"===r&&n.constructor&&(r=n.constructor.name),"Map"===r||"Set"===r?Array.from(n):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?f(n,t):void 0}}(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(n,t){(null==t||t>n.length)&&(t=n.length);for(var r=0,e=new Array(t);r<t;r++)e[r]=n[r];return e}window.p5=o(),i()(),new(o())((function(n){var t,r=n.getURLParams().render,e=["red","orange","black"];n.setup=function(){n.pixelDensity(1),n.frameRate(30),n.createCanvas(r?1080:n.windowWidth,r?1080:n.windowHeight),n.background(255),n.noSmooth(),n.createLoop(30,{gif:!!r&&{render:!1,open:!0,fileName:"2020-07-07.gif"},noiseRadius:1.2}),n.noFill(),n.strokeWeight(Math.max(2,n.width/500)),t=Math.min(n.width,n.height)-n.width/10},n.draw=function(){var r=n.animLoop,o=r.noise2D,a=r.theta;n.background(0);for(var i=function(r){e.forEach((function(e,i){var f=i+1;n.curveTightness(f/10);var s=[];n.push(),n.translate(n.width/2,n.height/2),n.rotate((f%2?-a:a)*f),n.stroke(e),n.beginShape();for(var h=0;h<6;h++){var p=n.TWO_PI/6*h,d=(0,u.ZP)(0,0,n.map(o((r+1)/50,h/(5*f)),-1,1,p,p+n.TWO_PI/6),t/2/90*r*n.map(o((r+1)/100,h/(10*f)),-1,1,n.map(r,0,90,.2,1),n.map(r,0,90,1.5,1)),!0);n.curveVertex.apply(n,c(d)),s.push(d)}n.curveVertex.apply(n,c(s[0])),n.curveVertex.apply(n,c(s[1])),n.curveVertex.apply(n,c(s[2])),n.endShape(),n.pop()}))},f=0;f<90;f++)i(f)},n.windowResized=function(){r||n.resizeCanvas(n.windowWidth,n.windowHeight)}}),"sketch")},61025:function(n,t,r){r.d(t,{Y2:function(){return e},C$:function(){return o},vy:function(){return a}});var e=function(n,t,r){return n+Math.cos(t)*r},o=function(n,t,r){return n+Math.sin(t)*r},a=function(n,t,r,e,o){var a=arguments.length>5&&void 0!==arguments[5]&&arguments[5],i=n+Math.cos(r)*e,u=t+Math.sin(r)*o;return a?[i,u]:{x:i,y:u}};t.ZP=function(n,t,r,a){var i=arguments.length>4&&void 0!==arguments[4]&&arguments[4],u=e(n,r,a),c=o(t,r,a);return i?[u,c]:{x:u,y:c}}}},function(n){n.O(0,[4035,5456],(function(){return 3470,n(n.s=3470)})),n.O()}]);