let t = 0;
let size = 0;
let seed = 28;
let brancheCount = 0; 
let branchFill = 3500; //tree
let state = 0;
let flowerColorR = 100;
let flowerColorG = 100;
let flowerColorB = 200;
var moonSpr;
var moonSprAnim;

function preload(){
  moonSprAnim = loadAnimation("moonSpr1B.png","moonSpr2B.png","moonSpr3B.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0, 0, 0); 
  {
    mouse = createSprite(
      mouseX, mouseY, 0.1, 0.1);
  //  spr1 = createSprite(
   //   width / 2, height / 2, 30, 30);
  //  spr1.shapeColor = color(255);
    moonSpr = createSprite(
      width-100, height-50);
    moonSpr.addAnimation('default', moonSprAnim);

  } //sprites
  { // Initialize:
    size = 1.5 * min(windowWidth, windowHeight);
    //frameRate(30);
    //smooth();

    // Flower color:
    fill(flowerColorR,flowerColorG,flowerColorB, 20);
  } //tree
}

function Tree() {
  brancheCount = 0;
  randomSeed(seed);
  Branch(0, 0, 20, PI / 2, 1, 0);
}

function Branch(x0, y0, length, angle, branch, depth) {
  // Limit total number of branches:
  brancheCount++;
  if (brancheCount > branchFill) {
    return;
  }

  // Exit recursion:
  var maxDepth = 50;
  if (depth == maxDepth) {
    // Draw flower:
    var r = 15;
    noStroke();
    ellipse(x0, y0, r, r);
    return;
  }


  var d = depth / maxDepth;
  var d_ = 1 - d;

  // Interpolate trunk / branch color:
  var c1 = pow(d, 4.0);
  var c0 = 1 - c1;
  stroke(25 * c0 + 92 * c1, 11 * c0 + 125 * c1, 0 * c0 + 89 * c1);

  // Draw branch:
  var x1 = x0 + length * cos(angle);
  var y1 = y0 - length * sin(angle);
  strokeWeight(0.7 + 40.0 * pow(1.0 - d, 2.4));
  line(x0, y0, x1, y1);

  // Random angle ranges:
  var randAngle = 0.3;
  var forkAngle = 0.3;

  // Increase angle variation with depth:
  var pa = pow(d, 0.5);
  randAngle *= pa;
  forkAngle *= pa;

  // Wind:
  angle = angle + 0.01 * sin(branch * t + branch);

  // Randomize branch lengths:
  length *= random(0.95, 1.05);

  // Recurse:
  var fork = random(1.0);
  if (fork > 1.0 - 1.1 * 1 / 7.0) {
    // Fork:
    Branch(x1, y1, length, angle - forkAngle + 0.0 * random(-randAngle, randAngle), branch + 1, depth + 1);
    Branch(x1, y1, length, angle + forkAngle + 0.0 * random(-randAngle, randAngle), branch + 1, depth + 1);
  } else {
    Branch(x1, y1, length, angle + random(-randAngle, randAngle), branch, depth + 1);
  }


}

function draw() {
  // background(220, 0, 220);
  if (state == 0){
  mouse.position.x = mouseX;
  mouse.position.y = mouseY;
            drawSprites(); 
  {
    // Center tree:
    push();
    translate(width / 2, height)
    scale(0.5 * size / 766);

    // Draw:
    Tree();

    // Debug:
    pop();
    //text(seed, 10, 10);

    // Increment time: 
    t += 0.02;
  } //tree
  {
    rectMode(CENTER);
    strokeWeight(1400);
    noFill();
    stroke(0, 0, 0, 30);
    rect(mouseX, mouseY, 1200, 1200, 1000);
  } //spotlight
  }
  
}

function mouseDragged() {
  if (mouse.displace(moonSpr)) {
    moonSpr.position.x = mouseX;
    moonSpr.position.y = mouseY;
  //  moonSpr.remove();
  }
}



function mousePressed() {
   //Change random seed:
  seed++;
}