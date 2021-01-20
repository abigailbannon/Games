let xspeed = 2.8; // Speed of the shape
let yspeed = 2.2; // Speed of the shape

let xdirection = 1; // Left or Right
let ydirection = 1; // Top to Bottom

//images
var anim;
let monkey1;
let monkey2;
let monkey3;
let monkey4;
let monkey5;
let monkey6;
let monkey7;
let monkey8;
let monkey9;

function preload() {
  anim = loadAnimation("banana0.png","banana1.png", "banana2.png", "banana3.png", "banana4.png");
  monkey1 = loadImage('monkey1.png'); // Load the image
    monkey2 = loadImage('monkey2.png'); // Load the image
      monkey3 = loadImage('monkey3.png'); // Load the image
        monkey4 = loadImage('monkey4.png'); // Load the image
          monkey5 = loadImage('monkey5.png'); // Load the image
            monkey6 = loadImage('monkey6.png'); // Load the image
              monkey7 = loadImage('monkey7.png'); // Load the image
                monkey8 = loadImage('monkey8.png'); // Load the image
                  monkey9 = loadImage('monkey9.png'); // Load the image
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function touchStarted() {
  var sprB = createSprite(width/2, height/2);
  sprB.addAnimation("default", anim);
  sprB.shapeColor = color(255);
  sprB.velocity.y = random(3);
  sprB.velocity.x = random(-3, 3);
  sprB.position.x = mouseX;
  sprB.position.y = mouseY;
}

function draw() {
  background(250);
  for (var i = 0; i < allSprites.length; i++) {
    // gravity
    allSprites[i].addSpeed(0.1, 90);
      if (allSprites[i].position.y > height) {
        allSprites[i].velocity.y *= -1;
          }
      if (allSprites[i].position.x > width) {
        allSprites[i].velocity.x *= -1;
            }
          if (allSprites[i].position.x < 0) {
        allSprites[i].velocity.x *= -1;
              }
              if (allSprites[i].position.y < 0) {
        allSprites[i].velocity.x *= -1;
                }
    

  }
  
  textAlign(RIGHT, TOP);
  text("banana count: " + allSprites.length,
    width-10, 10);
  drawSprites();
  textAlign(CENTER);
 
  {
    if (allSprites.length >= 1) {
  text("monkeys know each others fear", width/2,height/2);
      image(monkey1, width/2, height/2);
}
      if (allSprites.length >= 2) {
  text("monkeys know each others joy", width/2,height/2+20);
      image(monkey2, width/2-250, height/2);
}
        if (allSprites.length >= 3) {
  text("monkeys know each others love", width/2,height/2+40);
      image(monkey3, width/2-250, height/2+20);
}
          if (allSprites.length >= 4) {
  text("monkeys know each others rage", width/2,height/2+60);
      image(monkey4, width/2-300, height/2-200);
}
            if (allSprites.length >= 5) {
  text("monkeys know each others panic", width/2,height/2+80);
      image(monkey5, width/2, height/2-200);
}
              if (allSprites.length >= 6) {
  text("monkeys know each others sorrow", width/2,height/2+100);
      image(monkey6, width/2-200, height/2+130);
}
                if (allSprites.length >= 7) {
  text("monkeys know each others lust", width/2,height/2+120);
      image(monkey7, width/2-200, height/2+130);
}
                  if (allSprites.length >= 8) {
  text("monkeys know each others lust", width/2,height/2+140);
      image(monkey8, width/2+70, height/2-300);
}
                    if (allSprites.length >= 9) {
  text("monkeys know each others lust", width/2,height/2+160);
      image(monkey9, width/2-200, height/2-260);
}
                        if (allSprites.length >= 10) {
     textSize(30);                     
  text("Monkey Mode!", width/2,height/2+180);
}
                          if (allSprites.length >= 1000) {
                          background(255);
                          text("Please stop,", width/2,height/2);
                          text("this isnt funny anymore", width/2,height/2+20);
                          text("the only person you're hurting is yourself", width/2,height/2+40);
}
    
  } //changes dependent on sprite count
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}