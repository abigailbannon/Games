var sprA;
var animSpriteA;
var MoonSpr;
var animMoonSpr;
var BatSpr;
var animBatSpr;
var DemSpr;
var animDemSpr;
var FightSpr;
var animFightSpr;

function preload() {
  animSpriteA = loadAnimation("treeSpr1.png",
    "treeSpr2.png",
    "treeSpr3.png");
   animMoonSpr = loadAnimation("moonSpr1.png",
    "moonSpr2.png",
    "moonSpr3.png");
   animBatSpr = loadAnimation("batSpr1.png",
    "batSpr2.png",
    "batSpr3.png");
   animDemSpr = loadAnimation("demSpr1.png",
    "demSpr2.png",
    "demSpr3.png");
   animFightSpr = loadAnimation("fightSpr1.png",
    "fightSpr2.png",
    "fightSpr3.png");
}

function setup() {
  createCanvas(displayWidth, displayHeight);
  
  sprA = createSprite(300, 300);
  sprA.addAnimation("default", animSpriteA);
  
  MoonSpr = createSprite(displayWidth-100, 600);
  MoonSpr.addAnimation("default", animMoonSpr);
  
  BatSpr = createSprite(700, 140);
  BatSpr.addAnimation("default", animBatSpr);
  
  DemSpr = createSprite(130, 550);
  DemSpr.addAnimation("default", animDemSpr);
  
  FightSpr = createSprite(600, 800);
  FightSpr.addAnimation("default", animFightSpr);

}

function draw() {
  background(255);

  textSize(32);
  fill(0);
  text('click for fullscreen',displayWidth/2+350, 130);
  textSize(22);
  text('investigate',displayWidth/2+500, 160);
  //fill(255)
  //rect(displayWidth/2+300, 150, 300,200);

 if (mouseX > 100 && mouseX < 450 && mouseY > 100 && mouseY < 420) { 
  drawSprite(sprA);
  textSize(22);
  fill(0);
  text('The air outside is cool, still, and opaque.',displayWidth/2, displayHeight/2);
  text('There is something noiseless and uncritical.',displayWidth/2, displayHeight/2+30);
  text('It hangs long in the summer night and faints',displayWidth/2+5, displayHeight/2+60);
  text('the breeze when the sun rises. But that, as',displayWidth/2+5, displayHeight/2+90);
  text('usual, is a side effect of the air inside, which',displayWidth/2+5, displayHeight/2+120);
  text('glows brighter than any green.',displayWidth/2+5, displayHeight/2+150);
 }
 if (mouseX > displayWidth-200 && mouseX < displayWidth && mouseY > 400 && mouseY < 800) { 
  drawSprite(MoonSpr);
  textSize(22);
  text('She was angry but did not feel surprised,',displayWidth/2-500, 190);
  text('though she had grown accustomed to the number',displayWidth/2-498, 220);
  text('of different eyes in a single world.',displayWidth/2-500, 250);
  text('She had passed through dozens of worlds,',displayWidth/2-500, 280);
  text('billions in all. The paths were lit constantly.',displayWidth/2-500, 310);
  text('The bodies of creatures and machines did',displayWidth/2-500, 340);
  text('not move often.',displayWidth/2-500, 370);
 }
 if (mouseX > 640 && mouseX < 750 && mouseY > 50 && mouseY < 220) { 
  drawSprite(BatSpr);
   textSize(22);
  text('It swims lazily.',400, 400);
  text('A death hound of thicket.',400, 430);
  text('It attacks by tearing through trees.',400, 460);
  text('It freezes rainbows.',400, 490);
  text('It is fond of forest.',400, 520);
  text('It can be found in forests.',400, 550);
 }
 if (mouseX > 40 && mouseX < 230 && mouseY > 500 && mouseY < 600) { 
  drawSprite(DemSpr);
   textSize(22);
  text('Super heavy, crawling. Brightly lit. Always following.',400, 400);
  text('Tongue, near a lake then in the water, now its dark, limping,',400, 430);
  text('a trail where the trails left off and collapsing. I can not see it.',400, 460);
  text('Over my head, high up, near a lake then in the water,',400, 490);
  text('now its dark, limping a trail where the trails left off and collapsing.',400, 520);
  text('I can not see it.',400, 550);
 }
 if (mouseX > 500 && mouseX < 700 && mouseY > 600 && mouseY < 900) { 
  drawSprite(FightSpr);
  text('If I ask "why" no answer I find is so pernicious,',displayWidth/2+100, displayHeight-400);
  text('or so disgusting to life, as "Why not?" If I ask',displayWidth/2+100, displayHeight-370);
  text('"Why not let us go back to life", the answer is',displayWidth/2+100, displayHeight-340);
  text('"Why? Why not? We go on living here."',displayWidth/2+100, displayHeight-310);
 }
}

function mousePressed() {
  if (mouseX > 0 && mouseX < displayWidth && mouseY > 0 && mouseY < displayHeight) {
    let fs = fullscreen();
    fullscreen(!fs);
  }
}