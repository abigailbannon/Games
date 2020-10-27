var spr;
var clouds;
var score = 0;
var birds;
let stars = []

function setup() {
  createCanvas(displayWidth, displayHeight);

  clouds = new Group(); // variable i for clouds
    for (var i = 0; i < 25; i++) {
    var c = createSprite(
      random(width), random(height),
      random(80, 250), random(80, 250));
    c.shapeColor = color(random(190,255),170);
    clouds.add(c);
  }
  
  birds = new Group(); // variable l for birds
  for (var l = 0; l < 20; l++) {
    var b = createSprite(
      random(100, width-100),
      random(100, height-100),
      10, 10);
    b.shapeColor = color(255, 0, 144);
    birds.add(b);
  }
  
  for (s = 0; s < 500; s++){
		let star = {
			x:random(0,width),
			y:random(0,height)
		};
		stars.push(star);		
	}
  
  spr = createSprite(
    width/2, height/2.5, 40, 40);
  spr.shapeColor = color(255,247,242);
  
}

function draw() {
     background(85,128,250);

  //movement variables for clouds and birds
  for (var i = 0; i < clouds.length; i++) {
    clouds[i].position.x += clouds[i].width * 0.0015;
    if (clouds[i].position.x > width) {
      clouds[i].position.x = 0;
    }
  }
  for (var l = 0; l < birds.length; l++) {
    birds[l].position.x += birds[l].width * 0.02;
    if (birds[l].position.x > width) {
      birds[l].position.x = 0;
    }
  }

    drawSprites();
    spr.collide(clouds);
    spr.overlap(birds, getBirds);
  
  //text portion for directions
  {
    fill(255,0,144);
   textAlign(CENTER, CENTER);
  textSize(56);
  text("Cloud Cleaner",
    width*0.18, height*0.08);
  
  noStroke();
  fill(255,0,144);
  textAlign(CENTER, CENTER);
  textSize(24);
  text("tap the arrow keys, or use SPACE to rest",
    width*0.82, height*0.08);
 }
  
 // if elses for if the sprite goes offscreen
  {
   if (spr.position.x > width) {
     spr.position.x = (width/2);
     spr.position.y = (height/2.5);
     spr.setSpeed(0, 0);
  }
  else if (spr.position.x < 0) {
     spr.position.x = (width/2);
     spr.position.y = (height/2.5);
     spr.setSpeed(0, 0);
  }
  else if (spr.position.y < 0) {
     spr.position.x = (width/2);
     spr.position.y = (height/2.5);
     spr.setSpeed(0, 0);
  }
  else if (spr.position.y > height) {
     spr.position.x = (width/2);
     spr.position.y = (height/2.5);
     spr.setSpeed(0, 0);
  }
  else {
     textSize(16);
  text("",
    width/2, height*0.55);
  }
  }
  
  // if else for counter
  if (birds.length > 0) {
    fill(255);
    textSize(24);
    //text(score, width*0.89, height*0.08);
    text("catch all the petals to win", width*0.48,height*0.08);
  }
  else {
    background(10);
    fill(255,0,144);
    textSize(85);
    text("You Win!", width/2, height/2);
    for (s = 0; s < 500; s++){
		let x = stars[s].x;
		let y = stars[s].y;
		fill(255);
		ellipse(x,y,random(1,3),random(1,3));
	}
 
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

function getBirds(player, birds) {
  birds.remove();
  score += 1;
}