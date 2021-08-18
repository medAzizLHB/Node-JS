let N_FRAMES = 35;
let r = 150;
let n = 23;
let movId = 0;
let rotAngle = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  fill(0);
  strokeWeight(2);
}

function draw() {
  background(255);
  translate(width/2, height/2);
  
  if ((frameCount) % N_FRAMES == 0) {
    movId += 2;
    if (movId > n) {
      movId = 0;
      rotAngle += TWO_PI/n;
    }
  }
  
  rotate(rotAngle);
  
  let d = 2*r*sin(PI/n);
  for (let i = 0; i < n; i += 2) {
    let off = 1;
    if (i == movId) {
      off = easeOutBounce((frameCount%N_FRAMES)/N_FRAMES);
    } else if (i > movId) {
      off = 0;
    }
    let theta = TWO_PI*(i+off)/n;
    let x = r*cos(theta);
    let y = r*sin(theta);
    line(0, 0, x, y);
    circle(x, y, d)
  }
}

function easeOutBounce(x) {
  const n1 = 7.5625;
  const d1 = 2.75;

  if (x < 1 / d1) {
      return n1 * x * x;
  } else if (x < 2 / d1) {
      return n1 * (x -= 1.5 / d1) * x + 0.75;
  } else if (x < 2.5 / d1) {
      return n1 * (x -= 2.25 / d1) * x + 0.9375;
  } else {
      return n1 * (x -= 2.625 / d1) * x + 0.984375;
  }
}
