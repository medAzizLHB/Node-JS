function drawEye(x, y, eyeSize, pupilSize){
  var pupil = createVector(mouseX, mouseY);
  pupil.sub(x, y);
  pupil.limit((eyeSize - pupilSize)/2);
  pupil.add(x, y);
  
  fill(255);
  ellipse(x, y, eyeSize, eyeSize);
  fill(185,117,18);
  ellipse(pupil.x, pupil.y, pupilSize, pupilSize);
}

function setup(){
  createCanvas(500 ,500);
  strokeWeight(14);
}

function draw(){
  background(255,255,128);
  drawEye(150, 200, 125, 50);
  drawEye(350, 200, 125, 50);
  line(150, 350, 350, 400);
}
