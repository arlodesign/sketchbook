(window.webpackJsonp=window.webpackJsonp||[]).push([[122],{156:function(t,e,i){"use strict";i.r(e);var n=i(0),r=i.n(n),o=i(8);function a(t){return function(t){if(Array.isArray(t))return s(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return s(t,e);var i=Object.prototype.toString.call(t).slice(8,-1);"Object"===i&&t.constructor&&(i=t.constructor.name);if("Map"===i||"Set"===i)return Array.from(t);if("Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return s(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}function h(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}new r.a((function(t){var e,i,n=[1,2,3,5,8,13,21],r=[],s=function(){function e(i,n,r){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),this.x=60*i,this.y=60*n,this.size=60*r,t.random()<.3?this.arc():this.triangle()}var i,n,r;return i=e,(n=[{key:"arc",value:function(){t.push(),t.translate(this.x+this.size/2,this.y+this.size/2),t.rotate(t.random([0,t.HALF_PI,t.PI,t.HALF_PI+t.PI])),t.arc(-this.size/2,-this.size/2,2*this.size,2*this.size,0,t.HALF_PI),t.pop()}},{key:"triangle",value:function(){t.push(),t.translate(this.x+this.size/2,this.y+this.size/2),t.rotate(t.random([0,t.HALF_PI,t.PI,t.HALF_PI+t.PI])),t.beginShape(),t.vertex(-this.size/2,-this.size/2),t.vertex(this.size/2,this.size/2),t.vertex(-this.size/2,this.size/2),t.endShape(t.CLOSE),t.pop()}}])&&h(i.prototype,n),r&&h(i,r),e}();t.setup=function(){t.createCanvas(t.windowWidth,t.windowHeight),t.colorMode(t.HSB,100);var n=t.random(100);t.background(n,25,25),t.fill(100-n,50,75),t.noStroke(),e=t.floor(t.width/60),i=t.floor(t.height/60);for(var o=0;o<e;o++){r.push([]);for(var a=0;a<i;a++)r[o].push({x:o,y:a,visited:!1})}},t.draw=function(){var h,c,u=t.random((h=[]).concat.apply(h,r).filter((function(t){return!t.visited}))),f=u.x,l=u.y;r[f][l].visited||function(){var t,o=Math.max.apply(Math,n);do{t=!1;for(var h=f;h<o+f;h++)for(var c=l;c<o+l;c++)(f+o>e||l+o>i||r[h][c].visited)&&(t=!0);t&&(o=Math.max.apply(Math,a(n.filter((function(t){return t<o})))))}while(t);new s(f,l,o);for(var u=f;u<o+f;u++)for(var p=l;p<o+l;p++)r[u][p].visited=!0}(),(c=[]).concat.apply(c,r).filter((function(t){return!t.visited})).length||(Object(o.a)(t,.1),t.noLoop())},t.windowResized=function(){t.resizeCanvas(t.windowWidth,t.windowHeight)}}),"sketch")},8:function(t,e,i){"use strict";e.a=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.5,i=t.width*t.height*.02;t.push();for(var n=0;n<i;n++)t.fill(n%2?"rgba(0, 0, 0, ".concat(e,")"):"rgba(255, 255, 255, ".concat(e,")")),t.noStroke(),t.ellipse(t.randomGaussian(t.width/2,t.width/3),t.randomGaussian(t.height/2,t.height/3),1/(t.pixelDensity()/2));t.pop()}}},[[156,0,1]]]);