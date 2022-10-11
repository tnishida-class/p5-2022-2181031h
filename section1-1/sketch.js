function setup() {
  createCanvas(128,128);
}

function draw() {
  background(255);
  strokeWeight(0);
  fill(129, 49, 176);
  triangle(12,120,116,120,116,10);
  fill(255);
  triangle(6,114,111,114,111,5);
  strokeWeight(2);
  stroke(250, 180, 234);
  fill(255);
  triangle(0,108,106,108,106,0);
  strokeWeight(0);
  fill(250, 180, 234);
  textSize(32);
  textFont("serif");
  text("46", 68, 100);
}
