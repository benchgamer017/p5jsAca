let cx = 300, cy = 205;
let baseY = 205;
let dy = 0.6, vy = 0.6;
let bg = 235;
let blink = false;
let glassesW = 5;

function setup() {
  createCanvas(600, 400);
  frameRate(20);
  rectMode(CENTER);
}

function draw() {
  background(bg);
  cy += vy;
  if (cy > baseY + 8 || cy < baseY - 8) vy *= -1;

  stroke(200);
  strokeWeight(10);
  line(24, 24, 576, 376);
  line(24, 376, 576, 24);

  noStroke();
  fill(15);
  rect(300, 360, 380, 130, 24);
  rect(300, 295, 120, 40, 10);
  rect(180, 320, 40, 60, 12);
  rect(420, 320, 40, 60, 12);

  fill(255, 220, 190);
  stroke(0);
  strokeWeight(2);
  ellipse(cx - 110, cy + 5, 34, 46);
  ellipse(cx + 110, cy + 5, 34, 46);

  fill(255, 220, 190);
  noStroke();
  ellipse(cx, cy, 220, 260);

  fill(25);
  arc(cx, cy - 60, 232, 172, PI, TWO_PI);

  let eyeLx = cx - 45, eyeRx = cx + 45, eyeY = cy;
  stroke(0);
  strokeWeight(2);
  noFill();
  if (blink) {
    line(eyeLx - 31, eyeY, eyeLx + 31, eyeY);
    line(eyeRx - 31, eyeY, eyeRx + 31, eyeY);
  } else {
    fill(255);
    ellipse(eyeLx, eyeY, 62, 34);
    ellipse(eyeRx, eyeY, 62, 34);

    let maxOffX = 12, maxOffY = 8;
    let offX = mouseX - eyeLx;
    let offY = mouseY - eyeY;
    offX = constrain(offX, -maxOffX, maxOffX);
    offY = constrain(offY, -maxOffY, maxOffY);

    fill(0);
    noStroke();
    ellipse(eyeLx + offX, eyeY + offY, 14, 14);
    ellipse(
      eyeRx + constrain(mouseX - eyeRx, -maxOffX, maxOffX),
      eyeY + constrain(mouseY - eyeY, -maxOffY, maxOffY),
      14,
      14
    );

    fill(255);
    ellipse(eyeLx + offX - 4, eyeY + offY - 4, 5, 5);
    ellipse(
      eyeRx + constrain(mouseX - eyeRx, -maxOffX, maxOffX) - 4,
      eyeY + constrain(mouseY - eyeY, -maxOffY, maxOffY) - 4,
      5,
      5
    );
  }

  stroke(0);
  strokeWeight(4);
  noFill();
  line(cx - 80, cy - 25, cx - 18, cy - 30);
  line(cx + 18, cy - 30, cx + 80, cy - 25);

  stroke(120);
  strokeWeight(2);
  noFill();
  arc(cx, cy + 23, 22, 12, 0, PI);
  arc(cx, cy + 31, 16, 10, 0, PI);

  stroke(180, 40, 60);
  strokeWeight(3);
  noFill();
  arc(cx, cy + 65, 64, 36, 0, PI);

  stroke(0);
  strokeWeight(glassesW);
  noFill();
  ellipse(eyeLx, eyeY, 76, 48);
  ellipse(eyeRx, eyeY, 76, 48);
  line(cx - 9, eyeY, cx + 9, eyeY);
  line(eyeLx - 38, eyeY, eyeLx - 57, eyeY - 7);
  line(eyeRx + 38, eyeY, eyeRx + 57, eyeY - 7);

  noStroke();
  fill(255, 140, 150, 90);
  ellipse(cx - 56, cy + 37, 20, 14);
  ellipse(cx + 56, cy + 37, 20, 14);

  noFill();
  stroke(0);
  strokeWeight(2);
  rect(300, 200, 560, 360);
}

function mousePressed() {
  if (bg === 235) bg = 0;
  else bg = 235;
}

function keyPressed() {
  if (keyCode === LEFT_ARROW) cx -= 8;
  if (keyCode === RIGHT_ARROW) cx += 8;
  if (keyCode === UP_ARROW) baseY -= 4, cy -= 4;
  if (keyCode === DOWN_ARROW) baseY += 4, cy += 4;
  if (key === 'b' || key === 'B') blink = !blink;
  if (key === '[') {
    glassesW = max(2, glassesW - 1);
  }
  if (key === ']') {
    glassesW = min(10, glassesW + 1);
  }
  if (key === 'g' || key === 'G') {
    saveGif('caricature_motion', 10);
  }
}