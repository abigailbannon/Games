   if (self.overlap(goat) == true) {
   goat.scale = 1.1
   }else { goat.scale = 1 }
  
   // self.position.x = mouseX;
   // self.position.y = mouseY;

  noFill();
  strokeWeight(1800);
  stroke(0,250);
  //ellipse(mouseX, mouseY, 2000);

slider = createSlider(0,1,0.5,0.01);// setup
song.setVolume(slider.value());// draw

//information for wave forms
var wid = 300;
var hei = 600;
var NB_FRAMES = 100;
var frame_count = 0;

// setup for forms
{
    curSeed = 11;
    noiseSeed(curSeed);
    randomSeed(1);
    for(var i = 0;i<NB;i++) {
        Objects[i] = new object(i);
    }
}
var Objects = [];
var NB = 100;
    //draw for forms
{
  var t = ((frame_count)%NB_FRAMES)/NB_FRAMES;
    for(var i=0;i<NB;i++) Objects[i].draw();
  noStroke();
    frame_count++;
}

function activation(t) {
    return ((1-cos(2*PI*t))/2)**1;
}
function object(id) {
    
    this.id = id;
    
    this.draw = function() {
        var t = ((frame_count)%NB_FRAMES)/NB_FRAMES;
        var x0 = lerp(0,width,this.id/NB);
        theta = PI/2;
        var xx = x0;
        var yy = 0;
        var Nt = 75;
        var step = height/Nt;
        var turn = lerp(0,0.4,activation((this.id/NB+0*t)%1));
        
        stroke(30);
        strokeWeight(1);
        noFill();
        beginShape();
        vertex(xx,yy);   
        for(var i=0;i<=Nt;i++){
            theta += turn*sin(100*noise(1000)+2*PI*(15*noise(0.2*this.id/NB,0.02*i)+t));
            xx += step*cos(theta);
            yy += step*sin(theta);
            
            var xx2 = lerp(xx,x0,(i/Nt)*(i/Nt)*(i/Nt));
            var yy2 = lerp(yy,lerp(0,hei-0,i/Nt),max((i/Nt),1-sqrt(i/Nt)));
            vertex(xx2,yy2);
        }
        endShape();
    }
}
