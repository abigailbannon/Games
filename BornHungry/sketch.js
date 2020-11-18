let gameState = 'state1';
var titMonster;
var titMonsterImg
let mySound;

function preload() {
    titMonsterImg = loadImage('titMonster.png');
  soundFormats('mp3');
  mySound = loadSound('sound4.mp3'); //works but the sound sounds awful for some reason???
}

function setup() {
  createCanvas(displayWidth, displayHeight);
  
  titMonster = createSprite(displayWidth-400, displayHeight/2);
  titMonster.addImage(titMonsterImg);
  
}

function draw() {
  background(255);
  fill(255,0,142);
  rect(50,50,200,100);
// Gamestate code continues, at the end of each gamestate assign the interaction which changes the gamestate
  if (gameState === 'state1') {
    fill('purple');
    textAlign(CENTER);
    text('click mouse to play', width / 2, height / 2);
    
  if (mouseIsPressed) {
      gameState = 'state2';
    }
  } 
  
  else if (gameState === 'state2') {
    text('You are playing the game now, press down arrow to stop', width / 2, 25);
    rect(100, 300, 25, 75);
    ellipse(300, 100, 50, 25);
    drawSprites();
    mySound.play(); //dashed because it sounds like garbage, but works
  if (keyIsPressed === true && keyCode === 40){
        gameState = 'state3';  }
  } 
  
  else if (gameState === 'state3') {
text('game over, press space bar to restart', width / 2, height / 2);
  if (keyIsPressed === true && keyCode === 32){
     gameState = 'state1'; 
    }
  }
  
}

function mousePressed() {
  if (mouseX > 0 && mouseX < displayWidth && mouseY > 0 && mouseY < displayHeight) {
    let fs = fullscreen();
    fullscreen(!fs);
  }
}