
let gameState = 'intro1';
let rainAnim;
let rain;
let goat;
let goatImg;
let fog;
let fogImg;
let path;
let pathImg;
let self;
let speed = 3;
var score = 0;
let size = 1;
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
  song = loadSound("rain.mp3");
  
}

function setup() {
  {
  createCanvas(displayWidth, displayHeight);
    rain = createSprite(width/2,height/2);
    rain.addAnimation("default",rainAnim);
    song.loop();
        self = createSprite(width/2-30,height/2,20,20);
        self.shapeColor = color(175, 162, 255);
  } // Sprites
  {
    iTree1 = new Group(); // variable i for trees1
          for (var iT1 = 0; iT1 < 3; iT1++) {
    var ia = createSprite(
      random(width), random(height),
      random(100, 450), random(100, 450));
    ia.shapeColor = color(random(50),random(230),random(30), 240);
    iTree1.add(ia);
  }   
trees1 = new Group(); // variable i for trees1
          for (var i1 = 0; i1 < 10; i1++) {
    var a = createSprite(
      random(width), random(height),
      random(100, 450), random(100, 450));
    a.shapeColor = color(random(50),random(190),random(40), 240);
    trees1.add(a);
  }
 trees2 = new Group(); // variable i for trees2
          for (var i2 = 0; i2 < 15; i2++) {
    var b = createSprite(
      random(width), random(height),
      random(100, 450), random(100, 450));
    b.shapeColor = color(random(50),random(190),random(30), 240);
    trees2.add(b);
  } 
  trees3 = new Group(); // variable i for trees2
          for (var i3 = 0; i3 < 15; i3++) {
    var c = createSprite(
      random(width), random(height),
      random(100, 450), random(100, 450));
    c.shapeColor = color(random(30),random(170),random(20), 240);
    trees3.add(c);
  }
   trees4 = new Group(); // variable i for trees2
          for (var i4 = 0; i4 < 15; i4++) {
    var d = createSprite(
      random(width), random(height),
      random(100, 450), random(100, 450));
    d.shapeColor = color(random(50),random(130),random(30), 240);
    trees4.add(d);
  }
    trees5 = new Group(); // variable i for trees2
          for (var i5 = 0; i5 < 15; i5++) {
    var e = createSprite(
      random(width), random(height),
      random(100, 450), random(100, 450));
    e.shapeColor = color(random(50),random(190),random(30), 240);
    trees5.add(e);
  }
     trees6 = new Group(); // variable i for trees2
          for (var i6 = 0; i6 < 15; i6++) {
    var f = createSprite(
      random(width), random(height),
      random(100, 450), random(100, 450));
    f.shapeColor = color(random(50),random(170),random(40), 240);
    trees6.add(f);
  }
      trees7 = new Group(); // variable i for trees2
          for (var i7 = 0; i7 < 10; i7++) {
    var g = createSprite(
      random(width), random(height),
      random(100, 450), random(100, 450));
    g.shapeColor = color(random(30),random(190),random(20), 240);
    trees7.add(g);
  }
       trees8 = new Group(); // variable i for trees2
          for (var i8 = 0; i8 < 15; i8++) {
    var h = createSprite(
      random(width), random(height),
      random(100, 450), random(100, 450));
    h.shapeColor = color(random(40),random(150),random(30), 240);
    trees8.add(h);
  }
        trees9 = new Group(); // variable i for trees2
          for (var i9 = 0; i9 < 15; i9++) {
    var i = createSprite(
      random(width), random(height),
      random(100, 450), random(100, 450));
    i.shapeColor = color(random(30),random(130),random(50), 200);
    trees9.add(i);
  }
         trees10 = new Group(); // variable i for trees2
          for (var i10 = 0; i10 < 15; i10++) {
    var j = createSprite(
      random(width), random(height),
      random(100, 450), random(100, 450));
    j.shapeColor = color(random(60),random(190),random(50), 240);
    trees10.add(j);
  }
          trees11 = new Group(); // variable i for trees2
          for (var i11 = 0; i11 < 25; i11++) {
    var k = createSprite(
      random(width), random(height),
      random(100, 450), random(100, 450));
    k.shapeColor = color(random(40),random(190),random(30), 240);
    trees11.add(k);
  }
           trees12 = new Group(); // variable i for trees2
          for (var i12 = 0; i12 < 12; i12++) {
    var l = createSprite(
      random(width), random(height),
      random(100, 450), random(100, 450));
    l.shapeColor = color(random(38),random(180),random(20), 240);
    trees12.add(l);
  }
            trees13 = new Group(); // variable i for trees2
          for (var i13 = 0; i13 < 15; i13++) {
    var m = createSprite(
      random(width), random(height),
      random(100, 450), random(100, 450));
    m.shapeColor = color(random(40),random(190),random(35), 240);
    trees13.add(m);
  }
              trees14 = new Group(); // variable i for trees2
          for (var i14 = 0; i14 < 15; i14++) {
    var n = createSprite(
      random(width), random(height),
      random(100, 450), random(100, 450));
    n.shapeColor = color(random(30),random(160),random(20), 240);
    trees14.add(n);
  }
                trees15 = new Group(); // variable i for trees2
          for (var i15 = 0; i15 < 25; i15++) {
    var o = createSprite(
      random(width), random(height),
      random(100, 450), random(100, 450));
    o.shapeColor = color(random(40),random(190),random(25), 240);
    trees15.add(o);
  }
  } //tree variable loops
  
  background(0);
}

function draw() {

  textAlign(CENTER);
    textSize(32);
      fill(255);
  
  
    if (gameState === 'intro1') {
      background(0);
      drawSprites(iTree1);
      self.collide(iTree1);
      fill(227, 215, 255);
      textAlign(LEFT);
      text('Use the Arrow keys to move',width/20, height/10+35);
            text('Click for Fullscreen',width/20, height/10+70);
      text('press 1 to continue',width/20, height-height/10);
          if (keyIsPressed === true && keyCode === 49) {
           gameState = 'intro2';
    }
      
    }
  
  if (gameState === 'intro2') {
      background(0);
          fill(227, 215, 255);
        textSize(20);
      textAlign(LEFT);
    text('This site is still in progress, this is a version testing only the map structure',width/20, height/10);
        text('Thank you',width/20, height/10+25);
        textSize(32);
    text('You will explore a randomly generated forest map',width/20, height/2-35);
    text('Please reload if stuck, press 2 to begin',width/20, height/2);
    if (keyIsPressed === true && keyCode === 50) {
           gameState = 'set1';
    }
    
  }


if (gameState === 'set1') {
    background(0);
   // text('set 1',width/2, height/2);
    drawSprites(trees1);
    self.collide(trees1);
  

  { //Organization and set changes 
   if (self.position.x > width) { //east
     self.position.x = (0);
     self.setSpeed(speed, 0);
     gameState = 'set2';
  }
  else if (self.position.x < 0) { //west
     self.position.x = (width);
     self.setSpeed(speed, 180);
    gameState = 'set3';
  }
  else if (self.position.y < 0) { //north
     self.position.y = (height);
     self.setSpeed(speed, 270);
    gameState = 'set5';
  }
  else if (self.position.y > height) { //south
     self.position.y = (0);
     self.setSpeed(speed, 90);
    gameState = 'set4';
  }    
  }
}
 if (gameState === 'set2') {
       background(0);
     // text('set 2',width/2, height/2);
      drawSprites(trees2);
      self.collide(trees2);
       { //Organization and set changes 
  if (self.position.x > width) { //east stop
     self.setSpeed(0, 0);
  }
   else if (self.position.x < 0) { //west
     self.position.x = (width);
     self.setSpeed(speed, 180);
    gameState = 'set1';
  }
  else if (self.position.y < 0) { //north
     self.position.y = (height);
     self.setSpeed(speed, 270);
    gameState = 'set7';
  }
  else if (self.position.y > height) { //south
     self.position.y = (0);
     self.setSpeed(speed, 90);
    gameState = 'set12';
  } 
  }
}
  if (gameState === 'set3') {
        background(0);
   //   text('set 3',width/2, height/2);
      drawSprites(trees3);
      self.collide(trees3);
      { //Organization and set changes 
   if (self.position.x > width) { //east
     self.position.x = (0);
     self.setSpeed(speed, 0);
     gameState = 'set1';
  }
  else if (self.position.x < 0) { //west stop
     self.setSpeed(0, 180);
  }
  else if (self.position.y < 0) { //north
     self.position.y = (height);
     self.setSpeed(speed, 270);
    gameState = 'set6';
  }
  else if (self.position.y > height) { //south
     self.position.y = (0);
     self.setSpeed(speed, 90);
    gameState = 'set11';
  }    
  }
}
   if (gameState === 'set4') {
         background(0);
  //    text('set 4',width/2, height/2);
      drawSprites(trees4);
      self.collide(trees4);
       { //Organization and set changes 
   if (self.position.x > width) { //east
     self.position.x = (0);
     self.setSpeed(speed, 0);
     gameState = 'set12';
  }
  else if (self.position.x < 0) { //west
     self.position.x = (width);
     self.setSpeed(speed, 180);
    gameState = 'set11';
  }
  else if (self.position.y < 0) { //north
     self.position.y = (height);
     self.setSpeed(speed, 270);
    gameState = 'set1';
  }
  else if (self.position.y > height) { //south
     self.position.y = (0);
     self.setSpeed(speed, 90);
    gameState = 'set13';
  }
  }
}
    if (gameState === 'set5') {
          background(0);
   //   text('set 5',width/2, height/2);
      drawSprites(trees5);
      self.collide(trees5);
        { //Organization and set changes 
   if (self.position.x > width) { //east
     self.position.x = (0);
     self.setSpeed(speed, 0);
     gameState = 'set7';
  }
  else if (self.position.x < 0) { //west
     self.position.x = (width);
     self.setSpeed(speed, 180);
    gameState = 'set6';
  }
  else if (self.position.y < 0) { //north
     self.position.y = (height);
     self.setSpeed(speed, 270);
    gameState = 'set8';
  }
  else if (self.position.y > height) { //south
     self.position.y = (0);
     self.setSpeed(speed, 90);
    gameState = 'set1';
  }    
  }
}
     if (gameState === 'set6') {
           background(0);
    //  text('set 6',width/2, height/2);
      drawSprites(trees6);
      self.collide(trees6);
         { //Organization and set changes 
   if (self.position.x > width) { //east
     self.position.x = (0);
     self.setSpeed(speed, 0);
     gameState = 'set5';
  }
   else if (self.position.x < 0) { //west stop
   self.setSpeed(0, 180);
  }
  else if (self.position.y < 0) { //north
     self.position.y = (height);
     self.setSpeed(speed, 270);
    gameState = 'set9';
  }
  else if (self.position.y > height) { //south
     self.position.y = (0);
     self.setSpeed(speed, 90);
    gameState = 'set3';
  }
  }
}
      if (gameState === 'set7') {
            background(0);
    //  text('set 7',width/2, height/2);
      drawSprites(trees7);
      self.collide(trees7);  
        { //Organization and set changes 
     if (self.position.x > width) { //east stop
     self.setSpeed(0, 0);
  }
            
  else if (self.position.x < 0) { //west
     self.position.x = (width);
     self.setSpeed(speed, 180);
    gameState = 'set5';
  }
  else if (self.position.y < 0) { //north
     self.position.y = (height);
     self.setSpeed(speed, 270);
    gameState = 'set10';
  }
  else if (self.position.y > height) { //south
     self.position.y = (0);
     self.setSpeed(speed, 90);
    gameState = 'set2';
  }
  }
}
       if (gameState === 'set8') {
             background(0);
    //  text('set 8',width/2, height/2);
      drawSprites(trees8);
      self.collide(trees8);
           { //Organization and set changes 
   if (self.position.x > width) { //east
     self.position.x = (0);
     self.setSpeed(speed, 0);
     gameState = 'set10';
  }
  else if (self.position.x < 0) { //west
     self.position.x = (width);
     self.setSpeed(speed, 180);
    gameState = 'set9';
  }
  else if (self.position.y < 0) { //north stop
    self.setSpeed(0, 270);
  }
  else if (self.position.y > height) { //south
     self.position.y = (0);
     self.setSpeed(speed, 90);
    gameState = 'set5';
  }  
  }
}
        if (gameState === 'set9') {
              background(0);
     // text('set 9',width/2, height/2);
      drawSprites(trees9);
      self.collide(trees9);
            { //Organization and set changes 
   if (self.position.x > width) { //east
     self.position.x = (0);
     self.setSpeed(speed, 0);
     gameState = 'set8';
  }
     else if (self.position.x < 0) { //west stop
     self.setSpeed(0, 180);
  }
    else if (self.position.y < 0) { //north stop
    self.setSpeed(0, 270);
  }
  else if (self.position.y > height) { //south
     self.position.y = (0);
     self.setSpeed(speed, 90);
    gameState = 'set6';
  } 
  }
}
         if (gameState === 'set10') {
               background(0);
     // text('set 10',width/2, height/2);
      drawSprites(trees10);
      self.collide(trees10);
             { //Organization and set changes 
  if (self.position.x > width) { //east stop
     self.setSpeed(0, 0);
  }

  else if (self.position.x < 0) { //west
     self.position.x = (width);
     self.setSpeed(speed, 180);
    gameState = 'set8';
  }
  else if (self.position.y < 0) { //north stop
    self.setSpeed(0, 270);
  }
  else if (self.position.y > height) { //south
     self.position.y = (0);
     self.setSpeed(speed, 90);
    gameState = 'set7';
  } 
  }
}
          if (gameState === 'set11') {
                background(0);
    //  text('set 11',width/2, height/2);
      drawSprites(trees11);
      self.collide(trees11);
              { //Organization and set changes 
   if (self.position.x > width) { //east
     self.position.x = (0);
     self.setSpeed(speed, 0);
     gameState = 'set4';
  }
     else if (self.position.x < 0) { //west stop
     self.setSpeed(0, 180);
  }
  else if (self.position.y < 0) { //north
     self.position.y = (height);
     self.setSpeed(speed, 270);
    gameState = 'set3';
  }
  else if (self.position.y > height) { //south
     self.position.y = (0);
     self.setSpeed(speed, 90);
    gameState = 'set14';
  }
  }
}
           if (gameState === 'set12') {
                 background(0);
   //   text('set 12',width/2, height/2);
      drawSprites(trees12);
      self.collide(trees12);
               { //Organization and set changes 
     if (self.position.x > width) { //east stop
     self.setSpeed(0, 0);
  }
  if (self.position.x < 0) { //west
     self.position.x = (width);
     self.setSpeed(speed, 180);
    gameState = 'set4';
  }
  else if (self.position.y < 0) { //north
     self.position.y = (height);
     self.setSpeed(speed, 270);
    gameState = 'set2';
  }
  else if (self.position.y > height) { //south
     self.position.y = (0);
     self.setSpeed(speed, 90);
    gameState = 'set15';
  }   
  }
}
            if (gameState === 'set13') {
                  background(0);
   //   text('set 13',width/2, height/2);
      drawSprites(trees13);
      self.collide(trees13);
                { //Organization and set changes 
   if (self.position.x > width) { //east
     self.position.x = (0);
     self.setSpeed(speed, 0);
     gameState = 'set15';
  }
  else if (self.position.x < 0) { //west
     self.position.x = (width);
     self.setSpeed(speed, 180);
    gameState = 'set14';
  }
  else if (self.position.y < 0) { //north
     self.position.y = (height);
     self.setSpeed(speed, 270);
    gameState = 'set4';
  }
  else if (self.position.y > height) { //south stop
     self.setSpeed(0, 90);
  } 
  }
}
             if (gameState === 'set14') {
                   background(0);
    //  text('set 14',width/2, height/2);
      drawSprites(trees14);
      self.collide(trees14);
                 { //Organization and set changes 
   if (self.position.x > width) { //east
     self.position.x = (0);
     self.setSpeed(speed, 0);
     gameState = 'set13';
  }
     else if (self.position.x < 0) { //west stop
     self.setSpeed(0, 180);
  }
  else if (self.position.y < 0) { //north
     self.position.y = (height);
     self.setSpeed(speed, 270);
    gameState = 'set11';
  }
  else if (self.position.y > height) { //south stop
     self.setSpeed(0, 90);
  } 
  }
}
               if (gameState === 'set15') {
    background(0);
  //    text('set 15',width/2, height/2);
      drawSprites(trees15);
      self.collide(trees15);
                   { //Organization and set changes 
    if (self.position.x > width) { //east stop
     self.setSpeed(0, 0);
  }
  if (self.position.x < 0) { //west
     self.position.x = (width);
     self.setSpeed(speed, 180);
    gameState = 'set13';
  }
  else if (self.position.y < 0) { //north
     self.position.y = (height);
     self.setSpeed(speed, 270);
    gameState = 'set12';
  }   
  else if (self.position.y > height) { //south stop
     self.setSpeed(0, 90);
  } 
  }
}
  
  drawSprite(self);
  drawSprite(rain);
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

function mousePressed() {
  if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) {
    let fs = fullscreen();
    fullscreen(!fs);
  }
}

function getBirds(player, birds) {
  birds.remove();
  background(55,0,0);
  score += 1;
  self.scale = size;
  size += .1;

}
