(window.webpackJsonp=window.webpackJsonp||[]).push([[188],{342:function(r,t,e){"use strict";e.r(t);e(105),e(69),e(44),e(106),e(104),e(352);var n=e(12),o=(e(0),e(363)),i=e(348),a=function(r){var t=[],e=[function(t){return 240*r.abs(r.sin(t))},function(t){return 240*r.abs(r.cos(t))},function(t){return 240*r.abs(r.tan(t))},function(t){return 240*r.abs(r.sin(-t))},function(t){return 240*r.abs(r.cos(-t))},function(t){return 240*r.abs(r.tan(-t))},function(){return 240},function(){return 15},function(){return 128}];r.setup=function(){for(r.createCanvas(660,840,r.WEBGL),r.noStroke();Array.from(new Set(t)).length<3;)t=[r.random(e),r.random(e),r.random(e)]},r.draw=function(){var e=t.map(function(t){return t(r.frameCount/200*.25)});r.background.apply(r,e),r.pointLight.apply(r,e.reverse().concat([r.cos(r.frameCount/200*.25),r.sin(r.frameCount/100*.25),r.sin(r.frameCount/100*.25)])),r.camera.apply(r,Object(o.spherical)([200,0,r.frameCount/200*.25]).cart().concat([0,0,0,0,1,0])),r.noStroke(),r.specularMaterial.apply(r,e),r.shininess(5);for(var n=0;n<20;n++)r.push(),r.rotateX(r.TWO_PI/10*n*r.sin(r.frameCount/100*.25)),r.rotateY(r.TWO_PI/10*n*r.cos(r.frameCount/200*.25)),r.torus(10*n,10/3,30*n+1),r.pop()}};t.default=function(r){var t=r.location;return Object(n.c)(i.a,{sketch:a,path:t.pathname,description:""})}},352:function(r,t,e){"use strict";var n=e(21),o=e(9),i=e(34),a=e(101),s=e(102),c=e(18),p=e(353),l=e(103);o(o.S+o.F*!e(68)(function(r){Array.from(r)}),"Array",{from:function(r){var t,e,o,u,h=i(r),d="function"==typeof this?this:Array,f=arguments.length,y=f>1?arguments[1]:void 0,w=void 0!==y,g=0,v=l(h);if(w&&(y=n(y,f>2?arguments[2]:void 0,2)),null==v||d==Array&&s(v))for(e=new d(t=c(h.length));t>g;g++)p(e,g,w?y(h[g],g):h[g]);else for(u=v.call(h),e=new d;!(o=u.next()).done;g++)p(e,g,w?a(u,y,[o.value,g],!0):o.value);return e.length=g,e}})},353:function(r,t,e){"use strict";var n=e(13),o=e(35);r.exports=function(r,t,e){t in r?n.f(r,t,o(0,e)):r[t]=e}},360:function(r,t){r.exports=function(r){var t=typeof r;return!!r&&("function"===t||"object"===t)}},363:function(r,t,e){"use strict";var n=e(364),o=e(365),i=e(360),a=e(366),s=180/Math.PI,c=function(r){var t,e,n,o,i,a,s,c,p={};if(Object.defineProperty(this,"isRadian",{get:function(r){return t},set:function(r){t=!!r,e!==!r&&(e=!r)}}),Object.defineProperty(this,"isDegree",{get:function(r){return e},set:function(r){e=r,t!==!r&&(t=!r)}}),Object.defineProperty(p,"cartesian2d",{get:function(r){return[n,o]},set:function(r){n=r[0],o=r[1]}}),Object.defineProperty(p,"cartesian3d",{get:function(r){return[n,o,i]},set:function(r){n=r[0],o=r[1],i=r[2]}}),Object.defineProperty(p,"polar",{get:function(r){return[a,s]},set:function(r){a=r[0],s=r[1]}}),Object.defineProperty(p,"cylindrical",{get:function(r){return[a,s,i]},set:function(r){a=r[0],s=r[1],i=r[2]}}),Object.defineProperty(p,"spherical",{get:function(r){return[a,s,c]},set:function(r){a=r[0],s=r[1],c=r[2]}}),r.isDegree&&!r.isRadian?this.isDegree=!0:this.isRadian=!0,!r.label||!r.coords)throw new Error("no coordinate type defined");this.initialType=r.label,this.pos=p,this.pos[r.label]=r.coords};c.prototype.cartesian=function(){return this.cart.apply(this,arguments)},c.prototype.cart=function(r){var t;switch(r=r||{},this.initialType){case"cartesian2d":return this.pos.cartesian2d;case"cartesian3d":return this.pos.cartesian3d;case"polar":return this.pos.cartesian2d=c.polarToCart2d(this.pos.polar,this.isDegree),this.pos.cartesian2d;case"cylindrical":return t=c.polarToCart2d(this.pos.polar,this.isDegree),this.pos.cartesian3d=[t[0],t[1],this.pos.cylindrical[2]],this.pos.cartesian3d;case"spherical":return this.pos.cartesian3d=c.sphericalToCart3d(this.pos.spherical,this.isDegree),this.pos.cartesian3d;default:throw new Error("cannot convert to/from original/requested types")}},c.prototype.cylindrical=function(){return this.cyl.apply(this,arguments)},c.prototype.cyl=function(r){var t;switch(r=r||{},this.initialType){case"cartesian2d":return t=c.cartesian2dToPolar(this.pos.cartesian2d,this.isDegree,r.center),this.pos.cylindrical=[t[0],t[1],0],this.pos.cylindrical;case"cartesian3d":return this.pos.cylindrical=c.cartesian3dToCylindrical(this.pos.cartesian3d,this.isDegree,r.center),this.pos.cylindrical;case"polar":return[(t=this.pos.polar)[0],t[1],0];case"cylindrical":return this.pos.cylindrical;case"spherical":return this.pos.cylindrical=c.sphericalToCylindrical(this.pos.spherical,this.isDegree),this.pos.cylindrical;default:throw new Error("cannot convert to/from original/requested types")}},c.prototype.pol=function(){return this.polar.apply(this,arguments)},c.prototype.polar=function(r){switch(r=r||{},this.initialType){case"cartesian2d":return this.pos.polar=c.cartesian2dToPolar(this.pos.cartesian2d,this.isDegree,r.center),this.pos.polar;case"polar":return this.pos.polar;default:throw new Error("cannot convert to/from original/requested types")}},c.prototype.spherical=function(){return this.sph.apply(this,arguments)},c.prototype.sph=function(r){var t;switch(r=r||{},this.initialType){case"cartesian2d":return t=c.cartesian2dToPolar(this.pos.cartesian2d,this.isDegree,r.center),this.pos.spherical=[t[0],t[1],0],this.pos.spherical;case"cartesian3d":return this.pos.spherical=c.cartesian3dToSpherical(this.pos.cartesian3d,this.isDegree,r.center),this.pos.spherical;case"polar":return[(t=this.pos.polar)[0],t[1],0];case"cylindrical":return this.pos.spherical=c.cylindricalToSpherical(this.pos.cylindrical,this.isDegree),this.pos.spherical;case"spherical":return this.pos.spherical;default:throw new Error("cannot convert to/from original/requested types")}},c.cartesian=function(r){return c.cart(r)},c.cart=function(r){var t;if(n(r)&&(r={coords:r}),i(r)&&n(r.coords)){if(c.arrToNumeric(r.coords),r.coords.length<2||r.coords.length>3)throw new Error("expected exactly 2 or exactly 3 cartesian options");return t={label:"cartesian2d",options:r.coords},t=a(t,r),2===r.coords.length?new c(t):(t.label="cartesian3d",new c(t))}throw new Error("expected options w/ array of [x,y,(z?)] coords")},c.cylindrical=function(r){return c.cyl(r)},c.cyl=function(r){var t;if(n(r)&&(r={coords:r}),i(r)&&n(r.coords)){if(c.arrToNumeric(r.coords),3!==r.coords.length)throw new Error("expected exactly 3 params [r, t, z]");return t={label:"cylindrical",coords:r.coords},t=a(t,r),new c(t)}throw new Error("expected options w/ array of [r, t, z] coords")},c.polar=function(r){return c.pol(r)},c.pol=function(r){var t;if(n(r)&&(r={coords:r}),i(r)&&n(r.coords)){if(c.arrToNumeric(r.coords),2!==r.coords.length)throw new Error("expected exactly 2 params [r, t]");return t={label:"polar",coords:r.coords},t=a(t,r),new c(t)}throw new Error("expected array of [r, t] options")},c.spherical=function(r){return c.sph(r)},c.sph=function(r){var t;if(n(r)&&(r={coords:r}),i(r)&&n(r.coords)){if(c.arrToNumeric(r.coords),3!==r.coords.length)throw new Error("expected exactly 3 params [r, t, p]");return t={label:"spherical",coords:r.coords},t=a(t,r),new c(t)}throw new Error("expected options w/ array of [r, t, p] coords")},c.arrToNumeric=function(r){var t;if(!n(r))throw new TypeError("expected array of number-like values");for(var e=r.length-1;e>=0;e--)if("string"==typeof(t=r[e])&&(t=parseFloat(t)),!o(t))throw new TypeError(t+" not numeric or numeric-like")},c.polarToCart2d=function(r,t){var e,n;return e=r[0],n=r[1],t&&(n*=1/s),[e*Math.cos(n),e*Math.sin(n)]},c.cartesian2dToPolar=function(r,t,e){var o,i,a,c;if(!n(r)&&2!==r.length)throw new TypeError("expected [x, y] xy array");if(o=r[0],i=r[1],e&&!n(e)&&2!==e.length)throw new TypeError("expected [x, y] center array");return e&&(o-=e[0],i-=e[1]),a=Math.sqrt(o*o+i*i),c=Math.atan2(i,o),t&&(c*=s),[a,c]},c.cartesian3dToCylindrical=function(r,t,e){var n,o=r[0],i=r[1],a=r[2];return[(n=c.cartesian2dToPolar([o,i],t,e))[0],n[1],a]},c.cartesian3dToSpherical=function(r,t,e){if(e&&3!==e.length)throw new Error("expected center value to have [x, y, z] coordsfor locating sphere center");var n,o,i,a,c,p,l=r[0],u=r[1],h=r[2];return e&&(l-=e[0],u-=e[1],h-=e[2]),n=l*l,o=u*u,i=h*h,(a=Math.sqrt(n+o+i))?(c=Math.atan2(u,l),p=Math.atan2(Math.sqrt(n+o),h),t&&(c*=s,p*=s)):p=c=0,[a,c,p]},c.cylindricalToSpherical=function(r,t){var e,n,o=r[0],i=r[1],a=r[2];return t&&(i/=s),e=Math.sqrt(o*o+a*a),n=Math.atan2(o,a),t&&(n*=s,i*=s),[e,i,n]},c.sphericalToCart3d=function(r,t){var e=r[0],n=r[1],o=r[2];return t&&(n/=s,o/=s),[e*Math.sin(o)*Math.cos(n),e*Math.sin(o)*Math.sin(n),e*Math.cos(o)]},c.sphericalToCylindrical=function(r,t){var e,n,o=r[0],i=r[1],a=r[2];return t&&(i/=s,a/=s),e=o*Math.sin(a),n=o*Math.cos(a),t&&(i*=s,a*=s),[e,i,n]},r.exports=c},364:function(r,t){var e=Object.prototype.toString,n=Array.isArray;r.exports=n||function(r){return"[object Array]"===e.call(r)}},365:function(r,t){var e=Object.prototype.toString;r.exports=function(r){return"[object Number]"===e.call(r)}},366:function(r,t,e){var n=e(360);r.exports=function(r){if(!n(r))return r;for(var t,e,o=1,i=arguments.length;o<i;o++)for(e in t=arguments[o])r[e]=t[e];return r}}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-06-23-js-08054af42fe6ef95e493.js.map