let t = 0;
let size = 0;
let seed = 28;
let brancheCount = 0; 
let branchFill = 600; //tree
let state =  1//gamestate
let flowerColorR = 250;
let flowerColorG = 250;
let flowerColorB = 250;
let fade = 15;
let c;
let down;
let stars = [];
let starsNumber = 200;
let sky = 0;
let xdirection = 1; // Left or Right
let ydirection = 1; // Top to Bottom
let spriteState = 0;
let gameState = 0;
let rainAnim;
let rain;

var words = ['That night you are woken up by a loud thud, you see something in the backyard', 'You see the same tree, but this time there is someone standing there.', 'Something has happened to you; you’ve been altered.', 'You get up and run outside. You shout, but there is no one there. It was no one.', '"Its just the trunk" you tell yourself.', '"Its just the branches. They have probably grown back." but it was his tree.', "You know it's him. At first you try to ignore him, but eventually you decide that you can't ignore him any more.", "Had he been watching you through the hole in his trunk? Waiting for the right time to begin to show himself? He's just a tree. How can you be scared of him?", "You’ve been scared of him for so long. It's ridiculous.", "You climb inside your car and you follow his voice, finally.", "You drive down a small road through an open feild. It’s raining, and you are far away from home, you come across a very old tree and get out of your car to approach it.", "It’s branches bow and shake in the wind.", "A loud bang is heard and you see someone has gone down the tree. A man is there.", "He looks up at you, with an old, withered face, it reminds you of your grandparents.", " You’re scared and uncertain. He speaks in a dialect you can’t understand. You can’t look away from him, you can’t move.", "The rain from the sky is so cold. The tree looks so sad. You are trapped.", "You make eye contact, the old man, it’s you.", "Your eyes are piercingly dark and sunken. You nod in recognition. The old man makes a deep, guttural laugh, and he looks right at you.", "You’re both startled. A horrible laugh. Your heart stops, you can’t breathe, and you sink to the ground.", "He isn’t falling, but he is disappearing, without ever being seen or heard. What was it, a person or a shadow?", "The image begins to fade away. Something remains and you go to look. Soft black feathers.", "You hope he is still with them, somewhere in the void, but his companions have long since left him behind.", "You try to go home, but this isn't your home. It could never be your home."];

var index = 0;

function preload() {
  rainAnim = loadAnimation('rain1.png','rain2.png','rain3.png', 'rain4.png','rain5.png','rain6.png');
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0, 0, 0); 
    spr = createSprite(
    width/2, height/2, 40, 40);
    spr.shapeColor = color(255);
    rain = createSprite(width/2,height/2);
    rain.addAnimation("default",rainAnim);
  { // Initialize:
    size = 2 * min(windowWidth, windowHeight);
    //frameRate(30);
    //smooth();

    // Flower color:
    fill(flowerColorR,flowerColorG,flowerColorB,40);
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

  seed++;
    index = index +1;
    spriteState = spriteState +1;
  if (index == words.length) {
    gameState = 1;
  }
}

function draw() {
  
  if (gameState == 0){
  background(0,0,0, 250);
    for (let i = 0; i < stars.length; i++) {
    stars[i].twinkle();
    stars[i].showStar();
  }
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
  } //tree//external
  textAlign(CENTER);
  fill(255);
  textSize(20);
  text(words[index], width/5, height/6, width- width/3, 300);
  
  if (spriteState == 2) {
    drawSprite(spr);
       }
    drawSprite(rain);
    rain.alpha = 0.1;
  }
    if (gameState == 1){
      background(200,220,255,10);
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

