let fingers;

function setup() {
  createCanvas(displayWidth, displayWidth);
  // specify multiple formats for different browsers
  fingers = createVideo('trees2.mov');
  fingers.hide(); // by default video shows up in separate dom
  // element. hide it and draw it to the canvas
  // instead
    background(204,139,134);
}

function draw() {
  background(204,139,134,100);
    stroke(255);
    line(mouseX, mouseY, pmouseX, pmouseY);
  scale(3);
  image(fingers, displayWidth/100, displayWidth/100); // draw the video frame to canvas

}

function mousePressed() {
  fingers.loop(); // set the video to loop and start playing
}