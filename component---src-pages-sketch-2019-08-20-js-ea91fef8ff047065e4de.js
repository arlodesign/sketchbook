(window.webpackJsonp=window.webpackJsonp||[]).push([[244],{431:function(r,t,e){"use strict";e.r(t);var o=e(10),i=(e(0),e(442)),n=(e(447),e(450)),a=e(477),s=(e(454),{}.DEV&&!0),c=function(r){var t=r.random(100),e=r.TWO_PI/4,o=[],i=function(){function t(t,e){this.x=t,this.y=e,this.rotate=r.QUARTER_PI,this.rotateDirection=r.random([-1,1]),this.offset=r.noise(t,e,o.length+1)*r.QUARTER_PI,this.prevMod=0}return t.prototype.draw=function(){var t=r.animLoop.theta+this.offset;t%e<=this.prevMod&&(this.rotate+=r.HALF_PI*this.rotateDirection);var o=r.map(t%e,0,r.HALF_PI,0,1);r.push(),r.translate(this.x,this.y,0),r.rotateX(r.map(Object(a.d)(o),0,1,this.rotate,this.rotate+r.HALF_PI*this.rotateDirection)),r.rotateY(r.map(Object(a.d)(o),0,1,this.rotate,this.rotate+r.HALF_PI*this.rotateDirection)),r.rotateZ(-r.map(Object(a.d)(o),0,1,this.rotate,this.rotate+r.HALF_PI*this.rotateDirection)),r.box(60),r.pop(),this.prevMod=t%e},t}();r.setup=function(){s&&(r.pixelDensity(1),r.frameRate(30)),r.createCanvas(660,840,r.WEBGL),r.colorMode(r.HSB,100),r.noStroke(),r.createLoop(20,{gif:!!s&&{render:!1,open:!0},noiseRadius:.3});for(var t=-r.width/2;t<r.width/2;t+=30)for(var e=-r.height/2;e<r.height/2;e+=30)o.push(new i(t+15,e+15))},r.draw=function(){r.background(0),r.specularMaterial(t,100,75),r.pointLight.apply(r,[0,0,100].concat(Object(n.spherical)([1e3,0,r.PI]).cart())),o.forEach(function(r){return r.draw()})}};t.default=function(r){var t=r.location;return Object(o.c)(i.a,{sketch:c,path:t.pathname,description:""})}},446:function(r,t){r.exports=function(r){var t=typeof r;return!!r&&("function"===t||"object"===t)}},450:function(r,t,e){"use strict";e(100);var o=e(451),i=e(452),n=e(446),a=e(453),s=180/Math.PI,c=function(r){var t,e,o,i,n,a,s,c,p={};if(Object.defineProperty(this,"isRadian",{get:function(r){return t},set:function(r){t=!!r,e!==!r&&(e=!r)}}),Object.defineProperty(this,"isDegree",{get:function(r){return e},set:function(r){e=r,t!==!r&&(t=!r)}}),Object.defineProperty(p,"cartesian2d",{get:function(r){return[o,i]},set:function(r){o=r[0],i=r[1]}}),Object.defineProperty(p,"cartesian3d",{get:function(r){return[o,i,n]},set:function(r){o=r[0],i=r[1],n=r[2]}}),Object.defineProperty(p,"polar",{get:function(r){return[a,s]},set:function(r){a=r[0],s=r[1]}}),Object.defineProperty(p,"cylindrical",{get:function(r){return[a,s,n]},set:function(r){a=r[0],s=r[1],n=r[2]}}),Object.defineProperty(p,"spherical",{get:function(r){return[a,s,c]},set:function(r){a=r[0],s=r[1],c=r[2]}}),r.isDegree&&!r.isRadian?this.isDegree=!0:this.isRadian=!0,!r.label||!r.coords)throw new Error("no coordinate type defined");this.initialType=r.label,this.pos=p,this.pos[r.label]=r.coords};c.prototype.cartesian=function(){return this.cart.apply(this,arguments)},c.prototype.cart=function(r){var t;switch(r=r||{},this.initialType){case"cartesian2d":return this.pos.cartesian2d;case"cartesian3d":return this.pos.cartesian3d;case"polar":return this.pos.cartesian2d=c.polarToCart2d(this.pos.polar,this.isDegree),this.pos.cartesian2d;case"cylindrical":return t=c.polarToCart2d(this.pos.polar,this.isDegree),this.pos.cartesian3d=[t[0],t[1],this.pos.cylindrical[2]],this.pos.cartesian3d;case"spherical":return this.pos.cartesian3d=c.sphericalToCart3d(this.pos.spherical,this.isDegree),this.pos.cartesian3d;default:throw new Error("cannot convert to/from original/requested types")}},c.prototype.cylindrical=function(){return this.cyl.apply(this,arguments)},c.prototype.cyl=function(r){var t;switch(r=r||{},this.initialType){case"cartesian2d":return t=c.cartesian2dToPolar(this.pos.cartesian2d,this.isDegree,r.center),this.pos.cylindrical=[t[0],t[1],0],this.pos.cylindrical;case"cartesian3d":return this.pos.cylindrical=c.cartesian3dToCylindrical(this.pos.cartesian3d,this.isDegree,r.center),this.pos.cylindrical;case"polar":return[(t=this.pos.polar)[0],t[1],0];case"cylindrical":return this.pos.cylindrical;case"spherical":return this.pos.cylindrical=c.sphericalToCylindrical(this.pos.spherical,this.isDegree),this.pos.cylindrical;default:throw new Error("cannot convert to/from original/requested types")}},c.prototype.pol=function(){return this.polar.apply(this,arguments)},c.prototype.polar=function(r){switch(r=r||{},this.initialType){case"cartesian2d":return this.pos.polar=c.cartesian2dToPolar(this.pos.cartesian2d,this.isDegree,r.center),this.pos.polar;case"polar":return this.pos.polar;default:throw new Error("cannot convert to/from original/requested types")}},c.prototype.spherical=function(){return this.sph.apply(this,arguments)},c.prototype.sph=function(r){var t;switch(r=r||{},this.initialType){case"cartesian2d":return t=c.cartesian2dToPolar(this.pos.cartesian2d,this.isDegree,r.center),this.pos.spherical=[t[0],t[1],0],this.pos.spherical;case"cartesian3d":return this.pos.spherical=c.cartesian3dToSpherical(this.pos.cartesian3d,this.isDegree,r.center),this.pos.spherical;case"polar":return[(t=this.pos.polar)[0],t[1],0];case"cylindrical":return this.pos.spherical=c.cylindricalToSpherical(this.pos.cylindrical,this.isDegree),this.pos.spherical;case"spherical":return this.pos.spherical;default:throw new Error("cannot convert to/from original/requested types")}},c.cartesian=function(r){return c.cart(r)},c.cart=function(r){var t;if(o(r)&&(r={coords:r}),n(r)&&o(r.coords)){if(c.arrToNumeric(r.coords),r.coords.length<2||r.coords.length>3)throw new Error("expected exactly 2 or exactly 3 cartesian options");return t={label:"cartesian2d",options:r.coords},t=a(t,r),2===r.coords.length?new c(t):(t.label="cartesian3d",new c(t))}throw new Error("expected options w/ array of [x,y,(z?)] coords")},c.cylindrical=function(r){return c.cyl(r)},c.cyl=function(r){var t;if(o(r)&&(r={coords:r}),n(r)&&o(r.coords)){if(c.arrToNumeric(r.coords),3!==r.coords.length)throw new Error("expected exactly 3 params [r, t, z]");return t={label:"cylindrical",coords:r.coords},t=a(t,r),new c(t)}throw new Error("expected options w/ array of [r, t, z] coords")},c.polar=function(r){return c.pol(r)},c.pol=function(r){var t;if(o(r)&&(r={coords:r}),n(r)&&o(r.coords)){if(c.arrToNumeric(r.coords),2!==r.coords.length)throw new Error("expected exactly 2 params [r, t]");return t={label:"polar",coords:r.coords},t=a(t,r),new c(t)}throw new Error("expected array of [r, t] options")},c.spherical=function(r){return c.sph(r)},c.sph=function(r){var t;if(o(r)&&(r={coords:r}),n(r)&&o(r.coords)){if(c.arrToNumeric(r.coords),3!==r.coords.length)throw new Error("expected exactly 3 params [r, t, p]");return t={label:"spherical",coords:r.coords},t=a(t,r),new c(t)}throw new Error("expected options w/ array of [r, t, p] coords")},c.arrToNumeric=function(r){var t;if(!o(r))throw new TypeError("expected array of number-like values");for(var e=r.length-1;e>=0;e--)if("string"==typeof(t=r[e])&&(t=parseFloat(t)),!i(t))throw new TypeError(t+" not numeric or numeric-like")},c.polarToCart2d=function(r,t){var e,o;return e=r[0],o=r[1],t&&(o*=1/s),[e*Math.cos(o),e*Math.sin(o)]},c.cartesian2dToPolar=function(r,t,e){var i,n,a,c;if(!o(r)&&2!==r.length)throw new TypeError("expected [x, y] xy array");if(i=r[0],n=r[1],e&&!o(e)&&2!==e.length)throw new TypeError("expected [x, y] center array");return e&&(i-=e[0],n-=e[1]),a=Math.sqrt(i*i+n*n),c=Math.atan2(n,i),t&&(c*=s),[a,c]},c.cartesian3dToCylindrical=function(r,t,e){var o,i=r[0],n=r[1],a=r[2];return[(o=c.cartesian2dToPolar([i,n],t,e))[0],o[1],a]},c.cartesian3dToSpherical=function(r,t,e){if(e&&3!==e.length)throw new Error("expected center value to have [x, y, z] coordsfor locating sphere center");var o,i,n,a,c,p,h=r[0],l=r[1],u=r[2];return e&&(h-=e[0],l-=e[1],u-=e[2]),o=h*h,i=l*l,n=u*u,(a=Math.sqrt(o+i+n))?(c=Math.atan2(l,h),p=Math.atan2(Math.sqrt(o+i),u),t&&(c*=s,p*=s)):p=c=0,[a,c,p]},c.cylindricalToSpherical=function(r,t){var e,o,i=r[0],n=r[1],a=r[2];return t&&(n/=s),e=Math.sqrt(i*i+a*a),o=Math.atan2(i,a),t&&(o*=s,n*=s),[e,n,o]},c.sphericalToCart3d=function(r,t){var e=r[0],o=r[1],i=r[2];return t&&(o/=s,i/=s),[e*Math.sin(i)*Math.cos(o),e*Math.sin(i)*Math.sin(o),e*Math.cos(i)]},c.sphericalToCylindrical=function(r,t){var e,o,i=r[0],n=r[1],a=r[2];return t&&(n/=s,a/=s),e=i*Math.sin(a),o=i*Math.cos(a),t&&(n*=s,a*=s),[e,n,o]},r.exports=c},451:function(r,t,e){e(47),e(55),e(56),e(12);var o=Object.prototype.toString,i=Array.isArray;r.exports=i||function(r){return"[object Array]"===o.call(r)}},452:function(r,t,e){e(55),e(56),e(12);var o=Object.prototype.toString;r.exports=function(r){return"[object Number]"===o.call(r)}},453:function(r,t,e){var o=e(446);r.exports=function(r){if(!o(r))return r;for(var t,e,i=1,n=arguments.length;i<n;i++)for(e in t=arguments[i])r[e]=t[e];return r}},477:function(r,t,e){"use strict";e.d(t,"b",function(){return o}),e.d(t,"a",function(){return i}),e.d(t,"c",function(){return n}),e.d(t,"d",function(){return a});var o=function(r){return r<.5?2*r*r:(4-2*r)*r-1},i=function(r){return r<.5?4*r*r*r:(r-1)*(2*r-2)*(2*r-2)+1},n=function(r){return r<.5?8*r*r*r*r:1-8*--r*r*r*r},a=function(r){return r<.5?16*r*r*r*r*r:1+16*--r*r*r*r*r}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-08-20-js-ea91fef8ff047065e4de.js.map