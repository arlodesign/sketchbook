const SIZE=200,BOX_COUNT=10*SIZE;let speed1,speed2,speed3,variant,r1=0,r2=0,r3=0,spheres=[];function setup(){createCanvas(660,840,WEBGL).parent("my-canvas"),speed1=random(.1,.2)/TWO_PI*random([-1,1]),speed2=random(.3,.4)/TWO_PI*random([-1,1]),speed3=random(.5,.6)/TWO_PI*random([-1,1]),noStroke(),color(255),setTimeout(()=>{drawingComplete=!0},45e3)}function draw(){background(255),directionalLight(min(frameCount,255),min(frameCount,255),min(frameCount,255),cos(frameCount/100),sin(frameCount/200),sin(frameCount/100)/2),camera(sin(frameCount/(5*SIZE))*(2*SIZE),cos(frameCount/(5*SIZE))*(2*SIZE),2*SIZE,0,0,0,0,1,0),spheres.forEach((e,r)=>{push(),specularMaterial(255),translate(...e),sphere(map(r,0,BOX_COUNT,0,10)),pop()}),spheres.push([polarToCartesianX(0,r1,SIZE),polarToCartesianY(0,r2,SIZE),frameCount%2?polarToCartesianX(0,r3,SIZE):polarToCartesianY(0,r3,SIZE)]),spheres.length>BOX_COUNT&&spheres.shift(),r1+=speed1,r2+=speed2,r3+=speed3}