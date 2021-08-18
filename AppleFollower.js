const canvasX = 800;
const canvasY = 800;
var canvasColor = "#cce6ff";

const mx = 400;
const my = 550;
const frameDiameter = 200;
const eyeDiameter = 190;
const eyeballDiameter = 90;


const minionface = "#ffdb4d"
const minionhair = "black"
const minionOverall = "#3973ac"
const minionMouth = "#e63900"
const minionEye1 = "white"
const minionEyeball = "#4d4d33"
const minionGlass = "#bfbfbf"
const minionStrape = "#404040"
const minionpupil = "black"
const minionpupil2 = "white"

var easing = 0.1;
var appleX = 1;
var appleY = 1;
const appleColor = "#cc0000";
const appleColor2 = "white";


function setup() {
    createCanvas(canvasX, canvasY);
}

function draw() {
    background(canvasColor);

    drawMinionHeadandBody();
    drawMinionGlasses();
    drawMinionEye();
    drawMinionMouth();
    drawApple();
}


function drawMinionHeadandBody() {

    fill(minionface);
    noStroke();
    ellipse(mx, my, 400, 400);
    rect(200, 550, 400, 250);

    fill(minionOverall);
    noStroke();
    rect(280, 770, 240, 50);

    strokeWeight(35);
    stroke(minionOverall);
    line(200, 750, 300, 790);
    line(600, 750, 520, 790);

    noFill();
    stroke(minionhair);
    strokeWeight (8);
    bezier(320, 365, 345, 340, 365, 340, 390, 350);
    bezier(410, 350, 435, 340, 455, 340, 480, 365);
}

function drawMinionEye() {
    
  
    var eyeball = createVector(mouseX, mouseY); 
    eyeball.sub(mx, my);
    eyeball.limit((eyeDiameter - eyeballDiameter) / 2); 
    eyeball.add(mx, my);


    fill(minionEye1);
    noStroke();
    ellipse(mx, my, eyeDiameter, eyeDiameter);

   
    fill(minionEyeball);
    noStroke();
    ellipse(eyeball.x, eyeball.y, eyeballDiameter, eyeballDiameter);

    fill(minionpupil);
    noStroke();
    ellipse(eyeball.x, eyeball.y, eyeballDiameter - 50, eyeballDiameter - 50);

    fill(minionpupil2);
    noStroke();
    ellipse(eyeball.x - 10, eyeball.y - 10, eyeballDiameter - 100, eyeballDiameter - 100);

}

function drawMinionGlasses() {

    
    strokeWeight(60);
    stroke(minionStrape)
    strokeCap(ROUND);
    line(210, 550, 590, 550);

   
    strokeWeight(40);
    noFill();
    stroke(minionGlass);
    ellipse(mx, my, frameDiameter, frameDiameter);

}

function drawMinionMouth() {
 
    
    if (appleY >= 550) { 
        //Mouth - happy
        fill(minionMouth);
        noStroke();
        arc(360, 700, 65, 65, 0, PI + QUARTER_PI, PI - HALF_PI);
        canvasColor = "#cce6ff";
    }

    if (appleY >= 200 && appleY < 550) {

        //Mouth - expecting
        fill(minionMouth)
        noStroke();
        ellipse(400, 720, 50, 55);
        canvasColor = "#4da9ff";
    }

    if (appleY < 200) {

        //Mouth - upset
        noFill();
        stroke("black");
        strokeWeight(8);
        bezier(420, 720, 410, 700, 390, 700, 380, 720);
        canvasColor = "#003566";
    }
}

function drawApple() {

  
    var targetX = mouseX;
    var dx = targetX - appleX; //if the distance is larger than 1 pixel (appleX), then
    appleX += dx * easing; //the apple moves part of the distance (easing) towards the location of the mouse

    var targetY = mouseY;
    var dy = targetY - appleY;
    appleY += dy * easing;

    fill(appleColor);
    noStroke();
    ellipse(appleX, appleY, 75, 70);

    strokeWeight(5);
    stroke("black");
    line(appleX, appleY - 15, appleX + 15, appleY - 40);

    fill("black");
    noStroke();
    ellipse(appleX, appleY - 16, 15, 10);


    fill(appleColor2);
    noStroke();
    ellipse(appleX + 20, appleY, 10, 20);

    fill(appleColor2);
    noStroke();
    ellipse(appleX + 15, appleY + 20, 5, 5);
}
}
