let self;
let rainAnim;
let rain;
let fog;
let fogImg;
let path;
let pathImg;
let sky;
let skyImg;
let speed = 3;
var score = 0;
let size = 1;
let loops1;
gameState = 'set1';
{
let trees1;
let trees2;
let trees3;
let trees4;
let trees5;
let trees6;
let trees7;
let trees8;
let trees9;
let trees10;
let trees11;
let trees12;
let trees13;
let trees14;
let trees15;
}// tree variables

function preload() {
  rainAnim = loadAnimation('rain1.png','rain2.png','rain3.png', 'rain4.png','rain5.png','rain6.png');
  fogImg = loadImage('fog.png')
  pathImg = loadImage('path.png')
  skyImg = loadImage('sky.png')
  song = loadSound("rain.mp3");
  
}

function setup() {
  {
  createCanvas(displayWidth, displayHeight,WEBGL);
    rain = createSprite(width/2-100,height/3,0);
    rain.addAnimation("default",rainAnim);
    fog = createSprite(-width/2+100,-height/2+100,0);
    fog.addImage(fogImg);
    path = createSprite(0,0,50);
    path.addImage(pathImg);
    sky = createSprite(300,300,0);
    sky.addImage(skyImg);
    font1 = loadFont('Oi-Regular.ttf');
    font2 = loadFont('Exo2-Black.ttf');
    song.loop();
  } // Sprites
  background(0);
          self = createSprite(0,0,50,50);
          self.shapeColor = color(255);
  trees1 = new Group(); // variable i for trees1
          for (var i1 = 0; i1 < 10; i1++) {
    var a = createSprite(
      random(0-width/2), random(0-height/2),
      random(100, 450), random(100, 450));
    a.shapeColor = color(random(50),random(190),random(40), 240);
    trees1.add(a);
  }
}

function draw() {
  
  if (gameState === 'set1') {
     { //Organization and set changes 
   if (self.position.x > width/4) { //east
     self.position.x = (0);
     self.setSpeed(speed, 0);
     gameState = 'set2';
  }
  else if (self.position.x < 0-width/2-width/4) { //west
     self.position.x = (width);
     self.setSpeed(speed, 180);
    gameState = 'set3';
  }  
  else if (self.position.y < 0-height/2-height/4) { //north
     self.setSpeed(0, 0);
        gameState = 'set4';
  }
  else if (self.position.y > height/4) { //south
     self.setSpeed(0, 0);
  }  
  }
    {
      drawSprite(sky);
    
              textFont(font1);
    fill(255);
  textSize(36);
  text('click for fullscreen',-width/2+40, -height/2+60);
  
  //  background(0);
  drawSprite(rain);
    let dirX = (mouseX / width - 0.5) * 3;
  let dirY = (mouseY / height - 0.5) * 3;
  directionalLight(90, 90, 90, -dirX, -dirY, -3);
    noStroke();
  
  //  translate(-140, -100, 0);
  normalMaterial();

  translate(-width/4, 0, 0);
  push();
  rotateZ(frameCount * 0.01);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  box(300, height/2, 200);
  pop();

  translate(width/2, 0, 0);
  push();
        specularMaterial(50);
  rotateZ(frameCount * 0.01);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  cylinder(width/8, 200);
  pop();

  translate(width/10, 200, 0);
  push();
  rotateZ(frameCount * 0.01);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  cone(80, 100);
  pop();

    textFont(font2);
      textSize(28);
  text('use arrow keys and mouse',mouseX-width, mouseY-height);
    }//constructors

        drawSprite(self);
   //   if (keyIsPressed === true && keyCode === 70) {
   //        gameState = 'set2';
    //          } 
}
  
  if (gameState === 'set2'){
         { //Organization and set changes 
  if (self.position.x < 0-width/4) { //west
     self.position.x = (width);
     self.setSpeed(0, 180);
    gameState = 'set1';
  }  
 
  }
    drawSprite(fog);
    textFont(font1);
  fill(253, 255, 117);
  textSize(36);
  text('eat my shorts Donald Judd',-width/2+50, -height/2+60);
  text('Press F to return',-width/2+50, -height/2+120);

  let dirX = (mouseX / width - 0.5) * 0.01;
  let dirY = (mouseY / height - 0.5) * 0.01;
  directionalLight(random(30), 20, 140, -dirX, -dirY, -3);
    noStroke();
    
  translate(mouseX-width/2, mouseY-height/2, 0);
  push();
  specularMaterial(50);
  rotateZ(frameCount * 0.01);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  torus(700, 400);
  pop(); 
      textFont(font2);
      fill(255);
  textSize(36);
  text('mice control the weather',0, 0);
    
      translate(-width/2,-height/4,100);
  drawSprite(rain);
            drawSprite(self);
    
      if (keyIsPressed === true && keyCode === 70) {
           gameState = 'set1';
              }
  }

  if (gameState === 'set3'){
    background(0);
                drawSprite(self);
    drawSprite(path);
  let locX = mouseX - height / 2;
  let locY = mouseY - width / 2;
  pointLight(255, 255, 255, locX, locY, 100);
    noStroke();
    ambientMaterial(140);
    
  translate(-width/4, -height/4, 0);
  push();
  rotateZ(frameCount * 0.01);
  rotateX(mouseX * 0.01);
  rotateY(mouseY * 0.01);
  box(300, 300, 300);
  pop();
      translate(0, height/2, 0);
  push();
  rotateZ(frameCount * 0.01);
  rotateX(mouseX * 0.01);
  rotateY(mouseY * 0.01);
  box(300, 300, 300);
  pop();
          translate(width/2, 0, 0);
  push();
  rotateZ(frameCount * 0.01);
  rotateX(mouseX * 0.01);
  rotateY(mouseY * 0.01);
  box(300, 300, 300);
  pop();
              translate(0, -height/2, 0);
  push();
  rotateZ(frameCount * 0.01);
  rotateX(mouseX * 0.01);
  rotateY(mouseY * 0.01);
  box(300, 300, 300);
  pop();

       textFont(font2);
  fill(255, 117, 170);
  textSize(36);
  text('You couldnt pay me to give a fuck',-width/2-70, height/4+70); 
      fill(196, 20, 40);
      text('Press U to return',-width/2+200, height/4+110);
  
  
                translate(-width/4, height/4, 0);
  normalMaterial();
  push();
  rotateZ(frameCount * 0.01);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  plane(700);
  pop();
  
  translate(-width/2,-height/4,100);
  drawSprite(rain);
    
    if (keyIsPressed === true && keyCode === 85) {
           gameState = 'set1';
              }
  }
  
  if (gameState === 'set4') {
    background(0);
   // text('set 1',width/2, height/2);
    drawSprites(trees1);
    drawSprite(self);
    self.displace(trees1);
      textFont(font2);
  fill(156, 140, 143);
  textSize(36);
  text('too far! go back down!',-width/2+50, -height/2+60);
  //text('Press F to return',-width/2+50, -height/2+120);

  { //Organization and set changes 

 if (self.position.y > height/2) { //south
    self.position.y = (0);
     self.setSpeed(speed, 90);
    gameState = 'set1';
  }    
  }
    
}
    }
  

function mousePressed() {
  if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) {
    let fs = fullscreen();
    fullscreen(!fs);
  }
}

function keyPressed() {
  if (keyCode == RIGHT_ARROW) {
    self.setSpeed(speed, 0);
  }
  else if (keyCode == DOWN_ARROW) {
    self.setSpeed(speed, 90);
  }
  else if (keyCode == LEFT_ARROW) {
    self.setSpeed(speed, 180);
  }
  else if (keyCode == UP_ARROW) {
    self.setSpeed(speed, 270);
  }
  else if (keyIsPressed === true && keyCode === 32){
    self.setSpeed(0, 0);
  }
  return false;
}

