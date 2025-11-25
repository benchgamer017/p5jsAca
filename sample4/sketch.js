let baseBlue, baseBlue2;
let baseRed, baseRed2;

function setup() {
  createCanvas(600, 400);
  frameRate(30);
  colorMode(RGB, 255);

  baseBlue  = color(0, 0, 255);
  baseBlue2 = color(0, 255, 255);
  baseRed   = color(255, 0, 0);
  baseRed2  = color(255, 180, 0);
}

function draw() {
  let t  = frameCount * 0.03;
  let tm = millis() * 0.001;

  drawBackgroundStatic();
  drawCenterAnimated(t, tm);
  drawModulesAnimated(t);
}

function drawBackgroundStatic() {
  background(235);
  strokeCap(ROUND);
  strokeWeight(16);
  stroke(210);
  line(20, 20, 580, 380);
  line(580, 20, 20, 380);
  strokeWeight(3);
  stroke(0);
  noFill();
  rect(20, 20, 560, 360);
}

function drawCenterAnimated(t, tm) {
  let cx = 300;
  let cy = 200;
  let rX = 80 + 6 * sin(t * 1.5);
  stroke(210);
  strokeWeight(10);
  line(cx - rX, cy - rX, cx + rX, cy + rX);
  line(cx + rX, cy - rX, cx - rX, cy + rX);
  noFill();

  stroke(0);
  strokeWeight(4);
  let bigD = 280 + 8 * sin(t);
  ellipse(cx, cy, bigD, bigD);

  push();
  colorMode(HSB, 360, 100, 100);
  let h = (tm * 40) % 360;
  stroke(h, 80, 95);
  strokeWeight(8);
  let midD = 236 + 10 * sin(t * 2.0 + PI / 3.0);
  ellipse(cx, cy, midD, midD);
  pop();

  stroke(0);
  strokeWeight(2);
  let smallD = 140 + 4 * sin(t * 1.2 + PI / 2.0);
  ellipse(cx, cy, smallD, smallD);

  stroke(0);
  strokeWeight(10);
  let rOuter = 140;
  let rInnerBase = 100;
  let innerOffset = 8 * sin(t * 1.3);

  let rInner = rInnerBase + innerOffset;

  line(cx, cy - rOuter, cx, cy - rInner);
  line(cx, cy + rInner, cx, cy + rOuter);

  line(cx - rOuter, cy, cx - rInner, cy);
  line(cx + rInner, cy, cx + rOuter, cy);
}


function drawModulesAnimated(t) {
  let colorFactor = (sin(t * 1.2) + 1) / 2;

  drawModuleTopLeft(t, colorFactor, 0.0);
  drawModuleTopRight(t, colorFactor, PI / 2.0);
  drawModuleBottomLeft(t, colorFactor, PI);
  drawModuleBottomRight(t, colorFactor, 3 * PI / 2.0);
}

function drawModuleTopLeft(t, cf, phase) {
  let baseX = 122;
  let baseY = 132;
  let baseW = 76;
  let baseH = 35;

  let w = baseW + 6 * sin(t * 1.5 + phase);
  let offsetRectX = -3 * sin(t * 0.8 + phase);

  noStroke();
  let green = color(0, 220, 120);
  fill(green);
  rect(baseX + offsetRectX, baseY, w, baseH);

  fill(80);
  triangle(101, 92, 249, 92, 175, 199);

  let baseR = 54;
  let r = baseR + 6 * sin(t * 2.0 + phase);
  let redNow = lerpColor(baseRed, baseRed2, cf);
  fill(redNow);
  ellipse(199, 110, r, r);

  let orbitR = 12;
  let angle = t * 1.8 + phase;
  let bx = 220 + orbitR * cos(angle);
  let by = 78 + orbitR * sin(angle);

  let blueNow = lerpColor(baseBlue, baseBlue2, (sin(t * 1.4 + phase) + 1) / 2);
  fill(blueNow);
  ellipse(bx, by, 95, 42);
}

function drawModuleTopRight(t, cf, phase) {
  let baseX = 402;
  let baseY = 132;
  let baseW = 75;
  let baseH = 35;

  let w = baseW + 6 * sin(t * 1.5 + phase);
  let offsetRectX = 3 * sin(t * 0.9 + phase);

  noStroke();
  let green = color(0, 220, 120);
  fill(green);
  rect(baseX + offsetRectX, baseY, w, baseH);

  fill(80);
  triangle(351, 92, 498, 92, 425, 198);

  let baseR = 54;
  let r = baseR + 6 * sin(t * 2.0 + phase);
  let redNow = lerpColor(baseRed, baseRed2, cf);
  fill(redNow);
  ellipse(400, 110, r, r);

  let orbitR = 12;
  let angle = t * 1.8 + phase;
  let bx = 380 + orbitR * cos(angle);
  let by = 78 + orbitR * sin(angle);

  let blueNow = lerpColor(baseBlue, baseBlue2, (sin(t * 1.4 + phase) + 1) / 2);
  fill(blueNow);
  ellipse(bx, by, 95, 42);
}

function drawModuleBottomLeft(t, cf, phase) {
  let baseX = 122;
  let baseY = 232;
  let baseW = 76;
  let baseH = 35;

  let w = baseW + 6 * sin(t * 1.5 + phase);
  let offsetRectX = -3 * sin(t * 0.9 + phase);

  noStroke();
  let green = color(0, 220, 120);
  fill(green);
  rect(baseX + offsetRectX, baseY, w, baseH);

  fill(80);
  triangle(101, 345, 249, 345, 175, 233);

  let baseR = 54;
  let r = baseR + 6 * sin(t * 2.0 + phase);
  let redNow = lerpColor(baseRed, baseRed2, cf);
  fill(redNow);
  ellipse(199, 290, r, r);

  let orbitR = 12;
  let angle = t * 1.8 + phase;
  let bx = 220 + orbitR * cos(angle);
  let by = 320 + orbitR * sin(angle);

  let blueNow = lerpColor(baseBlue, baseBlue2, (sin(t * 1.4 + phase) + 1) / 2);
  fill(blueNow);
  ellipse(bx, by, 95, 45);
}

function drawModuleBottomRight(t, cf, phase) {
  let baseX = 402;
  let baseY = 232;
  let baseW = 75;
  let baseH = 35;

  let w = baseW + 6 * sin(t * 1.5 + phase);
  let offsetRectX = 3 * sin(t * 0.8 + phase);

  noStroke();
  let green = color(0, 220, 120);
  fill(green);
  rect(baseX + offsetRectX, baseY, w, baseH);

  fill(80);
  triangle(351, 345, 498, 345, 425, 233);

  let baseR = 54;
  let r = baseR + 6 * sin(t * 2.0 + phase);
  let redNow = lerpColor(baseRed, baseRed2, cf);
  fill(redNow);
  ellipse(400, 290, r, r);

  let orbitR = 12;
  let angle = t * 1.8 + phase;
  let bx = 380 + orbitR * cos(angle);
  let by = 320 + orbitR * sin(angle);

  let blueNow = lerpColor(baseBlue, baseBlue2, (sin(t * 1.4 + phase) + 1) / 2);
  fill(blueNow);
  ellipse(bx, by, 95, 45);
}