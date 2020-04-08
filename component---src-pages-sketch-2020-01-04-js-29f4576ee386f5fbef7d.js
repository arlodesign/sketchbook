(window.webpackJsonp=window.webpackJsonp||[]).push([[341],{"1/Ks":function(e,t,r){"use strict";r("EU/P")("trimLeft",(function(e){return function(){return e(this,1)}}),"trimStart")},"2sI2":function(e,t,r){"use strict";r("R48M"),Object.defineProperty(t,"__esModule",{value:!0});var i,n=r("LvDl");!function(e){e.CARTESIAN_2D="CARTESIAN_2D",e.CARTESIAN_3D="CARTESIAN_3D",e.CYLINDRICAL="CYLINDRICAL",e.POLAR="POLAR",e.SPHERICAL="SPHERICAL"}(i=t.CoordinateType||(t.CoordinateType={}));var o=180/Math.PI,a=function(){function e(e){var t=e.coordinates,r=e.isDegree,i=(e.isRadian,e.type);if(this.isRadian=!0,this.isDegree=!1,this.cooridnatesByType={},r&&(this.isDegree=!0,this.isRadian=!1),!i)throw new Error("no type coordinate type defined");if(!t)throw new Error("no coordinates provided");this.type=i,this.coordinates=t,this.cooridnatesByType[i]=this.coordinates}return e.cartesian=function(t){if(2===t.length)return new e({coordinates:t,type:i.CARTESIAN_2D});if(3===t.length)return new e({coordinates:t,type:i.CARTESIAN_3D});throw new Error("coordinates should have length 2 or 3")},e.cylindrical=function(t){if(3!==t.length)throw new Error("expected exactly 3 params [r, t, z]");return new e({coordinates:t,type:i.CYLINDRICAL})},e.polar=function(t){if(2!==t.length)throw new Error("expected exactly 2 params [r, t]");return new e({coordinates:t,type:i.POLAR})},e.spherical=function(t){if(3!==t.length)throw new Error("expected exactly 3 params [r, t, p]");return new e({coordinates:t,type:i.SPHERICAL})},e.cylindricalToSpherical=function(e){var t,r,i=e.coordinate,n=e.isDegree,a=i,s=a[0],c=a[1],h=a[2];return n&&(c/=o),t=Math.sqrt(s*s+h*h),r=Math.atan2(s,h),n&&(r*=o,c*=o),[t,c,r]},e.polarToCart2d=function(e){var t,r,i=e.coordinate,n=e.isDegree;return t=i[0],r=i[1],n&&(r*=1/o),[t*Math.cos(r),t*Math.sin(r)]},e.cartesian3dToCylindrical=function(t){var r,i=t.coordinate,n=t.isDegree,o=t.center,a=i,s=a[0],c=a[1],h=a[2];return[(r=e.cartesian2dToPolar({coordinate:[s,c],isDegree:n,center:o?[o[0],o[1]]:void 0}))[0],r[1],h]},e.sphericalToCart3d=function(e){var t=e.coordinate,r=e.isDegree,i=t[0],n=t[1],a=t[2];return r&&(n/=o,a/=o),[i*Math.sin(a)*Math.cos(n),i*Math.sin(a)*Math.sin(n),i*Math.cos(a)]},e.sphericalToCylindrical=function(e){var t,r,i=e.coordinate,n=e.isDegree,a=i,s=a[0],c=a[1],h=a[2];return n&&(c/=o,h/=o),t=s*Math.sin(h),r=s*Math.cos(h),n&&(c*=o,h*=o),[t,c,r]},e.cartesian3dToSpherical=function(e){var t=e.coordinate,r=e.isDegree,i=e.center,n=t;if(i&&3!==i.length)throw new Error("expected center value to have [x, y, z] coordsfor locating sphere center");var a,s,c,h,d,y,p=n[0],u=n[1],l=n[2];return i&&(p-=i[0],u-=i[1],l-=i[2]),a=p*p,s=u*u,c=l*l,(h=Math.sqrt(a+s+c))?(d=Math.atan2(u,p),y=Math.atan2(Math.sqrt(a+s),l),r&&(d*=o,y*=o)):y=d=0,[h,d,y]},e.cartesian2dToPolar=function(e){var t,r,i,a,s=e.coordinate,c=e.isDegree,h=e.center,d=s;if(!n.isArray(d)||2!==d.length)throw new TypeError("coorinate must be an [x, y, ...] array");if(t=d[0],r=d[1],h&&(!n.isArray(h)||2!==h.length))throw new TypeError("expected [x, y] center array");return h&&(t-=h[0],r-=h[1]),i=Math.sqrt(t*t+r*r),a=Math.atan2(r,t),c&&(a*=o),[i,a]},e.prototype.cartesian=function(){switch(this.type){case i.CARTESIAN_2D:return this.cooridnatesByType[i.CARTESIAN_2D];case i.CARTESIAN_3D:return this.cooridnatesByType[i.CARTESIAN_3D];case i.POLAR:return this.cooridnatesByType[i.CARTESIAN_2D]=e.polarToCart2d({coordinate:this.cooridnatesByType[i.POLAR],isDegree:this.isDegree}),this.cooridnatesByType[i.CARTESIAN_2D];case i.CYLINDRICAL:var t=this.cooridnatesByType[i.CYLINDRICAL],r=t[0],n=t[1],o=e.polarToCart2d({coordinate:[r,n],isDegree:this.isDegree});return this.cooridnatesByType[i.CARTESIAN_3D]=[o[0],o[1],this.coordinates[2]],this.cooridnatesByType[i.CARTESIAN_3D];case i.SPHERICAL:return this.cooridnatesByType[i.CARTESIAN_3D]=e.sphericalToCart3d({coordinate:this.cooridnatesByType[i.SPHERICAL],isDegree:this.isDegree}),this.cooridnatesByType[i.CARTESIAN_3D];default:throw new Error("cannot convert from "+this.type+" to cartesian")}},e.prototype.cylindrical=function(t){var r,n=(t=t||{}).center?[t.center[0],t.center[1],t.center[2]||0]:void 0;switch(this.type){case i.CARTESIAN_2D:return r=e.cartesian2dToPolar({coordinate:this.cooridnatesByType.CARTESIAN_2D,isDegree:this.isDegree,center:n}),this.cooridnatesByType.CYLINDRICAL=[r[0],r[1],0],this.cooridnatesByType.CYLINDRICAL;case i.CARTESIAN_3D:return this.cooridnatesByType.CYLINDRICAL=e.cartesian3dToCylindrical({coordinate:this.cooridnatesByType[i.CARTESIAN_3D],isDegree:this.isDegree,center:n}),this.cooridnatesByType.CYLINDRICAL;case i.POLAR:return[(r=this.cooridnatesByType.POLAR)[0],r[1],0];case i.CYLINDRICAL:return this.cooridnatesByType.CYLINDRICAL;case i.SPHERICAL:return this.cooridnatesByType.CYLINDRICAL=e.sphericalToCylindrical({coordinate:this.cooridnatesByType.SPHERICAL,isDegree:this.isDegree}),this.cooridnatesByType.CYLINDRICAL;default:throw new Error("cannot convert "+this.type+" to cylindrical")}},e.prototype.polar=function(t){switch(t=t||{},this.type){case i.CARTESIAN_2D:return this.cooridnatesByType.POLAR=e.cartesian2dToPolar({coordinate:this.cooridnatesByType.CARTESIAN_2D,isDegree:this.isDegree,center:t.center}),this.cooridnatesByType.POLAR;case i.CARTESIAN_3D:return this.cooridnatesByType.POLAR=e.cartesian2dToPolar({coordinate:this.cooridnatesByType.CARTESIAN_3D,isDegree:this.isDegree,center:t.center}),this.cooridnatesByType.POLAR;case i.POLAR:return this.cooridnatesByType.POLAR;default:throw new Error("cannot convert to/from original/requested types")}},e.prototype.spherical=function(t){var r;switch(t=t||{},this.type){case i.CARTESIAN_2D:return r=e.cartesian2dToPolar({coordinate:this.cooridnatesByType.CARTESIAN_2D,isDegree:this.isDegree,center:t.center}),this.cooridnatesByType.SPHERICAL=[r[0],r[1],0],this.cooridnatesByType.SPHERICAL;case i.CARTESIAN_3D:return this.cooridnatesByType.SPHERICAL=e.cartesian3dToSpherical({coordinate:this.cooridnatesByType.CARTESIAN_3D,isDegree:this.isDegree,center:t.center}),this.cooridnatesByType.SPHERICAL;case i.POLAR:return[(r=this.cooridnatesByType.POLAR)[0],r[1],0];case i.CYLINDRICAL:return this.cooridnatesByType.SPHERICAL=e.cylindricalToSpherical({coordinate:this.cooridnatesByType.CYLINDRICAL,isDegree:this.isDegree}),this.cooridnatesByType.SPHERICAL;case i.SPHERICAL:return this.cooridnatesByType.SPHERICAL;default:throw new Error("cannot convert to/from original/requested types")}},e}();t.Coordinate=a},HQAx:function(e,t,r){"use strict";var i=r("P8UN"),n=r("ewoU"),o=r("DFzH"),a=r("kiRH"),s=r("nONw"),c=r("ytzU");i(i.P,"Array",{flatMap:function(e){var t,r,i=o(this);return s(e),t=a(i.length),r=c(i,0),n(r,i,i,t,0,1,e,arguments[1]),r}}),r("Dq1/")("flatMap")},I17o:function(e,t,r){"use strict";var i=r("P8UN"),n=r("pTxf"),o=r("CL53"),a=/Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(o);i(i.P+i.F*a,"String",{padEnd:function(e){return n(this,e,arguments.length>1?arguments[1]:void 0,!1)}})},"QzX/":function(e,t,r){"use strict";r("EU/P")("trimRight",(function(e){return function(){return e(this,2)}}),"trimEnd")},Rw9D:function(e,t,r){"use strict";var i=r("P8UN"),n=r("/+AL");i(i.P+i.F*!r("h/qr")([].reduceRight,!0),"Array",{reduceRight:function(e){return n(this,e,arguments.length,arguments[1],!0)}})},YuTi:function(e,t,r){r("R48M"),e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}},ewoU:function(e,t,r){"use strict";var i=r("tuyV"),n=r("BjK0"),o=r("kiRH"),a=r("ot9L"),s=r("sOol")("isConcatSpreadable");e.exports=function e(t,r,c,h,d,y,p,u){for(var l,A,f=d,T=0,C=!!p&&a(p,u,3);T<h;){if(T in c){if(l=C?C(c[T],T,r):c[T],A=!1,n(l)&&(A=void 0!==(A=l[s])?!!A:i(l)),A&&y>0)f=e(t,r,l,o(l.length),f,y-1)-1;else{if(f>=9007199254740991)throw TypeError();t[f]=l}f++}T++}return f}},lizw:function(e,t,r){"use strict";var i=r("P8UN"),n=r("pTxf"),o=r("CL53"),a=/Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(o);i(i.P+i.F*a,"String",{padStart:function(e){return n(this,e,arguments.length>1?arguments[1]:void 0,!0)}})},nPYf:function(e,t,r){"use strict";r.r(t);r("pJf4"),r("q8oJ"),r("8npG"),r("YbXK"),r("cFtU"),r("rzGZ"),r("m210"),r("4DPX"),r("q1tI");var i=r("Gmm/"),n=(r("PZSu"),r("2sI2")),o=r("qKvR");function a(e){return function(e){if(Array.isArray(e))return s(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return s(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return s(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,i=new Array(t);r<t;r++)i[r]=e[r];return i}var c=n.Coordinate.spherical,h=function(e){var t,r,i=e.getURLParams().render;e.setup=function(){e.pixelDensity(1),e.frameRate(30),e.createCanvas(660,840,e.WEBGL),e.noStroke(),e.createLoop(60,{gif:!!i&&{render:!1,open:!0},noiseRadius:.1}),(t=e.createGraphics(e.ceil(e.height/2*3),e.ceil(e.height/2*3))).strokeWeight(50/3),r=e.dist(0,0,t.width,t.height)},e.draw=function(){var i=e.animLoop,n=i.theta,o=i.noise,s=i.noise1D,h=i.progress;t.background(255);for(var d=r+50*h*10;d>0;d-=50)t.circle(t.width/2,t.height/2,d);e.background(255),e.texture(t),e.camera.apply(e,a(c([2*e.width,0,0]).cartesian()).concat([0,0,0,0,1,0])),e.plane(2*e.width,2*e.height);for(var y=-e.floor(2.5);y<2.5;y++)e.push(),e.translate(e.width/5*y,0,e.width/5*y),e.rotateY(n*(y%2?-1:1)),e.rotateX(e.map(s(-y),-1,1,0,e.TWO_PI)),e.rotateZ(e.map(s(y),-1,1,0,e.TWO_PI)),e.scale(e.map(o(),-1,1,1.5,3)),e.box(e.width/2.5,e.height/2,e.width/2.5),e.pop()}};t.default=function(e){var t=e.location;return Object(o.c)(i.a,{sketch:h,path:t.pathname,description:""})}},pTxf:function(e,t,r){var i=r("kiRH"),n=r("gd4K"),o=r("ap2Z");e.exports=function(e,t,r,a){var s=String(o(e)),c=s.length,h=void 0===r?" ":String(r),d=i(t);if(d<=c||""==h)return s;var y=d-c,p=n.call(h,Math.ceil(y/h.length));return p.length>y&&(p=p.slice(0,y)),a?p+s:s+p}}}]);
//# sourceMappingURL=component---src-pages-sketch-2020-01-04-js-29f4576ee386f5fbef7d.js.map