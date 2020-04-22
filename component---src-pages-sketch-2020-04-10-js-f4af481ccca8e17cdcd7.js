(window.webpackJsonp=window.webpackJsonp||[]).push([[395],{"1/Ks":function(e,t,r){"use strict";r("EU/P")("trimLeft",(function(e){return function(){return e(this,1)}}),"trimStart")},"2sI2":function(e,t,r){"use strict";r("R48M"),Object.defineProperty(t,"__esModule",{value:!0});var n,i=r("LvDl");!function(e){e.CARTESIAN_2D="CARTESIAN_2D",e.CARTESIAN_3D="CARTESIAN_3D",e.CYLINDRICAL="CYLINDRICAL",e.POLAR="POLAR",e.SPHERICAL="SPHERICAL"}(n=t.CoordinateType||(t.CoordinateType={}));var o=180/Math.PI,a=function(){function e(e){var t=e.coordinates,r=e.isDegree,n=(e.isRadian,e.type);if(this.isRadian=!0,this.isDegree=!1,this.cooridnatesByType={},r&&(this.isDegree=!0,this.isRadian=!1),!n)throw new Error("no type coordinate type defined");if(!t)throw new Error("no coordinates provided");this.type=n,this.coordinates=t,this.cooridnatesByType[n]=this.coordinates}return e.cartesian=function(t){if(2===t.length)return new e({coordinates:t,type:n.CARTESIAN_2D});if(3===t.length)return new e({coordinates:t,type:n.CARTESIAN_3D});throw new Error("coordinates should have length 2 or 3")},e.cylindrical=function(t){if(3!==t.length)throw new Error("expected exactly 3 params [r, t, z]");return new e({coordinates:t,type:n.CYLINDRICAL})},e.polar=function(t){if(2!==t.length)throw new Error("expected exactly 2 params [r, t]");return new e({coordinates:t,type:n.POLAR})},e.spherical=function(t){if(3!==t.length)throw new Error("expected exactly 3 params [r, t, p]");return new e({coordinates:t,type:n.SPHERICAL})},e.cylindricalToSpherical=function(e){var t,r,n=e.coordinate,i=e.isDegree,a=n,s=a[0],c=a[1],d=a[2];return i&&(c/=o),t=Math.sqrt(s*s+d*d),r=Math.atan2(s,d),i&&(r*=o,c*=o),[t,c,r]},e.polarToCart2d=function(e){var t,r,n=e.coordinate,i=e.isDegree;return t=n[0],r=n[1],i&&(r*=1/o),[t*Math.cos(r),t*Math.sin(r)]},e.cartesian3dToCylindrical=function(t){var r,n=t.coordinate,i=t.isDegree,o=t.center,a=n,s=a[0],c=a[1],d=a[2];return[(r=e.cartesian2dToPolar({coordinate:[s,c],isDegree:i,center:o?[o[0],o[1]]:void 0}))[0],r[1],d]},e.sphericalToCart3d=function(e){var t=e.coordinate,r=e.isDegree,n=t[0],i=t[1],a=t[2];return r&&(i/=o,a/=o),[n*Math.sin(a)*Math.cos(i),n*Math.sin(a)*Math.sin(i),n*Math.cos(a)]},e.sphericalToCylindrical=function(e){var t,r,n=e.coordinate,i=e.isDegree,a=n,s=a[0],c=a[1],d=a[2];return i&&(c/=o,d/=o),t=s*Math.sin(d),r=s*Math.cos(d),i&&(c*=o,d*=o),[t,c,r]},e.cartesian3dToSpherical=function(e){var t=e.coordinate,r=e.isDegree,n=e.center,i=t;if(n&&3!==n.length)throw new Error("expected center value to have [x, y, z] coordsfor locating sphere center");var a,s,c,d,h,y,p=i[0],u=i[1],l=i[2];return n&&(p-=n[0],u-=n[1],l-=n[2]),a=p*p,s=u*u,c=l*l,(d=Math.sqrt(a+s+c))?(h=Math.atan2(u,p),y=Math.atan2(Math.sqrt(a+s),l),r&&(h*=o,y*=o)):y=h=0,[d,h,y]},e.cartesian2dToPolar=function(e){var t,r,n,a,s=e.coordinate,c=e.isDegree,d=e.center,h=s;if(!i.isArray(h)||2!==h.length)throw new TypeError("coorinate must be an [x, y, ...] array");if(t=h[0],r=h[1],d&&(!i.isArray(d)||2!==d.length))throw new TypeError("expected [x, y] center array");return d&&(t-=d[0],r-=d[1]),n=Math.sqrt(t*t+r*r),a=Math.atan2(r,t),c&&(a*=o),[n,a]},e.prototype.cartesian=function(){switch(this.type){case n.CARTESIAN_2D:return this.cooridnatesByType[n.CARTESIAN_2D];case n.CARTESIAN_3D:return this.cooridnatesByType[n.CARTESIAN_3D];case n.POLAR:return this.cooridnatesByType[n.CARTESIAN_2D]=e.polarToCart2d({coordinate:this.cooridnatesByType[n.POLAR],isDegree:this.isDegree}),this.cooridnatesByType[n.CARTESIAN_2D];case n.CYLINDRICAL:var t=this.cooridnatesByType[n.CYLINDRICAL],r=t[0],i=t[1],o=e.polarToCart2d({coordinate:[r,i],isDegree:this.isDegree});return this.cooridnatesByType[n.CARTESIAN_3D]=[o[0],o[1],this.coordinates[2]],this.cooridnatesByType[n.CARTESIAN_3D];case n.SPHERICAL:return this.cooridnatesByType[n.CARTESIAN_3D]=e.sphericalToCart3d({coordinate:this.cooridnatesByType[n.SPHERICAL],isDegree:this.isDegree}),this.cooridnatesByType[n.CARTESIAN_3D];default:throw new Error("cannot convert from "+this.type+" to cartesian")}},e.prototype.cylindrical=function(t){var r,i=(t=t||{}).center?[t.center[0],t.center[1],t.center[2]||0]:void 0;switch(this.type){case n.CARTESIAN_2D:return r=e.cartesian2dToPolar({coordinate:this.cooridnatesByType.CARTESIAN_2D,isDegree:this.isDegree,center:i}),this.cooridnatesByType.CYLINDRICAL=[r[0],r[1],0],this.cooridnatesByType.CYLINDRICAL;case n.CARTESIAN_3D:return this.cooridnatesByType.CYLINDRICAL=e.cartesian3dToCylindrical({coordinate:this.cooridnatesByType[n.CARTESIAN_3D],isDegree:this.isDegree,center:i}),this.cooridnatesByType.CYLINDRICAL;case n.POLAR:return[(r=this.cooridnatesByType.POLAR)[0],r[1],0];case n.CYLINDRICAL:return this.cooridnatesByType.CYLINDRICAL;case n.SPHERICAL:return this.cooridnatesByType.CYLINDRICAL=e.sphericalToCylindrical({coordinate:this.cooridnatesByType.SPHERICAL,isDegree:this.isDegree}),this.cooridnatesByType.CYLINDRICAL;default:throw new Error("cannot convert "+this.type+" to cylindrical")}},e.prototype.polar=function(t){switch(t=t||{},this.type){case n.CARTESIAN_2D:return this.cooridnatesByType.POLAR=e.cartesian2dToPolar({coordinate:this.cooridnatesByType.CARTESIAN_2D,isDegree:this.isDegree,center:t.center}),this.cooridnatesByType.POLAR;case n.CARTESIAN_3D:return this.cooridnatesByType.POLAR=e.cartesian2dToPolar({coordinate:this.cooridnatesByType.CARTESIAN_3D,isDegree:this.isDegree,center:t.center}),this.cooridnatesByType.POLAR;case n.POLAR:return this.cooridnatesByType.POLAR;default:throw new Error("cannot convert to/from original/requested types")}},e.prototype.spherical=function(t){var r;switch(t=t||{},this.type){case n.CARTESIAN_2D:return r=e.cartesian2dToPolar({coordinate:this.cooridnatesByType.CARTESIAN_2D,isDegree:this.isDegree,center:t.center}),this.cooridnatesByType.SPHERICAL=[r[0],r[1],0],this.cooridnatesByType.SPHERICAL;case n.CARTESIAN_3D:return this.cooridnatesByType.SPHERICAL=e.cartesian3dToSpherical({coordinate:this.cooridnatesByType.CARTESIAN_3D,isDegree:this.isDegree,center:t.center}),this.cooridnatesByType.SPHERICAL;case n.POLAR:return[(r=this.cooridnatesByType.POLAR)[0],r[1],0];case n.CYLINDRICAL:return this.cooridnatesByType.SPHERICAL=e.cylindricalToSpherical({coordinate:this.cooridnatesByType.CYLINDRICAL,isDegree:this.isDegree}),this.cooridnatesByType.SPHERICAL;case n.SPHERICAL:return this.cooridnatesByType.SPHERICAL;default:throw new Error("cannot convert to/from original/requested types")}},e}();t.Coordinate=a},HQAx:function(e,t,r){"use strict";var n=r("P8UN"),i=r("ewoU"),o=r("DFzH"),a=r("kiRH"),s=r("nONw"),c=r("ytzU");n(n.P,"Array",{flatMap:function(e){var t,r,n=o(this);return s(e),t=a(n.length),r=c(n,0),i(r,n,n,t,0,1,e,arguments[1]),r}}),r("Dq1/")("flatMap")},I17o:function(e,t,r){"use strict";var n=r("P8UN"),i=r("pTxf"),o=r("CL53"),a=/Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(o);n(n.P+n.F*a,"String",{padEnd:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0,!1)}})},NIZ1:function(e,t,r){"use strict";r.r(t);r("pJf4"),r("q8oJ"),r("8npG"),r("YbXK"),r("cFtU"),r("rzGZ"),r("m210"),r("4DPX"),r("q1tI");var n=r("Gmm/"),i=(r("PZSu"),r("2sI2")),o=r("qKvR");function a(e){return function(e){if(Array.isArray(e))return s(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return s(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return s(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var c=i.Coordinate.spherical,d=function(e){var t=e.getURLParams().render;e.setup=function(){e.pixelDensity(t?1:.25),e.frameRate(30),e.createCanvas(660,840,e.WEBGL),e.colorMode(e.HSB,1),e.createLoop(60,{gif:!!t&&{render:!1,open:!0},noiseRadius:.1})},e.draw=function(){var t=e.animLoop,r=t.theta,n=t.noise1D;e.background(255),e.specularMaterial(1,0,1),e.pointLight.apply(e,[1,0,1].concat(a(c([e.height,r+e.PI,r+e.HALF_PI]).cartesian()))),e.camera.apply(e,a(c([2*e.width,0,r]).cartesian()).concat([0,0,0,0,1,0])),e.noStroke();for(var i=1;i<=1500;i++)e.push(),e.rotateY(e.TWO_PI/1500*i),e.rotateZ(e.TWO_PI/1500*i+(i%2?r:2*r)),e.torus(.666*e.width,3*e.abs(n(i+1500)),12,8),e.pop()}};t.default=function(e){var t=e.location;return Object(o.c)(n.a,{sketch:d,path:t.pathname,description:""})}},"QzX/":function(e,t,r){"use strict";r("EU/P")("trimRight",(function(e){return function(){return e(this,2)}}),"trimEnd")},Rw9D:function(e,t,r){"use strict";var n=r("P8UN"),i=r("/+AL");n(n.P+n.F*!r("h/qr")([].reduceRight,!0),"Array",{reduceRight:function(e){return i(this,e,arguments.length,arguments[1],!0)}})},YuTi:function(e,t,r){r("R48M"),e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}},ewoU:function(e,t,r){"use strict";var n=r("tuyV"),i=r("BjK0"),o=r("kiRH"),a=r("ot9L"),s=r("sOol")("isConcatSpreadable");e.exports=function e(t,r,c,d,h,y,p,u){for(var l,A,f=h,T=0,C=!!p&&a(p,u,3);T<d;){if(T in c){if(l=C?C(c[T],T,r):c[T],A=!1,i(l)&&(A=void 0!==(A=l[s])?!!A:n(l)),A&&y>0)f=e(t,r,l,o(l.length),f,y-1)-1;else{if(f>=9007199254740991)throw TypeError();t[f]=l}f++}T++}return f}},lizw:function(e,t,r){"use strict";var n=r("P8UN"),i=r("pTxf"),o=r("CL53"),a=/Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(o);n(n.P+n.F*a,"String",{padStart:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0,!0)}})},pTxf:function(e,t,r){var n=r("kiRH"),i=r("gd4K"),o=r("ap2Z");e.exports=function(e,t,r,a){var s=String(o(e)),c=s.length,d=void 0===r?" ":String(r),h=n(t);if(h<=c||""==d)return s;var y=h-c,p=i.call(d,Math.ceil(y/d.length));return p.length>y&&(p=p.slice(0,y)),a?p+s:s+p}}}]);
//# sourceMappingURL=component---src-pages-sketch-2020-04-10-js-f4af481ccca8e17cdcd7.js.map