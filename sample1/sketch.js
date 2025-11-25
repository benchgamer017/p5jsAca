function setup() {
  createCanvas(600, 400); 
  background(240);
  rectMode(CENTER);

  noFill();
  ellipse(300, 200, 100, 100);
  
  stroke(200);
  strokeWeight(10);

  line(24, 24, 576, 376);

  line(24, 376, 576, 24);
  
  noFill();
  stroke(0);
  strokeWeight(4);
  ellipse(300, 200, 180, 180);
  strokeWeight(2);
  ellipse(300, 200, 240, 240);

  stroke(0);
  strokeWeight(3);
  fill(255, 0, 0);
  ellipse(200, 100, 60, 60);
  ellipse(600 - 200, 100, 60, 60);
  ellipse(200, 400 - 100, 60, 60);
  ellipse(600 - 200, 400 - 100, 60, 60);

  fill(0, 0, 255);
  ellipse(380, 80, 100, 50);
  ellipse(600 - 380, 80, 100, 50);
  ellipse(380, 400 - 80, 100, 50);
  ellipse(600 - 380, 400 - 80, 100, 50);

  strokeWeight(2);
  fill(0, 200, 100);
  rect(160, 150, 80, 40);
  rect(600 - 160, 150, 80, 40);
  rect(160, 400 - 150, 80, 40);
  rect(600 - 160, 400 - 150, 80, 40);

  stroke(0);
  strokeWeight(8);

  line(120, 200, 220, 200);
  line(300, 60, 300, 140);

  line(600 - 120, 200, 600 - 220, 200);

  line(300, 400 - 60, 300, 400 - 140);

  noStroke();
  fill(80);
  triangle(460, 240, 500, 300, 420, 300);
  triangle(600 - 460, 240, 600 - 500, 300, 600 - 420, 300);
  triangle(460, 400 - 240, 500, 400 - 300, 420, 400 - 300);
  triangle(600 - 460, 400 - 240, 600 - 500, 400 - 300, 600 - 420, 400 - 300);

  noFill();
  stroke(0);
  strokeWeight(2);
  rect(300, 200, 560, 360);
}