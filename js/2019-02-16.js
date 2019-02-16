const GRID_SIZE=20,MAX_Z=400;function getColor(e){return color(100*abs(cos(e)),100*abs(sin(-e+PI)),100)}function setup(){createCanvas(660,840,WEBGL).parent("my-canvas"),stroke(255),noFill(),noiseDetail(4,.5),rectMode(CENTER),camera(-width/4,-height/4,MAX_Z,-width/4,-height/4,0,0,1,0)}function draw(){background(0);let e=GRID_SIZE-width/2,o=GRID_SIZE-height/2,t=[];for(;e<0;){let r=[];for(;o<0;){const t=noise(e*(GRID_SIZE/1e3),o*(GRID_SIZE/1e3),frameCount/100);r.push([e,o,map(t,0,1,-MAX_Z,MAX_Z)]),o+=GRID_SIZE}t.push(r),e+=GRID_SIZE,o=GRID_SIZE-height/2}t.forEach(e=>{e.forEach(e=>{stroke(getColor(e[2]/100)),line(...e,polarToCartesianX(-width/4,frameCount/100,10*GRID_SIZE),polarToCartesianY(-height/4,frameCount/100,10*GRID_SIZE),-MAX_Z),push(),translate(...e),noStroke(),fill(getColor(e[2]/100)),sphere(GRID_SIZE/10),pop()})}),drawingComplete=!0}