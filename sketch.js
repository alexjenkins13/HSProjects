function setup() {
  createCanvas(innerWidth, innerWidth);//there is an innerheight, but for a square
  background(0,0,0);
  strokeWeight(2);
  stroke(200,200,255); //rgb --> currently light blue
  noFill();
  frameRate(0.5);
}

function draw() {
  clear();
  var margin = 15;
  translate(margin,margin);
   
  var num = 3;//problem with this
   var space = 15;
   var width = innerWidth-2* margin- space*(num-1);
  var height = innerWidth-2* margin - space*(num-1);
  var spotX = mouseX;
  var spotY = mouseY;
   
  var sideLen = width/num;
   var shift = 20;

  
  //if(sqrt )
   for(var x=0; x<(sideLen*num); x = x+sideLen + space){
     for(var y=0; y<(sideLen*num); y = y+ sideLen + space){
       fill(0, random(150,200), random(150,200), 150)
     quad(x ,y, x+sideLen,y, x+sideLen,y+sideLen, x ,y+sideLen);
     }
   }
  
 
  // for(var x=0; x<(sideLen*num); x = x+sideLen + space){
   //  for(var y=0; y<(sideLen*num); y = y+ sideLen + space){
   //    fill(0, random(150,200), random(150,200), 150)
  //   quad(x + random(-shift, shift) ,y + random(-shift, shift), x+sideLen + random(-shift, shift),y +random(-shift, shift), x+sideLen +random(-shift, shift),y+sideLen +random(-shift, shift), x +random(-shift, shift),y+sideLen +random(-shift, shift));
   //  }
  // }
  
  // quad(0,0, 200,0, 200,200, 0,200);//x,y cordinates of all 4 verticies
  // quad(200,0, 400,0, 400,200, 200,200);
  // quad(0,200, 200,200, 200,400, 0,400);
  //  quad(200,200, 400,200, 400,400, 200,400);
noLoop();
  
}