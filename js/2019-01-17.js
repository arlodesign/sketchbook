let drawing,speed,circleCount=3,circles=[],viewGuides=!1,speeds=[...Array(50).keys()].map(e=>(e+1)/50),maxWidth=0;function guideColor(e){return color(255,0,0,e)}function setup(){createCanvas(660,840).parent("my-canvas"),drawing=createGraphics(width,height);for(let e=0;e<circleCount;e++){const e=random(speeds),i=width/circleCount*random(.5,1.5);speeds=speeds.filter(i=>i!==e),circles.push({r:3*HALF_PI,speed:e/TWO_PI,size:i,direction:random([1,-1]),lastPoint:null}),maxWidth+=i/2}maxWidth-=circles[0].size}function draw(){background(255),frameRate(viewGuides?15:30),image(drawing,0,0);let e={x:width/2,y:height/2};circles.forEach((i,s)=>{const t=s%3?e.x+cos(i.r)*(i.size/2):e.x,r=s%2?e.y:e.y+sin(i.r)*(i.size/2);if(viewGuides){const o=map(s,0,circleCount-1,51,255);noFill(),stroke(255,255,255,o),strokeWeight(5),ellipse(e.x,e.y,s%3?i.size:1,s%2?1:i.size),stroke(guideColor(o)),strokeWeight(1),ellipse(e.x,e.y,s%3?i.size:1,s%2?1:i.size),noStroke(),fill(255,255,255,o),ellipse(t,r,s===circleCount-1?12:6),fill(guideColor(o)),ellipse(t,r,s===circleCount-1?6:3)}if(s===circleCount-1&&i.lastPoint&&t>=0&&t<=width&&r>=0&&r<=height)for(let e=0;e<1;e+=.01)drawing.line(t,r,i.lastPoint.x,i.lastPoint.y);e={x:t,y:r},circles[s].lastPoint=e,circles[s].r+=i.speed*circles[s].direction})}function mousePressed(){viewGuides=!viewGuides}setTimeout(()=>{drawingComplete=!0},12e4);