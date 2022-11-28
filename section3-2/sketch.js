// テキスト「キーボード操作に反応する」
let x, y, vx, vy;
const g = 1;

function setup(){
  createCanvas(windowWidth, windowHeight);
  x = width / 2;
  y = height / 2;
  vx = 2;
  vy = 2;
}

function keyPressed(){
  if(key==" "){
    y -= vy
  }
}

function draw(){
  background(160, 192, 255);
  ellipse(x, y, 50);
  if(keyIsDown(LEFT_ARROW)){ x -= 5; }
  if(keyIsDown(RIGHT_ARROW)){ x += 5; } 
}


function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
