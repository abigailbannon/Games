let t = 0;
let size = 0;
let seed = 28;
let brancheCount = 0; 
let branchFill = 600; //tree
let state = 0; //gamestate
let flowerColorR = 230;
let flowerColorG = 230;
let flowerColorB = 230;
var block;
let xspeed = 2.8; // Speed of the shape
let yspeed = 2.2; // Speed of the shape
let fade = 15;
let c;
let down;
let stars = [];
let starsNumber = 200;
let sky = 0;
let xdirection = 1; // Left or Right
let ydirection = 1; // Top to Bottom


function preload(){
  moonSprAnim = loadAnimation("moonSpr1B.png","moonSpr2B.png","moonSpr3B.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0, 0, 0); 
  {
  bounce = createSprite(width / 2, height / 2, 15, 15);
  bounce.shapeColor = color(flowerColorR,flowerColorB,flowerColorB,90);
  bounce.velocity.y = random(3);
  bounce.velocity.x = random(-3, 3);
  blocks = new Group();
  } //bounce
  {
  goal = createSprite(width / 2, height / 5, 30, 30);
  goal.shapeColor = color(130,150,100);
  } //goal
  { // Initialize:
    size = 1.5 * min(windowWidth, windowHeight);
    //frameRate(30);
    //smooth();

    // Flower color:
    fill(flowerColorR,flowerColorG,flowerColorB, 20);
  } //tree
  {
  c = 255;
  for (let i = 0; i < starsNumber; i++) {
    stars[i] = new Star(random(width), random(height), random(255), random(0.1, 3), random(1));
  }
  } //stars

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
    ellipse(x0, y0, 20, 20);
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
  strokeWeight(2 + 50.0 * pow(1.0 - d, 2.4));
  line(x0, y0, x1, y1);

  // Random angle ranges:
  var randAngle = (random(1));
  var forkAngle = (random(1));

  // Increase angle variation with depth:
  var pa = pow(d, 0.5);
  randAngle *= pa;
  forkAngle *= pa;

  // Wind:
  angle = angle + 0.005 * sin(branch * t + branch);

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

function mousePressed() {
   //Change random seed:
  var b = createSprite(mouseX, mouseY, width/15, 15);
  b.shapeColor = color(flowerColorR,flowerColorG,flowerColorB, 30);
  b.position.x = mouseX;
  b.position.y = mouseY;
  b.life = fade;
    blocks.add(b);


//  }
  seed++;
}

function draw() {
   background(0, 0, 0, 30);
  if (state == 0){
  background(0, 0, 0, 30);
  bounce.addSpeed(0.1, 90);
      {
      if (bounce.position.y > height) {
        bounce.velocity.y *= -0.8;
          }
      if (bounce.position.x > width) {
        bounce.velocity.x *= -1;
            }
      if (bounce.position.x < 0) {
        bounce.velocity.x *= -1;
              }
      if (bounce.position.y < 0) {
        bounce.velocity.x *= -1;
                }
  if (bounce.collide(blocks)){
  bounce.addSpeed(0.2, 90);
  bounce.velocity.y *= -1.001;

  }
  bounce.collide(blocks);
} //code for gravity and bounce
    
    for (var i = 0; i < blocks.length; i++) {
    bounce.collide(blocks);
    }
    for (let i = 0; i < stars.length; i++) {
    stars[i].twinkle();
    stars[i].showStar();
  }
    
    if (bounce.overlap(goal)){
      state = 1;
    }
    
      if (state == 1){
        background(255);

      }
    
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
  }
  
}

class Star {
  constructor(tx, ty, tc, tf, td) {
    this.x = tx;
    this.y = ty;
    this.c = tc;
    this.f = tf;
    this.down = td;
  }

  showStar() {
    stroke(this.c)
    point(this.x, this.y);
  }

  twinkle() {
    if (this.c >= 255) {
      this.down = true;
    }
    if (this.c <= 0) {
      this.down = false;
    }

    if (this.down) {
      this.c -= this.f
    } else {
      this.c += this.f
    }
  }
}

