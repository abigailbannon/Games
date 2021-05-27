let word = '';
var gif_loadImg, gif_createImg;
var words = ["yes", "no", "maybe", "buy Draino for your shower", "what would your grandmother say?", "Liar", "when you push your fears to the basement, they go lift weights", "I can't right now sorry", "vote Kennedy!", "perhaps", "think some more about it before", "Definitley", "sort of", "surely", "uh-huh","under no circumstance", "not at all", "conceivably", "mayhap", ""]

function preload() {
  gif = loadImage("hotChip.gif");
  //gif_createImg = createImg("hotChip.gif");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  textAlign(CENTER);
}

function mousePressed() {
  word = random(words); // select random word
}

function draw() {
  // loads only first frame
  background(0);
  imageMode(CENTER);
  image(gif, width/2, height/3);
  fill(255);
  textSize(24);
  text("Ask the chip a question,", width/2, height/4-26); // draw the word
  text("Tap to have it answered", width/2, height/4); // draw the word
      text(word, width/2-100, height-height/3,200); // draw the word


}
  

  
