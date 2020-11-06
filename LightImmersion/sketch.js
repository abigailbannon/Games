let amt, startColor, newColor;

function setup() {
  createCanvas(displayWidth, displayHeight);
  
  startColor = color(255,255,255);
  newColor = color(random(255),random(255),random(255));
  amt = 0;

  background(startColor);
   
}

function draw() {
  background(lerpColor(startColor, newColor, smoothstep(0.1,0.9,amt)));
  amt += 0.01;
  if(amt >= 4){
    amt = 0.0;
    startColor = newColor;
    newColor = color(random(255),random(255),random(255));
  }
}

function smoothstep(edge0, edge1, x) {
    x = constrain((x - edge0) / (edge1 - edge0), 0.0, 1.0); 
    return x * x * (3 - 2 * x);
  }
function mousePressed() {
  if (mouseX > 0 && mouseX < displayWidth && mouseY > 0 && mouseY < displayHeight) {
    let fs = fullscreen();
    fullscreen(!fs);
  }
}