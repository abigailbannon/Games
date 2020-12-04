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
  var chair;
  var chairImg;
  var cup;
  var cupImg;
  var fern;
  var fernImg;
  var table;
  var tableImg;
  var teapot;
  var teapotImg;
let mySound;
let f1;
let f2;
var clouds;
var score = 0;
var birds;
let stars = []

function preload() {
    titMonsterAnim = loadAnimation("eya.png", "eya1.png", "eya2.png");
    doeAnim = loadAnimation("doe0.png", "doe1.png");
    handAnim = loadAnimation("hand0.png", "hand1.png", "hand2.png");
    mainAnim =    loadAnimation("main0.png","main1.png","main2.png");
  
    fullScreenImg = loadImage('fullScreen.png');
    lobbyImg = loadImage('lobby.png');
    chairImg = loadImage('Achair.png');
    cupImg = loadImage('Acup.png');
    fernImg = loadImage('Afern.png');
    tableImg = loadImage('Atable.png');
    teapotImg = loadImage('Ateapot.png');
  
    f1 = loadFont('OSKAL.otf');
    f2 = loadFont('Glassure.otf');

}

function setup() {
  createCanvas(displayWidth, displayHeight);
  
  titMonster = createSprite(displayWidth/2+200, displayHeight/2+200);
  titMonster.addAnimation('moving',titMonsterAnim);
  
  fullScreen = createSprite(125, 100);
  fullScreen.addImage(fullScreenImg);
  
  lobby = createSprite(width/2,height/2);
  lobby.addImage(lobbyImg);
  
  doe = createSprite(mouseX, mouseY);
  doe.addAnimation('default',doeAnim);
  
  clouds = new Group();
    for (var i = 0; i < 40; i++) {
    var c = createSprite(
      random(width), random(height),
      random(100, 300), random(100, 300));
    c.shapeColor = color(random(200, 255),220);
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
  
  hand = createSprite(300,height-100);
  hand.addAnimation('default',handAnim);
  
  spr1 = createSprite(mouseX, mouseY, 3, 3);
    spr1.shapeColor = color(250);
    //spr.noStroke();
  
  main = createSprite(mouseX,mouseY);
  main.addAnimation('default',mainAnim);
  
  chair = createSprite(width/2+500, height/2+200);
  chair.addImage(chairImg);
  cup = createSprite(width/2+200, height/2+100);
  cup.addImage(cupImg);  
  fern = createSprite(width/2-200, height/2-100);
  fern.addImage(fernImg);  
  table = createSprite(width/2, height/2+100);
  table.addImage(tableImg);    
  teapot = createSprite(width/2+200, height/2+200);
  teapot.addImage(teapotImg);  
  
    for (s = 0; s < 500; s++){
		let star = {
			x:random(0,width),
			y:random(0,height)
		};
		stars.push(star);		
	}
  
  image(lobbyImg, 0, 0);
  background(224, 235, 255);
}

function draw() {
  
  textAlign(CENTER);
// Gamestate code continues, at the end of each gamestate assign the interaction which changes the gamestate
  if (gameState === 'state1') {
    fill(224,235,255);
    textFont(f2, 230);
    text('Lobby', width/2, height/2);
      textFont(f2, 60);
      text('Interaction Experiments', width/2, 700);
        textFont(f1, 50);
        text('Press the Spacebar to enter', width/2, height/2+150);
    drawSprite(main);
          main.velocity.x = (mouseX-main.position.x)*0.2;
          main.velocity.y = (mouseY-main.position.y)*0.2;
    
  if (keyIsPressed === true && keyCode === 32) {
      gameState = 'state2';
      background(255);
      drawSprite(lobby);
      fill(20);
      textFont(f1, 17);
      text('Click to clean the lobby', width/2-105, height/2-42);
      text('Press R to meet a guest', width/2+230, height/2+220)
    }
  } 
  
        else if (gameState === 'state2') {

        fill(random(255),random(255),random(255));
        ellipse(mouseX,mouseY,10,10);
          rectMode(CENTER);
          noStroke();
          fill(176,155,180,10,10);
          rect(width/2, height/2, 800, 500);
          
              if (mouseIsPressed){
              drawSprite(lobby); 
              fill(20);
              textFont(f1, 17);
              text('Click to clean the lobby', width/2-105, height/2-42);
              text('Press R to meet a guest', width/2+230, height/2+220)
              }

        if (keyIsPressed === true && keyCode === 82){
              gameState = 'state3';  
          }
        } 
  
    else if (gameState === 'state3') {
 background(250);
      textFont(f1, 20);
      text('excuse me.', width/2+200, height-230);
      text('press down to', width/2+200, height-200);
      text('return to the lobby', width/2+200, height-170);
    spr1.displace(titMonster);
    spr1.displace(hand);
    spr1.displace(doe);
        drawSprite(titMonster);
        drawSprite(spr1);
      spr1.velocity.x = (mouseX-spr1.position.x)*0.2;
      spr1.velocity.y = (mouseY-spr1.position.y)*0.2;
      
  if (keyIsPressed === true && keyCode === 40){
     gameState = 'state4'; 
    background(255);
    drawSprite(lobby);
    }
  }
  
                else if (gameState === 'state4') {
                    spr1.velocity.x = (mouseX-spr1.position.x)*0.2;
                    spr1.velocity.y = (mouseY-spr1.position.y)*0.2;
                spr1.displace(chair);
                spr1.displace(cup);
                spr1.displace(fern);
                spr1.displace(table);
                spr1.displace(teapot);
                  drawSprite(lobby);
                  drawSprite(chair);
                  drawSprite(cup);
                  drawSprite(fern);
                  drawSprite(table);
                  drawSprite(teapot);
                  drawSprite(spr1);
              fill(10);
              textFont(f1, 20);
              text('The lobby has been vacuumed, feel free to rearrange', width/2, 100);
              textFont(f2, 60);
              text('click to close the lobby', width/2, height-100);
                
              if (mouseIsPressed){
              background(10);
                removeSprite(lobby);
              textFont(f2, 60);
              fill(255);
              text('Goodnight', width/2+300, 200)
              fill(255);
              textFont(f1, 30);
              text('press enter to sleep', width/2+490, height-100)
              text('click to clean again', width/2-500, height-100)
                
              }
                
              if (keyIsPressed === true && keyCode === 13){
              gameState = 'state5';  
              background(224,235,255);
              }
              } 
  
          else if (gameState === 'state5') {

        fill(random(255),random(255),random(255));
        ellipse(mouseX,mouseY,10,10);
          rectMode(CENTER);
          noStroke();
          fill(176,155,180,10,10);
          rect(width/2, height/2, 800, 500);
          
              if (mouseIsPressed){

              fill(20);
              textFont(f1, 17);
              text('The lobby has gone to bed', width/2-105, height/2-42);
              text('Press E to meet a guest', width/2+230, height/2+220)
              }
    if (keyIsPressed === true && keyCode === 69){
    gameState = 'state6'; 
    background(255);
    drawSprite(lobby);
              }
          }
  
    else if (gameState === 'state6') {
 background(130);
      textFont(f1, 20);
      text('Oh dont mind me!', 300, height-230);
      text('press left to', 300, height-200);
      text('look out the window', 300, height-170);
    spr1.displace(titMonster);
    spr1.displace(hand);
    spr1.displace(doe);
        drawSprite(hand);
        drawSprite(spr1);
      spr1.velocity.x = (mouseX-spr1.position.x)*0.2;
      spr1.velocity.y = (mouseY-spr1.position.y)*0.2;
      
  if (keyIsPressed === true && keyCode === 37){
     gameState = 'state7'; 
    background(21,29,71);

    }
  }
  
  
    else if (gameState === 'state7') {
    for (var i = 0; i < clouds.length; i++) {
    clouds[i].position.x += clouds[i].width * 0.0015;
    if (clouds[i].position.x > width) {
      clouds[i].position.x = 0;
      
    }
    }
      background(10);
      fill(224, 235, 255);
      textFont(f1, 20);
      text('press S to sleep',width/2-400,height/2+300);
      drawSprites(clouds);
      drawSprite(spr1);
            spr1.velocity.x = (mouseX-spr1.position.x)*0.02;
            spr1.velocity.y = (mouseY-spr1.position.y)*0.02;
      spr1.displace(clouds);
            fill(10);
      textFont(f2, 40);
      text('a fly buzzes around outside',width-500, 200); 
  
      
  if (keyIsPressed === true && keyCode === 83){
     gameState = 'state8'; 
    background(0);
    }
  }
  
  if (gameState === 'state8') {
    fill(0);
    textFont(f2, 150);
    text('click to pass the time', width/2, height-200);
    drawSprite(main);
          main.velocity.x = (mouseX-main.position.x)*0.2;
          main.velocity.y = (mouseY-main.position.y)*0.2;
    
    if (mouseIsPressed){
    background(random(50),random(50),random(50));
      fill(224, 235, 255);
      textFont(f1, 30);
      text('press the spacebar to wake up', width/2, height/2);
              }
    
  if (keyIsPressed === true && keyCode === 32) {
      gameState = 'state9';
    background(250);
    drawSprite(lobby);

    }
  } 
  
        else if (gameState === 'state9') {
                    rectMode(CENTER);
          noStroke();
          fill(176,155,180,10,10);
          rect(width/2, height/2, width, height);
                    spr1.velocity.x = (mouseX-spr1.position.x)*0.2;
                    spr1.velocity.y = (mouseY-spr1.position.y)*0.2;
                spr1.displace(chair);
                spr1.displace(cup);
                spr1.displace(fern);
                spr1.displace(table);
                spr1.displace(teapot);
                  drawSprite(chair);
                  drawSprite(cup);
                  drawSprite(fern);
                  drawSprite(table);
                  drawSprite(teapot);
                  drawSprite(spr1);
                    
             fill(10);
             textFont(f1, 30);
             text('press enter to leave the lobby', width/2+300, height-100)
             text('press T to pass more time', width/2-300, height-100)

              if (keyIsPressed === true && keyCode === 84){ 
              background(random(30),random(30),random(255));
              }
                
              if (keyIsPressed === true && keyCode === 13){
              gameState = 'state10';  
              //background(224,235,255);
                background(10);
              }
              } 
  
          else if (gameState === 'state10') {


        for (s = 0; s < 500; s++){
		let x = stars[s].x;
		let y = stars[s].y;
		fill(255);
		ellipse(x,y,random(1,3),random(1,3));
        }

            
             fill(250);
             textFont(f1, 30);
             text('reload to visit again', width/2, height-100);
            rectMode(CENTER);
              rect(width/2,height/2,500,300);
             fill(10);
             textFont(f2, 60);
             text('Thank you', width/2, height/2+20);

          }      
  
  
  drawSprite(fullScreen);

}

function mousePressed() {
  if (mouseX > 55 && mouseX < 195 && mouseY > 50 && mouseY < 150) {
    let fs = fullscreen();
    fullscreen(!fs);
  }
} // fullscreen function
