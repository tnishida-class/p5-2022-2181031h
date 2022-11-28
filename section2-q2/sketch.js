// チェッカー
function setup() {
  createCanvas(200, 200);
  let size = width / 8;
  noStroke();
  for(let i = 0; i < 8; i++){
    for(let j = 0; j < 8; j++){
    fill((i + j)% 2 == 0 ? 255 : 180);
    rect(size * i, size * j, size, size);
    let point_x = size / 2 + size * i;
    let point_y = size / 2 + size * j;
    if(j < 3 && ( i + j ) % 2 == 1){
      fill(255, 0, 0);
      ellipse(point_x, point_y, width/10);
      }
    else if(j > 4 && (i + j) % 2 == 1){
      fill(0);
      ellipse(point_x, point_y, width/10)
      }
    }
  }
}
