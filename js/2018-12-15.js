const scalar=36;let img;function preload(){img=loadImage("/assets/rope.png")}function setup(){createCanvas(660,840).parent("my-canvas")}function draw(){background(img);const t=map(mouseX,0,width,0,scalar,!0),e=map(mouseY,0,height,0,PI/scalar,!0);translate(width/2,height/2),push(),rotate(e),tint(255,128),image(img,-width/2-t,-height/2-t,width+2*t,height+2*t),pop(),push(),rotate(2*e),tint(255,64),image(img,-width/2-2*t,-height/2-2*t,width+4*t,height+4*t),pop()}function touchMoved(){if(mouseX>=0&&mouseY>=0&&mouseX<=width&&mouseY<=height)return!1}setTimeout(()=>{drawingComplete=!0},1e3);