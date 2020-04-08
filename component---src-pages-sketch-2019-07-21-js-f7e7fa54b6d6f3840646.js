(window.webpackJsonp=window.webpackJsonp||[]).push([[220],{"1/Ks":function(e,t,r){"use strict";r("EU/P")("trimLeft",(function(e){return function(){return e(this,1)}}),"trimStart")},"2sI2":function(e,t,r){"use strict";r("R48M"),Object.defineProperty(t,"__esModule",{value:!0});var i,n=r("LvDl");!function(e){e.CARTESIAN_2D="CARTESIAN_2D",e.CARTESIAN_3D="CARTESIAN_3D",e.CYLINDRICAL="CYLINDRICAL",e.POLAR="POLAR",e.SPHERICAL="SPHERICAL"}(i=t.CoordinateType||(t.CoordinateType={}));var o=180/Math.PI,a=function(){function e(e){var t=e.coordinates,r=e.isDegree,i=(e.isRadian,e.type);if(this.isRadian=!0,this.isDegree=!1,this.cooridnatesByType={},r&&(this.isDegree=!0,this.isRadian=!1),!i)throw new Error("no type coordinate type defined");if(!t)throw new Error("no coordinates provided");this.type=i,this.coordinates=t,this.cooridnatesByType[i]=this.coordinates}return e.cartesian=function(t){if(2===t.length)return new e({coordinates:t,type:i.CARTESIAN_2D});if(3===t.length)return new e({coordinates:t,type:i.CARTESIAN_3D});throw new Error("coordinates should have length 2 or 3")},e.cylindrical=function(t){if(3!==t.length)throw new Error("expected exactly 3 params [r, t, z]");return new e({coordinates:t,type:i.CYLINDRICAL})},e.polar=function(t){if(2!==t.length)throw new Error("expected exactly 2 params [r, t]");return new e({coordinates:t,type:i.POLAR})},e.spherical=function(t){if(3!==t.length)throw new Error("expected exactly 3 params [r, t, p]");return new e({coordinates:t,type:i.SPHERICAL})},e.cylindricalToSpherical=function(e){var t,r,i=e.coordinate,n=e.isDegree,a=i,s=a[0],c=a[1],d=a[2];return n&&(c/=o),t=Math.sqrt(s*s+d*d),r=Math.atan2(s,d),n&&(r*=o,c*=o),[t,c,r]},e.polarToCart2d=function(e){var t,r,i=e.coordinate,n=e.isDegree;return t=i[0],r=i[1],n&&(r*=1/o),[t*Math.cos(r),t*Math.sin(r)]},e.cartesian3dToCylindrical=function(t){var r,i=t.coordinate,n=t.isDegree,o=t.center,a=i,s=a[0],c=a[1],d=a[2];return[(r=e.cartesian2dToPolar({coordinate:[s,c],isDegree:n,center:o?[o[0],o[1]]:void 0}))[0],r[1],d]},e.sphericalToCart3d=function(e){var t=e.coordinate,r=e.isDegree,i=t[0],n=t[1],a=t[2];return r&&(n/=o,a/=o),[i*Math.sin(a)*Math.cos(n),i*Math.sin(a)*Math.sin(n),i*Math.cos(a)]},e.sphericalToCylindrical=function(e){var t,r,i=e.coordinate,n=e.isDegree,a=i,s=a[0],c=a[1],d=a[2];return n&&(c/=o,d/=o),t=s*Math.sin(d),r=s*Math.cos(d),n&&(c*=o,d*=o),[t,c,r]},e.cartesian3dToSpherical=function(e){var t=e.coordinate,r=e.isDegree,i=e.center,n=t;if(i&&3!==i.length)throw new Error("expected center value to have [x, y, z] coordsfor locating sphere center");var a,s,c,d,h,p,u=n[0],y=n[1],A=n[2];return i&&(u-=i[0],y-=i[1],A-=i[2]),a=u*u,s=y*y,c=A*A,(d=Math.sqrt(a+s+c))?(h=Math.atan2(y,u),p=Math.atan2(Math.sqrt(a+s),A),r&&(h*=o,p*=o)):p=h=0,[d,h,p]},e.cartesian2dToPolar=function(e){var t,r,i,a,s=e.coordinate,c=e.isDegree,d=e.center,h=s;if(!n.isArray(h)||2!==h.length)throw new TypeError("coorinate must be an [x, y, ...] array");if(t=h[0],r=h[1],d&&(!n.isArray(d)||2!==d.length))throw new TypeError("expected [x, y] center array");return d&&(t-=d[0],r-=d[1]),i=Math.sqrt(t*t+r*r),a=Math.atan2(r,t),c&&(a*=o),[i,a]},e.prototype.cartesian=function(){switch(this.type){case i.CARTESIAN_2D:return this.cooridnatesByType[i.CARTESIAN_2D];case i.CARTESIAN_3D:return this.cooridnatesByType[i.CARTESIAN_3D];case i.POLAR:return this.cooridnatesByType[i.CARTESIAN_2D]=e.polarToCart2d({coordinate:this.cooridnatesByType[i.POLAR],isDegree:this.isDegree}),this.cooridnatesByType[i.CARTESIAN_2D];case i.CYLINDRICAL:var t=this.cooridnatesByType[i.CYLINDRICAL],r=t[0],n=t[1],o=e.polarToCart2d({coordinate:[r,n],isDegree:this.isDegree});return this.cooridnatesByType[i.CARTESIAN_3D]=[o[0],o[1],this.coordinates[2]],this.cooridnatesByType[i.CARTESIAN_3D];case i.SPHERICAL:return this.cooridnatesByType[i.CARTESIAN_3D]=e.sphericalToCart3d({coordinate:this.cooridnatesByType[i.SPHERICAL],isDegree:this.isDegree}),this.cooridnatesByType[i.CARTESIAN_3D];default:throw new Error("cannot convert from "+this.type+" to cartesian")}},e.prototype.cylindrical=function(t){var r,n=(t=t||{}).center?[t.center[0],t.center[1],t.center[2]||0]:void 0;switch(this.type){case i.CARTESIAN_2D:return r=e.cartesian2dToPolar({coordinate:this.cooridnatesByType.CARTESIAN_2D,isDegree:this.isDegree,center:n}),this.cooridnatesByType.CYLINDRICAL=[r[0],r[1],0],this.cooridnatesByType.CYLINDRICAL;case i.CARTESIAN_3D:return this.cooridnatesByType.CYLINDRICAL=e.cartesian3dToCylindrical({coordinate:this.cooridnatesByType[i.CARTESIAN_3D],isDegree:this.isDegree,center:n}),this.cooridnatesByType.CYLINDRICAL;case i.POLAR:return[(r=this.cooridnatesByType.POLAR)[0],r[1],0];case i.CYLINDRICAL:return this.cooridnatesByType.CYLINDRICAL;case i.SPHERICAL:return this.cooridnatesByType.CYLINDRICAL=e.sphericalToCylindrical({coordinate:this.cooridnatesByType.SPHERICAL,isDegree:this.isDegree}),this.cooridnatesByType.CYLINDRICAL;default:throw new Error("cannot convert "+this.type+" to cylindrical")}},e.prototype.polar=function(t){switch(t=t||{},this.type){case i.CARTESIAN_2D:return this.cooridnatesByType.POLAR=e.cartesian2dToPolar({coordinate:this.cooridnatesByType.CARTESIAN_2D,isDegree:this.isDegree,center:t.center}),this.cooridnatesByType.POLAR;case i.CARTESIAN_3D:return this.cooridnatesByType.POLAR=e.cartesian2dToPolar({coordinate:this.cooridnatesByType.CARTESIAN_3D,isDegree:this.isDegree,center:t.center}),this.cooridnatesByType.POLAR;case i.POLAR:return this.cooridnatesByType.POLAR;default:throw new Error("cannot convert to/from original/requested types")}},e.prototype.spherical=function(t){var r;switch(t=t||{},this.type){case i.CARTESIAN_2D:return r=e.cartesian2dToPolar({coordinate:this.cooridnatesByType.CARTESIAN_2D,isDegree:this.isDegree,center:t.center}),this.cooridnatesByType.SPHERICAL=[r[0],r[1],0],this.cooridnatesByType.SPHERICAL;case i.CARTESIAN_3D:return this.cooridnatesByType.SPHERICAL=e.cartesian3dToSpherical({coordinate:this.cooridnatesByType.CARTESIAN_3D,isDegree:this.isDegree,center:t.center}),this.cooridnatesByType.SPHERICAL;case i.POLAR:return[(r=this.cooridnatesByType.POLAR)[0],r[1],0];case i.CYLINDRICAL:return this.cooridnatesByType.SPHERICAL=e.cylindricalToSpherical({coordinate:this.cooridnatesByType.CYLINDRICAL,isDegree:this.isDegree}),this.cooridnatesByType.SPHERICAL;case i.SPHERICAL:return this.cooridnatesByType.SPHERICAL;default:throw new Error("cannot convert to/from original/requested types")}},e}();t.Coordinate=a},HQAx:function(e,t,r){"use strict";var i=r("P8UN"),n=r("ewoU"),o=r("DFzH"),a=r("kiRH"),s=r("nONw"),c=r("ytzU");i(i.P,"Array",{flatMap:function(e){var t,r,i=o(this);return s(e),t=a(i.length),r=c(i,0),n(r,i,i,t,0,1,e,arguments[1]),r}}),r("Dq1/")("flatMap")},I17o:function(e,t,r){"use strict";var i=r("P8UN"),n=r("pTxf"),o=r("CL53"),a=/Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(o);i(i.P+i.F*a,"String",{padEnd:function(e){return n(this,e,arguments.length>1?arguments[1]:void 0,!1)}})},PQgV:function(e,t,r){"use strict";r.r(t);r("q1tI");var i=r("Gmm/"),n=r("ViKx"),o=(r("2sI2"),r("PZSu"),r("qKvR")),a={}.DEV&&!1,s=function(e){var t=e.random();e.setup=function(){a&&(e.pixelDensity(1),e.frameRate(30)),e.createCanvas(660,840),e.colorMode(e.HSB,1),e.noFill(),e.strokeWeight(2),e.createLoop(10,{gif:!!a&&{render:!1,open:!0},noiseRadius:1})},e.draw=function(){e.blendMode(e.BLEND),e.background(t,.5,.5),e.blendMode(e.OVERLAY),e.push(),e.translate(e.width/2,e.height/2);for(var r=-e.HALF_PI+e.PI/75;r<e.HALF_PI;r+=e.PI/75){e.stroke(1-t,e.map(r,-e.HALF_PI,e.HALF_PI,.2,.8),e.map(r,-e.HALF_PI,e.HALF_PI,0,1));var i=Object(n.a)(0,0,r,e.width/3),o=i.x,a=i.y,s=e.map(e.sin(e.animLoop.theta),-1,1,0,e.animLoop.noise2D(r,a)*(e.width/2));e.bezier(o,a,e.map(e.sin(e.animLoop.theta),-1,1,o,s),e.map(e.sin(e.animLoop.theta),-1,1,a,a-s),e.map(e.cos(e.animLoop.theta),-1,1,-s,-o),e.map(e.cos(e.animLoop.theta),-1,1,a+s,a),-o,a)}e.pop()}};t.default=function(e){var t=e.location;return Object(o.c)(i.a,{sketch:s,path:t.pathname,description:""})}},"QzX/":function(e,t,r){"use strict";r("EU/P")("trimRight",(function(e){return function(){return e(this,2)}}),"trimEnd")},Rw9D:function(e,t,r){"use strict";var i=r("P8UN"),n=r("/+AL");i(i.P+i.F*!r("h/qr")([].reduceRight,!0),"Array",{reduceRight:function(e){return n(this,e,arguments.length,arguments[1],!0)}})},ViKx:function(e,t,r){"use strict";r.d(t,"c",(function(){return i})),r.d(t,"d",(function(){return n})),r.d(t,"b",(function(){return o}));var i=function(e,t,r){return e+Math.cos(t)*r},n=function(e,t,r){return e+Math.sin(t)*r},o=function(e,t,r,i,n,o){void 0===o&&(o=!1);var a=e+Math.cos(r)*i,s=t+Math.sin(r)*n;return o?[a,s]:{x:a,y:s}};t.a=function(e,t,r,o,a){void 0===a&&(a=!1);var s=i(e,r,o),c=n(t,r,o);return a?[s,c]:{x:s,y:c}}},YuTi:function(e,t,r){r("R48M"),e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}},ewoU:function(e,t,r){"use strict";var i=r("tuyV"),n=r("BjK0"),o=r("kiRH"),a=r("ot9L"),s=r("sOol")("isConcatSpreadable");e.exports=function e(t,r,c,d,h,p,u,y){for(var A,l,T=h,f=0,C=!!u&&a(u,y,3);f<d;){if(f in c){if(A=C?C(c[f],f,r):c[f],l=!1,n(A)&&(l=void 0!==(l=A[s])?!!l:i(A)),l&&p>0)T=e(t,r,A,o(A.length),T,p-1)-1;else{if(T>=9007199254740991)throw TypeError();t[T]=A}T++}f++}return T}},lizw:function(e,t,r){"use strict";var i=r("P8UN"),n=r("pTxf"),o=r("CL53"),a=/Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(o);i(i.P+i.F*a,"String",{padStart:function(e){return n(this,e,arguments.length>1?arguments[1]:void 0,!0)}})},pTxf:function(e,t,r){var i=r("kiRH"),n=r("gd4K"),o=r("ap2Z");e.exports=function(e,t,r,a){var s=String(o(e)),c=s.length,d=void 0===r?" ":String(r),h=i(t);if(h<=c||""==d)return s;var p=h-c,u=n.call(d,Math.ceil(p/d.length));return u.length>p&&(u=u.slice(0,p)),a?u+s:s+u}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-07-21-js-f7e7fa54b6d6f3840646.js.map