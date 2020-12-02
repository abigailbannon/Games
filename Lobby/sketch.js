let gameState = 'state1';
var titMonster;
var titMonsterAnim;
var fullScreen;
var fullScreenImg;
var lobby;
var lobbyImg;
var doe;
var doeAnim;
var hand;
var handAnim;
var main;
var mainAnim;
let mySound;
let f1;
let f2;
var clouds;

function preload() {
    titMonsterAnim = loadAnimation("eya.png", "eya1.png", "eya2.png");
    fullScreenImg = loadImage('fullScreen.png');
    lobbyImg = loadImage('lobby.png');
    doeAnim = loadAnimation("doe0.png", "doe1.png");
    handAnim = loadAnimation("hand0.png", "hand1.png", "hand2.png");
    mainAnim = loadAnimation("main0.png","main1.png","main2.png");
  
    f1 = loadFont('OSKAL.otf');
    f2 = loadFont('Glassure.otf');

}

function setup() {
  createCanvas(displayWidth, displayHeight);
  
  titMonster = createSprite(displayWidth/2-100, displayHeight/2+100);
  titMonster.addAnimation('moving',titMonsterAnim);
  
  fullScreen = createSprite(125, 100);
  fullScreen.addImage(fullScreenImg);
  
  lobby = createSprite(width/2,height/2);
  lobby.addImage(lobbyImg);
  
  doe = createSprite(mouseX, mouseY);
  doe.addAnimation('default',doeAnim);
  
  clouds = new Group();
    for (var i = 0; i < 50; i++) {
    var c = createSprite(
      random(width), random(height),
      random(100, 300), random(100, 300));
    c.shapeColor = color(random(200, 255),220);
    clouds.add(c);
  }
  
  hand = createSprite(width/2+300,height-200);
  hand.addAnimation('default',handAnim);
  
  spr1 = createSprite(width/2, height/2, 300, 300);
    spr1.shapeColor = color(255);
  
  main = createSprite(mouseX,mouseY);
  main.addAnimation('default',mainAnim);
  
}

function draw() {
  
  textAlign(CENTER);
// Gamestate code continues, at the end of each gamestate assign the interaction which changes the gamestate
  if (gameState === 'state1') {
    background(224, 235, 255);
    fill(10,10,10);
    textFont(f2, 230);
    text('Lobby', width/2, height/2);
    textFont(f1, 50);
    text('Press the Spacebar to enter', width/2, height/2+150);
    
  if (keyIsPressed === true && keyCode === 32) {
      gameState = 'state2.1';
    }
  } 
  
        else if (gameState === 'state2.1') {
        drawSprite(lobby); 
            rectMode(CENTER);
            noStroke();
            fill(176,155,180,100);
            rect(width/2, height/2, 600, 270);
        fill(10);
        textFont(f1, 20);
        text('Welcome to the lobby, press R to look around', width/2, height/2+100);
          drawSprite(main);
          main.velocity.x = (mouseX-main.position.x)*0.2;
          main.velocity.y = (mouseY-main.position.y)*0.2;

        if (keyIsPressed === true && keyCode === 82){
              gameState = 'state3';  
          }
        } 

              else if (gameState === 'state2.2') {
              drawSprite(lobby);
                    rectMode(CENTER);
                    noStroke();
                    fill(176,155,180,100);
                    rect(width/2, height/2, 600, 270);
                    fill(176,155,180,100);
                    rect(width/2, height/2, 900, 510);
              fill(10);
              textFont(f1, 20);
              text('Press R to go back', width/2, height/2+100);
              textFont(f1, 30);
              text('Press I to go further', width/2, height/2+200);
              drawSprite(main);
          main.velocity.x = (mouseX-main.position.x)*0.2;
          main.velocity.y = (mouseY-main.position.y)*0.2;
                
              if (keyIsPressed === true && keyCode === 82){
              gameState = 'state3';  
              }
              if (keyIsPressed === true && keyCode === 73){
                  gameState = 'state4';  
                }
              } 

                  else if (gameState === 'state2.3') {
                  drawSprite(lobby); 
                    rectMode(CENTER);
                    noStroke();
                    fill(176,155,180,100);
                    rect(width/2, height/2, 600, 270);
                    fill(176,155,180,100);
                    rect(width/2, height/2, 900, 510);
                    fill(176,155,180,100);
                    rect(width/2, height/2, 1300, 790);
                  fill(10);
                  textFont(f1, 20);
                  text('Press R to back to the beginning', width/2, height/2+100);
                  textFont(f1, 30);
                  text('Press I to go to the past', width/2, height/2+200);
                  textFont(f1, 50);
                  text('Press P to take a peek outside', width/2, height/2+340);
                    drawSprite(main);
          main.velocity.x = (mouseX-main.position.x)*0.2;
          main.velocity.y = (mouseY-main.position.y)*0.2;
                    
                  if (keyIsPressed === true && keyCode === 82){
                  gameState = 'state3';  
                   }
                  if (keyIsPressed === true && keyCode === 73){
                  gameState = 'state4';  
                  }
                  if (keyIsPressed === true && keyCode === 80){
                      gameState = 'state5';  
                    }
                  }
                          else if (gameState === 'state2.4') {
                          background(224, 235, 255);
                            textFont(f1, 50);
                          text('you left, delete to restart', width/2, height/2-200);
                          textFont(f2, 230);
                          text('goodbye', width/2, height/2+80);

                          if (keyIsPressed === true && keyCode === 8){
                             gameState = 'state1';
                          }
                          }

  
  else if (gameState === 'state3') {
 background(235, 253, 180);
      fill(242,214,15);
      textFont(f2, 60);
      text('different yet the same', width-300, 200);
    drawSprite(titMonster);
    fill(10);
    textFont(f1, 30);
    text('press down to return to the lobby', width/2-100, height/2+100);
    ellipse(mouseX,mouseY,1600,1600);
    
  if (keyIsPressed === true && keyCode === 40){
     gameState = 'state2.2'; 
    }
  }
  
    else if (gameState === 'state4') {
  background(237, 16, 63);
  textFont(f1, 16);
  text('I am like a child. I think. Like a child. Its not that I am incapable. Thats a lie. But thats what I want. Thats what I want, doesnt it? I want what I want, I dont want what nobody says I should, I dont want whats right at my fingertips, I dont think you should. I dont know. A moment' , width/2, height/2-200);
      fill(255);
  textFont(f2, 100);
  text('press up to return', width-400, height-100);
  fill(10);
      drawSprite(hand);
       drawSprite(spr1);
  spr1.velocity.x = (mouseX-spr1.position.x)*0.2;
  spr1.velocity.y = (mouseY-spr1.position.y)*0.2;
    hand.velocity.x = (mouseX-hand.position.x)*0.0005;
    hand.velocity.y = (mouseY-hand.position.y)*0.0005;
      
      
  if (keyIsPressed === true && keyCode === 38){
     gameState = 'state2.3'; 
      } 
    }
  
  else if (gameState === 'state5') {
  background(21, 29, 71);
    fill(96,84,82);
      textFont(f1, 18);
      text('press left to go back to the lobby', 200, height/2+100);
      text('press right to leave', width-200, height/2+100);
    fill(255,237,225);
      textFont(f2, 80);
      text('The voice was distant and not human', width/2, height/2-100);
    for (var i = 0; i < clouds.length; i++) {
    clouds[i].position.x += clouds[i].width * 0.01;
    if (clouds[i].position.x > width) {
      clouds[i].position.x = 0;
    }
  }
    drawSprites(clouds);
    drawSprite(doe);
        doe.velocity.x = (mouseX-doe.position.x)*0.2;
        doe.velocity.y = (mouseY-doe.position.y)*0.2;
    doe.displace(clouds);
  ellipse(mouseX,mouseY,10,10)
      
  if (keyIsPressed === true && keyCode === 37){
     gameState = 'state2.3'; 
    } 
  if (keyIsPressed === true && keyCode === 39){
     gameState = 'state2.4'; 
    } 
  }
  
  drawSprite(fullScreen);

}

function mousePressed() {
  if (mouseX > 55 && mouseX < 195 && mouseY > 50 && mouseY < 150) {
    let fs = fullscreen();
    fullscreen(!fs);
  }
} // fullscreen function
