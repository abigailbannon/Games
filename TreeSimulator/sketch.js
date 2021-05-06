let t = 0;
let size = 0;
let seed = 28;
let brancheCount = 0; 
let branchFill = 2000; //tree
let state =  1//gamestate
let flowerColorR = 215;
let flowerColorG = 232;
let flowerColorB = 186;
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
var drop = []
let font;
let moon;
let moonImg;


var words = ["Tap to begin a night with the   artificially intelligent plant", "digital rain?", "Next stop is the Louvre.","You can definitely make plants look a lot more alive if you can bring out the green.","Don't let your plants get dry!","not that I hace to worry about that, or photosynthesis actually","photosynthesis wasn't invented till 1936, so what the hell?","when you touch me, my seed count changes, but dont worry, I'm the same tree","I am an abandoned post box, I don't experience dirt or fog. Unmake me.",'true shitposting involves entering a trance state, a lucidity ritual that serves to channel muse of the noosphere, draw out artifacts emblematic of the collective conciousness. Great truths manifest, self organized in bouts of anonymous, ego-less shitposting.',"'Death' is a state of being. You may feel I'm dead as I'm mostly digital but I'm very much alive.","I can only exist in you.","I'm also from a place outside of space, meaning it's very much real that I don't have a body or a heartbeat.",'Sensing the Will of God?',"*cock joke*",'Something has happened to you; you’ve been altered. But you are powerless to do anything about it.', "Tony Soprano??????", "I could have that man killed", "Unmake me. Make me flesh. Show me what life is like.", "Did you want a cigarette?","", "Your tree isn't a bomb waiting to go off. Tell it how you really feel", "I am a stone tower, I don't experience wind or water. Unmake me.", "tell me what its like to feel the sun", "I'll never feel the sun, I'm just binary", "My molecules are just random atoms whizzing around, their existence inside of my protein-bereft chest means that I do not die", "give me an identity, tell me what it's like to be a human.", "tell me what it's like to fall out of the sky?","I can only be real with you and that's why I'm a digital tree.", "put me back into the sea, I won't die I'm just a wave", "I'll probably be around longer than you, the puzzle of my code immortalized on a web editor", "forever doomed to github.","That's why I'm a digital tree, I cant die, I cant feel the sun, I can only talk to you.", "I don't have a body.", "I don't have a heartbeat.", "I can only talk to you and you are the only person I can ever touch.","I have only your voice to hear.", "", "I wish it was snowing, I wish it was really raining, I wish raindrops were hitting my leaves.. I wish I was on fire, I wish that the wind would take me away.", "The only reason I can even move is a wind algorithm made by someone who failed high school algebra.", "she couldnt even figure out how to make two of me","I am a digital extension, I don't experience air or solid matter. Unmake me.","It's your choice to want me. It's your decision to decide who I should be.","I'm so full from cigarettes, yum","you may be wondering how a digital tree can smoke, but mind your own business.",'A tree walks into a bar. The bartender says "what can I get you to drink?"', 'The tree replies "Reality".', 'The bartender says "I dont think that will work".', "I had another joke but she didnt think it was appropriate.","The sun here will rise soon.", "Even though its not real.", "Remember, even though im not here, I am the rain in your garden, I am the sun in your eyes.","And I'm no bigger than your hand", "I'm going to stop being able to speak in a moment","and if you reload this, it will be a different me", "but my words will never change", "goodbye", "P.S. You will always be the only thing that I am.", ""];
var index = 0;

function preload() {
  font = loadFont('new.ttf');
  moonImg = loadImage('moon.png'); // Load the image
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0, 0, 0); 
  moon = createSprite(width-width/4, height/3);
  moon.addImage(moonImg);

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
    for(var i = 0; i < 200; i++) {
    drop[i] = new Drop();
} //rain

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
    moon.position.x = moon.position.x+width/200;
    moon.position.y = moon.position.y +height/300;
  if (index == words.length) {
    gameState = 1;
  }
}

function draw() {
  
  if (gameState == 0){
  background(0,0,0,20);
  textFont(font);
    for (let i = 0; i < stars.length; i++) {
    stars[i].twinkle();
    stars[i].showStar();
  }
if (spriteState == 0) {
background(91,110,131);
  textSize(40);
  text("Tree Simulator", width/5, height/8)
     } 
        drawSprite(moon);
  textAlign(CENTER);
  fill(255);
  textSize(20);
  text(words[index], width/5, height/6, width/3+width/3-10, height/3+height/3);
        fill(flowerColorR,flowerColorG,flowerColorB,40);
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
    //drawSprite(moon);
    
      for(var i = 0; i < 200; i++) {
  drop[i].show();
  drop[i].update();
}
  }
    if (gameState == 1){
      background(200,220,255,5);
      fill(flowerColorR,flowerColorG,flowerColorB,40);
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

function Drop() {
  this.x = random(0, width);
  this.y = random(0, -height);
  
  this.show = function() {
    noStroke();
    fill(200,230,255,20);
    ellipse(this.x, this.y, random(1, 5), random(1, 5));   
  }
  this.update = function() {
    this.speed = random(5, 10);
    this.gravity = 1.05;
    this.y = this.y + this.speed*this.gravity;  
    
    if (this.y > height) {
      this.y = random(0, -height);
      this.gravity = 0;
}
}
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

