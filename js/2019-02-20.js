const CF=[a=>240*abs(sin(a)),a=>240*abs(cos(a)),a=>240*abs(tan(a)),a=>240*abs(sin(a+PI)),a=>240*abs(cos(a+PI)),a=>240*abs(tan(a+PI)),a=>240*abs(sin(-a)),a=>240*abs(cos(-a)),a=>240*abs(tan(-a)),a=>240*abs(sin(-a+PI)),a=>240*abs(cos(-a+PI)),a=>240*abs(tan(-a+PI))],Q=3;let r,g,b,distance=0,angle=0,size=10,axis={},a=32,getColor=()=>{};function setup(){for(pixelDensity(4),createCanvas(660,840).parent("my-canvas"),background(0),axis={x:width/2,y:height/2};[...new Set([r,g,b])].length<3;)r=random(CF),g=random(CF),b=random(CF);getColor=(e=>color(r(e),g(e),b(e),a)),blendMode(HARD_LIGHT)}function draw(){noFill(),strokeWeight(map(noise(angle/5,distance/5)*size,0,width,1,Q)),stroke(getColor(angle/(1.5*Q))),beginShape();for(let a=0;a<TWO_PI;a+=TWO_PI/Q){const e=angle+a,{x:n,y:s}=polarToCartesian(axis.x,axis.y,e,noise(angle/5,distance/5)*size);vertex(n,s)}endShape(CLOSE),angle+=.01,distance+=.01,a=(size+=.05)>width?a-.1:a,axis=polarToCartesian(width/2,height/2,angle/Q,distance*(Q/2)),0===a&&(noLoop(),drawingComplete=!0)}