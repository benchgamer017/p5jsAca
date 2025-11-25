function setup() {
  createCanvas(600, 400);
  background(255);
  rectMode(CENTER);

  noStroke();
  fill(15);
  rect(300, 360, 380, 130, 24);

  rect(300, 295, 120, 40, 10);

  rect(180, 320, 40, 60, 12);
  rect(420, 320, 40, 60, 12);

  fill(255, 220, 190); stroke(0); strokeWeight(2);
  ellipse(190, 210, 34, 46);
  ellipse(410, 210, 34, 46);

  fill(255, 220, 190);
  ellipse(300, 205, 220, 260);

  noStroke(); fill(25);
  arc(300, 145, 232, 172, PI, TWO_PI);


  stroke(0); strokeWeight(2); fill(255);
  ellipse(255, 205, 62, 34);
  ellipse(345, 205, 62, 34);
  fill(0);
  ellipse(255, 205, 14, 14);
  ellipse(345, 205, 14, 14);
  noStroke(); fill(255);
  ellipse(251, 201, 5, 5);
  ellipse(341, 201, 5, 5);

  stroke(0); strokeWeight(4); noFill();
  line(220, 180, 282, 175);
  line(318, 175, 380, 180);

  stroke(120); strokeWeight(2); noFill();
  arc(300, 228, 22, 12, 0, PI);
  arc(300, 236, 16, 10, 0, PI);

  stroke(180, 40, 60); strokeWeight(3); noFill();
  arc(300, 270, 64, 36, 0, PI);

  stroke(0); strokeWeight(5); noFill();
  ellipse(255, 205, 76, 48);
  ellipse(345, 205, 76, 48);
  line(291, 205, 309, 205);

  line(217, 205, 198, 198);
  line(383, 205, 402, 198);

  noStroke(); fill(255, 140, 150, 90);
  ellipse(244, 242, 20, 14);
  ellipse(356, 242, 20, 14);

}
