let maxRotation,size,scalar,xFocus,yFocus,angle=0;function setup(){pixelDensity(4),createCanvas(660,840).parent("my-canvas"),background(0),noFill(),maxRotation=60*PI,size=random(250,300),scalar=random(10,15)/maxRotation,xFocus=width/2,yFocus=height/2}function draw(){let s,o,e,c;switch(frameCount%3){case 0:s=xFocus+cos(7*PI/6)*size/2,o=yFocus+sin(7*PI/6)*size/2,e=xFocus+cos(7*PI/6)*size*2,c=yFocus+sin(7*PI/6)*size*2;break;case 1:s=xFocus+cos(11*PI/6)*size/2,o=yFocus+sin(11*PI/6)*size/2,e=xFocus+cos(11*PI/6)*size*2,c=yFocus+sin(11*PI/6)*size*2;break;case 2:s=xFocus+cos(HALF_PI)*size/2,o=yFocus+sin(HALF_PI)*size/2,e=xFocus+cos(HALF_PI)*size*2,c=yFocus+sin(HALF_PI)*size*2}const i=noise(frameCount)*(size/20),a=xFocus+cos(angle)*(size-i),n=yFocus+sin(angle)*(size-i);stroke(frameCount%5?255:0),strokeWeight(frameCount%5?1:2),bezier(a,n,xFocus,yFocus,e,c,s,o),(angle+=scalar)>maxRotation&&(noLoop(),drawingComplete=!0)}