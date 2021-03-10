let cola;
let mushroom;
let pizza;
let pepper;
let creamer;
let chili;
let beer;
let mozzerella;
let cheese;
let orange;
let apple;

let colaImg;
let mushroomImg;
let pizzaImg;
let pepperImg;
let creamerImg;
let chiliImg;
let beerImg;
let mozzerellaImg;
let cheeseImg;
let orangeImg;
let appleImg;

function preload() {
      colaImg = loadImage('cola.png'); // Load the image
        appleImg = loadImage('apple.png'); // Load the image
          creamerImg = loadImage('creamer.png'); // Load the image
            mushroomImg = loadImage('mushroom.png'); // Load the image
              orangeImg = loadImage('orange.png'); // Load the image
                pepperImg = loadImage('pepper.png'); // Load the image

}

function setup() {
  createCanvas(displayWidth, displayHeight);
    background(255);
    spr = createSprite(
    width/2, height/2, 1, 1);
  spr.shapeColor = color(255);
  
  cola = createSprite(random(width), random(height));
  cola.addImage(colaImg);
    apple = createSprite(random(width), random(height));
    apple.addImage(appleImg);
      creamer = createSprite(random(width), random(height));
    creamer.addImage(creamerImg);
        mushroom = createSprite(random(width), random(height));
    mushroom.addImage(mushroomImg);
          orange = createSprite(random(width), random(height));
    orange.addImage(orangeImg);
            pepper = createSprite(random(width), random(height));
    pepper.addImage(pepperImg);
}

function draw() {
    spr.position.x = mouseX;
  spr.position.y = mouseY;
  spr.displace(cola);
  spr.displace(apple);
    spr.displace(creamer);
      spr.displace(mushroom);
        spr.displace(orange);
          spr.displace(pepper);
  drawSprites();
  
}