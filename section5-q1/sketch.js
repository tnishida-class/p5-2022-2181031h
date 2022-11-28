// 練習問題：吹き出し
// 吹き出しの位置、背景色 etc. を関数 balloon の引数で指定できるようにしてみよう
// 吹き出しにしっぽを付けてみよう
function setup(){
  createCanvas(400, 400);
  background(255);
  balloon("I love keyakizaka46", fill(250, 180, 234));
}

function balloon(t, c){
  let w = textWidth(t);
  let h = textAscent() + textDescent();
  let p = 2;
  //fill(0);
  noStroke();
  rect(0, 0, w + p * 2, h + p * 4);
  beginShape();    // 点つなぎを始める
  vertex((w + p * 2) * 4 / 5, h + p * 4);
  vertex(w + p * 2, h + p * 4);
  vertex((w + p * 2) * 5 / 6, (h + p * 4) * 2);
  endShape(CLOSE); // 点つなぎを終わる


  fill(255);
  textSize(13);
  textFont("serif");
  //text(t, p, h + p);
  text(t, p, h - p)
}
