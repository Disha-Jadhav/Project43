function setup() 
{
  createCanvas(400,400);
  angleMode(DEGREES);
}

function draw() 
{
  background(0); 
  translate(200, 200);
  rotate(-90);

  hr = hour();
  sec = second();
  min = minute();

  strokeWeight(10);

  stroke(70, 250, 240);
  noFill();
  secAngle = map(sec, 0, 60, 0, 360);
  arc(0, 0, 350, 350, 0, secAngle);

  push();
  rotate(secAngle);
  line(0, 0, 100, 0);
  pop();

  stroke(100, 110, 230);
  noFill();
  minAngle = map(min, 0, 60, 0, 360);
  arc(0, 0, 320, 320, 0, minAngle);

  push();
  rotate(minAngle);
  line(0, 0, 80, 0);
  pop();

  stroke(247, 62, 145);
  noFill();
  hrAngle = map(hr % 12, 0, 12, 0, 360);
  arc(0, 0, 290, 290, 0, hrAngle);

  push();
  rotate(hrAngle);
  line(0, 0, 50, 0);
  pop();
}