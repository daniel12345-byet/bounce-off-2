var rect1,rect2;

function setup() {
  createCanvas(800,400);
  rect1= createSprite(100, 100, 50, 50);
  rect1.shapeColor="green"
  rect2= createSprite(100, 300, 50, 50);
  rect2.shapeColor="red";
  rect1.velocityY=3;
  rect2.velocityY=-3;
}

function draw() {
  background(0);  
 
  
  bounceOff(rect1,rect2);
  drawSprites();
}
function bounceOff(obj1,obj2){
  if( obj1.x - obj2.x < obj2.width/2 +obj1.width/2
    && obj2.x -obj1.x < obj2.width/2 +obj1.width/2
  ) {
  obj1.velocityX= obj1.velocityX
  obj2.velocityX= - obj2.velocityX
}
if(obj1.y - obj2.y < obj2.height/2 +obj1.height/2
  && obj2.y -obj1.y < obj2.height/2 +obj1.height/2){
  obj1.velocityY= obj1.velocityY
    obj2.velocityY= - obj2.velocityY
  }

}
