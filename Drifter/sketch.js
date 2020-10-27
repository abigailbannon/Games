var spr;
var clouds;
var score = 0;

function setup() {
  createCanvas(displayWidth, displayHeight);

  clouds = new Group();
    for (var i = 0; i < 20; i++) {
    var c = createSprite(
      random(width), random(height),
      random(25, 150), random(25, 150));
    c.shapeColor = color(random(150,255),235);
    clouds.add(c);
  }
  spr = createSprite(
    width/2, height/2.5, 40, 40);
  spr.shapeColor = color(255);
 
}

function draw() {
     background(85,128,250);

  for (var i = 0; i < clouds.length; i++) {
    clouds[i].position.x += clouds[i].width * 0.01;
    if (clouds[i].position.x > width) {
      clouds[i].position.x = 0;
    }
  }
    
  fill(255);
   textAlign(CENTER, CENTER);
  textSize(56);
  text("Drifter",
    width/2, height/12);
  
  noStroke();
  textAlign(CENTER, CENTER);
  textSize(16);
  text("tap the arrow keys, or use SPACE to rest",
    width/2, height*0.5);
  
  drawSprites();
    spr.collide(clouds);
 
   if (spr.position.x > width) {
     textSize(16);
  text("cloud lost, please reload",
    width/2, height*0.55);
  }
  else if (spr.position.x < 0) {
     textSize(16);
  text("cloud lost, please reload",
    width/2, height*0.55);
  }
  else if (spr.position.y < 0) {
     textSize(16);
  text("cloud lost, please reload",
    width/2, height*0.55);
  }
  else if (spr.position.y > height) {
     textSize(16);
  text("cloud lost, please reload",
    width/2, height*0.55);
  }
  else {
     textSize(16);
  text("",
    width/2, height*0.55);
  }

} 

function keyPressed() {
  if (keyCode == RIGHT_ARROW) {
    spr.setSpeed(1.5, 0);
  }
  else if (keyCode == DOWN_ARROW) {
    spr.setSpeed(1.5, 90);
  }
  else if (keyCode == LEFT_ARROW) {
    spr.setSpeed(1.5, 180);
  }
  else if (keyCode == UP_ARROW) {
    spr.setSpeed(1.5, 270);
  }
  else if (key == ' ') {
    spr.setSpeed(0, 0);
  }
  return false;
}