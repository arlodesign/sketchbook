function addNoise(n=.5){for(let t=0;t<1e4;t++)stroke(t%2?`rgba(0, 0, 0, ${n})`:`rgba(255, 255, 255, ${n})`),point(randomGaussian(width/2,width/3),randomGaussian(height/2,height/3))}function lineIntersection(n,t,o,r,a,e,i,s){const u=((i-a)*(t-e)-(s-e)*(n-a))/((s-e)*(o-n)-(i-a)*(r-t)),l=((o-n)*(t-e)-(r-t)*(n-a))/((s-e)*(o-n)-(i-a)*(r-t));return u>=0&&u<=1&&l>=0&&l<=1?{x:n+u*(o-n),y:t+u*(r-t)}:{x:null,y:null}}function polarToCartesianX(n,t,o){return n+cos(t)*o}function polarToCartesianY(n,t,o){return n+sin(t)*o}function polarToCartesian(n,t,o,r){return{x:polarToCartesianX(n,o,r),y:polarToCartesianY(t,o,r)}}function shuffle(n){for(let t=n.length-1;t>0;t--){const o=Math.floor(Math.random()*(t+1));[n[t],n[o]]=[n[o],n[t]]}return n}