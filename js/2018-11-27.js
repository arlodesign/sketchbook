let count=0;const total=500;function setup(){createCanvas(660,840).parent("my-canvas"),background("white"),strokeWeight(4),noLoop()}function draw(){for(;count<total;)triangle(0,0,width,random(0,height),random(0,width),height),count++;drawingComplete=!0}