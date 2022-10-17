// 小手調べ
function setup() {
  createCanvas(100,100);
}

function setup(){
  for(let i = 0; i < 10; i++){
    if(i <= 5){
      noFill();
      stroke(0, 0, 255)
      ellipse(50, 50, i*10+10);  
    }
    else{
      noFill();
      stroke(255, 0, 0);
      ellipse(50, 50, i*10+10);
    }
    // BLANK[1]
  }
}
