let colorAlt,weightAlt,frameCountDiv,dist,distIncrement;function setup(){for(pixelDensity(4),createCanvas(660,840).parent("my-canvas");colorAlt===weightAlt||colorAlt%weightAlt==0||weightAlt%colorAlt==0;)colorAlt=floor(random(5,10)),weightAlt=floor(random(5,10));frameCountDiv=-random(20,30),dist=height/3,distIncrement=-frameCountDiv/100,background("white"),noFill()}function draw(){stroke(frameCount%colorAlt?"rgba(0, 0, 0, 0.3)":255),strokeWeight(frameCount%weightAlt?2*colorAlt:2*weightAlt);const t=width/2+sin(frameCount/frameCountDiv)*dist,e=height/2+cos(frameCount/frameCountDiv)*dist;bezier(width/2,height/2,lerp(width/2,t,distIncrement),height/2+cos(frameCount/frameCountDiv+HALF_PI)*dist,width/2+sin(frameCount/frameCountDiv+HALF_PI)*dist,lerp(height/2,e,distIncrement),t,e),bezier(width/2,height/2,lerp(width/2,width-t,distIncrement),height/2+cos(frameCount/frameCountDiv-HALF_PI)*dist,width/2+sin(frameCount/frameCountDiv-HALF_PI)*dist,lerp(height/2,height-e,distIncrement),width-t,height-e),(dist-=distIncrement)<=0&&(noLoop(),drawingComplete=!0)}