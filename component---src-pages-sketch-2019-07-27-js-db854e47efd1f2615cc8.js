(window.webpackJsonp=window.webpackJsonp||[]).push([[221],{409:function(r,t,e){"use strict";e.r(t);var o=e(10),i=(e(0),e(434)),a=e(441),n=(e(440),{}.DEV&&!1),s=function(r){r.setup=function(){n&&(r.pixelDensity(1),r.frameRate(30)),r.createCanvas(660,840,r.WEBGL),r.rectMode(r.CENTER),r.noStroke(),r.createLoop(10,{gif:!!n&&{render:!1,open:!0},noiseRadius:.5})},r.draw=function(){r.background(0),r.camera.apply(r,Object(a.spherical)([500,0,r.animLoop.theta]).cart().concat([0,0,0,0,1,0])),r.directionalLight(255,255,255,r.cos(r.animLoop.theta),r.sin(r.animLoop.theta),0),[32,128,224].forEach(function(t,e){r.specularMaterial(t);for(var o=-3;o<=3;o++)for(var i=-3;i<=3;i++)for(var a=-3;a<3;a++){var n=r.map(r.sin(r.animLoop.theta),-1,1,2,r.animLoop.noise2D(o,e)+1),s=r.map(r.cos(r.animLoop.theta),-1,1,2,r.animLoop.noise2D(i,e)+1),c=r.map(r.cos(r.TWO_PI-r.animLoop.theta),-1,1,2,r.animLoop.noise2D(a,e)+1);r.map(r.cos(r.animLoop.theta),-1,1,2,r.animLoop.noise2D(o,i));r.push(),r.translate(50*o*n,50*i*s,50*a*c),r.rotateX(r.TWO_PI*n),r.rotateY(r.TWO_PI*s),r.rotateZ(r.TWO_PI*c),r.box(30*n,30*s,30*c),r.pop()}})}};t.default=function(r){var t=r.location;return Object(o.c)(i.a,{sketch:s,path:t.pathname,description:""})}},438:function(r,t){r.exports=function(r){var t=typeof r;return!!r&&("function"===t||"object"===t)}},441:function(r,t,e){"use strict";e(100);var o=e(442),i=e(443),a=e(438),n=e(444),s=180/Math.PI,c=function(r){var t,e,o,i,a,n,s,c,p={};if(Object.defineProperty(this,"isRadian",{get:function(r){return t},set:function(r){t=!!r,e!==!r&&(e=!r)}}),Object.defineProperty(this,"isDegree",{get:function(r){return e},set:function(r){e=r,t!==!r&&(t=!r)}}),Object.defineProperty(p,"cartesian2d",{get:function(r){return[o,i]},set:function(r){o=r[0],i=r[1]}}),Object.defineProperty(p,"cartesian3d",{get:function(r){return[o,i,a]},set:function(r){o=r[0],i=r[1],a=r[2]}}),Object.defineProperty(p,"polar",{get:function(r){return[n,s]},set:function(r){n=r[0],s=r[1]}}),Object.defineProperty(p,"cylindrical",{get:function(r){return[n,s,a]},set:function(r){n=r[0],s=r[1],a=r[2]}}),Object.defineProperty(p,"spherical",{get:function(r){return[n,s,c]},set:function(r){n=r[0],s=r[1],c=r[2]}}),r.isDegree&&!r.isRadian?this.isDegree=!0:this.isRadian=!0,!r.label||!r.coords)throw new Error("no coordinate type defined");this.initialType=r.label,this.pos=p,this.pos[r.label]=r.coords};c.prototype.cartesian=function(){return this.cart.apply(this,arguments)},c.prototype.cart=function(r){var t;switch(r=r||{},this.initialType){case"cartesian2d":return this.pos.cartesian2d;case"cartesian3d":return this.pos.cartesian3d;case"polar":return this.pos.cartesian2d=c.polarToCart2d(this.pos.polar,this.isDegree),this.pos.cartesian2d;case"cylindrical":return t=c.polarToCart2d(this.pos.polar,this.isDegree),this.pos.cartesian3d=[t[0],t[1],this.pos.cylindrical[2]],this.pos.cartesian3d;case"spherical":return this.pos.cartesian3d=c.sphericalToCart3d(this.pos.spherical,this.isDegree),this.pos.cartesian3d;default:throw new Error("cannot convert to/from original/requested types")}},c.prototype.cylindrical=function(){return this.cyl.apply(this,arguments)},c.prototype.cyl=function(r){var t;switch(r=r||{},this.initialType){case"cartesian2d":return t=c.cartesian2dToPolar(this.pos.cartesian2d,this.isDegree,r.center),this.pos.cylindrical=[t[0],t[1],0],this.pos.cylindrical;case"cartesian3d":return this.pos.cylindrical=c.cartesian3dToCylindrical(this.pos.cartesian3d,this.isDegree,r.center),this.pos.cylindrical;case"polar":return[(t=this.pos.polar)[0],t[1],0];case"cylindrical":return this.pos.cylindrical;case"spherical":return this.pos.cylindrical=c.sphericalToCylindrical(this.pos.spherical,this.isDegree),this.pos.cylindrical;default:throw new Error("cannot convert to/from original/requested types")}},c.prototype.pol=function(){return this.polar.apply(this,arguments)},c.prototype.polar=function(r){switch(r=r||{},this.initialType){case"cartesian2d":return this.pos.polar=c.cartesian2dToPolar(this.pos.cartesian2d,this.isDegree,r.center),this.pos.polar;case"polar":return this.pos.polar;default:throw new Error("cannot convert to/from original/requested types")}},c.prototype.spherical=function(){return this.sph.apply(this,arguments)},c.prototype.sph=function(r){var t;switch(r=r||{},this.initialType){case"cartesian2d":return t=c.cartesian2dToPolar(this.pos.cartesian2d,this.isDegree,r.center),this.pos.spherical=[t[0],t[1],0],this.pos.spherical;case"cartesian3d":return this.pos.spherical=c.cartesian3dToSpherical(this.pos.cartesian3d,this.isDegree,r.center),this.pos.spherical;case"polar":return[(t=this.pos.polar)[0],t[1],0];case"cylindrical":return this.pos.spherical=c.cylindricalToSpherical(this.pos.cylindrical,this.isDegree),this.pos.spherical;case"spherical":return this.pos.spherical;default:throw new Error("cannot convert to/from original/requested types")}},c.cartesian=function(r){return c.cart(r)},c.cart=function(r){var t;if(o(r)&&(r={coords:r}),a(r)&&o(r.coords)){if(c.arrToNumeric(r.coords),r.coords.length<2||r.coords.length>3)throw new Error("expected exactly 2 or exactly 3 cartesian options");return t={label:"cartesian2d",options:r.coords},t=n(t,r),2===r.coords.length?new c(t):(t.label="cartesian3d",new c(t))}throw new Error("expected options w/ array of [x,y,(z?)] coords")},c.cylindrical=function(r){return c.cyl(r)},c.cyl=function(r){var t;if(o(r)&&(r={coords:r}),a(r)&&o(r.coords)){if(c.arrToNumeric(r.coords),3!==r.coords.length)throw new Error("expected exactly 3 params [r, t, z]");return t={label:"cylindrical",coords:r.coords},t=n(t,r),new c(t)}throw new Error("expected options w/ array of [r, t, z] coords")},c.polar=function(r){return c.pol(r)},c.pol=function(r){var t;if(o(r)&&(r={coords:r}),a(r)&&o(r.coords)){if(c.arrToNumeric(r.coords),2!==r.coords.length)throw new Error("expected exactly 2 params [r, t]");return t={label:"polar",coords:r.coords},t=n(t,r),new c(t)}throw new Error("expected array of [r, t] options")},c.spherical=function(r){return c.sph(r)},c.sph=function(r){var t;if(o(r)&&(r={coords:r}),a(r)&&o(r.coords)){if(c.arrToNumeric(r.coords),3!==r.coords.length)throw new Error("expected exactly 3 params [r, t, p]");return t={label:"spherical",coords:r.coords},t=n(t,r),new c(t)}throw new Error("expected options w/ array of [r, t, p] coords")},c.arrToNumeric=function(r){var t;if(!o(r))throw new TypeError("expected array of number-like values");for(var e=r.length-1;e>=0;e--)if("string"==typeof(t=r[e])&&(t=parseFloat(t)),!i(t))throw new TypeError(t+" not numeric or numeric-like")},c.polarToCart2d=function(r,t){var e,o;return e=r[0],o=r[1],t&&(o*=1/s),[e*Math.cos(o),e*Math.sin(o)]},c.cartesian2dToPolar=function(r,t,e){var i,a,n,c;if(!o(r)&&2!==r.length)throw new TypeError("expected [x, y] xy array");if(i=r[0],a=r[1],e&&!o(e)&&2!==e.length)throw new TypeError("expected [x, y] center array");return e&&(i-=e[0],a-=e[1]),n=Math.sqrt(i*i+a*a),c=Math.atan2(a,i),t&&(c*=s),[n,c]},c.cartesian3dToCylindrical=function(r,t,e){var o,i=r[0],a=r[1],n=r[2];return[(o=c.cartesian2dToPolar([i,a],t,e))[0],o[1],n]},c.cartesian3dToSpherical=function(r,t,e){if(e&&3!==e.length)throw new Error("expected center value to have [x, y, z] coordsfor locating sphere center");var o,i,a,n,c,p,l=r[0],h=r[1],d=r[2];return e&&(l-=e[0],h-=e[1],d-=e[2]),o=l*l,i=h*h,a=d*d,(n=Math.sqrt(o+i+a))?(c=Math.atan2(h,l),p=Math.atan2(Math.sqrt(o+i),d),t&&(c*=s,p*=s)):p=c=0,[n,c,p]},c.cylindricalToSpherical=function(r,t){var e,o,i=r[0],a=r[1],n=r[2];return t&&(a/=s),e=Math.sqrt(i*i+n*n),o=Math.atan2(i,n),t&&(o*=s,a*=s),[e,a,o]},c.sphericalToCart3d=function(r,t){var e=r[0],o=r[1],i=r[2];return t&&(o/=s,i/=s),[e*Math.sin(i)*Math.cos(o),e*Math.sin(i)*Math.sin(o),e*Math.cos(i)]},c.sphericalToCylindrical=function(r,t){var e,o,i=r[0],a=r[1],n=r[2];return t&&(a/=s,n/=s),e=i*Math.sin(n),o=i*Math.cos(n),t&&(a*=s,n*=s),[e,a,o]},r.exports=c},442:function(r,t,e){e(47),e(55),e(56),e(12);var o=Object.prototype.toString,i=Array.isArray;r.exports=i||function(r){return"[object Array]"===o.call(r)}},443:function(r,t,e){e(55),e(56),e(12);var o=Object.prototype.toString;r.exports=function(r){return"[object Number]"===o.call(r)}},444:function(r,t,e){var o=e(438);r.exports=function(r){if(!o(r))return r;for(var t,e,i=1,a=arguments.length;i<a;i++)for(e in t=arguments[i])r[e]=t[e];return r}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-07-27-js-db854e47efd1f2615cc8.js.map