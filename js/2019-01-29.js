let drawing,lastPoints,guides=[],viewGuides=!1;function setup(){pixelDensity(4),createCanvas(660,840).parent("my-canvas"),(drawing=createGraphics(width,height)).background(255),drawing.noStroke(),guides.push({r:0,speed:random(1.5)/TWO_PI,direction:random([-1,1])}),guides.push({r:HALF_PI,speed:random(.5)/TWO_PI,direction:-1}),guides.push({r:0,speed:random(1.5)/TWO_PI,direction:random([-1,1])}),guides.push({r:0,speed:random(.5,1.5)/TWO_PI,direction:random([-1,1])})}function draw(){frameRate(viewGuides?15:60),background(255),image(drawing,0,0);const e=polarToCartesianX(width/2,guides[0].r,width/2-100),i=width,t=height/2+sin(guides[1].r)*(height/2),n=polarToCartesianX(width/2,guides[2].r,width/2-100),r=height,d=height/2+sin(guides[3].r)*(height/2),s=lerp(0,e,.5),a=lerp(d,0,.5),l=lerp(i,n,.5),g=lerp(t,r,.5);viewGuides&&(stroke("red"),strokeWeight(1),line(i,t,n,r),line(0,d,e,0),strokeWeight(6),line(i,t,0,d),line(i,t,l,g),line(0,d,s,a),ellipse(l,g,12),ellipse(s,a,12));for(let e=0;e<guides.length;e++)guides[e].r+=guides[e].speed*guides[e].direction;frameCount>1&&(drawing.fill(frameCount%2?255:0),drawing.beginShape(),drawing.vertex(i,t),drawing.bezierVertex(l,g,s,a,0,d),drawing.vertex(lastPoints.X3,lastPoints.Y3),drawing.bezierVertex(lastPoints.leftHandleX,lastPoints.leftHandleY,lastPoints.rightHandleX,lastPoints.rightHandleY,lastPoints.X1,lastPoints.Y1),drawing.endShape()),lastPoints={X0:e,Y0:0,X1:i,Y1:t,X2:n,Y2:r,X3:0,Y3:d,rightHandleX:l,rightHandleY:g,leftHandleX:s,leftHandleY:a},abs(guides[1].r)>PI+PI/2&&(drawingComplete=!0)}function mousePressed(){viewGuides=!viewGuides}