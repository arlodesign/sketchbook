(window.webpackJsonp=window.webpackJsonp||[]).push([[235],{"3coi":function(e,t,i){"use strict";i.r(t);var r=i("qKvR"),n=(i("q1tI"),i("Gmm/")),s=(i("PZSu"),i("ViKx")),a={}.DEV&&!1,o=function(e){e.setup=function(){e.frameRate(30),a&&e.pixelDensity(1),e.createCanvas(660,840),e.background(255),e.noFill(),e.strokeWeight(10),e.createLoop(60,{gif:!!a&&{render:!1,open:!0},noiseRadius:.01})},e.draw=function(){var t=e.animLoop,i=t.noise1D,r=t.theta;e.stroke(e.map(i(e.sin(r)),-1,1,0,255),e.map(i(e.cos(r)),-1,1,255,0),e.map(i(e.tan(r)),-1,1,0,255),16);var n=e.map(i(e.sin(r)),-1,1,e.width/4,e.width),o=e.map(i(e.cos(r)),-1,1,e.height/4,e.height),h=e.map(i(e.cos(r)),-1,1,e.width,e.width/4),d=e.map(i(e.sin(r)),-1,1,e.height,e.height/4),l=Object(s.a)(e.width/2,e.height/2,r,e.width/3,!0);e.bezier.apply(e,[n,o].concat(l,l,[h,d])),e.bezier(e.width-n,e.height-o,e.width-l[0],e.height-l[1],e.width-l[0],e.height-l[1],e.width-h,e.height-d),!a&&1800===e.frameCount&&e.noLoop()}};t.default=function(e){var t=e.location;return Object(r.c)(n.a,{sketch:o,path:t.pathname,description:""})}},"60nC":function(e,t,i){i("91GP"),i("6tN7");var r=i("g4M5");e.exports=function(){var e=void 0===window.p5?i("I335"):window.p5;if(void 0===e)return void console.error("p5.createLoop: p5 not found");var t=r(),n=r(),s=r();e.prototype.registerMethod("init",t.invoke),e.prototype.registerMethod("pre",n.invoke),e.prototype.registerMethod("post",s.invoke);var a=window.createLoop;e.prototype.createLoop=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=this,r={framesPerSecond:i._targetFrameRate||i._frameRate||60,duration:3,canvas:i.canvas};return void 0!==e&&isNaN(e)&&Object.assign(r,e),isNaN(e)||(r.duration=e),void 0!==t&&Object.assign(r,t),console.log("creating ".concat(r.duration," second loop at ").concat(r.framesPerSecond," fps")),i.animLoop=a(r),i._isGlobal&&(window.animLoop=i.animLoop),n.addListener(i.animLoop.preRender),s.addListener(i.animLoop.postRender),i.animLoop}}},"6tN7":function(e,t,i){window.createLoop=i("tSVo")},"7ERh":function(e,t,i){"use strict";i("91GP");var r=i("Fu16");e.exports=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};t=Object.assign({frequency:void 0,seed:Math.random()*n,radius:1},t);var i=new r(0);void 0!==t.frequency&&(t.radius=t.frequency);Object.assign(e,{noiseFrequency:function(e){return t.radius=e},noise:function(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=r.theta,a=void 0===n?e.theta:n,o=r.radius,h=void 0===o?t.radius:o,d=r.seed,l=void 0===d?t.seed:d,u=s(a,h);return i.noise2D(l+u.x,l+u.y)},noise1D:function(r){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=n.theta,o=void 0===a?e.theta:a,h=n.radius,d=void 0===h?t.radius:h,l=n.seed,u=void 0===l?t.seed:l,p=s(o,d);return i.noise3D(u+p.x,u+p.y,u+r)},noise2D:function(r,n){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=a.theta,h=void 0===o?e.theta:o,d=a.radius,l=void 0===d?t.radius:d,u=a.seed,p=void 0===u?t.seed:u,c=s(h,l);return i.noise4D(p+c.x,p+c.y,p+r,p+n)},noiseSeed:function(e){return t.seed=e},noiseRadius:function(e){return t.radius=e}})};var n=999999;function s(e,t){return{x:Math.cos(e)*t,y:Math.sin(e)*t}}},Fu16:function(e,t,i){var r;i("a1Th"),i("h7Nl"),i("Btvt"),i("Y9lz"),i("NO8f"),function(){"use strict";var n=.5*(Math.sqrt(3)-1),s=(3-Math.sqrt(3))/6,a=1/6,o=(Math.sqrt(5)-1)/4,h=(5-Math.sqrt(5))/20;function d(e){var t;t="function"==typeof e?e:e?function(){var e=0,t=0,i=0,r=1,n=(s=4022871197,function(e){e=e.toString();for(var t=0;t<e.length;t++){var i=.02519603282416938*(s+=e.charCodeAt(t));i-=s=i>>>0,s=(i*=s)>>>0,s+=4294967296*(i-=s)}return 2.3283064365386963e-10*(s>>>0)});var s;e=n(" "),t=n(" "),i=n(" ");for(var a=0;a<arguments.length;a++)(e-=n(arguments[a]))<0&&(e+=1),(t-=n(arguments[a]))<0&&(t+=1),(i-=n(arguments[a]))<0&&(i+=1);return n=null,function(){var n=2091639*e+2.3283064365386963e-10*r;return e=t,t=i,i=n-(r=0|n)}}(e):Math.random,this.p=l(t),this.perm=new Uint8Array(512),this.permMod12=new Uint8Array(512);for(var i=0;i<512;i++)this.perm[i]=this.p[255&i],this.permMod12[i]=this.perm[i]%12}function l(e){var t,i=new Uint8Array(256);for(t=0;t<256;t++)i[t]=t;for(t=0;t<255;t++){var r=t+~~(e()*(256-t)),n=i[t];i[t]=i[r],i[r]=n}return i}d.prototype={grad3:new Float32Array([1,1,0,-1,1,0,1,-1,0,-1,-1,0,1,0,1,-1,0,1,1,0,-1,-1,0,-1,0,1,1,0,-1,1,0,1,-1,0,-1,-1]),grad4:new Float32Array([0,1,1,1,0,1,1,-1,0,1,-1,1,0,1,-1,-1,0,-1,1,1,0,-1,1,-1,0,-1,-1,1,0,-1,-1,-1,1,0,1,1,1,0,1,-1,1,0,-1,1,1,0,-1,-1,-1,0,1,1,-1,0,1,-1,-1,0,-1,1,-1,0,-1,-1,1,1,0,1,1,1,0,-1,1,-1,0,1,1,-1,0,-1,-1,1,0,1,-1,1,0,-1,-1,-1,0,1,-1,-1,0,-1,1,1,1,0,1,1,-1,0,1,-1,1,0,1,-1,-1,0,-1,1,1,0,-1,1,-1,0,-1,-1,1,0,-1,-1,-1,0]),noise2D:function(e,t){var i,r,a=this.permMod12,o=this.perm,h=this.grad3,d=0,l=0,u=0,p=(e+t)*n,c=Math.floor(e+p),f=Math.floor(t+p),v=(c+f)*s,m=e-(c-v),g=t-(f-v);m>g?(i=1,r=0):(i=0,r=1);var b=m-i+s,w=g-r+s,y=m-1+2*s,x=g-1+2*s,_=255&c,k=255&f,F=.5-m*m-g*g;if(F>=0){var E=3*a[_+o[k]];d=(F*=F)*F*(h[E]*m+h[E+1]*g)}var L=.5-b*b-w*w;if(L>=0){var P=3*a[_+i+o[k+r]];l=(L*=L)*L*(h[P]*b+h[P+1]*w)}var C=.5-y*y-x*x;if(C>=0){var I=3*a[_+1+o[k+1]];u=(C*=C)*C*(h[I]*y+h[I+1]*x)}return 70*(d+l+u)},noise3D:function(e,t,i){var r,n,s,o,h,d,l,u,p,c,f=this.permMod12,v=this.perm,m=this.grad3,g=(e+t+i)*(1/3),b=Math.floor(e+g),w=Math.floor(t+g),y=Math.floor(i+g),x=(b+w+y)*a,_=e-(b-x),k=t-(w-x),F=i-(y-x);_>=k?k>=F?(h=1,d=0,l=0,u=1,p=1,c=0):_>=F?(h=1,d=0,l=0,u=1,p=0,c=1):(h=0,d=0,l=1,u=1,p=0,c=1):k<F?(h=0,d=0,l=1,u=0,p=1,c=1):_<F?(h=0,d=1,l=0,u=0,p=1,c=1):(h=0,d=1,l=0,u=1,p=1,c=0);var E=_-h+a,L=k-d+a,P=F-l+a,C=_-u+2*a,I=k-p+2*a,j=F-c+2*a,M=_-1+.5,B=k-1+.5,S=F-1+.5,D=255&b,G=255&w,q=255&y,z=.6-_*_-k*k-F*F;if(z<0)r=0;else{var A=3*f[D+v[G+v[q]]];r=(z*=z)*z*(m[A]*_+m[A+1]*k+m[A+2]*F)}var T=.6-E*E-L*L-P*P;if(T<0)n=0;else{var O=3*f[D+h+v[G+d+v[q+l]]];n=(T*=T)*T*(m[O]*E+m[O+1]*L+m[O+2]*P)}var R=.6-C*C-I*I-j*j;if(R<0)s=0;else{var N=3*f[D+u+v[G+p+v[q+c]]];s=(R*=R)*R*(m[N]*C+m[N+1]*I+m[N+2]*j)}var U=.6-M*M-B*B-S*S;if(U<0)o=0;else{var W=3*f[D+1+v[G+1+v[q+1]]];o=(U*=U)*U*(m[W]*M+m[W+1]*B+m[W+2]*S)}return 32*(r+n+s+o)},noise4D:function(e,t,i,r){var n,s,a,d,l,u,p,c,f,v,m,g,b,w,y,x,_,k=this.perm,F=this.grad4,E=(e+t+i+r)*o,L=Math.floor(e+E),P=Math.floor(t+E),C=Math.floor(i+E),I=Math.floor(r+E),j=(L+P+C+I)*h,M=e-(L-j),B=t-(P-j),S=i-(C-j),D=r-(I-j),G=0,q=0,z=0,A=0;M>B?G++:q++,M>S?G++:z++,M>D?G++:A++,B>S?q++:z++,B>D?q++:A++,S>D?z++:A++;var T=M-(u=G>=3?1:0)+h,O=B-(p=q>=3?1:0)+h,R=S-(c=z>=3?1:0)+h,N=D-(f=A>=3?1:0)+h,U=M-(v=G>=2?1:0)+2*h,W=B-(m=q>=2?1:0)+2*h,Q=S-(g=z>=2?1:0)+2*h,V=D-(b=A>=2?1:0)+2*h,Z=M-(w=G>=1?1:0)+3*h,H=B-(y=q>=1?1:0)+3*h,K=S-(x=z>=1?1:0)+3*h,J=D-(_=A>=1?1:0)+3*h,X=M-1+4*h,Y=B-1+4*h,$=S-1+4*h,ee=D-1+4*h,te=255&L,ie=255&P,re=255&C,ne=255&I,se=.6-M*M-B*B-S*S-D*D;if(se<0)n=0;else{var ae=k[te+k[ie+k[re+k[ne]]]]%32*4;n=(se*=se)*se*(F[ae]*M+F[ae+1]*B+F[ae+2]*S+F[ae+3]*D)}var oe=.6-T*T-O*O-R*R-N*N;if(oe<0)s=0;else{var he=k[te+u+k[ie+p+k[re+c+k[ne+f]]]]%32*4;s=(oe*=oe)*oe*(F[he]*T+F[he+1]*O+F[he+2]*R+F[he+3]*N)}var de=.6-U*U-W*W-Q*Q-V*V;if(de<0)a=0;else{var le=k[te+v+k[ie+m+k[re+g+k[ne+b]]]]%32*4;a=(de*=de)*de*(F[le]*U+F[le+1]*W+F[le+2]*Q+F[le+3]*V)}var ue=.6-Z*Z-H*H-K*K-J*J;if(ue<0)d=0;else{var pe=k[te+w+k[ie+y+k[re+x+k[ne+_]]]]%32*4;d=(ue*=ue)*ue*(F[pe]*Z+F[pe+1]*H+F[pe+2]*K+F[pe+3]*J)}var ce=.6-X*X-Y*Y-$*$-ee*ee;if(ce<0)l=0;else{var fe=k[te+1+k[ie+1+k[re+1+k[ne+1]]]]%32*4;l=(ce*=ce)*ce*(F[fe]*X+F[fe+1]*Y+F[fe+2]*$+F[fe+3]*ee)}return 27*(n+s+a+d+l)}},d._buildPermutationTable=l,void 0===(r=function(){return d}.call(t,i,t,e))||(e.exports=r),t.SimplexNoise=d,e.exports=d}()},NaHs:function(e,t){var i=window.URL.createObjectURL(new Blob(['(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module \'"+o+"\'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){var NeuQuant=require("./TypedNeuQuant.js");var LZWEncoder=require("./LZWEncoder.js");function ByteArray(){this.page=-1;this.pages=[];this.newPage()}ByteArray.pageSize=4096;ByteArray.charMap={};for(var i=0;i<256;i++)ByteArray.charMap[i]=String.fromCharCode(i);ByteArray.prototype.newPage=function(){this.pages[++this.page]=new Uint8Array(ByteArray.pageSize);this.cursor=0};ByteArray.prototype.getData=function(){var rv="";for(var p=0;p<this.pages.length;p++){for(var i=0;i<ByteArray.pageSize;i++){rv+=ByteArray.charMap[this.pages[p][i]]}}return rv};ByteArray.prototype.writeByte=function(val){if(this.cursor>=ByteArray.pageSize)this.newPage();this.pages[this.page][this.cursor++]=val};ByteArray.prototype.writeUTFBytes=function(string){for(var l=string.length,i=0;i<l;i++)this.writeByte(string.charCodeAt(i))};ByteArray.prototype.writeBytes=function(array,offset,length){for(var l=length||array.length,i=offset||0;i<l;i++)this.writeByte(array[i])};function GIFEncoder(width,height){this.width=~~width;this.height=~~height;this.transparent=null;this.transIndex=0;this.repeat=-1;this.delay=0;this.image=null;this.pixels=null;this.indexedPixels=null;this.colorDepth=null;this.colorTab=null;this.neuQuant=null;this.usedEntry=new Array;this.palSize=7;this.dispose=-1;this.firstFrame=true;this.sample=10;this.dither=false;this.globalPalette=false;this.out=new ByteArray}GIFEncoder.prototype.setDelay=function(milliseconds){this.delay=Math.round(milliseconds/10)};GIFEncoder.prototype.setFrameRate=function(fps){this.delay=Math.round(100/fps)};GIFEncoder.prototype.setDispose=function(disposalCode){if(disposalCode>=0)this.dispose=disposalCode};GIFEncoder.prototype.setRepeat=function(repeat){this.repeat=repeat};GIFEncoder.prototype.setTransparent=function(color){this.transparent=color};GIFEncoder.prototype.addFrame=function(imageData){this.image=imageData;this.colorTab=this.globalPalette&&this.globalPalette.slice?this.globalPalette:null;this.getImagePixels();this.analyzePixels();if(this.globalPalette===true)this.globalPalette=this.colorTab;if(this.firstFrame){this.writeLSD();this.writePalette();if(this.repeat>=0){this.writeNetscapeExt()}}this.writeGraphicCtrlExt();this.writeImageDesc();if(!this.firstFrame&&!this.globalPalette)this.writePalette();this.writePixels();this.firstFrame=false};GIFEncoder.prototype.finish=function(){this.out.writeByte(59)};GIFEncoder.prototype.setQuality=function(quality){if(quality<1)quality=1;this.sample=quality};GIFEncoder.prototype.setDither=function(dither){if(dither===true)dither="FloydSteinberg";this.dither=dither};GIFEncoder.prototype.setGlobalPalette=function(palette){this.globalPalette=palette};GIFEncoder.prototype.getGlobalPalette=function(){return this.globalPalette&&this.globalPalette.slice&&this.globalPalette.slice(0)||this.globalPalette};GIFEncoder.prototype.writeHeader=function(){this.out.writeUTFBytes("GIF89a")};GIFEncoder.prototype.analyzePixels=function(){if(!this.colorTab){this.neuQuant=new NeuQuant(this.pixels,this.sample);this.neuQuant.buildColormap();this.colorTab=this.neuQuant.getColormap()}if(this.dither){this.ditherPixels(this.dither.replace("-serpentine",""),this.dither.match(/-serpentine/)!==null)}else{this.indexPixels()}this.pixels=null;this.colorDepth=8;this.palSize=7;if(this.transparent!==null){this.transIndex=this.findClosest(this.transparent,true)}};GIFEncoder.prototype.indexPixels=function(imgq){var nPix=this.pixels.length/3;this.indexedPixels=new Uint8Array(nPix);var k=0;for(var j=0;j<nPix;j++){var index=this.findClosestRGB(this.pixels[k++]&255,this.pixels[k++]&255,this.pixels[k++]&255);this.usedEntry[index]=true;this.indexedPixels[j]=index}};GIFEncoder.prototype.ditherPixels=function(kernel,serpentine){var kernels={FalseFloydSteinberg:[[3/8,1,0],[3/8,0,1],[2/8,1,1]],FloydSteinberg:[[7/16,1,0],[3/16,-1,1],[5/16,0,1],[1/16,1,1]],Stucki:[[8/42,1,0],[4/42,2,0],[2/42,-2,1],[4/42,-1,1],[8/42,0,1],[4/42,1,1],[2/42,2,1],[1/42,-2,2],[2/42,-1,2],[4/42,0,2],[2/42,1,2],[1/42,2,2]],Atkinson:[[1/8,1,0],[1/8,2,0],[1/8,-1,1],[1/8,0,1],[1/8,1,1],[1/8,0,2]]};if(!kernel||!kernels[kernel]){throw"Unknown dithering kernel: "+kernel}var ds=kernels[kernel];var index=0,height=this.height,width=this.width,data=this.pixels;var direction=serpentine?-1:1;this.indexedPixels=new Uint8Array(this.pixels.length/3);for(var y=0;y<height;y++){if(serpentine)direction=direction*-1;for(var x=direction==1?0:width-1,xend=direction==1?width:0;x!==xend;x+=direction){index=y*width+x;var idx=index*3;var r1=data[idx];var g1=data[idx+1];var b1=data[idx+2];idx=this.findClosestRGB(r1,g1,b1);this.usedEntry[idx]=true;this.indexedPixels[index]=idx;idx*=3;var r2=this.colorTab[idx];var g2=this.colorTab[idx+1];var b2=this.colorTab[idx+2];var er=r1-r2;var eg=g1-g2;var eb=b1-b2;for(var i=direction==1?0:ds.length-1,end=direction==1?ds.length:0;i!==end;i+=direction){var x1=ds[i][1];var y1=ds[i][2];if(x1+x>=0&&x1+x<width&&y1+y>=0&&y1+y<height){var d=ds[i][0];idx=index+x1+y1*width;idx*=3;data[idx]=Math.max(0,Math.min(255,data[idx]+er*d));data[idx+1]=Math.max(0,Math.min(255,data[idx+1]+eg*d));data[idx+2]=Math.max(0,Math.min(255,data[idx+2]+eb*d))}}}}};GIFEncoder.prototype.findClosest=function(c,used){return this.findClosestRGB((c&16711680)>>16,(c&65280)>>8,c&255,used)};GIFEncoder.prototype.findClosestRGB=function(r,g,b,used){if(this.colorTab===null)return-1;if(this.neuQuant&&!used){return this.neuQuant.lookupRGB(r,g,b)}var c=b|g<<8|r<<16;var minpos=0;var dmin=256*256*256;var len=this.colorTab.length;for(var i=0,index=0;i<len;index++){var dr=r-(this.colorTab[i++]&255);var dg=g-(this.colorTab[i++]&255);var db=b-(this.colorTab[i++]&255);var d=dr*dr+dg*dg+db*db;if((!used||this.usedEntry[index])&&d<dmin){dmin=d;minpos=index}}return minpos};GIFEncoder.prototype.getImagePixels=function(){var w=this.width;var h=this.height;this.pixels=new Uint8Array(w*h*3);var data=this.image;var srcPos=0;var count=0;for(var i=0;i<h;i++){for(var j=0;j<w;j++){this.pixels[count++]=data[srcPos++];this.pixels[count++]=data[srcPos++];this.pixels[count++]=data[srcPos++];srcPos++}}};GIFEncoder.prototype.writeGraphicCtrlExt=function(){this.out.writeByte(33);this.out.writeByte(249);this.out.writeByte(4);var transp,disp;if(this.transparent===null){transp=0;disp=0}else{transp=1;disp=2}if(this.dispose>=0){disp=dispose&7}disp<<=2;this.out.writeByte(0|disp|0|transp);this.writeShort(this.delay);this.out.writeByte(this.transIndex);this.out.writeByte(0)};GIFEncoder.prototype.writeImageDesc=function(){this.out.writeByte(44);this.writeShort(0);this.writeShort(0);this.writeShort(this.width);this.writeShort(this.height);if(this.firstFrame||this.globalPalette){this.out.writeByte(0)}else{this.out.writeByte(128|0|0|0|this.palSize)}};GIFEncoder.prototype.writeLSD=function(){this.writeShort(this.width);this.writeShort(this.height);this.out.writeByte(128|112|0|this.palSize);this.out.writeByte(0);this.out.writeByte(0)};GIFEncoder.prototype.writeNetscapeExt=function(){this.out.writeByte(33);this.out.writeByte(255);this.out.writeByte(11);this.out.writeUTFBytes("NETSCAPE2.0");this.out.writeByte(3);this.out.writeByte(1);this.writeShort(this.repeat);this.out.writeByte(0)};GIFEncoder.prototype.writePalette=function(){this.out.writeBytes(this.colorTab);var n=3*256-this.colorTab.length;for(var i=0;i<n;i++)this.out.writeByte(0)};GIFEncoder.prototype.writeShort=function(pValue){this.out.writeByte(pValue&255);this.out.writeByte(pValue>>8&255)};GIFEncoder.prototype.writePixels=function(){var enc=new LZWEncoder(this.width,this.height,this.indexedPixels,this.colorDepth);enc.encode(this.out)};GIFEncoder.prototype.stream=function(){return this.out};module.exports=GIFEncoder},{"./LZWEncoder.js":2,"./TypedNeuQuant.js":3}],2:[function(require,module,exports){var EOF=-1;var BITS=12;var HSIZE=5003;var masks=[0,1,3,7,15,31,63,127,255,511,1023,2047,4095,8191,16383,32767,65535];function LZWEncoder(width,height,pixels,colorDepth){var initCodeSize=Math.max(2,colorDepth);var accum=new Uint8Array(256);var htab=new Int32Array(HSIZE);var codetab=new Int32Array(HSIZE);var cur_accum,cur_bits=0;var a_count;var free_ent=0;var maxcode;var clear_flg=false;var g_init_bits,ClearCode,EOFCode;function char_out(c,outs){accum[a_count++]=c;if(a_count>=254)flush_char(outs)}function cl_block(outs){cl_hash(HSIZE);free_ent=ClearCode+2;clear_flg=true;output(ClearCode,outs)}function cl_hash(hsize){for(var i=0;i<hsize;++i)htab[i]=-1}function compress(init_bits,outs){var fcode,c,i,ent,disp,hsize_reg,hshift;g_init_bits=init_bits;clear_flg=false;n_bits=g_init_bits;maxcode=MAXCODE(n_bits);ClearCode=1<<init_bits-1;EOFCode=ClearCode+1;free_ent=ClearCode+2;a_count=0;ent=nextPixel();hshift=0;for(fcode=HSIZE;fcode<65536;fcode*=2)++hshift;hshift=8-hshift;hsize_reg=HSIZE;cl_hash(hsize_reg);output(ClearCode,outs);outer_loop:while((c=nextPixel())!=EOF){fcode=(c<<BITS)+ent;i=c<<hshift^ent;if(htab[i]===fcode){ent=codetab[i];continue}else if(htab[i]>=0){disp=hsize_reg-i;if(i===0)disp=1;do{if((i-=disp)<0)i+=hsize_reg;if(htab[i]===fcode){ent=codetab[i];continue outer_loop}}while(htab[i]>=0)}output(ent,outs);ent=c;if(free_ent<1<<BITS){codetab[i]=free_ent++;htab[i]=fcode}else{cl_block(outs)}}output(ent,outs);output(EOFCode,outs)}function encode(outs){outs.writeByte(initCodeSize);remaining=width*height;curPixel=0;compress(initCodeSize+1,outs);outs.writeByte(0)}function flush_char(outs){if(a_count>0){outs.writeByte(a_count);outs.writeBytes(accum,0,a_count);a_count=0}}function MAXCODE(n_bits){return(1<<n_bits)-1}function nextPixel(){if(remaining===0)return EOF;--remaining;var pix=pixels[curPixel++];return pix&255}function output(code,outs){cur_accum&=masks[cur_bits];if(cur_bits>0)cur_accum|=code<<cur_bits;else cur_accum=code;cur_bits+=n_bits;while(cur_bits>=8){char_out(cur_accum&255,outs);cur_accum>>=8;cur_bits-=8}if(free_ent>maxcode||clear_flg){if(clear_flg){maxcode=MAXCODE(n_bits=g_init_bits);clear_flg=false}else{++n_bits;if(n_bits==BITS)maxcode=1<<BITS;else maxcode=MAXCODE(n_bits)}}if(code==EOFCode){while(cur_bits>0){char_out(cur_accum&255,outs);cur_accum>>=8;cur_bits-=8}flush_char(outs)}}this.encode=encode}module.exports=LZWEncoder},{}],3:[function(require,module,exports){var ncycles=100;var netsize=256;var maxnetpos=netsize-1;var netbiasshift=4;var intbiasshift=16;var intbias=1<<intbiasshift;var gammashift=10;var gamma=1<<gammashift;var betashift=10;var beta=intbias>>betashift;var betagamma=intbias<<gammashift-betashift;var initrad=netsize>>3;var radiusbiasshift=6;var radiusbias=1<<radiusbiasshift;var initradius=initrad*radiusbias;var radiusdec=30;var alphabiasshift=10;var initalpha=1<<alphabiasshift;var alphadec;var radbiasshift=8;var radbias=1<<radbiasshift;var alpharadbshift=alphabiasshift+radbiasshift;var alpharadbias=1<<alpharadbshift;var prime1=499;var prime2=491;var prime3=487;var prime4=503;var minpicturebytes=3*prime4;function NeuQuant(pixels,samplefac){var network;var netindex;var bias;var freq;var radpower;function init(){network=[];netindex=new Int32Array(256);bias=new Int32Array(netsize);freq=new Int32Array(netsize);radpower=new Int32Array(netsize>>3);var i,v;for(i=0;i<netsize;i++){v=(i<<netbiasshift+8)/netsize;network[i]=new Float64Array([v,v,v,0]);freq[i]=intbias/netsize;bias[i]=0}}function unbiasnet(){for(var i=0;i<netsize;i++){network[i][0]>>=netbiasshift;network[i][1]>>=netbiasshift;network[i][2]>>=netbiasshift;network[i][3]=i}}function altersingle(alpha,i,b,g,r){network[i][0]-=alpha*(network[i][0]-b)/initalpha;network[i][1]-=alpha*(network[i][1]-g)/initalpha;network[i][2]-=alpha*(network[i][2]-r)/initalpha}function alterneigh(radius,i,b,g,r){var lo=Math.abs(i-radius);var hi=Math.min(i+radius,netsize);var j=i+1;var k=i-1;var m=1;var p,a;while(j<hi||k>lo){a=radpower[m++];if(j<hi){p=network[j++];p[0]-=a*(p[0]-b)/alpharadbias;p[1]-=a*(p[1]-g)/alpharadbias;p[2]-=a*(p[2]-r)/alpharadbias}if(k>lo){p=network[k--];p[0]-=a*(p[0]-b)/alpharadbias;p[1]-=a*(p[1]-g)/alpharadbias;p[2]-=a*(p[2]-r)/alpharadbias}}}function contest(b,g,r){var bestd=~(1<<31);var bestbiasd=bestd;var bestpos=-1;var bestbiaspos=bestpos;var i,n,dist,biasdist,betafreq;for(i=0;i<netsize;i++){n=network[i];dist=Math.abs(n[0]-b)+Math.abs(n[1]-g)+Math.abs(n[2]-r);if(dist<bestd){bestd=dist;bestpos=i}biasdist=dist-(bias[i]>>intbiasshift-netbiasshift);if(biasdist<bestbiasd){bestbiasd=biasdist;bestbiaspos=i}betafreq=freq[i]>>betashift;freq[i]-=betafreq;bias[i]+=betafreq<<gammashift}freq[bestpos]+=beta;bias[bestpos]-=betagamma;return bestbiaspos}function inxbuild(){var i,j,p,q,smallpos,smallval,previouscol=0,startpos=0;for(i=0;i<netsize;i++){p=network[i];smallpos=i;smallval=p[1];for(j=i+1;j<netsize;j++){q=network[j];if(q[1]<smallval){smallpos=j;smallval=q[1]}}q=network[smallpos];if(i!=smallpos){j=q[0];q[0]=p[0];p[0]=j;j=q[1];q[1]=p[1];p[1]=j;j=q[2];q[2]=p[2];p[2]=j;j=q[3];q[3]=p[3];p[3]=j}if(smallval!=previouscol){netindex[previouscol]=startpos+i>>1;for(j=previouscol+1;j<smallval;j++)netindex[j]=i;previouscol=smallval;startpos=i}}netindex[previouscol]=startpos+maxnetpos>>1;for(j=previouscol+1;j<256;j++)netindex[j]=maxnetpos}function inxsearch(b,g,r){var a,p,dist;var bestd=1e3;var best=-1;var i=netindex[g];var j=i-1;while(i<netsize||j>=0){if(i<netsize){p=network[i];dist=p[1]-g;if(dist>=bestd)i=netsize;else{i++;if(dist<0)dist=-dist;a=p[0]-b;if(a<0)a=-a;dist+=a;if(dist<bestd){a=p[2]-r;if(a<0)a=-a;dist+=a;if(dist<bestd){bestd=dist;best=p[3]}}}}if(j>=0){p=network[j];dist=g-p[1];if(dist>=bestd)j=-1;else{j--;if(dist<0)dist=-dist;a=p[0]-b;if(a<0)a=-a;dist+=a;if(dist<bestd){a=p[2]-r;if(a<0)a=-a;dist+=a;if(dist<bestd){bestd=dist;best=p[3]}}}}}return best}function learn(){var i;var lengthcount=pixels.length;var alphadec=30+(samplefac-1)/3;var samplepixels=lengthcount/(3*samplefac);var delta=~~(samplepixels/ncycles);var alpha=initalpha;var radius=initradius;var rad=radius>>radiusbiasshift;if(rad<=1)rad=0;for(i=0;i<rad;i++)radpower[i]=alpha*((rad*rad-i*i)*radbias/(rad*rad));var step;if(lengthcount<minpicturebytes){samplefac=1;step=3}else if(lengthcount%prime1!==0){step=3*prime1}else if(lengthcount%prime2!==0){step=3*prime2}else if(lengthcount%prime3!==0){step=3*prime3}else{step=3*prime4}var b,g,r,j;var pix=0;i=0;while(i<samplepixels){b=(pixels[pix]&255)<<netbiasshift;g=(pixels[pix+1]&255)<<netbiasshift;r=(pixels[pix+2]&255)<<netbiasshift;j=contest(b,g,r);altersingle(alpha,j,b,g,r);if(rad!==0)alterneigh(rad,j,b,g,r);pix+=step;if(pix>=lengthcount)pix-=lengthcount;i++;if(delta===0)delta=1;if(i%delta===0){alpha-=alpha/alphadec;radius-=radius/radiusdec;rad=radius>>radiusbiasshift;if(rad<=1)rad=0;for(j=0;j<rad;j++)radpower[j]=alpha*((rad*rad-j*j)*radbias/(rad*rad))}}}function buildColormap(){init();learn();unbiasnet();inxbuild()}this.buildColormap=buildColormap;function getColormap(){var map=[];var index=[];for(var i=0;i<netsize;i++)index[network[i][3]]=i;var k=0;for(var l=0;l<netsize;l++){var j=index[l];map[k++]=network[j][0];map[k++]=network[j][1];map[k++]=network[j][2]}return map}this.getColormap=getColormap;this.lookupRGB=inxsearch}module.exports=NeuQuant},{}],4:[function(require,module,exports){var GIFEncoder,renderFrame;GIFEncoder=require("./GIFEncoder.js");renderFrame=function(frame){var encoder,page,stream,transfer;encoder=new GIFEncoder(frame.width,frame.height);if(frame.index===0){encoder.writeHeader()}else{encoder.firstFrame=false}encoder.setTransparent(frame.transparent);encoder.setRepeat(frame.repeat);encoder.setDelay(frame.delay);encoder.setQuality(frame.quality);encoder.setDither(frame.dither);encoder.setGlobalPalette(frame.globalPalette);encoder.addFrame(frame.data);if(frame.last){encoder.finish()}if(frame.globalPalette===true){frame.globalPalette=encoder.getGlobalPalette()}stream=encoder.stream();frame.data=stream.pages;frame.cursor=stream.cursor;frame.pageSize=stream.constructor.pageSize;if(frame.canTransfer){transfer=function(){var i,len,ref,results;ref=frame.data;results=[];for(i=0,len=ref.length;i<len;i++){page=ref[i];results.push(page.buffer)}return results}();return self.postMessage(frame,transfer)}else{return self.postMessage(frame)}};self.onmessage=function(event){return renderFrame(event.data)}},{"./GIFEncoder.js":1}]},{},[4]);'],{type:"text/javascript"}));e.exports=i},PZSu:function(e,t,i){i("60nC")()},ViKx:function(e,t,i){"use strict";i.d(t,"c",(function(){return r})),i.d(t,"d",(function(){return n})),i.d(t,"b",(function(){return s}));var r=function(e,t,i){return e+Math.cos(t)*i},n=function(e,t,i){return e+Math.sin(t)*i},s=function(e,t,i,r,n,s){void 0===s&&(s=!1);var a=e+Math.cos(i)*r,o=t+Math.sin(i)*n;return s?[a,o]:{x:a,y:o}};t.a=function(e,t,i,s,a){void 0===a&&(a=!1);var o=r(e,i,s),h=n(t,i,s);return a?[o,h]:{x:o,y:h}}},g4M5:function(e,t,i){i("8+KV"),i("V+eJ"),i("dRSK"),e.exports=function(){var e=[];return{_listeners:e,addListener:function(t){void 0===e.find((function(e){return t===e}))?e.push(t):console.log("listener already in event: ".concat(t))},removeListener:function(t){void 0!==e.find((function(e){return t===e}))?e.splice(e.indexOf(t),1):console.log("listener not found: ".concat(t))},invoke:function(t){return e.forEach((function(e){return e(t)}))}}}},"knn/":function(e,t,i){i("8+KV"),i("V+eJ"),i("dRSK"),e.exports=function(){var e=[];return{_listeners:e,addListener:function(t){void 0===e.find((function(e){return t===e}))?e.push(t):console.log("listener already in event: ".concat(t))},removeListener:function(t){void 0!==e.find((function(e){return t===e}))?e.splice(e.indexOf(t),1):console.log("listener not found: ".concat(t))},invoke:function(t){return e.forEach((function(e){return e(t)}))}}}},p56p:function(e,t,i){i("eM6i"),i("91GP");var r=i("knn/");e.exports=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.framesPerSecond,i=e.duration,n=e.loop,s=r(),a=r(),o=r();o.addListener((function(){n.elapsedFrames++,n.elapsedFramesTotal++,n.elapsedFrames%n.framesPerLoop==0?(n.elapsedFrames=0,n.elapsedLoops++,n.progress=n.elapsedFrames/n.framesPerLoop,n.theta=n.progress*Math.PI*2,s.invoke()):(n.progress=n.elapsedFrames/n.framesPerLoop,n.theta=n.progress*Math.PI*2)}));var h=Math.floor(i*t),d=1/t*1e3;Object.assign(n,{start:function(e){var t=Date.now();!function i(){var r=n.elapsedFramesTotal*n.frameDeltaTime;var s=Date.now()-t;s>=r&&(o.invoke(),e(),a.invoke());requestAnimationFrame(i)}()},onLoop:s,onPreRender:o,onPostRender:a,preRender:function(e){return o.invoke()},postRender:function(e){return a.invoke()},animationFrame:function(e){return onAnimationFrame.invoke()},get framesPerLoop(){return h},get framesPerSecond(){return t},get frameDeltaTime(){return d},elapsedFrames:-1,elapsedFramesTotal:-1,elapsedLoops:-1,progress:void 0,theta:void 0})}},tSVo:function(e,t,i){var r=i("p56p"),n=i("7ERh"),s=i("vEUt");e.exports=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.duration,i=void 0===t?3:t,a=e.framesPerSecond,o=void 0===a?30:a,h=e.gif,d=void 0!==h&&h,l=e.gifRender,u=void 0===l?void 0:l,p=e.gifOpen,c=void 0===p?void 0:p,f=e.gifDownload,v=void 0===f?void 0:f,m=e.gifStartLoop,g=void 0===m?void 0:m,b=e.gifEndLoop,w=void 0===b?void 0:b,y=e.gifFileName,x=void 0===y?void 0:y,_=e.gifOptions,k=void 0===_?void 0:_,F=e.noise,E=void 0===F?{}:F,L=e.noiseRadius,P=void 0===L?void 0:L,C=e.noiseSeed,I=void 0===C?void 0:C,j=e.canvas,M=void 0===j?void 0:j,B={};r({framesPerSecond:o,duration:i,loop:B}),void 0!==P&&(E.radius=P);void 0!==I&&(E.seed=I);n(B,E),!1!==d&&(d=!0===d?{}:d,void 0!==M&&(d.canvas=M),void 0!==u&&(d.render=u),void 0!==c&&(d.open=c),void 0!==v&&(d.download=v),void 0!==g&&(d.startLoop=g),void 0!==k&&(d.options=k),void 0!==w&&(d.endLoop=w),void 0!==x&&(d.fileName=x),s(B,d));return B}},vEUt:function(e,t,i){i("eM6i"),i("91GP");var r=i("zUBP"),n=i("NaHs");e.exports=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=t.render,s=void 0===i||i,a=t.open,o=void 0!==a&&a,h=t.download,d=void 0!==h&&h,l=t.startLoop,u=void 0===l?0:l,p=t.endLoop,c=void 0===p?1:p,f=t.fileName,v=void 0===f?"image.gif":f,m=t.canvas,g=void 0===m?document.getElementsByTagName("canvas")[0]:m,b=t.options,w=void 0===b?{}:b;if(void 0===g)return void console.error("GIF module: no canvas found");var y=new r(Object.assign({workerScript:n},w)),x=!1,_=void 0;function k(){e.elapsedLoops===u?(console.log("creating GIF with ".concat(F," frames")),e.onPostRender.addListener(E)):e.elapsedLoops===c&&(e.onPostRender.removeListener(E),e.onLoop.removeListener(k),console.log("rendering GIF"),_=Date.now(),y.render())}e.onLoop.addListener(k),y.on("finished",(function(t){if(x)return;x=!0;var i=Date.now()-_;console.log("finished rendering GIF\n                    render time: ".concat((i/1e3).toFixed(1)," seconds\n                    approx size: ").concat((t.size/1e3).toFixed(0)," kb\n                    frame count: ").concat(F,"\n                    frame delay: ").concat(e.frameDeltaTime.toFixed(1)," ms\n                    "));var r=URL.createObjectURL(t);if(s){e.onLoop.addListener((function t(){e.onLoop.removeListener(t),function(e,t){var i=document.createElement("a");i.download=t,document.body.appendChild(i);var r=document.createElement("img");r.src=e,i.href=r.src,i.appendChild(r)}(r,v)}))}o&&window.open(r);d&&function(e,t){var i=document.createElement("a");i.style.display="none",i.href=e,i.download=t,document.body.appendChild(i),i.click(),document.body.removeChild(i)}(r,v)}));var F=e.framesPerLoop*(c-u);function E(){y.addFrame(g,{copy:!0,delay:e.frameDeltaTime})}}},zUBP:function(e,t,i){var r;i("FLlr"),i("NO8f"),i("8+KV"),i("V+eJ"),i("f3/d"),i("SRfc"),e.exports=function e(t,i,n){function s(o,h){if(!i[o]){if(!t[o]){if(!h&&"function"==typeof r&&r)return r(o,!0);if(a)return a(o,!0);var d=new Error("Cannot find module '"+o+"'");throw d.code="MODULE_NOT_FOUND",d}var l=i[o]={exports:{}};t[o][0].call(l.exports,(function(e){var i=t[o][1][e];return s(i||e)}),l,l.exports,e,t,i,n)}return i[o].exports}for(var a="function"==typeof r&&r,o=0;o<n.length;o++)s(n[o]);return s}({1:[function(e,t,i){function r(){this._events=this._events||{},this._maxListeners=this._maxListeners||void 0}function n(e){return"function"==typeof e}function s(e){return"object"==typeof e&&null!==e}function a(e){return void 0===e}t.exports=r,r.EventEmitter=r,r.prototype._events=void 0,r.prototype._maxListeners=void 0,r.defaultMaxListeners=10,r.prototype.setMaxListeners=function(e){if("number"!=typeof e||e<0||isNaN(e))throw TypeError("n must be a positive number");return this._maxListeners=e,this},r.prototype.emit=function(e){var t,i,r,o,h,d;if(this._events||(this._events={}),"error"===e&&(!this._events.error||s(this._events.error)&&!this._events.error.length)){if((t=arguments[1])instanceof Error)throw t;var l=new Error('Uncaught, unspecified "error" event. ('+t+")");throw l.context=t,l}if(a(i=this._events[e]))return!1;if(n(i))switch(arguments.length){case 1:i.call(this);break;case 2:i.call(this,arguments[1]);break;case 3:i.call(this,arguments[1],arguments[2]);break;default:o=Array.prototype.slice.call(arguments,1),i.apply(this,o)}else if(s(i))for(o=Array.prototype.slice.call(arguments,1),r=(d=i.slice()).length,h=0;h<r;h++)d[h].apply(this,o);return!0},r.prototype.addListener=function(e,t){var i;if(!n(t))throw TypeError("listener must be a function");return this._events||(this._events={}),this._events.newListener&&this.emit("newListener",e,n(t.listener)?t.listener:t),this._events[e]?s(this._events[e])?this._events[e].push(t):this._events[e]=[this._events[e],t]:this._events[e]=t,s(this._events[e])&&!this._events[e].warned&&(i=a(this._maxListeners)?r.defaultMaxListeners:this._maxListeners)&&i>0&&this._events[e].length>i&&(this._events[e].warned=!0,console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.",this._events[e].length),"function"==typeof console.trace&&console.trace()),this},r.prototype.on=r.prototype.addListener,r.prototype.once=function(e,t){if(!n(t))throw TypeError("listener must be a function");var i=!1;function r(){this.removeListener(e,r),i||(i=!0,t.apply(this,arguments))}return r.listener=t,this.on(e,r),this},r.prototype.removeListener=function(e,t){var i,r,a,o;if(!n(t))throw TypeError("listener must be a function");if(!this._events||!this._events[e])return this;if(a=(i=this._events[e]).length,r=-1,i===t||n(i.listener)&&i.listener===t)delete this._events[e],this._events.removeListener&&this.emit("removeListener",e,t);else if(s(i)){for(o=a;o-- >0;)if(i[o]===t||i[o].listener&&i[o].listener===t){r=o;break}if(r<0)return this;1===i.length?(i.length=0,delete this._events[e]):i.splice(r,1),this._events.removeListener&&this.emit("removeListener",e,t)}return this},r.prototype.removeAllListeners=function(e){var t,i;if(!this._events)return this;if(!this._events.removeListener)return 0===arguments.length?this._events={}:this._events[e]&&delete this._events[e],this;if(0===arguments.length){for(t in this._events)"removeListener"!==t&&this.removeAllListeners(t);return this.removeAllListeners("removeListener"),this._events={},this}if(n(i=this._events[e]))this.removeListener(e,i);else if(i)for(;i.length;)this.removeListener(e,i[i.length-1]);return delete this._events[e],this},r.prototype.listeners=function(e){return this._events&&this._events[e]?n(this._events[e])?[this._events[e]]:this._events[e].slice():[]},r.prototype.listenerCount=function(e){if(this._events){var t=this._events[e];if(n(t))return 1;if(t)return t.length}return 0},r.listenerCount=function(e,t){return e.listenerCount(t)}},{}],2:[function(e,t,i){var r,n,s,a,o;o=navigator.userAgent.toLowerCase(),a=navigator.platform.toLowerCase(),s="ie"===(r=o.match(/(opera|ie|firefox|chrome|version)[\s\/:]([\w\d\.]+)?.*?(safari|version[\s\/:]([\w\d\.]+)|$)/)||[null,"unknown",0])[1]&&document.documentMode,(n={name:"version"===r[1]?r[3]:r[1],version:s||parseFloat("opera"===r[1]&&r[4]?r[4]:r[2]),platform:{name:o.match(/ip(?:ad|od|hone)/)?"ios":(o.match(/(?:webos|android)/)||a.match(/mac|win|linux/)||["other"])[0]}})[n.name]=!0,n[n.name+parseInt(n.version,10)]=!0,n.platform[n.platform.name]=!0,t.exports=n},{}],3:[function(e,t,i){var r,n,s,a={}.hasOwnProperty,o=[].indexOf||function(e){for(var t=0,i=this.length;t<i;t++)if(t in this&&this[t]===e)return t;return-1},h=[].slice;r=e("events").EventEmitter,s=e("./browser.coffee"),n=function(e){var t,i;function r(e){var i,r,n;for(r in this.running=!1,this.options={},this.frames=[],this.freeWorkers=[],this.activeWorkers=[],this.setOptions(e),t)n=t[r],null==(i=this.options)[r]&&(i[r]=n)}return function(e,t){for(var i in t)a.call(t,i)&&(e[i]=t[i]);function r(){this.constructor=e}r.prototype=t.prototype,e.prototype=new r,e.__super__=t.prototype}(r,e),t={workerScript:"gif.worker.js",workers:2,repeat:0,background:"#fff",quality:10,width:null,height:null,transparent:null,debug:!1,dither:!1},i={delay:500,copy:!1},r.prototype.setOption=function(e,t){if(this.options[e]=t,null!=this._canvas&&("width"===e||"height"===e))return this._canvas[e]=t},r.prototype.setOptions=function(e){var t,i,r;for(t in i=[],e)a.call(e,t)&&(r=e[t],i.push(this.setOption(t,r)));return i},r.prototype.addFrame=function(e,t){var r,n;for(n in null==t&&(t={}),(r={}).transparent=this.options.transparent,i)r[n]=t[n]||i[n];if(null==this.options.width&&this.setOption("width",e.width),null==this.options.height&&this.setOption("height",e.height),"undefined"!=typeof ImageData&&null!==ImageData&&e instanceof ImageData)r.data=e.data;else if("undefined"!=typeof CanvasRenderingContext2D&&null!==CanvasRenderingContext2D&&e instanceof CanvasRenderingContext2D||"undefined"!=typeof WebGLRenderingContext&&null!==WebGLRenderingContext&&e instanceof WebGLRenderingContext)t.copy?r.data=this.getContextData(e):r.context=e;else{if(null==e.childNodes)throw new Error("Invalid image");t.copy?r.data=this.getImageData(e):r.image=e}return this.frames.push(r)},r.prototype.render=function(){var e,t,i;if(this.running)throw new Error("Already running");if(null==this.options.width||null==this.options.height)throw new Error("Width and height must be set prior to rendering");if(this.running=!0,this.nextFrame=0,this.finishedFrames=0,this.imageParts=function(){var e,t,i;for(i=[],e=0,t=this.frames.length;0<=t?e<t:e>t;0<=t?++e:--e)i.push(null);return i}.call(this),t=this.spawnWorkers(),!0===this.options.globalPalette)this.renderNextFrame();else for(e=0,i=t;0<=i?e<i:e>i;0<=i?++e:--e)this.renderNextFrame();return this.emit("start"),this.emit("progress",0)},r.prototype.abort=function(){for(var e;null!=(e=this.activeWorkers.shift());)this.log("killing active worker"),e.terminate();return this.running=!1,this.emit("abort")},r.prototype.spawnWorkers=function(){var e,t,i,r;return e=Math.min(this.options.workers,this.frames.length),function(){i=[];for(var r=t=this.freeWorkers.length;t<=e?r<e:r>e;t<=e?r++:r--)i.push(r);return i}.apply(this).forEach((r=this,function(e){var t;return r.log("spawning worker "+e),(t=new Worker(r.options.workerScript)).onmessage=function(e){return r.activeWorkers.splice(r.activeWorkers.indexOf(t),1),r.freeWorkers.push(t),r.frameFinished(e.data)},r.freeWorkers.push(t)})),e},r.prototype.frameFinished=function(e){var t,i;if(this.log("frame "+e.index+" finished - "+this.activeWorkers.length+" active"),this.finishedFrames++,this.emit("progress",this.finishedFrames/this.frames.length),this.imageParts[e.index]=e,!0===this.options.globalPalette&&(this.options.globalPalette=e.globalPalette,this.log("global palette analyzed"),this.frames.length>2))for(t=1,i=this.freeWorkers.length;1<=i?t<i:t>i;1<=i?++t:--t)this.renderNextFrame();return o.call(this.imageParts,null)>=0?this.renderNextFrame():this.finishRendering()},r.prototype.finishRendering=function(){var e,t,i,r,n,s,a,o,h,d,l,u,p,c,f,v;for(o=0,n=0,h=(c=this.imageParts).length;n<h;n++)o+=((t=c[n]).data.length-1)*t.pageSize+t.cursor;for(o+=t.pageSize-t.cursor,this.log("rendering finished - filesize "+Math.round(o/1e3)+"kb"),e=new Uint8Array(o),u=0,s=0,d=(f=this.imageParts).length;s<d;s++)for(i=a=0,l=(v=(t=f[s]).data).length;a<l;i=++a)p=v[i],e.set(p,u),i===t.data.length-1?u+=t.cursor:u+=t.pageSize;return r=new Blob([e],{type:"image/gif"}),this.emit("finished",r,e)},r.prototype.renderNextFrame=function(){var e,t,i;if(0===this.freeWorkers.length)throw new Error("No free workers");if(!(this.nextFrame>=this.frames.length))return e=this.frames[this.nextFrame++],i=this.freeWorkers.shift(),t=this.getTask(e),this.log("starting frame "+(t.index+1)+" of "+this.frames.length),this.activeWorkers.push(i),i.postMessage(t)},r.prototype.getContextData=function(e){return e.getImageData(0,0,this.options.width,this.options.height).data},r.prototype.getImageData=function(e){var t;return null==this._canvas&&(this._canvas=document.createElement("canvas"),this._canvas.width=this.options.width,this._canvas.height=this.options.height),(t=this._canvas.getContext("2d")).setFill=this.options.background,t.fillRect(0,0,this.options.width,this.options.height),t.drawImage(e,0,0),this.getContextData(t)},r.prototype.getTask=function(e){var t,i;if(i={index:t=this.frames.indexOf(e),last:t===this.frames.length-1,delay:e.delay,transparent:e.transparent,width:this.options.width,height:this.options.height,quality:this.options.quality,dither:this.options.dither,globalPalette:this.options.globalPalette,repeat:this.options.repeat,canTransfer:"chrome"===s.name},null!=e.data)i.data=e.data;else if(null!=e.context)i.data=this.getContextData(e.context);else{if(null==e.image)throw new Error("Invalid frame");i.data=this.getImageData(e.image)}return i},r.prototype.log=function(){var e;if(e=1<=arguments.length?h.call(arguments,0):[],this.options.debug)return console.log.apply(console,e)},r}(r),t.exports=n},{"./browser.coffee":2,events:1}]},{},[3])(3)}}]);
//# sourceMappingURL=component---src-pages-sketch-2019-08-15-js-bc1f17746bdf87b8ca36.js.map